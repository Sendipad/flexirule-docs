---
title: Action Contracts
description: Understanding the DTOs used for UI/Backend communication.
weight: 20
---

# Action Contracts

FlexiRule uses **Contracts** (Data Transfer Objects) to define how the Rule Builder UI should interact with the backend execution engine.

## The Canonical Contract
When the Rule Builder loads, it fetches the contract for every registered Action Type. The contract defines:

### 1. Metadata
- `action_type`: The unique identifier (e.g., `Notify`).
- `category`: Used for grouping actions in the "Add Action" menu.
- `icon` / `color`: Visual representation on the canvas.

### 2. Capabilities
Boolean flags that tell the UI which features to enable for this action:
- `is_async`: Can this action run in the background?
- `has_condition`: Does this action support a "False" branch?
- `is_terminal`: Does this action stop execution (like "Stop")?

### 3. Config Schema
A standard **JSON Schema** used to generate the configuration form.
- The UI uses this schema to render text inputs, link pickers, and tables dynamically.
- Validation is performed in the browser based on this schema before the rule is saved.

### 4. Context Schema
Defines which variables or fields are "emitted" by this action.
- If an action returns a value (e.g., a Query result), the context schema tells later nodes in the graph which fields are available for autocomplete.
