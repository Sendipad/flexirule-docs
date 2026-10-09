---
title: Scheduled Agent Automation Workflow
weight: 30
description: Automated synchronization and product-update review workflow for scheduled agents.
---

# Scheduled Agent Automation Workflow

This document details the operational specifications, algorithm, data schemas, checkpoint semantics, data minimization rules, and failure handling procedures for automated scheduled agents that process application commit history and maintain product updates for FlexiRule.

---

## 1. Responsibilities & UI Separation

To preserve absolute accuracy, privacy, and commit traceability, the system strictly separates public user-facing content from internal developer diagnostics:

1. **`content/en/product-updates/_index.md`**: Public-facing release notes written in clear, business-oriented language for Frappe/ERPNext users. Does **not** display raw commit SHAs, author email addresses, checkpoint badges, or automation diagnostics.
2. **`content/en/developer-guide/commit-history.md`**: Technical developer view providing full git commit subjects, SHAs, PR links, and search controls.
3. **`data/commit_history.json` & `static/data/commit_history.json`**: Canonical public commit history API. Author and committer email addresses are excluded to enforce data minimization.
4. **`data/product_updates_checkpoint.json` & `static/data/product_updates_checkpoint.json`**: Machine-readable review checkpoint tracking the latest commit SHA evaluated for product-facing impact.
5. **`data/commit_audit_map.json` & `static/data/commit_audit_map.json`**: Internal audit matrix mapping each commit SHA to its review classification (`user_facing`, `internal`, `needs_review`) and associated update ID.

---

## 2. Agent Execution Algorithm

A scheduled agent must execute the following 11-step procedure during each execution cycle:

1. **Read Canonical Checkpoint**: Read `data/product_updates_checkpoint.json` to obtain `latest_reviewed_commit_sha`.
2. **Fetch Develop Head SHA**: Query the GitHub REST API (`https://api.github.com/repos/Sendipad/flexirule/commits?sha=develop&per_page=1`) or fetch local git HEAD to obtain `head_sha`.
3. **Compare SHAs**:
   - If `head_sha == latest_reviewed_commit_sha`, log "No new commits require review" and exit safely with status `0`.
4. **Synchronize Commit History**: Run `python3 scripts/sync_commit_history.py` to update `data/commit_history.json` and verify that the `static/data/` static mirror is identical.
5. **Identify Commit Range**: Extract all commits in `data/commit_history.json` between `latest_reviewed_commit_sha` and `head_sha` in chronological order (oldest to newest).
6. **Analyze User Impact**: For each unreviewed commit, inspect the commit subject, changed files, pull request details, and documentation.
7. **Filter & Group User Changes**: Distinguish user-visible features, workflow changes, UI improvements, bug fixes, or breaking changes from internal maintenance (tests, refactors, CI updates). Group related commits into a single coherent update entry.
8. **Draft Product Update Entries**: Append new entries to `content/en/product-updates/_index.md` under standard categories (**Features**, **Improvements**, **Fixes**) with concise "What Changed", "What You Can Do", "Why It Matters", and documentation cross-links.
9. **Update Audit Map**: Record review classifications and update mappings in `data/commit_audit_map.json`.
10. **Validate Site Integrity**: Execute `hugo --gc --minify=false` to verify frontmatter, internal links, aliases, and static site build status.
11. **Advance Review Checkpoint**: Run `python3 scripts/sync_commit_history.py --advance-checkpoint <head_sha> --review-status assessed` to atomically advance `latest_reviewed_commit_sha` to `head_sha`.

---

## 3. Data Schemas & Privacy Rules

### Data Minimization Rule
- Author and committer email addresses **must never** be written to public static JSON endpoints (`commit_history.json`). Only display names (`author_name`, `committer_name`) are retained.

### Checkpoint Schema (`data/product_updates_checkpoint.json`)

```json
{
  "repository": "Sendipad/flexirule",
  "tracked_branch": "develop",
  "latest_reviewed_commit_sha": "1c32acc451ff13950c3d5125a114cf3b59dfa01b",
  "commit_url": "https://github.com/Sendipad/flexirule/commit/1c32acc451ff13950c3d5125a114cf3b59dfa01b",
  "checkpoint_timestamp": "2026-10-09T22:45:00Z",
  "review_status": "assessed",
  "latest_completed_review_timestamp": "2026-10-09T22:45:00Z",
  "latest_synchronized_commit_sha": "1c32acc451ff13950c3d5125a114cf3b59dfa01b",
  "latest_synchronized_timestamp": "2026-10-09T22:45:00Z"
}
```

---

## 4. Failure Handling & Resilience Rules

- **Mirror Consistency**: `scripts/sync_commit_history.py` verifies that `data/` files and `static/data/` mirrors match identically.
- **Fetch Failures**: If GitHub API or network errors occur, existing valid commit history and checkpoint files are preserved without modification.
- **Unreachable Checkpoint SHA**: If `latest_reviewed_commit_sha` is no longer reachable from `develop` (e.g. force push or history rebase), fail fast and request manual reconciliation. Do not silently reset the checkpoint.
- **Partial Review Interruption**: If an agent reviews only part of a batch, advance `--advance-checkpoint` to the last successfully reviewed commit SHA in the sequence.
