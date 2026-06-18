---
title: 'Action Name: Execution Semantics'
description: Technical runtime behavior and engine guarantees for the Action Name
  action.
weight: 40
---

# Action Name: Execution Semantics

## Purpose
<!--
Define the runtime intent of this action.
"Exactly how does this action behave at runtime?"
-->

## Execution Lifecycle
<!--
Describe the step-by-step processing of the action by the engine.
Mention pre-processing, resolution, and post-processing steps.
-->

## Context Visibility
<!--
Define what parts of the execution context this action can see and modify.
Does it have access to `doc`, `vars`, `meta`, etc.?
-->

## Transaction Behavior
<!--
Explain how this action interacts with database transactions.
Is it atomic? Does it support rollbacks?
Does it trigger an immediate `db.commit()`?
-->

## Failure Behavior
<!--
What happens when this action fails?
Describe the default error handling and how it interacts with Rule-level policies.
-->

## Idempotency
<!--
Is this action idempotent?
Can it be safely executed multiple times with the same input?
-->

## Re-entrancy
<!--
Does this action support being called recursively or re-entered during the same transaction?
-->

## Concurrency
<!--
How does this action behave in a concurrent environment?
Are there locking mechanisms or race condition risks?
-->

## Performance Notes
<!--
Time and memory complexity considerations.
Impact on high-volume document processing.
-->
