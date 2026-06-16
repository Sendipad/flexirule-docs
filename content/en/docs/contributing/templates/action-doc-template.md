---
title: Action Name
description: A concise one-sentence description of the action.
weight: 30
capabilities:
  category: data
  mutation: read-only
  targets:
  - context
  triggers:
  - any
  flow: linear
  transaction:
  - transactional
badges:
- core
---

# Action Name

Keywords: [comma, separated, search, terms]

## Overview
<!--
Explain the business intent. Why would someone use this action?
Focus on business outcomes.
-->

## When To Use
<!--
Provide specific scenarios where this action is the right choice.
Mention alternatives if appropriate (e.g., "Use this instead of X when...").
-->

## Configuration
<!--
Describe the UI components and configuration fields.
Use tables for field descriptions.
Include screenshots if they add clarity.
-->

| Field | Description |
| :--- | :--- |
| **Field Name** | Description of what this field does and its expected value. |

## Supported Inputs
<!--
What data does this action require to run?
(e.g., Specific variables, document fields, or external parameters).
-->

## Supported Outputs
<!--
What data does this action produce or modify?
(e.g., Updated document fields, new context variables).
-->

## Execution Behavior
<!--
Describe the logical flow of the action.
For Layer 1, keep this implementation-agnostic.
Use Mermaid diagrams if helpful.
-->

## Operators / Features
<!--
If the action has multiple modes or operators, describe them here.
(e.g., Set, Increment, Clear).
-->

## Examples

### [Real-world Scenario Title]
**Problem**: <!-- Describe the business problem (e.g., "Assign a priority based on Customer Group"). -->

**Configuration**:
<!--
Show how the action is configured to solve the problem.
Use code blocks or tables.
-->

**Result**: <!-- Describe the outcome (e.g., "The Sales Order priority is set to 'High'"). -->

## Best Practices
<!--
Tips for efficient and maintainable use of this action.
-->

## Common Mistakes
<!--
Common pitfalls and how to avoid them.
-->

## Limitations
<!--
Technical or functional boundaries of the action.
-->

## Related Topics
<!--
Links to other layers or related actions using relref.
-->
- [Execution Semantics]({{</* relref "docs/reference/execution/action-name.md" */>}})
- [Architecture Reference]({{</* relref "docs/architecture/actions/action-name.md" */>}})
