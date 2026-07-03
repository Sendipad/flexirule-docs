---
title: RuleFlow Settings
description: Global configuration for the FlexiRule engine.
weight: 30
---

# RuleFlow Settings

FlexiRule provides a centralized settings page to manage the behavior of the automation engine across your entire Frappe site. Access this by searching for **RuleFlow Settings** in the Desk.

## Core Settings

### 1. Enable Rule Execution
- **Checkbox**: `enabled`
- **Purpose**: This is the global "Master Switch". If unchecked, no rules will trigger, regardless of their individual status. This is useful during maintenance or data migrations.

### 2. Log Retention
- **Field**: `log_retention_days`
- **Purpose**: Automatically clean up old execution logs to prevent database bloat. It is recommended to keep logs for 30–90 days depending on your volume.

### 3. Background Queue
- **Field**: `default_queue`
- **Purpose**: Specify which Frappe background queue should be used for actions marked as **Run Asynchronously**. Common values are `default`, `long`, or `short`.

## Advanced Configuration

### 4. Cache Policy
FlexiRule uses aggressive caching to ensure high performance. You can manage how rules are cached at the site level here, although the default settings are optimized for most production environments.

### 5. Debug Mode
- **Checkbox**: `debug_mode`
- **Purpose**: Enables more verbose logging in the **Rule Execution Log**, including full context snapshots for every step. Use this only during development or troubleshooting, as it increases log size.
