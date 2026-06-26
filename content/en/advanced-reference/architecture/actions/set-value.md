---
title: 'Set Value: Architecture Reference'
description: Internal implementation details for the Assignment/Set Value action.
weight: 50
---

# Set Value: Architecture Reference

## Implementation
The **Set Value** action (internally `Assignment`) is handled by `AssignmentHandler` in `flexirule/ruleflow/core/action_handlers/assignment.py`.

## Features

### Batch Assignments
Allows multiple mutations in a single node execution. Assignments are processed sequentially.

### Normalization Value Resolver
A core feature for cleaning and transforming data. It uses pipelines and profiles to apply transformations (like `trim`, `upper`, `lower`) before setting the value.

### Context Variables
Assignments can target the global `vars` dictionary in the `ContextManager`, allowing state to be shared across nodes without persisting to the database.
