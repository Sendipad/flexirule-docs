---
title: Registry and Contracts
description: The backbone of FlexiRule's extensibility and dynamic UI.
weight: 20
---

# Registry Architecture

FlexiRule uses a **Registry Pattern** to manage its various components. This architecture allows the system to be highly decoupled and easily extendable by developers.

## 1. Action Handler Registry
Every logic node in the Rule Builder (Assignment, Condition, Notify, etc.) has a corresponding **Action Handler** in the Python backend.
- Handlers are registered at boot time.
- When the engine encounters an action type, it lookups the handler in the registry to execute it.

## 2. Operator Registry
Used by the **Assignment** action to handle different mutation types (Set, Increment, Append, etc.). Developers can register custom operators to support new data transformation logic.

## 3. Resolver Registry
Powers the **Value Resolver** system. It maps a "Kind" (like `formula`, `format`, `normalization`) to a specific resolver class that knows how to compute the result.

---

# Contracts (DTOs)

Contracts are the "language" spoken between the Python backend and the Vue.js frontend.

## The Action Contract
When the Rule Builder loads, it fetches a **Contract DTO** for every action type. This DTO includes:
- **Capabilities**: What the action can do (e.g., `is_async`, `has_condition`).
- **Config Schema**: A JSON Schema that tells the frontend what form fields to render for this action.
- **Context Schema**: Information about what variables and fields are available for resolution within this action.

## Why use Contracts?
1.  **Dynamic UI**: The frontend doesn't "know" how to configure a custom Process Operation. It simply follows the schema provided in the contract.
2.  **Type Safety**: Ensures that the data sent from the UI matches what the backend handler expects.
3.  **Documentation**: Contracts serve as a living documentation of the system's capabilities.

---

# Dynamic UI Generation

FlexiRule features a **Dynamic Control Factory**. Instead of hard-coding forms for every action, the UI is built at runtime based on the Action Contract.

- **Schema-Driven**: We use standard JSON Schema to define configuration parameters.
- **Custom Controls**: FlexiRule provides specialized Frappe-style controls (Link Pickers, Table Builders, Condition Editors) that can be used within any action configuration form.
- **Extensibility**: If you create a new **Process Operation**, you simply define its `config_schema` in the DocType, and FlexiRule will automatically generate the configuration UI in the Rule Builder.
