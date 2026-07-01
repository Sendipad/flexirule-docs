---
title: Initial Configuration
description: Steps to take after installing FlexiRule.
weight: 15
---

# Initial Configuration

After installing FlexiRule, follow these steps to prepare your environment.

## 1. Verify App Installation
Ensure `flexirule` is listed in your `site_config.json` under `installed_apps`.

## 2. Configure Default Roles
Add the **Rule Builder** role to any user who needs to design automations. System Managers have access by default.

## 3. Review Global Settings
Visit **RuleFlow Settings** and ensure **Enable Rule Execution** is checked. If you are in a production environment, set a **Log Retention** period (e.g., 60 days) to keep your database clean.

## 4. Test the Rule Builder
Create a simple "Test" rule for a DocType like *Note* or *ToDo* to verify that the canvas and configuration panels load correctly.

## 5. Background Jobs Check
If you plan to use **Asynchronous** actions, ensure that your bench background workers are running:
```bash
bench worker
```
Check the **Background Jobs** list in the Desk to verify that FlexiRule tasks are being processed.
