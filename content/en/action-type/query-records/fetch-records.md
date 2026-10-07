---
title: Fetch Records
description: Query records through Frappe Query Builder using the upcoming Fetch Records mode.
weight: 5
---

# Fetch Records

> **Upcoming:** Fetch Records is being developed on the FlexiRule **refactor/query-records** branch. It is not yet part of the current develop release.

**Fetch Records** is a Query Records mode built around Frappe Query Builder (frappe.qb.get_query).

Unlike Query List, which uses the existing list-query path, Fetch Records is intended to expose Frappe Query Builder's native query capabilities while keeping the FlexiRule configuration contract thin.

## Current branch contract

The refactor/query-records implementation defines:

- **Action Type:** Query Records
- **Query Mode:** Fetch Records
- **Target DocType:** required
- **Result Type:** List of Records
- **Result Handling:** Set Context Variable, Append to Context Variable, or Update Context Variable
- **Reference Record:** hidden/not required
- **Timeout:** available for asynchronous rules
- **Configuration component:** QueryRecordsConfig

The backend dispatches Fetch Records to a dedicated handler and validates the stable FlexiRule inputs before passing the query configuration to Frappe Query Builder.

## Why it is different from Query List

| Fetch Records | Query List |
|---|---|
| Uses Frappe Query Builder | Uses the existing list-query implementation |
| Designed to preserve native Query Builder query capabilities | Designed around the standard list query configuration |
| Returns List of Records | Returns List of Records |
| Uses Query Builder configuration | Uses Query List configuration |

Fetch Records should not be documented as merely another name for Query List.

## Filters and Query Builder

The upcoming implementation deliberately avoids creating a second FlexiRule query language for native Query Builder behavior.

The configured query payload is passed to frappe.qb.get_query after FlexiRule-level validation. This allows Frappe Query Builder to remain responsible for its own query semantics, including supported filters and relationship handling.

## Limits and offsets

The Fetch Records contract supports limit and offset.

These values are validated as non-negative integers when they are supplied as concrete values. Dynamic value expressions are allowed to remain unresolved until runtime.

## Permissions

Fetch Records participates in the Query Records permission model. The Action Contract includes the common **Ignore Permissions** control with a required **Permission Audit Reason** when enabled.

Use permission bypass deliberately and document the business reason.

## When to use Fetch Records

Prefer Fetch Records when the rule needs Query Builder capabilities that should remain close to Frappe's native query semantics.

Prefer Query List when the standard Query Records list configuration is sufficient.

## Status

This page documents the implementation on refactor/query-records. Before the branch is merged into the app release branch, treat its exact UI and runtime behavior as **upcoming**, not as functionality guaranteed by the current production/develop version.
