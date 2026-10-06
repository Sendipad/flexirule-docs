---
title: Rule Configuration & Trigger Setup
description: Configure when a rule runs, which document it applies to, and how execution is controlled.
weight: 30
---

# Rule Configuration & Trigger Setup

Configure a Rule before building its action flow. These settings determine **when the rule is eligible to run**, which document or entry point it uses, and how execution should be managed.

## Core settings

| Setting | What it means | Guidance |
|---|---|---|
| Rule Name | Unique name for the rule | Describe the business outcome, not just the implementation |
| Trigger Type | DocType Event, Scheduler Event, or Callable Event | Choose the kind of entry point that matches the use case |
| Document Type | Target DocType for a document-triggered rule | Required for DocType Event rules |
| Trigger Event | Supported lifecycle event for that DocType | Choose the earliest safe event for the intended behavior |
| Execution Mode | Synchronous or Asynchronous | Synchronous execution participates in the current request; asynchronous execution runs in the background |
| Max Execution Time | Time limit in seconds | Keep rules focused and avoid long-running work in document events |
| Priority | Numeric priority from 0 to 20 | Higher values are configured to execute first where rules are ordered together |
| Debug Mode | Enables more detailed diagnostic information | Use while troubleshooting and consider operational logging settings |
| Watched Fields | Comma-separated fields for document events | Leave empty when every matching event should be evaluated |
| Skip for Roles | Roles for which the rule should not execute | Check carefully so exclusions do not bypass required business controls |

## Trigger types

### DocType Event

Use this for rules tied to a document lifecycle, such as a Sales Order or Purchase Invoice. The event list includes lifecycle points such as **Before Insert**, **Before Save**, **Validate**, **Before Submit**, **After Insert**, **After Save**, **On Submit**, **Before Cancel**, **On Cancel**, **On Trash**, and other supported events. The exact event should be selected from the installed UI.

### Scheduler Event

Use a scheduler trigger for recurring background work. Configure the schedule through the available scheduler workflow in your installation.

### Callable Event

Use a callable rule when another supported entry point or rule is intended to invoke it. The **Exposed As Sub-Rule** option is relevant to callable rules that should be available for reuse.

## Trigger conditions are an early gate

A **Trigger Condition** is evaluated before the full action flow. It is different from a Condition action on the canvas:

- **Trigger Condition:** decides whether the rule should proceed into execution.
- **Condition action:** makes a decision after the flow has started and routes execution along a branch.

Use trigger conditions to exclude irrelevant documents early. Configure them through the supported UI; do not manually edit generated fields such as the hidden, read-only compiled expression.

## Activation and lifecycle

The Rule DocType includes lifecycle states such as **Draft**, **Active**, **Disabled**, **Invalid**, **Error**, and **Archived**. Status is read-only and reflects the rule's lifecycle; the separate **Is Active** field is an activation control. A rule can be inactive even when its saved definition remains available for editing.

Before activation, test the flow and check the target DocType, trigger event, permissions, and side effects. Some sites may require approval to activate rules.

## Practical checklist

- Does the selected trigger match when the business event actually occurs?
- Can an action block or update the document at this lifecycle point?
- Are trigger conditions and watched fields configured intentionally?
- Is the timeout appropriate for work performed during the request?
- Have you tested the rule with matching and non-matching documents?
