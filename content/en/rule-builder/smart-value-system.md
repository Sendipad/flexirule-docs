---
title: Smart Value System
description: Learn how FlexiRule handles dynamic inputs using static values, variables, and dynamic value resolvers.
weight: 45
---

# Smart Value System

The **Smart Value System** is the dynamic input interface in FlexiRule. Whether you are setting a field value in a Set Value block, configuring a Check condition, constructing an email template, or filtering queries, you use the same intuitive input mechanism across the visual canvas.

> **The Core Principle**: Every input field in FlexiRule is a smart input powered by the **Smart Value Selector**, enabling seamless toggling between static values, variable references, and dynamic value resolvers without writing complex manual syntax.

---

## The Three Input Modes

Input fields in FlexiRule support three operational modes:

### 1. Static Value
Directly type or pick constant values:
- **Text**: `Approved`, `High Priority`, `Welcome to FlexiRule`
- **Numbers**: `100`, `0.05`, `-10`
- **Dates**: Selected via the calendar picker or standard date format (`YYYY-MM-DD`).

### 2. Variable Reference (`@`)
Variables allow you to reference document data and context dynamically. Type the `@` key or click the **Variable (@)** button to open the searchable variable selector menu:

- **Document Fields (`@doc`)**: Select fields on the document triggering the rule (e.g., `Grand Total`, `Customer`, `Status`).
- **Previous Values (`@old_doc`)**: Select pre-update field values on change events (e.g., `Previous Status` to verify if a field was modified).
- **Rule Variables (`@vars`)**: Select temporary variables created by previous action blocks in the current rule flow (e.g., `Calculated Discount`, `Open Invoices`).
- **System Information (`@system`)**: Access environment information such as `Current User` or `Today`.

### 3. Dynamic Value Resolvers (`/`)
Value Resolvers calculate dynamic values on the fly. Type the `/` key or click the **Resolver (/)** button to select a visual resolver builder.

---

## Dynamic Value Resolver Families

FlexiRule features 12 user-facing Value Resolver families accessible via the `/` menu in the Smart Value Selector:

| Resolver Family | Trigger Key | Primary Output | Use Case |
| :--- | :--- | :--- | :--- |
| **Date Formula** | `/date_formula` | Date / Datetime | Add or subtract days, months, or years from today or a base date field. |
| **Math Formula** | `/math_formula` | Float / Int | Perform safe arithmetic (`+`, `-`, `*`, `/`) with rounding precision. |
| **Date Difference** | `/date_diff` | Integer | Calculate time difference in days, months, or years between two dates. |
| **Child Table Aggregation** | `/child_aggregation` | Float / Int | Calculate Sum, Average, or Count across child table rows. |
| **Collection Operations** | `/collection` | Array / Value | Filter, count, check (`any`/`all`), extract (`pluck`), or aggregate child rows. |
| **String Manipulation** | `/string_formula` | Text | Concatenate text, convert casing, or format strings. |
| **Normalization** | `/normalization` | Clean Text | Apply cleaning pipelines (trim, slugify, lower) to sanitize text inputs. |
| **Format** | `/format` | Formatted Text | Format currency amounts, dates, or structured text templates. |
| **Fetch From Link** | `/fetch` | Field Value | Read a field from a linked database record without full document loading. |
| **System Context** | `/system_context` | String / Boolean | Fetch active session user info or check user permissions. |
| **Variables (`@`)** | `@` | Any | Access runtime context (`@doc`, `@old_doc`, `@vars`). |
| **Static Value** | Literal | Literal | Enter constant values. |

---

## Visual Resolver Builders

### 1. Date Formula (`date_formula`)
Calculates a target date relative to a base date.
- **UI Options**:
  - `Base Date`: Select `Today` or a document date field.
  - `Offset Sign`: Select `+` or `-`.
  - `Offset Value`: Enter numeric offset (e.g., `30`).
  - `Offset Unit`: Choose `Days`, `Months`, or `Years`.
- **Example**: `Posting Date + 30 Days` → calculates an invoice due date.

### 2. Math Formula (`math_formula`)
Performs arithmetic calculations with rounding precision.
- **UI Options**:
  - `Field A`: Select left operand field or variable.
  - `Operator`: Choose `+`, `-`, `*`, or `/`.
  - `Field B / Constant`: Select right operand field or enter constant number.
  - `Precision`: Set decimal places (e.g., `2`).
- **Example**: `Net Total * 0.15 (Precision: 2)` → calculates a tax amount.

### 3. Fetch From Link (`fetch`)
Performs a single-field database lookup via a linked record.
- **UI Options**:
  - `Link Field`: Select link field on current document (e.g., `Customer`).
  - `Target DocType`: Select target DocType (e.g., `Customer`).
  - `Field to Fetch`: Select target field (e.g., `Credit Limit`).
- **Example**: Retrieve a customer's credit limit dynamically when processing a Sales Order.

---

## Variable Scope & Runtime Rules

1. **Rule Isolation**: Variables stored in `@vars` exist during the single rule execution run. They are not stored in the database unless explicitly saved using an **Update Record** action.
2. **Branch Isolation**: Variables created inside one conditional branch (e.g., **True** branch) are not initialized on alternative branches (**False** branch).
3. **Loop Context**: Inside a **Repeat (Loop)** block, `@vars.item` represents the active row item of the current iteration.

---

## Where the Smart Value Selector is Used

The Smart Value Selector is used across all rule builder configuration panels:
- **Set Value Action**: Select targets and values for field updates or rule variables.
- **Check (Condition) Action**: Compare fields and expressions visually.
- **Query Records Action**: Define dynamic query filter criteria.
- **Notify Action**: Build dynamic notification subjects and message bodies.
