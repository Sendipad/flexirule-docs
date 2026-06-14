---
title: Group By
description: Aggregating data into bucketed categories.
weight: 10
type: docs
---

# Group By Mode

The **Group By** mode allows you to perform analytics by bucketizing results based on a specific field.

## Purpose
Use Group By when you need to see a distribution of data across categories rather than a single total.
- "Count of items in each Warehouse."
- "Sum of Sales per Territory."
- "Average Rating per Support Agent."

## Configuration

- **Group By Field**: The category field used to create the buckets (e.g., `warehouse`).
- **Aggregate Function**: Select from `count`, `sum`, `avg`, `min`, `max`.
- **Aggregate Field**: The field to perform the calculation on (e.g., `actual_qty`).

## Output Structure
Returns a list of objects, where each object contains the group field and the calculated value.

```json
[
  { "warehouse": "Finished Goods", "value": 450 },
  { "warehouse": "Raw Materials", "value": 1200 },
  { "warehouse": "Scrap", "value": 15 }
]
```

## Examples

### Analytics: Lead Sources
**Problem**: See where your leads are coming from.
- **Group By Field**: `source`
- **Aggregate Function**: `count`
- **Output**: `vars.source_distribution`
- **Result**: A list showing exactly how many leads came from "Email", "Website", "Referral", etc.
