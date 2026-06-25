---
title: Notify
description: Send emails, system messages, or popup alerts.
weight: 20
aliases:
  - /docs/actions/notify/
---

# Notify

The **Notify** block is how your rule talks to people or other systems.

## Types of Notifications

### 1. Email
Send a formatted email.
- **Who gets it**: Enter an email address or pick a field (like "Owner's Email").
- **What it says**: Use a pre-made template or write your own message.
- **Attachments**: You can automatically attach the record (like a Sales Order) as a PDF.

### 2. System Message
Send an alert inside the system. These show up in the "Bell" icon at the top of the screen for specific users or roles.

### 3. Popup Alert (Toast)
Show a small popup message to the person who is currently using the system.
- **Alert Types**: Success (Green), Info (Blue), Warning (Yellow), or Error (Red).
- **Note**: These only appear if the rule was triggered by someone clicking a button (like "Save") in the browser.

## How to Set it Up
1. **Pick the Type**: Choose how you want to send the message.
2. **Write the Message**: Type your message. You can include data from your rule by using curly brackets, like `Hello {{ doc.owner }}`.
3. **Choose the Audience**: Select who should receive the alert.
