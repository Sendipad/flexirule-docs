---
title: Rule Lifecycle & Management
description: Learn how to manage rules safely across Draft, Active, Disabled, and Archived states, including safe rule versioning (amending).
weight: 70
---

# Rule Lifecycle & Management

Every rule in FlexiRule follows a structured lifecycle. Understanding these stages ensures you can build, test, activate, and update business automations safely in production without risking data integrity.

---

## Lifecycle Stages

```text
Draft  ──(Activate)──>  Active  ──(Amend)──>  New Draft
                         │
                     (Disable)
                         │
                         ▼
                     Disabled  ──(Archive)──> Archived
```

### 1. Creation & Draft State
When you create a rule, it starts in **Draft** state:
- You can edit configuration, add action nodes, and test using the Debugger.
- **Draft rules do not execute automatically** on system events, making it completely safe to build complex flows without affecting live operations.

### 2. Testing & Activation
Once your flow is ready and verified in the Debugger:
1. Open the Rule document form or click **Toggle Active** <i class="fa fa-rocket"></i> in the Rule Builder.
2. Check the **Is Active** checkbox and click **Save**.
3. FlexiRule performs automatic validation to confirm that all required node fields are configured and connected.
4. The rule status transitions to **Active**.

### 3. Execution State
Active rules run automatically whenever matching system events occur (e.g. `Before Save` on a Sales Invoice). Live execution activity is recorded in **Rule Execution Logs**.

### 4. Safe Amending (Versioning)
To modify an **Active** rule that is running in production:
1. Click **Amend Rule** on the active Rule document.
2. FlexiRule creates a new **Draft** copy of the rule (e.g. Version 2).
3. The original Version 1 remains **Active** and continues handling live traffic uninterrupted while you edit and test Version 2 in Draft mode.
4. When Version 2 is activated, Version 1 is automatically disabled and superseded.

### 5. Disabling & Archiving
- **Disabled**: Temporarily pause rule execution without deleting the rule. Uncheck **Is Active** on the Rule form.
- **Archived**: Permanently retire legacy rules while preserving execution logs for audit and compliance.

---

## Lifecycle Status Summary

| Status Badge | Live Execution? | Editable? | Purpose |
| :--- | :---: | :---: | :--- |
| **Draft** | No | **Yes** | Building, editing, and sandbox testing. |
| **Active** | **Yes** | Read-Only | Production execution. Locked for safety. |
| **Disabled** | No | **Yes** | Paused automation. |
| **Archived** | No | Read-Only | Retired rule retained for historical record. |
