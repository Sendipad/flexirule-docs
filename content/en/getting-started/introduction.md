---
title: Introduction
weight: 10
description: A high-level overview of FlexiRule and how it simplifies business logic.
---

# Introduction to FlexiRule

FlexiRule is a visual automation tool designed for the Frappe Framework and ERPNext. It allows you to build, manage, and understand your business logic using an intuitive, drag-and-drop canvas instead of writing complex code.

## Why use FlexiRule?

In many systems, business logic is scattered across various scripts and hidden hooks. This makes it hard to see the "big picture" of how your business processes actually work. FlexiRule centralizes this logic into clear, visual workflows.

- **See Your Logic**: View your business processes as clear diagrams rather than lines of code.
- **Easy to Change**: Update your business rules by moving blocks on a canvas, without needing a developer for every small change.
- **Understand What Happened**: Every step of a rule's execution is logged, so you can easily trace why a certain action was taken.
- **Safe and Reliable**: Built-in checks ensure your rules are valid and won't cause system issues.

## How it Works

Instead of writing code, you use **Blocks** to represent different actions, such as:
- **Checking a condition** (e.g., "Is the order total over $1,000?")
- **Updating a record** (e.g., "Set the status to 'Requires Approval'")
- **Sending a notification** (e.g., "Email the Sales Manager")

You connect these blocks to define the flow of your process. When an event happens in your system (like a new Sales Order being created), FlexiRule executes the corresponding rule step-by-step.

Whether you're automating simple tasks or complex multi-step approvals, FlexiRule gives you the tools to build and manage your logic professionally and visually.
