---
title: Rule Lifecycle
description: Understand how rules move from draft through testing and activation to disabled or archived states.
weight: 10
aliases:
  - /rule-builder/rule-lifecycle/
---

# Rule Lifecycle

Treat a rule as a managed business policy, not just a canvas.

## Lifecycle

**Draft → Test → Active → Disabled / Archived**

The exact available status values can include **Draft**, **Active**, **Disabled**, **Invalid**, **Error**, and **Archived** depending on the current rule state and validation outcome.

### Draft
Build and edit the rule safely. Draft rules are not intended to execute automatically on matching system events.

### Test
Use the debugger with representative documents. Verify matching and non-matching cases and inspect returned values before activation.

### Active
An active rule participates in matching live events. Active definitions should be treated as production configuration and may be read-only depending on lifecycle controls.

### Disabled
Disable a rule when you need to pause live execution without immediately retiring its definition.

### Archived
Archive a retired rule when it should remain available for historical reference without participating in execution.

## Before activation

Check:

- trigger and target DocType;
- trigger conditions and watched fields;
- action configuration and connections;
- permissions and side effects;
- debug results for expected and unexpected cases;
- activation approval requirements, if enabled.

## Versioning and amendments

When your installation supports safe amendment/versioning, make changes through the supported lifecycle workflow so the production definition is not edited accidentally.

→ [Testing & Debugging]({{< relref "debugging.md" >}})  
→ [Rule Configuration]({{< relref "../rule-builder/rule-configuration.md" >}})
