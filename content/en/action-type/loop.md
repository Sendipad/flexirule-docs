---
title: Loop
description: Iterate a connected flow for items in a configured collection.
weight: 40
---

# Loop

**Loop** repeats a connected flow for items in a configured collection.

## Configuration

Loop requires a configuration payload and an Item Alias.

The UI uses **LoopConfig**. The Rule Action return-variable field is presented as **Item Alias**.

## Flow

Loop has a body path and an exit path. The body should eventually return to the Loop node so the next item can be processed.

A common pattern is:

**Query Records → Loop → Condition → Document Action**

## Result behavior

Loop itself does not produce a stored action result. The Item Alias identifies the current collection item in the loop context.

## Common mistakes

- Forgetting the loop-back connection.
- Reusing an Item Alias that conflicts with an outer loop.
- Running an unnecessary query inside every iteration.

## Related

- [Query Records]({{< relref "query-records/" >}})
- [Condition]({{< relref "condition.md" >}})
- [Document Action]({{< relref "document-action/" >}})
