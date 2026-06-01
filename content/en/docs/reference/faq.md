---
title: "FAQ"
description: "Frequently asked questions about FlexiRule."
weight: 60
parent: "advanced"
---

# FAQ

Keywords: faq, questions, help, common queries

## Audience

- End Users
- Administrators
- Developers

---

## General Questions

### Is FlexiRule a replacement for Frappe Workflows?
FlexiRule is much more powerful than standard Frappe Workflows. While Workflows focus on state transitions, FlexiRule allows for complex logic, database queries, external integrations, and automated mutations at any point in a document's lifecycle.

### Does FlexiRule slow down my site?
Rules are optimized for performance. Condition trees are compiled to Python, and the engine uses layered caching. However, poorly designed rules (e.g., heavy queries in a loop) can impact performance. Always use the `Execution Log` to monitor duration.

---

## Technical Questions

### Can I call a Rule from my custom Python code?
Yes. You can use the `flexirule.api.execute_rule` method. See the [API Reference](../api/) for details.

### Where is the rule logic stored?
The graph and configuration are stored as JSON in the `Rule` and `Rule Action` DocTypes. You can export these as part of a custom app module for version control.

### Can I use custom Python functions in my rules?
Yes, via the **Process Action**. You can create a `Process` DocType that points to your custom Python module and operations.

---

## Security Questions

### Is execution safe?
Yes. All templates and conditions are evaluated using `SafeFrappeAPI`, which prevents unauthorized write operations and access to restricted system modules.

### Who can create and edit rules?
Rule management is restricted to users with the `System Manager` role or specific roles defined in the `RuleFlow Settings`.

---

## Related Topics

- [Glossary](../glossary/)
- [Troubleshooting](../troubleshooting/)
- [Architecture](../../architecture/)
