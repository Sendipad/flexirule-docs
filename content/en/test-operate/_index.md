---
title: Test & Operate
weight: 60
description: Safely test rules, inspect execution, and manage the production lifecycle.
---

# Test & Operate

A rule should be tested before it is activated and monitored after it enters production.

## Recommended path

1. [Rule Lifecycle]({{< relref "rule-lifecycle.md" >}})
2. [Testing & Debugging]({{< relref "debugging.md" >}})

## Operational workflow

**Draft → Test → Activate → Monitor → Amend or Disable → Archive**

Keep testing and production operation conceptually separate. Debug simulations are for verification; active-rule execution affects real events and should be monitored through execution logs.
