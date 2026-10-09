#!/usr/bin/env python3
"""
Sync Commit History and Checkpoint Management Script for FlexiRule Documentation.

Retrieves application commits from Sendipad/flexirule (develop branch) via
GitHub REST API or local git repository fallback. Updates canonical JSON data files:
- data/commit_history.json & static/data/commit_history.json
- data/product_updates_checkpoint.json & static/data/product_updates_checkpoint.json

Supports full history retrieval with pagination, PR identification, atomic file updates,
and scheduled-agent incremental review advancement.
"""

import os
import sys
import json
import re
import urllib.request
import urllib.error
import argparse
import subprocess
from datetime import datetime, timezone

REPO_OWNER = "Sendipad"
REPO_NAME = "flexirule"
BRANCH = "develop"
GITHUB_REPO_URL = f"https://github.com/{REPO_OWNER}/{REPO_NAME}"

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DATA_DIR = os.path.join(ROOT_DIR, "data")
STATIC_DATA_DIR = os.path.join(ROOT_DIR, "static", "data")

COMMIT_HISTORY_FILE = os.path.join(DATA_DIR, "commit_history.json")
STATIC_COMMIT_HISTORY_FILE = os.path.join(STATIC_DATA_DIR, "commit_history.json")

CHECKPOINT_FILE = os.path.join(DATA_DIR, "product_updates_checkpoint.json")
STATIC_CHECKPOINT_FILE = os.path.join(STATIC_DATA_DIR, "product_updates_checkpoint.json")


def ensure_dirs():
    os.makedirs(DATA_DIR, exist_ok=True)
    os.makedirs(STATIC_DATA_DIR, exist_ok=True)


def load_json(filepath, default=None):
    if os.path.exists(filepath):
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"Warning: Failed to load {filepath}: {e}", file=sys.stderr)
    return default if default is not None else {}


def save_json(filepath, data):
    dirpath = os.path.dirname(filepath)
    os.makedirs(dirpath, exist_ok=True)
    temp_file = f"{filepath}.tmp"
    with open(temp_file, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")
    os.replace(temp_file, filepath)


def extract_pr_info(message):
    """
    Extracts PR number and URL from commit messages such as:
    - Merge pull request #123 from ...
    - feat: awesome feature (#123)
    - Fix bug (#45)
    """
    if not message:
        return None, None

    # Check for "Merge pull request #123"
    m = re.search(r"Merge pull request #(\d+)", message, re.IGNORECASE)
    if not m:
        # Check for "(#123)"
        m = re.search(r"\(#(\d+)\)", message)

    if m:
        pr_num = int(m.group(1))
        pr_url = f"{GITHUB_REPO_URL}/pull/{pr_num}"
        return pr_num, pr_url

    return None, None


def fetch_commits_github_api():
    """
    Fetches all reachable commits on develop branch using GitHub REST API with pagination.
    """
    print(f"Fetching commits from GitHub API for {REPO_OWNER}/{REPO_NAME} ({BRANCH})...")
    commits = []
    page = 1
    per_page = 100

    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "FlexiRule-Docs-Sync-Script"
    }

    # Optional GitHub Token from environment
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if token:
        headers["Authorization"] = f"token {token}"

    while True:
        url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/commits?sha={BRANCH}&per_page={per_page}&page={page}"
        req = urllib.request.Request(url, headers=headers)
        try:
            with urllib.request.urlopen(req) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                if not data or not isinstance(data, list):
                    break
                for c in data:
                    sha = c.get("sha")
                    commit_obj = c.get("commit", {})
                    author_obj = commit_obj.get("author", {})
                    committer_obj = commit_obj.get("committer", {})
                    msg = commit_obj.get("message", "")

                    first_line = msg.split("\n")[0].strip() if msg else ""
                    pr_num, pr_url = extract_pr_info(msg)

                    commit_record = {
                        # Public history intentionally exposes only useful traceability fields.
                        # Do not publish email addresses, committer identities, or full commit bodies.
                        "sha": sha,
                        "short_sha": sha[:7],
                        "subject": first_line,
                        "author_name": author_obj.get("name", ""),
                        "authored_date": author_obj.get("date", ""),
                        "committed_date": committer_obj.get("date", ""),
                        "commit_url": f"{GITHUB_REPO_URL}/commit/{sha}",
                        "pr_number": pr_num,
                        "pr_url": pr_url
                    }
                    commits.append(commit_record)

                print(f"Fetched page {page} ({len(data)} commits)")
                if len(data) < per_page:
                    break
                page += 1
        except urllib.error.HTTPError as e:
            print(f"HTTP Error fetching commits on page {page}: {e.code} {e.reason}", file=sys.stderr)
            raise
        except Exception as e:
            print(f"Error fetching commits on page {page}: {e}", file=sys.stderr)
            raise

    return commits


def fetch_commits_local_git(local_repo_path):
    """
    Fallback to retrieve commit history from a local git repository clone.
    """
    print(f"Fetching commits from local git repository at {local_repo_path}...")
    if not os.path.exists(os.path.join(local_repo_path, ".git")):
        raise ValueError(f"Directory {local_repo_path} is not a valid git repository")

    # Format: full SHA%x1fshort SHA%x1fsubject%x1fauthor name%x1fauthor email%x1fauthor date ISO%x1fcommitter name%x1fcommitter email%x1fcommitter date ISO%x1fbody
    cmd = [
        "git", "-C", local_repo_path, "log", BRANCH,
        "--pretty=format:%H%x1f%h%x1f%s%x1f%an%x1f%ae%x1faI%x1f%cn%x1f%ce%x1fcI%x1f%b%x1e"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, check=True)
    raw_output = res.stdout

    commits = []
    records = raw_output.strip().split("\x1e")
    for r in records:
        r = r.strip()
        if not r:
            continue
        parts = r.split("\x1f")
        if len(parts) < 9:
            continue

        sha, short_sha, subject, aname, aemail, adate, cname, cemail, cdate = parts[:9]
        body = parts[9] if len(parts) > 9 else ""
        full_msg = f"{subject}\n\n{body}".strip() if body else subject

        pr_num, pr_url = extract_pr_info(full_msg)

        commits.append({
            # Keep the local-git fallback schema aligned with the public API schema.
            "sha": sha,
            "short_sha": short_sha,
            "subject": subject,
            "author_name": aname,
            "authored_date": adate,
            "committed_date": cdate,
            "commit_url": f"{GITHUB_REPO_URL}/commit/{sha}",
            "pr_number": pr_num,
            "pr_url": pr_url
        })

    return commits


def sync_commits(local_repo=None, advance_checkpoint_to_sha=None, review_status=None):
    ensure_dirs()
    existing_history = load_json(COMMIT_HISTORY_FILE, default={"commits": []})
    existing_commits_map = {c["sha"]: c for c in existing_history.get("commits", [])}

    fetched_commits = None
    if local_repo:
        try:
            fetched_commits = fetch_commits_local_git(local_repo)
        except Exception as e:
            print(f"Local git fetch failed: {e}. Trying GitHub API...", file=sys.stderr)

    if fetched_commits is None:
        try:
            fetched_commits = fetch_commits_github_api()
        except Exception as e:
            print(f"CRITICAL: Commit fetch failed; leaving history and checkpoint files unchanged: {e}", file=sys.stderr)
            sys.exit(1)

    if not fetched_commits:
        print("CRITICAL: Fetch returned no commits; refusing to publish an empty or stale sync.", file=sys.stderr)
        sys.exit(1)

    # Build unique commit list ordered newest first
    new_commits_map = {}
    for c in fetched_commits:
        sha = c["sha"]
        # Merge with existing record if available (preserving custom fields if any)
        # Whitelist public fields rather than carrying forward legacy fields such as
        # author_email, committer_email, or full commit message bodies.
        allowed_fields = (
            "sha", "short_sha", "subject", "author_name", "authored_date",
            "committed_date", "commit_url", "pr_number", "pr_url"
        )
        new_commits_map[sha] = {key: c[key] for key in allowed_fields if key in c}

    # Preserve GitHub API / git-log order. Sorting by author or committer timestamps can
    # reorder commits after cherry-picks, rebases, or commits with unusual dates.
    sorted_commits = list(new_commits_map.values())

    now_iso = datetime.now(timezone.utc).isoformat()
    latest_head_sha = sorted_commits[0]["sha"] if sorted_commits else ""

    history_data = {
        "repository": f"{REPO_OWNER}/{REPO_NAME}",
        "tracked_branch": BRANCH,
        "last_synchronized_at": now_iso,
        "total_commits": len(sorted_commits),
        "commits": sorted_commits
    }

    # Save commit history to both data/ and static/data/
    save_json(COMMIT_HISTORY_FILE, history_data)
    save_json(STATIC_COMMIT_HISTORY_FILE, history_data)
    print(f"Successfully saved {len(sorted_commits)} commits to {COMMIT_HISTORY_FILE} and {STATIC_COMMIT_HISTORY_FILE}")

    # Load or initialize checkpoint
    existing_checkpoint = load_json(CHECKPOINT_FILE, default={})

    # Default reviewed SHA to latest head if first time, or retain existing
    reviewed_sha = existing_checkpoint.get("latest_reviewed_commit_sha")
    latest_completed_review_ts = existing_checkpoint.get("latest_completed_review_timestamp")

    if advance_checkpoint_to_sha:
        # Verify SHA exists in sorted_commits
        if any(c["sha"] == advance_checkpoint_to_sha for c in sorted_commits):
            reviewed_sha = advance_checkpoint_to_sha
            latest_completed_review_ts = now_iso
            print(f"Advancing reviewed checkpoint to {advance_checkpoint_to_sha}")
        else:
            print(f"Error: Specified advance SHA {advance_checkpoint_to_sha} not found in commit history!", file=sys.stderr)
            sys.exit(1)
    elif not reviewed_sha and sorted_commits:
        # Initial setup: mark the latest commit as reviewed
        reviewed_sha = sorted_commits[0]["sha"]
        latest_completed_review_ts = now_iso

    checkpoint_status = review_status or existing_checkpoint.get("review_status", "assessed")

    checkpoint_data = {
        "repository": f"{REPO_OWNER}/{REPO_NAME}",
        "tracked_branch": BRANCH,
        "latest_reviewed_commit_sha": reviewed_sha or "",
        "commit_url": f"{GITHUB_REPO_URL}/commit/{reviewed_sha}" if reviewed_sha else "",
        "checkpoint_timestamp": now_iso,
        "review_status": checkpoint_status,
        "latest_completed_review_timestamp": latest_completed_review_ts or now_iso,
        "latest_synchronized_commit_sha": latest_head_sha,
        "latest_synchronized_timestamp": now_iso
    }

    save_json(CHECKPOINT_FILE, checkpoint_data)
    save_json(STATIC_CHECKPOINT_FILE, checkpoint_data)
    print(f"Successfully saved checkpoint to {CHECKPOINT_FILE} (Reviewed SHA: {reviewed_sha}, Sync Head: {latest_head_sha})")


def main():
    parser = argparse.ArgumentParser(description="Sync FlexiRule commit history and checkpoint")
    parser.add_argument("--local-repo", type=str, help="Path to local git clone of Sendipad/flexirule")
    parser.add_argument("--advance-checkpoint", type=str, help="Full SHA to advance reviewed checkpoint to")
    parser.add_argument("--review-status", type=str, choices=["examined", "assessed"], help="Review status for checkpoint")

    args = parser.parse_args()
    sync_commits(
        local_repo=args.local_repo,
        advance_checkpoint_to_sha=args.advance_checkpoint,
        review_status=args.review_status
    )


if __name__ == "__main__":
    main()
