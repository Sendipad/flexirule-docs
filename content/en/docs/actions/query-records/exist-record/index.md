---
title: "Exist Record"
description: "Verifying the presence of records matching specific criteria."
type: docs
---

# Exist Record Mode

The **Exist Record** mode provides a high-performance way to verify whether at least one record exists that matches your criteria.

## Purpose
Use Exist Record for simple validation logic where the content of the record doesn't matter, only its presence.
- "Does this customer have any open tickets?"
- "Has this employee already submitted a leave request for today?"
- "Does a duplicate project name exist?"

## Output Structure
Returns a boolean.
- `true`: At least one matching record was found.
- `false`: No matching records were found.

## Examples

### HR: Duplicate Leave Check
**Problem**: Prevent submission if another leave request exists for the same date.
- **Filters**:
    - `employee == doc.employee`
    - `from_date == doc.from_date`
    - `docstatus == 1`
- **Output**: `vars.already_requested`
- **Usage**: Follow with a [Condition]({{< relref "docs/actions/condition" >}}) node checking if `vars.already_requested` is true.

## Performance
This is the fastest query mode. It uses a `SELECT 1` query with a `LIMIT 1`, ensuring the database stops searching as soon as a single match is found.
