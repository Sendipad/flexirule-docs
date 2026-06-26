---
title: Developer Guide
weight: 80
description: Resources for developers extending or contributing to FlexiRule.
---

# Developer Guide

Welcome to the FlexiRule developer resources. FlexiRule is built to be highly extendable, allowing you to create custom logic nodes and services that integrate seamlessly with the Visual Rule Builder.

## Getting Started for Developers

To begin extending FlexiRule, you should familiarize yourself with the following concepts:

- **Action Handlers**: The Python classes that execute the logic for each node.
- **Contracts (DTOs)**: The bridge between Python logic and the Vue.js configuration UI.
- **Registry Pattern**: How FlexiRule discovers and loads extensions.

## Core Extension Points

### 1. Creating Custom Actions
You can create new Action Types that appear in the Rule Builder.
- Define a new **Action Type** document.
- Implement an `ActionHandler` in Python.
- (Optional) Provide a custom Vue.js component for advanced configuration.

### 2. Standard Processes
Processes are file-backed modules that allow you to group related logic operations.
- Create a **Process** document.
- Implement operations as Python functions in your app's `process/` directory.
- Define JSON Schemas for configuration and output.

### 3. Notification Providers
Extend the **Notify** action by adding new providers (e.g., Slack, SMS Gateway).
- Register your provider using the `flexirule_notification_providers` hook.

## Coding Standards
- Follow [Frappe Coding Standards](https://frappeframework.com/docs/v14/user/en/guidelines/coding-standards).
- Ensure all custom actions are transactional and support dry-runs.
- Use `SafeFrappeAPI` for operations that shouldn't mutate data during dry-runs.
