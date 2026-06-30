---
title: Permissions
description: Managing access to the Rule Builder and rule execution.
weight: 20
---

# Permissions

FlexiRule implements a dual-layer permission model to ensure that logic design is restricted to authorized users while rule execution remains seamless and safe.

## 1. Builder Access
Only users with specific roles can access the **Rule Builder** UI.
- **System Manager**: Has full access by default.
- **Rule Builder**: A dedicated role provided by FlexiRule for functional consultants or analysts who need to design rules but aren't full System Managers.

To grant builder access, go to the **User** document and add the `Rule Builder` role.

## 2. Execution Permissions
By default, FlexiRule executes actions using the permissions of the user who triggered the rule.

### Skip Permissions
In some cases, a rule needs to perform an action that the triggering user doesn't have access to (e.g., updating a "Credit Limit" field that only Accountants can change).
- Every action has a **Skip Permissions** checkbox.
- When checked, you **MUST** provide an **Audit Reason**.
- This reason is stored in the execution logs for compliance auditing.

## 3. Role-Based Execution Control
You can prevent specific rules from running for certain roles using the `skip_for_roles` field in the Rule document. This is useful for preventing automations from triggering during bulk imports performed by an "Administrator".
