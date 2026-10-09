---
title: Application Commit History
weight: 20
aliases: ["/development/commit-history/"]
description: Complete, chronologically ordered traceable record of Sendipad/flexirule commits on the develop branch for developers, maintainers, and scheduled automation agents.
---

Welcome to the **Application Commit History** page. This technical reference provides a full, traceable history of commits for the core application repository [`Sendipad/flexirule`](https://github.com/Sendipad/flexirule) on the `develop` branch.

Unlike the [Product Updates]({{< relref "product-updates/_index.md" >}}) page—which presents filtered, business-oriented release notes—this page contains the original git commit subjects, author information, SHAs, and links to GitHub commits and pull requests.

---

## Machine-Readable API Endpoints

For scheduled automation agents, CI pipelines, and external auditing tools, stable machine-readable JSON data is generated and published alongside this site:

- **Full Commit History Endpoint**: [`data/commit_history.json`](/flexirule-docs/data/commit_history.json)
- **Product Review Checkpoint Endpoint**: [`data/product_updates_checkpoint.json`](/flexirule-docs/data/product_updates_checkpoint.json)
- **Automation Workflow Specification**: See [Scheduled Agent Workflow]({{< relref "developer-guide/scheduled-agent-workflow.md" >}})

---

## Synchronized Application Commits

Use the search box below to filter commit messages, SHAs, authors, or PR references in real time.

{{< commit_history_table >}}
