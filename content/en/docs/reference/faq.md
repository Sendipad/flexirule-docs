---
title: "FAQ"
description: "Frequently asked questions about FlexiRule."
weight: 60
parent: "advanced"
---

# Frequently Asked Questions

Find answers to common questions about FlexiRule's capabilities, performance, and implementation.

{{< accordion >}}
{{< accordion-item title="Is FlexiRule a replacement for Frappe Workflows?" >}}
FlexiRule is more comprehensive than standard Frappe Workflows. While standard Workflows focus primarily on state transitions (e.g., Draft → Submitted), FlexiRule enables complex logic, database queries, external integrations, and automated mutations at any point in a document's lifecycle.
{{< /accordion-item >}}

{{< accordion-item title="Does FlexiRule slow down my site?" >}}
Rules are highly optimized for performance. Condition trees are compiled directly to Python, and the engine utilizes layered caching. While poorly designed rules (such as heavy queries within a loop) can impact performance, standard rules have negligible overhead. We recommend using the **Execution Log** to monitor rule duration.
{{< /accordion-item >}}

{{< accordion-item title="Can I call a Rule from my custom Python code?" >}}
Yes. You can trigger rule execution programmatically using the `flexirule.api.execute_rule` method. For detailed implementation, refer to the [API Reference](../api/).
{{< /accordion-item >}}

{{< accordion-item title="Where is the rule logic stored?" >}}
The visual graph and node configurations are stored as JSON metadata within the `Rule` and `Rule Action` DocTypes. These can be exported as part of a custom application module for version control and deployment across environments.
{{< /accordion-item >}}

{{< accordion-item title="Can I use custom Python functions in my rules?" >}}
Yes, through the **Process Action**. You can define a `Process` DocType that maps to your custom Python modules and functions, allowing you to extend FlexiRule with bespoke business logic.
{{< /accordion-item >}}

{{< accordion-item title="Is execution safe?" >}}
Yes. All templates and conditions are evaluated using a sandboxed environment (`SafeFrappeAPI`). This prevents unauthorized write operations and restricts access to sensitive system modules, ensuring your site remains secure.
{{< /accordion-item >}}

{{< accordion-item title="Who can create and edit rules?" >}}
By default, rule management is restricted to users with the **System Manager** role. Access can be further refined through specific permissions defined in the **RuleFlow Settings**.
{{< /accordion-item >}}
{{< /accordion >}}

---

## Related Topics

- [Glossary](../glossary/)
- [Troubleshooting](../troubleshooting/)
- [Architecture](../../architecture/)
