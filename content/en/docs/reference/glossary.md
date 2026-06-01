---
title: "Glossary"
description: "Common terminology used in FlexiRule."
weight: 100
---

# Glossary

Keywords: rule engine, terminology, glossary, definitions

## Audience

- End Users
- Administrators
- Developers
- Contributors

---

## Terms

### Rule
The top-level container for logic. A Rule defines **when** logic should trigger (e.g., on DocType events, schedulers, or manual calls) and contains the graph of actions to be executed.

### Action
A single node in the Rule's execution graph. Each action represents a specific step, such as a condition, an assignment, or a process execution.

### Condition
A logic node that evaluates a Python expression to branch the execution flow. It determines which path (True or False) the engine should follow.

### Condition Group
A hierarchical collection of conditions combined using logical operators (AND, OR).

### Process
A code-backed, reusable module that performs specific business logic or integrations. Processes are typically written in Python and can be called from within a Rule.

### Assignment
An action that mutates the state of the current document or context variables. It supports various operators like Set, Increment, Append, and Toggle.

### Execution Context
The environment in which a Rule runs. it contains the current document (`doc`), the previous document state (`old_doc`), and any local variables (`vars`) generated during execution.

### Variables (`vars`)
Local data storage within the execution context. Variables allow passing data between different action nodes in the same execution path.

### Field References
Dynamic pointers to data within the execution context, usually expressed using dot notation (e.g., `doc.status`, `vars.total_amount`).

### Outputs
The data produced by an Action or Process that can be stored in the Execution Context for use by subsequent nodes.

---

## Related Topics

- [System Architecture](../../architecture/)
- [Execution Engine](../../engine/execution_engine/)
- [Rule Building](../../builder/rule_builder/)
