---
title: Smart Value System
description: Learn how FlexiRule handles dynamic inputs using static values, variables, and canonical dynamic resolvers.
weight: 45
---

# Smart Value System

The **Smart Value System** is the unified data entry and expression evaluation engine in FlexiRule. Whether you are setting a field value in an assignment block, configuring a check condition, constructing an email template, or filtering queries, you use the same intuitive input mechanism across the visual canvas.

> **The Core Principle**: Every input field in FlexiRule is a "Smart" input powered by the **Smart Value Selector** (`FlexValueControl`), enabling seamless toggling between static values, variable references, and dynamic value resolvers.

---

## The Three Input Modes

Input fields in FlexiRule support three distinct operational modes:

### 1. Static Value
Directly type or pick constant values:
- **Text**: `Approved`, `High Priority`, `Welcome to FlexiRule`
- **Numbers**: `100`, `0.05`, `-10`
- **Dates**: Selected via calendar picker or standard ISO string format (`YYYY-MM-DD`).

### 2. Variable Reference (`@`)
Variables allow you to reference context data dynamically at runtime. Type the `@` key or click the **Variable (@)** button to open the searchable variable auto-complete menu:

- **`@doc.*` (Trigger Document)**: Access fields on the document triggering the rule (e.g., `@doc.grand_total`, `@doc.customer`, `@doc.status`).
- **`@old_doc.*` (Previous Document State)**: Access pre-mutation field values on update events (e.g., `@old_doc.status` to check if a status field changed).
- **`@vars.*` / `@rule.*` (Rule Context Variables)**: Access temporary variables created by previous blocks in the current rule (e.g., `@vars.calculated_discount`, `@vars.open_invoices`).
- **`@system.*` (System Context)**: Access environment metadata such as `@system.current_user` or `@system.today`.

### 3. Dynamic Value Resolvers (`/`)
Value Resolvers calculate dynamic values on the fly. Type the `/` key or click the **Resolver (/)** button to select a visual resolver builder.

---

## Canonical Value Resolver Families

FlexiRule features 12 canonical user-facing Value Resolver families accessible via the `/` menu in the Smart Value Selector:

| Resolver Family | Trigger Symbol / Key | Primary Output | Use Case |
| :--- | :--- | :--- | :--- |
| **Date Formula** | `/date_formula` | Date / Datetime | Add or subtract days, months, or years from today or a base date field. |
| **Math Formula** | `/math_formula` | Float / Int | Perform arithmetic (`+`, `-`, `*`, `/`) with rounding precision between fields/constants. |
| **Date Difference** | `/date_diff` | Integer | Calculate time difference in days, months, or years between two dates. |
| **Child Table Aggregation** | `/child_aggregation` | Float / Int | Calculate Sum, Average, or Count across rows in a child table. |
| **Collection Operations** | `/collection` | Array / Value | Filter, count, check (`any`/`all`), extract (`pluck`), or aggregate child rows with conditions. |
| **String Manipulation** | `/string_formula` | Text | Concatenate text, convert casing (uppercase/lowercase), or format text. |
| **Normalization** | `/normalization` | Clean Text | Apply cleaning pipelines (trim, slugify, snake_case) to sanitize text inputs. |
| **Format** | `/format` | Formatted Text | Format currency amounts, dates, or structured string templates. |
| **Fetch From Link** | `/fetch` | Field Value | Read a field from a linked DocType record in the database without full document loading. |
| **System Context** | `/system_context` | String / Boolean | Fetch active session user or check user role permissions (`has_role`). |
| **Variables (`@`)** | `@` | Any | Access runtime context (`doc`, `old_doc`, `vars`). |
| **Static Value** | Literal | Literal | Provide constant values. |

---

## Detailed Resolver Breakdown

### 1. Date Formula (`date_formula`)
Calculates a target date relative to a base date.
- **Config**:
  - `Base Date`: `Today` or Doc Field (e.g., `doc.posting_date`)
  - `Offset Sign`: `+` or `-`
  - `Offset Value`: Numeric offset (e.g., `30`)
  - `Offset Unit`: `Days`, `Months`, `Years`
- **Output**: Date string (`YYYY-MM-DD`).
- **Example**: `Date: doc.posting_date + 30 Days` -> calculates invoice due date.

### 2. Math Formula (`math_formula`)
Performs safe arithmetic calculations with configurable rounding precision.
- **Config**:
  - `Field A`: Left operand (e.g., `doc.net_total`)
  - `Operator`: `+`, `-`, `*`, `/`
  - `Operand B Type`: `Field` or `Constant`
  - `Field B / Constant`: Right operand (e.g., `doc.tax_rate` or `0.15`)
  - `Precision`: Decimal places (default `2`)
- **Output**: Float or Integer.
- **Example**: `Calc: doc.net_total * 0.15 (Precision: 2)` -> calculates tax amount.

### 3. Date Difference (`date_diff`)
Measures the duration between two date values.
- **Config**: `Start Date`, `End Date`, `Unit` (`Days`, `Months`, `Years`)
- **Output**: Integer representing total units.
- **Example**: `doc.due_date - @system.today (Days)` -> calculates days until due or overdue days.

### 4. Child Table Aggregation (`child_aggregation`)
Quickly calculates numeric totals over child table rows.
- **Config**:
  - `Child Table`: Target child table field (e.g., `items`)
  - `Operation`: `Sum`, `Average`, `Count`
  - `Numeric Field`: Field to aggregate (e.g., `amount`)
- **Output**: Numeric float/int.
- **Example**: `SUM(items.amount)` -> total line item amount.

### 5. Collection Operations (`collection`)
Advanced child table filtering and evaluation.
- **Operations**:
  - `count`: Number of matching rows.
  - `any`: Returns `true` if at least one row matches condition.
  - `all`: Returns `true` if all rows match condition.
  - `first` / `find`: Returns the first matching row dict.
  - `filter`: Returns array of matching row dicts.
  - `pluck`: Returns array of field values extracted from matching rows.
  - `unique`: Returns deduplicated array of values.
- **Safety Limit**: Maximum execution limit of **10,000 rows** per collection operation to prevent memory depletion.

### 6. Fetch From Link (`fetch`)
Performs a lightweight single-field DB lookup via a Link field.
- **Config**:
  - `Link Field`: Link field on current document (e.g., `customer`)
  - `Linked DocType`: Target DocType (e.g., `Customer`)
  - `Fetch Field`: Field to retrieve (e.g., `credit_limit`)
- **Output**: Value of target field or `None`.

### 7. Normalization (`normalization`)
Cleanses and standardizes text input using predefined pipelines.
- **Config**: `norm_field`, `norm_profile` (`Clean Text`, `Custom`), pipeline operations (`trim`, `lowercase`, `slugify`).
- **Output**: Standardized text string.

---

## Variable Scope & Runtime Guarantees

1. **Isolation**: Variables in `@vars` exist strictly during the single rule execution run. They are not stored in the database unless explicitly written to a document using an **Update Record** action.
2. **Branch Safety**: Variables set inside one conditional path (e.g., `True` branch) are not initialized on parallel or alternative branches (`False` branch).
3. **Loop Context**: Inside a **Repeat (Loop)** block, `@vars.item` represents the active item of the current iteration.

---

## Where the Smart Value Selector is Used

The Smart Value Selector is integrated across:
- **Set Value Action**: Defining target values for fields or `@vars`.
- **Check (Condition) Action**: Comparing left and right values.
- **Query Records Action**: Defining dynamic query filter criteria.
- **Notify Action**: Building dynamic email subjects and message bodies.
- **Trigger Conditions**: Evaluating fast pre-filters before rule execution.
