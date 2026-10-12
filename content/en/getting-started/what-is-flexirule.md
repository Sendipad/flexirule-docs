---
title: What is FlexiRule?
weight: 10
description: Learn what FlexiRule does, the problems it solves, and how it fits into Frappe and ERPNext.
aliases:
  - /introduction/what-is-flexirule/
---

# What is FlexiRule?

FlexiRule is a visual business-rule and orchestration platform for the Frappe Framework and ERPNext. It lets teams represent supported business policies as connected, configurable rules instead of spreading every decision across custom hooks, scripts, and app code.

A rule can respond to a supported trigger, evaluate conditions, read data, assign values, update documents, send notifications, and connect steps into a visible flow. The exact behavior available depends on the installed FlexiRule version and its configured action types.

## The problem it addresses

As an ERPNext implementation grows, business decisions can become scattered across hooks, server scripts, custom methods, and separate applications. The resulting behavior may be difficult to discover, explain, test, or safely change because no single view shows how the pieces work together.

FlexiRule provides a dedicated place to model supported business policies. The rule's trigger, connected steps, action configuration, and available execution information help a team reason about what should happen and investigate what happened.

## What FlexiRule is—and is not

- **It is** a visual layer for expressing and maintaining supported business rules.
- **It is** a way to make decision paths more discoverable and testable.
- **It is not** a replacement for Frappe, ERPNext, or custom application development.
- **It does not** make every configuration automatically safe; rules still require correct permissions, testing, and review of side effects.

## A simple example

Imagine that finance wants to notify a reviewer when a Sales Invoice exceeds a threshold. A rule can express the intended flow:

```text
Invoice event
     │
     ▼
Compare grand total with threshold
     │
     ├── Above threshold → Notify reviewer
     └── Otherwise       → No notification
```

The example separates the **business policy** (which invoices need review) from the technical capabilities used to execute it (document events, data access, and notification delivery).

## How it fits into a Frappe application

Custom development remains the right place to build new DocTypes, APIs, integrations, and technical capabilities. FlexiRule can then orchestrate those capabilities where supported, while keeping changeable business decisions visible in configurable rules.

## Where to go next

- [How FlexiRule Works]({{< relref "how-it-works.md" >}})
- [Core Concepts]({{< relref "core-concepts.md" >}})
- [Do I need FlexiRule?]({{< relref "do-i-need-flexirule.md" >}})
- [Quick Start]({{< relref "quick-start.md" >}})
