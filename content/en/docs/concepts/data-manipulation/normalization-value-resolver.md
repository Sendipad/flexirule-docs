---
title: "Normalization Value Resolver"
description: "Resolve, format, and normalize variables natively within the rule canvas using pipelines and profiles."
weight: 10
entity_kind: concept
---

The **Normalization Value Resolver** is a powerful core update that allows users to perform complex data cleaning and transformation directly within the rule engine's configuration panels. It eliminates the need for external scripts or manual formatting steps by providing a native pipeline for data resolution.

## Overview

Think of the Normalization Value Resolver as a processing engine that sits between your data source and its final destination. Instead of just mapping a value, you can apply a series of operations to ensure the data is exactly as you need it.

<video src="/flexirule-docs/images/normalization-value-resolver-with-supported-varity-operation.webm" controls autoplay loop muted></video>

## Key Components

### 1. Target Field
Specifies the field (Data, Text, Select, etc.) within the current document context that will receive the normalized value.

### 2. Normalization Profile
Profiles are pre-defined sets of operations designed for specific use cases.
- **Custom Pipeline**: Allows you to manually select and order operations.
- **Pre-defined Profiles**: (e.g., "Email Cleaning", "Phone Formatting") - These are read-only sets of operations optimized for common data types.

### 3. Pipeline Operations
When using a **Custom Pipeline**, you can chain multiple operations together. Each operation processes the result of the previous one. Common operations include:
- `lowercase` / `uppercase`
- `trim`
- `strip_special_characters`
- `url_encode`
- `json_parse`

### 4. Live Demo / Preview
The Resolver includes a built-in testing area where you can:
- Enter **Example Text** to see how the current pipeline affects it.
- View a **Live Result** immediately.
- Inspect the **Pipeline Breakdown** to see exactly how each step modifies the data.

## Business Intent

By using the Normalization Value Resolver, business users can:
- **Enforce Data Integrity**: Ensure that inputs (like phone numbers or names) follow a consistent format before they are saved.
- **Simplify Rules**: Reduce the number of nodes in a rule by handling data cleaning within the assignment or condition itself.
- **Bridge Data Formats**: Easily transform data between different formats (e.g., converting a raw string into a URL-safe slug).

## Where to find it?
The Normalization Value Resolver is integrated into:
- [Assignment Action]({{< relref "docs/actions/assignment/" >}})
- [Condition Nodes]({{< relref "docs/actions/condition/" >}})
- Any configuration panel requiring data mapping.
