---
title: Which Action Should I Use?
weight: 5
description: Choose the right FlexiRule action type from the business outcome you need, using the names and operations available in the Rule Builder.
---

# Which Action Should I Use?

When building a rule, start with **what you want the rule to accomplish**, then choose the Action Type that expresses that operation.

The Rule Builder currently uses these Action Types:

- **Condition** — make a true/false decision.
- **Switch** — route execution among configured cases.
- **Loop** — repeat work for items in a collection.
- **Assignment** — set document fields or context values.
- **Query Records** — read records or calculate supported query results.
- **Document Action** — create, update, delete, or perform other supported document operations.
- **Notify** — send a notification.
- **Process** — execute a configured process.
- **Sub-Rule** — invoke another rule.
- **Wait** — pause/defer supported work.
- **Stop** — intentionally terminate the flow.
- **Raise Error** — terminate the flow with an error.

> **Important:** **Action Type** is the technical name used by FlexiRule's registry and configuration model. In the UI, these are the Actions you add to the canvas.

## Choose by outcome

| I want to… | Use | Why |
|---|---|---|
| Decide whether something is true or false | **Condition** | Evaluates configured conditions and provides True/False branches. |
| Choose among several known cases | **Switch** | Matches a value against configured cases and routes execution to the matching branch. |
| Read records | **Query Records** | Retrieves matching records using a supported query mode. |
| Check whether a record exists | **Query Records → Exist Record** | Returns an existence result without treating the operation as a document update. |
| Count, sum, average, find minimum/maximum, or group records | **Query Records** | Uses the appropriate supported query mode for the required result. |
| Set document fields or context values | **Assignment** | Applies configured assignments to document/context targets. |
| Create a new document | **Document Action → Create New** | Creates a target Frappe document using the configured mappings. |
| Update an existing document | **Document Action → Update Existing** | Updates a target document using the configured mappings. |
| Delete a document | **Document Action → Delete Record** | Deletes the selected target document. |
| Create a ToDo | **Document Action → Create ToDo** | Creates a ToDo with its configured details. |
| Add a comment | **Document Action → Add Comment** | Adds a comment to the configured document context. |
| Repeat work for each item in a collection | **Loop** | Iterates over supported collections such as child-table rows or query results. |
| Send a notification | **Notify** | Sends a configured notification. |
| Reuse another visual rule | **Sub-Rule** | Invokes another FlexiRule rule as part of the current flow. |
| Run configured process logic | **Process** | Executes a configured Process operation. |
| Intentionally stop the flow | **Stop** | Ends the current execution path. |
| Stop the flow because a business or validation error should be raised | **Raise Error** | Terminates execution and raises the configured error. |
| Pause/defer supported work | **Wait** | Adds the configured wait/deferred step. |

## The most important choices

### Condition or Switch?

Use **Condition** when the question is:

> **Is this true?**

Examples:
- Is the order total above the approval threshold?
- Is the customer active?
- Has the required field been set?

Condition provides **True** and **False** execution paths.

Use **Switch** when the question is:

> **Which configured case matches this value?**

Examples:
- Is the priority High, Medium, or Low?
- Which status is the document in?
- Which category does the value belong to?

**Rule of thumb:**

**True / False → Condition**  
**Multiple value-based cases → Switch**

---

### Assignment or Document Action?

Use **Assignment** when you need to set values as part of the rule's execution.

Typical examples:
- Set a field value.
- Set or update a context value.
- Calculate a value for a later action.

Use **Document Action** when you need to perform an operation on a target Frappe document.

Its current operations are:

| Document Action operation | Use it to… |
|---|---|
| **Create New** | Create a new document. |
| **Update Existing** | Update an existing document. |
| **Delete Record** | Delete an existing document. |
| **Create ToDo** | Create a ToDo. |
| **Add Comment** | Add a comment to a document. |

**Rule of thumb:**

**Set a value → Assignment**  
**Perform a document operation → Document Action**

This is an important distinction: **Assignment is not “Set Value,” and Document Action is not simply “Update Record.”**

---

### Query Records or Document Action?

Use **Query Records** when the rule needs to **read** data.

Examples:
- Find matching records.
- Check whether a matching record exists.
- Count matching records.
- Calculate a supported aggregate.
- Retrieve a collection for a Loop.

Use **Document Action** when the rule needs to **change, create, delete, or otherwise operate on a document**.

**Rule of thumb:**

**Read → Query Records**  
**Create / Update / Delete / document operation → Document Action**

For help choosing the query mode, see [Which Query Mode Should I Use?]({{< relref "query-records/which-query-mode.md" >}}).

---

### When should I use Loop?

Use **Loop** when the same connected sequence needs to run for each item in a supported collection.

Common examples include:
- Child-table rows.
- Records returned by Query Records.
- Other supported collection values.

For example:

**Query Records → Loop → Condition / Assignment / Notify**

If you only need to retrieve the records, use **Query Records** without a Loop.

---

### Sub-Rule or Process?

Use **Sub-Rule** when the reusable logic should remain another **visual FlexiRule rule**.

Use **Process** when the work belongs in a configured **Process** operation.

**Rule of thumb:**

**Reuse visual rule logic → Sub-Rule**  
**Run configured process logic → Process**

---

### Stop or Raise Error?

Use **Stop** when you intentionally want to terminate the current flow.

Use **Raise Error** when termination should also raise an error for the execution.

**Rule of thumb:**

**End normally → Stop**  
**End with an error → Raise Error**

---

## Quick decision tree

1. **Need to make a decision?**
   - True/False → **Condition**
   - Several value-based cases → **Switch**

2. **Need to read data?**
   - Records, existence, or aggregates → **Query Records**

3. **Need to set a value?**
   - Document/context value → **Assignment**

4. **Need to operate on a document?**
   - Create/update/delete/ToDo/comment → **Document Action**

5. **Need to repeat work?**
   - For each item in a collection → **Loop**

6. **Need to communicate?**
   - Send a notification → **Notify**

7. **Need reusable logic?**
   - Another visual rule → **Sub-Rule**
   - Configured process logic → **Process**

8. **Need execution control?**
   - End normally → **Stop**
   - End with an error → **Raise Error**
   - Pause/defer supported work → **Wait**

## A typical rule uses several Action Types

You normally do not choose one Action Type for an entire rule. Each node represents one operation in the visual flow.

For example:

**Entry Action → Query Records → Condition → Assignment → Notify**

Or:

**Entry Action → Query Records → Loop → Document Action → Notify**

At every step, ask:

> **What does this step need to accomplish?**

Then choose the Action Type that most directly represents that operation.

## Where to go next

- [Actions]({{< relref "_index.md" >}}) — browse all available Action Types.
- [Building Rules]({{< relref "rule-builder/building-rules.md" >}}) — learn the complete rule-building workflow.
- [Which Query Mode Should I Use?]({{< relref "query-records/which-query-mode.md" >}}) — choose the right Query Records mode.
- [Action Settings]({{< relref "rule-builder/action-settings.md" >}}) — learn how action configuration works.

> **Note:** The installed FlexiRule version is the source of truth for the exact Action Types, fields, operations, and available options shown in the Rule Builder.

## Technical terminology

FlexiRule uses **Action Type** as the registry/configuration concept. The user-facing documentation can say **Action** when referring to the node users add to the canvas, but the exact names above should match the Action Type records and runtime contracts.
