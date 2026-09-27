---
title: "FlexiRule: The Visual Logic Platform"
description: "High-performance, visual rule engineering and workflow orchestration engine for Frappe Framework and ERPNext."
---

# Welcome to FlexiRule

**FlexiRule** is a high-performance, visual logic engineering and orchestration engine for the Frappe Framework and ERPNext. It allows business analysts, ERP consultants, and developers to design, execute, and manage complex business logic without writing scattered Python code.

![FlexiRule Logo](/landing-page/flexiRule.png)

---

## What Problem Does FlexiRule Solve?

As ERPNext implementations grow, business logic frequently degrades into **"Hook Hell"**:
- **Fragmented Python Hooks**: Business rules hidden across multiple custom apps without clear execution order.
- **Unversioned Server Scripts**: Difficult to test, debug, or maintain across upgrades.
- **UI Script Sprawl**: Validation logic scattered across client scripts and server overrides.

**FlexiRule centralizes all document events, scheduled jobs, and custom processes into a single, visual, deterministic orchestration layer.**

![Rule Builder Canvas](/landing-page/rule_builder.png)

---

## Who is FlexiRule For?

- **Business Analysts & Functional Consultants**: Configure complex validation, multi-field calculations, and approval routing without waiting for developer cycles.
- **ERP Next Administrators**: Monitor rule execution logs, manage rule versioning safely in production, and audit business logic changes.
- **Developers**: Extend FlexiRule with custom action handlers, reusable process operations, and backend resolvers using clean, decoupled registry contracts.

---

## How the Visual Rule Model Works

FlexiRule executes business rules using a 5-stage deterministic execution pipeline:

```text
1. Trigger Event (DocType / Schedule / Callable)
        │
        ▼
2. Fast Filter (JSON Trigger Condition & Watched Fields)
        │
        ▼
3. Context Initialization (doc, old_doc, vars, session)
        │
        ▼
4. Graph Execution (Visual Action Nodes & Smart Value Resolvers)
        │
        ▼
5. Result & Audit Logging (Execution Path, Performance & Output)
```

1. **Triggers**: Detect document lifecycle events (`Before Save`, `On Submit`, `Validate`), background schedules, or API calls.
2. **Trigger Filters**: Evaluate lightweight JSON pre-conditions instantly before loading full rule execution contexts.
3. **Execution Context**: Holds the active document (`doc`), previous state (`old_doc`), custom variables (`vars`), and user session info.
4. **Action Nodes**: Execute visual building blocks (Set Value, Check, Query Records, Repeat, Update Record, Notify, Process, Switch).
5. **Smart Value Selector**: Resolves dynamic inputs (formulas, date math, child table aggregations, link fetches, and system values) at runtime.

---

## What Can You Build?

- **Automated Field Assignments**: Dynamically set values, calculate margins, and format strings on document save.
- **Document Validations & Guardrails**: Block document submission with custom error messages when business conditions fail.
- **Child Table Operations**: Iterate through item tables, aggregate row amounts, filter lines, or update child rows dynamically.
- **Cross-Document Workflows**: Query related records, create or update external documents, and track multi-step approvals.
- **Reusable Business Processes**: Encapsulate complex algorithms into reusable Process operations callable across multiple rules.

---

## A Real-World Example: Sales Order Credit Limit Check

Consider a common ERPNext scenario: **Block Sales Orders if customer balance exceeds credit limit.**

1. **Trigger**: `DocType Event` on `Sales Order` during `Validate`.
2. **Trigger Filter**: `doc.grand_total > 0`.
3. **Step 1 (Query Records)**: Query total unpaid `Sales Invoice` documents where `customer == doc.customer` and `docstatus == 1`.
4. **Step 2 (Set Value)**: Calculate `vars.total_unpaid = sum(invoices.outstanding_amount)`.
5. **Step 3 (Check Condition)**: Is `(vars.total_unpaid + doc.grand_total) > doc.credit_limit`?
   - **True Branch**: Execute **Stop / Error** action: `"Credit Limit Exceeded! Current Unpaid: {vars.total_unpaid}"`.
   - **False Branch**: Execute **Set Value** action: `doc.workflow_state = "Auto Approved"`.

---

## Explore the Documentation

<div class="grid-2">

{{< card title="Getting Started" link="/getting-started/" icon="rocket" >}}
Learn how to install FlexiRule, configure your first rule, and run visual debug sessions.
{{< /card >}}

{{< card title="Rule Builder Guide" link="/rule-builder/" icon="canvas" >}}
Explore canvas navigation, node connections, action settings, and the Smart Value Selector.
{{< /card >}}

{{< card title="Core Actions Catalog" link="/action-type/" icon="catalog" >}}
Browse complete guides for Set Value, Check, Query Records, Update Record, Repeat, Notify, and more.
{{< /card >}}

{{< card title="Developer Architecture" link="/advanced-concepts/" icon="code" >}}
Deep dive into execution semantics, compiler optimization, registry contracts, and extension points.
{{< /card >}}

</div>
