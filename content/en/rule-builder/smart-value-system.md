---
title: Smart Value Selector & Value Resolvers
description: Learn how to input dynamic data across FlexiRule forms using Static Values, Variable References (@), and Dynamic Value Resolvers (⚡).
weight: 45
---

# Smart Value Selector & Value Resolvers

The **Smart Value Selector** is the core dynamic input component in FlexiRule. Whenever you configure an input field—whether setting a document field in Set Value, building conditions in Check, creating query filters, or drafting email templates—you use the Smart Value Selector.

> **Core Principle**: Every smart input field allows you to seamlessly toggle between static literal values, context variable references (`@`), and dynamic value resolvers (`⚡`) without needing to write code or complex syntax.

---

## The Three Input Modes

Every input field in FlexiRule supports three operational modes:

### 1. Static Value
Directly enter constant literal values based on the field's expected data type:
- **Text / Strings**: `Approved`, `Urgent`, `Follow up needed`
- **Numbers**: `100`, `0.15`, `-5`
- **Dates & Times**: Selected via interactive calendar pickers or standard date strings (`YYYY-MM-DD`).
- **Select Dropdowns**: Standard single-choice options.

### 2. Variable Reference (`@`)
Press the `@` key inside any smart input field (or click the **Variable (@)** button) to open the variable picker popup:

![Smart Value Selector showing Logic Commands dropdown](/images/smart-value-selector-commands.png)

Available variable context scopes include:
- **Document Fields (`@doc`)** <i class="fa fa-file-text-o"></i>: Fields on the record triggering the rule (e.g. `@doc.grand_total`, `@doc.customer`).
- **Previous Record Values (`@old_doc`)** <i class="fa fa-history"></i>: Pre-update field state on save events (e.g. compare `@old_doc.status` with `@doc.status` to check for status changes).
- **Rule Variables (`@vars`)** <i class="fa fa-cube"></i>: Temporary variables stored by earlier actions in the current flow (e.g. `@vars.calculated_discount`).
- **Parent Document Fields (`@parent`)** <i class="fa fa-level-up"></i>: Parent document fields when inside a child table loop.
- **Loop Item Context (`@loop`)** <i class="fa fa-repeat"></i>: Current row item (`@loop.item`) and iteration index (`@loop.index`) inside Repeat (Loop) blocks.
- **Session & Environment (`@session`)** <i class="fa fa-user"></i>: Information about the active user (`@session.user`, `@session.company`).

### 3. Resolver (`⚡`)
Press the `/` key or click the **Resolver (`⚡`)** button to launch visual value calculation engines.

---

## Value Resolver Families

FlexiRule includes 6 visual Value Resolver families accessible via the **Resolver (`⚡`)** menu:

| Resolver Family | Icon | Primary Output | Business Use Case |
| :--- | :---: | :--- | :--- |
| **Date & Time** | <i class="fa fa-calendar"></i> | Date / Datetime | Add/subtract days or months, calculate date diffs, format dates, fetch current time, or locate boundary dates (start/end of month). |
| **Math Formula** | <i class="fa fa-calculator"></i> | Number / Float | Perform arithmetic calculations (`+`, `-`, `*`, `/`) combining variables and numeric constants with decimal rounding. |
| **Lookup** | <i class="fa fa-search"></i> | Field Value | Fetch a field value from any linked record or DocType in the system. |
| **Text Transform** | <i class="fa fa-font"></i> | Text String | Concatenate text strings, adjust casing (UPPERCASE/lowercase), trim whitespace, or substitute text. |
| **Collection** | <i class="fa fa-table"></i> | List / Value | Perform child table operations: count rows, sum child amounts, average, min/max, filter rows, or pluck unique field lists. |
| **System Context** | <i class="fa fa-globe"></i> | Context String | Retrieve environment information, global system defaults, or session properties. |

---

## Visual Resolver Builders in Detail

### 1. Date & Time Resolver <i class="fa fa-calendar"></i>

Calculates dates dynamically using six operation modes:

![Date & Time formula configuration](/images/date-formula-configuration.png)

![Smart Value Selector showing Date & Time Formula options](/images/smart-value-resolver-date-formula.png)

- **Calculate Mode**: Add or subtract offsets (e.g. `@doc.posting_date + 30 Days` to compute payment due date).
- **Difference Mode**: Calculate duration between two dates in days, months, or years (e.g. age of invoice).
- **Extract Mode**: Pull specific components from a date (Day, Month, Year, Day of Week).
- **Format Mode**: Convert raw dates into custom user display formats (e.g. `DD/MM/YYYY`).
- **Current Mode**: Get the current system Date, Time, or Datetime.
- **Boundary Mode**: Locate Start of Day, End of Day, Start of Month, or End of Month.

### 2. Math Formula Resolver <i class="fa fa-calculator"></i>
Visually builds arithmetic formulas combining variables and constant values:
- **Field A**: Operand variable (e.g. `@doc.net_total`).
- **Operator**: Choose `+`, `-`, `*`, or `/`.
- **Field B**: Second operand variable or constant number (e.g. `0.15`).
- **Rounding Precision**: Set decimal place rounding (e.g. `2`).
- **Example**: `@doc.net_total * 0.15` rounded to 2 decimal places to calculate tax.

### 3. Lookup Resolver <i class="fa fa-search"></i>
Performs single-field record lookups from any DocType:
- **Target DocType**: Select target document type (e.g. `Customer`).
- **Filter Criteria**: Specify lookup condition (e.g. `name == @doc.customer`).
- **Field to Fetch**: Choose target field to return (e.g. `credit_limit`).

### 4. Text Transform Resolver <i class="fa fa-font"></i>
Manipulates text strings cleanly:
- **Operations**: `Concatenate` (join multiple variables/text strings), `Uppercase`, `Lowercase`, `Trim`, `Find & Replace`, `Substring`.
- **Example**: Concatenate `INV-` + `@doc.name` + ` - ` + `@doc.customer_name`.

### 5. Collection Resolver <i class="fa fa-table"></i>
Performs list and child table aggregations:
- **Target Collection**: Select child table field (e.g. `@doc.items`).
- **Operations**:
  - `Count`: Total number of child rows.
  - `Sum`: Sum of a numeric child field (e.g. sum of `qty`).
  - `Average`: Mean average of a child field.
  - `Min / Max`: Minimum or maximum value in child rows.
  - `Filter`: Filter child rows matching specific criteria.
  - `Pluck`: Extract a list of specific field values across all rows.
  - `Unique`: Deduplicate list values.

---

## Variable Lifetime & Scope

1. **Rule Duration**: Variables stored in `@vars` exist during the current execution run.
2. **Branch Isolation**: Variables set inside a conditional branch (e.g. **True** branch) are isolated to that branch path.
3. **Loop Scope**: `@loop.item` and `@loop.index` are available inside Repeat (Loop) blocks.
