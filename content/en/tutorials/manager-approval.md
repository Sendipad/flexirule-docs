---
title: Manager Approval for Large Purchase Orders
description: How to implement an approval workflow based on document value.
weight: 20
---

# Tutorial: Manager Approval for Large Purchase Orders

This tutorial demonstrates how to block the submission of a Purchase Order if it exceeds a certain amount and hasn't been approved by a manager.

## Business Scenario
**Objective**: Prevent unauthorized large expenditures.
**Criteria**: Purchase Orders over $10,000 must have the "Manager Approved" checkbox checked before they can be submitted.

## Step-by-Step Instructions

### 1. Create the Rule
1. **Rule Name**: "PO Approval Enforcement".
2. **Document Type**: "Purchase Order".
3. **Trigger Event**: "Before Submit".

### 2. Add the Value Check
1. Add a **Condition** node.
2. Rule: `grand_total` is greater than `10000`.

### 3. Add the Approval Check
1. From the **True** branch (meaning it IS a large order), add *another* **Condition** node.
2. Rule: `manager_approved` is `No` (or 0).

### 4. Block Submission
1. From the **True** branch of the approval check (meaning it is large AND not approved), add a **Stop and Error Handling** (Stop) node.
2. **Mode**: "Error".
3. **Error Message**: "Purchase Orders over $10,000 require Manager Approval before submission."

### 5. Expected Result
- If a PO is $5,000, it submits normally (Condition 1 is False).
- If a PO is $15,000 and "Manager Approved" is checked, it submits normally (Condition 2 is False).
- If a PO is $15,000 and "Manager Approved" is NOT checked, the user sees an error message and the submission is blocked.

## Common Mistakes
- **Wrong Event**: Using "On Submit" instead of "Before Submit". "On Submit" happens *after* the document is already finalized, so you can't block it with a simple error.
