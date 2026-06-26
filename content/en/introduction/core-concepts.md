---
title: Core Concepts
weight: 70
description: The fundamental building blocks of the FlexiRule ecosystem.
---

# Core Concepts

To effectively use FlexiRule, it's important to understand the fundamental entities that make up the system. These concepts form the foundation for building any automation.

## 1. The Rule
A **Rule** is the top-level container for your logic. It defines **when** something should happen and **what** logic should be executed.
-   **Trigger Type**: Defines the entry point (e.g., DocType Event, Scheduler, or Callable).
-   **Document Type**: The specific record type this rule applies to (e.g., Sales Order).

## 2. The Trigger
The **Trigger** is the specific event that initiates rule execution.
-   **Events**: `Before Save`, `After Insert`, `On Submit`, etc.
-   **Conditions**: A fast-filter evaluated before the engine loads the graph. If the trigger condition is false, the rule doesn't run.

## 3. The Block (Action)
Each node on the visual canvas is called a **Block** (technically a *Rule Action*). Blocks are the individual steps in your process.
-   **Check (Condition)**: Branches the flow based on True/False logic.
-   **Set Value (Assignment)**: Modifies document fields or context variables.
-   **Notify**: Sends emails or system alerts.
-   **Process**: Executes a reusable logic module.

## 4. Context and Variables
When a rule executes, it creates a "memory space" called the **Context**.
-   **`doc`**: The current document triggering the rule.
-   **`vars`**: Custom variables created during execution to pass data between blocks.
-   **`old_doc`**: The state of the document before the current changes (available in Save events).

## 5. Execution Flow
The sequence of blocks connected by lines on the canvas.
-   **Entry Action**: The starting point (Start node).
-   **Deterministic Path**: The engine follows connections sequentially based on block results.
-   **Stop**: A terminal node that ends the execution.

## 6. Lifecycle States
Rules move through different states to ensure safety:
-   **Draft**: Editable, but does not trigger automatically.
-   **Active**: Locked and live in the system.
-   **Disabled**: An active rule that has been temporarily stopped.
-   **Archived**: A retired rule kept for historical audit.

## 7. Versioning (Amending)
Active rules cannot be edited directly. To make changes, you **Amend** the rule, which creates a new **Draft** version. This ensures that live logic is never in an "incomplete" state while you are working on it.
