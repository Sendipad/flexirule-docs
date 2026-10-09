---
title: Scheduled Agent Automation Workflow
weight: 30
description: Automated synchronization and product-update review workflow for scheduled agents.
---

# Scheduled Agent Automation Workflow

This document details the operational specifications, algorithm, data schemas, checkpoint semantics, and error handling rules for automated scheduled agents that process application commit history and maintain product updates for FlexiRule.

---

## 1. Responsibilities & Separation of Concerns

To preserve absolute accuracy and commit traceability, the system separates technical commit synchronization from human/agent product-update review:

1. **`data/commit_history.json`**: Canonical repository of synchronized git commits from `Sendipad/flexirule` (branch `develop`). Updated automatically without requiring a product update decision for every commit.
2. **`data/product_updates_checkpoint.json`**: Canonical review checkpoint tracking the latest commit SHA that has been evaluated for product-facing impact.
3. **`content/en/product-updates/_index.md`**: User-facing release notes written in clear, non-technical language.

---

## 2. Agent Execution Algorithm

A scheduled agent must execute the following 11-step procedure during each execution cycle:

1. **Read Canonical Checkpoint**: Read `data/product_updates_checkpoint.json` to obtain `latest_reviewed_commit_sha`.
2. **Fetch Develop Head SHA**: Query the GitHub REST API (`https://api.github.com/repos/Sendipad/flexirule/commits?sha=develop&per_page=1`) or fetch local git HEAD to obtain the current `head_sha`.
3. **Compare SHAs**:
   - If `head_sha == latest_reviewed_commit_sha`, log "No new commits require review" and exit safely with status `0`.
4. **Synchronize Commit History**: Run `python3 scripts/sync_commit_history.py` to ensure `data/commit_history.json` contains all reachable commits up to `head_sha`.
5. **Identify Commit Range**: Extract all commits in `data/commit_history.json` between `latest_reviewed_commit_sha` and `head_sha` in chronological order (oldest to newest).
6. **Analyze Impact**: For each unreviewed commit in the range, inspect:
   - Commit subject and message
   - Changed files and pull request details (if available)
   - Relevant test suites and documentation
7. **Filter User-Facing Changes**: Group related commits and distinguish user-visible features, workflow changes, UI improvements, bug fixes, or compatibility breaking changes from purely internal tasks (refactors, test-only changes, CI updates).
8. **Draft Product Update Entries**: Format new entries into `content/en/product-updates/_index.md` using clear, business-oriented language, linking to relevant documentation and GitHub commit SHAs.
9. **Validate Site Integrity**: Execute `hugo --gc --minify=false` to verify frontmatter, internal links, aliases, and static site build status.
10. **Advance Review Checkpoint**: Run `python3 scripts/sync_commit_history.py --advance-checkpoint <head_sha> --review-status assessed` to atomically advance `latest_reviewed_commit_sha` to `head_sha`.
11. **Commit and Publish**: Commit modified files (`data/`, `static/data/`, `content/en/product-updates/_index.md`) and push to `develop`.

---

## 3. Machine-Readable Data Schemas

### Checkpoint Schema (`data/product_updates_checkpoint.json`)

```json
{
  "repository": "Sendipad/flexirule",
  "tracked_branch": "develop",
  "latest_reviewed_commit_sha": "1c32acc451ff13950c3d5125a114cf3b59dfa01b",
  "commit_url": "https://github.com/Sendipad/flexirule/commit/1c32acc451ff13950c3d5125a114cf3b59dfa01b",
  "checkpoint_timestamp": "2026-10-09T22:37:04Z",
  "review_status": "assessed",
  "latest_completed_review_timestamp": "2026-10-09T22:36:48Z",
  "latest_synchronized_commit_sha": "1c32acc451ff13950c3d5125a114cf3b59dfa01b",
  "latest_synchronized_timestamp": "2026-10-09T22:37:04Z"
}
```

### Commit Record Schema (`data/commit_history.json`)

```json
{
  "repository": "Sendipad/flexirule",
  "tracked_branch": "develop",
  "last_synchronized_at": "2026-10-09T22:37:04Z",
  "total_commits": 842,
  "commits": [
    {
      "sha": "1c32acc451ff13950c3d5125a114cf3b59dfa01b",
      "short_sha": "1c32acc",
      "subject": "remove Rule Permission from workspace",
      "message": "remove Rule Permission from workspace",
      "author_name": "Abdo Ruzaqi",
      "author_email": "ruzaqi@gmail.com",
      "authored_date": "2026-10-04T14:03:37Z",
      "committer_name": "Abdo Ruzaqi",
      "committer_email": "ruzaqi@gmail.com",
      "committed_date": "2026-10-04T14:03:37Z",
      "commit_url": "https://github.com/Sendipad/flexirule/commit/1c32acc451ff13950c3d5125a114cf3b59dfa01b",
      "pr_number": null,
      "pr_url": null
    }
  ]
}
```

---

## 4. Failure Handling & Resilience Rules

- **Unreachable Saved Checkpoint SHA**: If `latest_reviewed_commit_sha` is no longer reachable from `develop` (e.g. due to force push or history rebase), **do not reset the checkpoint to HEAD**. Fail fast, flag a warning, and request manual reconciliation.
- **GitHub API Downtime / Network Error**: If network or API errors occur, retain existing valid `data/commit_history.json` and `data/product_updates_checkpoint.json` files without modification. Do not overwrite with partial or empty data.
- **Ambiguous User Impact**: If a commit's impact cannot be confidently determined from its commit message, PR description, or changed code, mark it as "requiring review" rather than guessing or fabricating product capabilities.
- **Partial Review Interruption**: If an agent reviews only part of a commit batch before failing or timing out, set `--advance-checkpoint` to the **last successfully reviewed commit SHA** in the sequence. Do not advance past unexamined commits.
- **Empty Commit Range**: If `head_sha` matches `latest_reviewed_commit_sha`, do not publish empty product update entries.
- **Duplicate Prevention**: Always match commits by full 40-character SHA. Subject lines or dates must never be treated as unique keys.
