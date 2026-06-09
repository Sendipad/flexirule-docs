---
title: "Aggregations"
description: "Performing mathematical calculations (Count, Sum, Avg, Min, Max) across records."
type: docs
---

# Aggregation Modes

Aggregation modes perform mathematical calculations directly at the database level, allowing you to summarize data without fetching individual records.

## Supported Operations

### 1. Count
Returns the total number of records matching the filters.
- **Best for**: Checking volumes (e.g., "Total number of leads created today").

### 2. Sum
Calculates the total of a specific numeric field.
- **Best for**: Financial totals (e.g., "Total outstanding balance for this customer").

### 3. Average (Avg)
Calculates the mean value of a specific field.
- **Best for**: Performance metrics (e.g., "Average resolution time for support tickets").

### 4. Minimum (Min) & Maximum (Max)
Returns the lowest or highest value found.
- **Best for**: Range checks (e.g., "What was the highest discount given this month?").

## Configuration

- **Field to Aggregate**: (Required for Sum, Avg, Min, Max) Select the numeric or currency field you want to calculate.
- **Filters**: Define the subset of records to include in the calculation.

## Output Structure
Returns a single number (Integer or Float).

## Examples

### Accounting: Outstanding Balance
**Problem**: Calculate a customer's total unpaid debt.
- **Mode**: `Sum`
- **DocType**: `Sales Invoice`
- **Field**: `outstanding_amount`
- **Filters**: `customer == doc.customer`
- **Output**: `vars.total_debt`
