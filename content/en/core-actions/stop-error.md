---
title: Stop and Error Handling
description: Terminate a rule flow gracefully or handle unexpected errors.
weight: 100
aliases:
  - /docs/actions/stop/
---

# Stop and Error Handling

Control how your rule finishes. While rules naturally stop at the end of a logic path, the **Stop** node gives you explicit control over *how* they end.

## The Stop Action

The Stop node immediately terminates the current rule execution.

### When to Use
- **Manual Termination**: If a certain condition is met and no further logic is needed.
- **Cleanup**: Stopping a rule after a specific "Exit" condition.

## Error Handling

Sometimes things go wrong (e.g., an external API is down). You can configure your rule to handle these situations gracefully.

### 1. The Error Path
Many actions have an optional **Error Path** (the red connection point). If the action fails, the rule will follow this path instead of stopping.
- **Example**: If "Notify via WhatsApp" fails, follow the Error path to "Notify via Email" as a fallback.

### 2. Raise Error Node
Use this node to intentionally stop the rule and show a message to the user or log a specific failure.
- **User Message**: "Rule failed because the Customer has no email address."
- **Stop Execution**: This prevents any further actions (like saving the record) from happening.

## Best Practices
- **Use Clear Messages**: When raising an error, explain *why* it happened so users know how to fix it.
- **Always Have a Fallback**: For critical notifications or updates, use the Error Path to ensure the rule doesn't just "vanish" if something breaks.

---
**Advanced**: For technical details on error bubbling and log captures, see [Stop Action Architecture]({{< relref "advanced-reference/architecture/actions/stop.md" >}}).
