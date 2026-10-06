---
title: Which Action Should I Use?
weight: 5
description: Choose the right FlexiRule action from the business outcome you need, with clear guidance on when to use each action.
---

# Which Action Should I Use?

When building a rule, start with **what you want the rule to accomplish**, not with the Action name.

Use this page as a decision guide:

> **Decide → Read → Set or update → Communicate → Repeat → Reuse → Stop or defer**

If you are unsure which action matches your goal, find the outcome below and follow the recommended action.

## Choose by outcome

| I want to… | Use this action | Why |
|---|---|---|
| Check whether something is true or false | **Check (Condition)** | Evaluates conditions and sends execution down **True** or **False** branches. |
| Choose one path from several known cases | **Switch** | Matches a value against configured cases and routes execution to the matching branch. |
| Read records or calculate a database result | **Query Records** | Retrieves records, checks existence, or calculates supported aggregates such as count, sum, average, minimum, maximum, or grouped results. |
| Set a value on the current document or store a value for later steps | **Set Value (Assignment)** | Sets document fields or rule variables using the assignment grid. |
| Create, update, submit, cancel, amend, or otherwise operate on a Frappe record | **Update Record** | Performs document operations against a target record or records. |
| Run actions for every item in a collection | **Repeat (Loop)** | Iterates over child-table rows or query results and runs a connected loop body for each item. |
| Send a message or notification | **Notify** | Handles configured notifications and communication. |
| Reuse another visual rule | **Sub-Rule** | Calls another rule as part of the current rule flow. |
| Run a reusable server-side process | **Process** | Executes a configured process for work that belongs outside the visual rule flow. |
| Intentionally end execution or raise an error | **Stop & Error** | Stops the current execution path, with behavior appropriate to the configured stop/error operation. |
| Pause execution | **Wait** | Introduces a configured wait/deferred step where supported. |

## The most common decisions

### Do I need a Condition or a Switch?

Use **Check (Condition)** when the question is essentially:

> **Is this true?**

Examples:
- Is the order total greater than 100,000?
- Is the customer active?
- Are all required fields set?

A Check action produces **True** and **False** paths.

Use **Switch** when the question is:

> **Which case does this value match?**

Examples:
- Is the priority High, Medium, or Low?
- Which customer group is this?
- Which status is the document in?

A Switch action provides a branch for each configured case plus a **Default** path.

**Rule of thumb:**  
**True/False → Check**  
**Several known values → Switch**

---

### Do I need Set Value or Update Record?

These actions can both change data, but they solve different problems.

Use **Set Value (Assignment)** for standard field/value assignments and rule-variable calculations as the rule executes.

Use **Update Record** when you need to perform an operation on a target Frappe record, including operations such as creating or updating records and supported document lifecycle operations.

**Rule of thumb:**  
**Set a value → Set Value**  
**Operate on a target record → Update Record**

If the value is only needed as an intermediate result for later actions, store it in a rule variable with **Set Value** rather than creating a separate document operation.

---

### Do I need Query Records or Update Record?

Use **Query Records** when the rule needs to **read** data.

Examples:
- Find matching records.
- Check whether a record exists.
- Count matching records.
- Calculate a supported aggregate.
- Retrieve records to process in a loop.

Use **Update Record** when the rule needs to **change or create** a Frappe record.

**Rule of thumb:**  
**Read → Query Records**  
**Change/create → Update Record**

For help choosing a Query Records mode, see [Which Query Mode Should I Use?]({{< relref "query-records/which-query-mode.md" >}}).

---

### Do I need a Loop?

Use **Repeat (Loop)** when you need to perform the same connected sequence for each item in a collection.

Typical collections include:
- Child-table rows.
- Records returned by Query Records.
- Other supported list/collection values.

For example:

**Query Records → Repeat → Set Value / Check / Notify**

If you only need to retrieve the collection, you do **not** need a Loop. Use **Query Records** by itself.

---

### Do I need a Sub-Rule or Process?

Use **Sub-Rule** when the reusable logic should remain a **visual FlexiRule** that another rule can call.

Use **Process** when the work is implemented as a configured **server-side process** rather than another visual rule.

**Rule of thumb:**  
**Reuse visual rule logic → Sub-Rule**  
**Run server-side process logic → Process**

---

## Quick decision tree

Use this when you want the shortest possible answer:

1. **Need to make a decision?**
   - True/False → **Check**
   - Several value-based cases → **Switch**

2. **Need to read data?**
   - Records, existence, or aggregates → **Query Records**

3. **Need to change data?**
   - Set a field or rule variable → **Set Value**
   - Operate on a target record → **Update Record**

4. **Need to repeat work?**
   - For each item in a collection → **Repeat (Loop)**

5. **Need to communicate?**
   - Send a notification → **Notify**

6. **Need to reuse logic?**
   - Another visual rule → **Sub-Rule**
   - Server-side process → **Process**

7. **Need to control execution?**
   - Stop or raise an error → **Stop & Error**
   - Pause/defer supported work → **Wait**

## A typical rule may use several actions

You usually do not choose only one action for an entire rule. Actions work together as a visual flow.

For example:

**Entry → Query Records → Check → Switch → Set Value → Notify**

The important question at each step is:

> **What does this step need to accomplish?**

Choose the action that expresses that operation most directly, then connect it to the next step in the canvas.

## Where to go next

- [Actions Overview]({{< relref "_index.md" >}}) — browse all available actions.
- [Building Rules]({{< relref "rule-builder/building-rules.md" >}}) — learn the complete rule-building workflow.
- [Which Query Mode Should I Use?]({{< relref "query-records/which-query-mode.md" >}}) — choose the right Query Records mode.
- [Action Settings]({{< relref "rule-builder/action-settings.md" >}}) — understand how action configuration works.

> **Note:** The exact fields, operations, and available options depend on the installed FlexiRule version. The Action configuration UI and the dedicated action guides are the source of truth for supported behavior.

## Technical terminology

FlexiRule uses **Action Type** as the technical registry/configuration concept. User documentation generally uses **Action** because that is what you add, configure, and connect on the rule canvas.
