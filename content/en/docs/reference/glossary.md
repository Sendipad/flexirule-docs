---
title: "Glossary"
description: "Common terminology used in FlexiRule."
weight: 100
aliases:
  - /docs/reference/glossary/
---

# Glossary

Common terminology and core concepts used throughout the FlexiRule documentation.

<dl class="glossary-list">
  <dt>Rule</dt>
  <dd>The top-level container for logic. A Rule defines <strong>when</strong> logic should trigger (e.g., on DocType events, schedulers, or manual calls) and contains the graph of actions to be executed.</dd>

  <dt>Action</dt>
  <dd>A single node in the Rule's execution graph. Each action represents a specific step, such as a condition, an assignment, or a process execution.</dd>

  <dt>Condition</dt>
  <dd>A logic node that evaluates a Python expression to branch the execution flow. It determines which path (True or False) the engine should follow.</dd>

  <dt>Condition Group</dt>
  <dd>A hierarchical collection of conditions combined using logical operators (AND, OR) for complex decision making.</dd>

  <dt>Process</dt>
  <dd>A code-backed, reusable module that performs specific business logic or integrations. Processes are typically written in Python and can be called from within a Rule.</dd>

  <dt>Assignment</dt>
  <dd>An action that mutates the state of the current document or context variables. It supports various operators like Set, Increment, Append, and Toggle.</dd>

  <dt>Execution Context</dt>
  <dd>The environment in which a Rule runs. It contains the current document (<code>doc</code>), the previous document state (<code>old_doc</code>), and any local variables (<code>vars</code>) generated during execution.</dd>

  <dt>Variables (<code>vars</code>)</dt>
  <dd>Local data storage within the execution context. Variables allow passing data between different action nodes in the same execution path.</dd>

  <dt>Field References</dt>
  <dd>Dynamic pointers to data within the execution context, usually expressed using dot notation (e.g., <code>doc.status</code>, <code>vars.total_amount</code>).</dd>

  <dt>Outputs</dt>
  <dd>The data produced by an Action or Process that can be stored in the Execution Context for use by subsequent nodes.</dd>
</dl>

---

## Related Topics

- [System Architecture]({{< relref "docs/architecture/" >}})
- [Execution Engine]({{< relref "docs/architecture/engine/execution-engine.md" >}})
- [Rule Building]({{< relref "docs/user-guide/rule-builder.md" >}})
