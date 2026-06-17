---
title: Quick Start
description: Install FlexiRule and build your first automation in minutes.
weight: 20
---

# Quick Start Guide

Get FlexiRule up and running in your Frappe environment and build your first rule in just a few minutes.

## Installation

To install FlexiRule, run the following commands in your bench directory:

{{< steps >}}
{{< step number="1" title="Download the App" >}}
Fetch the FlexiRule repository.
```bash
bench get-app flexirule https://github.com/Sendipad/flexirule.git
```
{{< /step >}}

{{< step number="2" title="Install to Site" >}}
Install the application onto your specific Frappe site.
```bash
bench --site [your-site] install-app flexirule
```
{{< /step >}}

{{< step number="3" title="Build Assets" >}}
Compile the frontend assets for the visual builder.
```bash
bench build --app flexirule
```
{{< /step >}}
{{< /steps >}}

## Your First Rule

Once installed, follow these steps to create a simple "Hello World" automation:

1. **Open FlexiRule**: In your Frappe Desk, search for and open the **Rule** list.
2. **Create New**: Click the **New** button to create a new rule.
3. **Define Trigger**: Give your rule a name (e.g., "Welcome Notification") and select the **DocType** it should apply to (e.g., "Customer"). Set the event to **After Insert**.
4. **Open Builder**: Click the **Edit Rule Flow** button to open the visual builder.
5. **Add an Action**: Hover over the connection point of the Start node and select **Notify**.
6. **Configure**: Click on the new Notify node to set up your message.
7. **Save and Activate**: Save your changes in the builder, then go back to the Rule document and check the **Enabled** box.

Congratulations! You've just built your first visual automation. Every time a new Customer is created, your notification will trigger.

---

*Next: Learn more about navigating the [Visual Builder]({{< relref "using-the-builder/canvas-navigation.md" >}}).*
