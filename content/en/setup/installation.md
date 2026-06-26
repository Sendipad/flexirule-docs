---
title: Installation Guide
description: How to install FlexiRule in your Frappe/ERPNext environment.
weight: 10
---

# Installation

Installing FlexiRule is straightforward using the Frappe Bench CLI.

## Prerequisites
- A working Frappe Bench environment.
- Frappe Framework v15 or higher.
- (Optional) ERPNext v15 or higher.

## Step-by-Step Installation

1.  **Get the App**: Fetch the FlexiRule repository into your bench's `apps` folder.
    ```bash
    bench get-app flexirule https://github.com/Sendipad/flexirule.git
    ```

2.  **Install to Site**: Install the app to your specific Frappe site.
    ```bash
    bench --site [your-site-name] install-app flexirule
    ```

3.  **Build Assets**: Compile the Vue.js 3 Rule Builder and other frontend assets.
    ```bash
    bench build --app flexirule
    ```

4.  **Restart Bench**: Ensure all background workers and the web server are aware of the new app.
    ```bash
    bench restart
    ```

## Post-Installation Check
Once installed, log in to your Frappe Desk and search for **Rule List**. If the DocType appears and you can open it, the installation was successful.

---

# RuleFlow Settings

FlexiRule features a global settings page called **RuleFlow Settings**.

- **Enable Rule Execution**: Globally toggle all rules on or off. Useful during large data migrations or system maintenance.
- **Log Retention**: Configure how long execution logs should be kept before being automatically cleared.
- **Async Workers**: Define which background queue should handle asynchronous rule executions.
