---
title: Process
description: Execute a registered Process operation from a rule.
weight: 110
---

# Process

**Process** executes a registered Process operation from the rule flow.

The Action Type is **Process**. It is not a generic “Advanced Process” node.

## When to use it

Use Process when the required business operation is represented by a registered Process and operation.

Use Assignment, Query Records, or Document Action when the operation is naturally expressed by those dedicated Action Types.

## Required configuration

Process requires a Process and a Process Operation.

The UI uses **ProcessConfig** and dynamically loads fields and policies defined by the selected operation.

## Inputs and outputs

The Process contract supports these result types:

- Yes / No
- Single Record
- List of Values
- List of Records
- Full Document

Supported result handling can include Set Context Variable, Update Context Variable, Append to Context Variable, Set Doc Field, Update Doc Field, and Batch Database Set.

The exact fields and policies are operation-specific.

## Timeout and errors

Process has a **Timeout (seconds)** field. The Rule Action DocType default is 30 seconds.

Where the common error policy applies, choices include Stop, Continue, Retry, Rollback, and Escalate.

Retry Count controls retry configuration when Retry is selected.

## Important distinction

Process is an extensible operation framework. Do not document a fixed list of business algorithms as if every installation has the same Process catalog.
