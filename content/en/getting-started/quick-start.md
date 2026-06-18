---
title: Quick Start
description: Get FlexiRule installed and running in your Frappe environment.
weight: 20
---

# Quick Start

Get FlexiRule installed and running in your Frappe environment in just a few steps:

## Installation

1. **Download the App**: Fetch the FlexiRule repository using the Bench CLI.
   ```bash
   bench get-app flexirule https://github.com/Sendipad/flexirule.git
   ```

2. **Install to Site**: Install the application onto your specific Frappe site.
   ```bash
   bench --site [your-site] install-app flexirule
   ```

3. **Build Assets**: Compile the necessary frontend assets for the visual builder.
   ```bash
   bench build --app flexirule
   ```

After installation, you can access the FlexiRule Dashboard from your Frappe Desk to begin building your first rule.

## Your First Rule

Creating a rule in FlexiRule involves three main steps:

1. **Define the Trigger**: Determine when your rule should run (e.g., when a Sales Order is saved).
2. **Design the Logic**: Use the **Rule Builder** to map out your business logic.
3. **Activate**: Enable the rule to start processing documents.
