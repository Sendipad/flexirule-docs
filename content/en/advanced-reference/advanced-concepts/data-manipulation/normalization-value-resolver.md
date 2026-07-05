---
title: "Normalization Value Resolver"
description: "Resolve, format, and normalize variables natively within the rule canvas using pipelines and profiles."
weight: 10
entity_kind: concept
---

The **Normalization Value Resolver** is a powerful core update that allows users to perform complex data cleaning and transformation directly within the rule engine's configuration panels. It eliminates the need for external scripts or manual formatting steps by providing a native pipeline for data resolution.

## Overview

Think of the Normalization Value Resolver as a processing engine that sits between your data source and its final destination. Instead of just mapping a value, you can apply a series of operations to ensure the data is exactly as you need it.

<video src="/images/normalization-value-resolver-with-supported-varity-operation.webm" controls autoplay loop muted></video>

## Key Components

### 1. Target Field
Specifies the field (Data, Text, Select, etc.) within the current document context that will receive the normalized value.

### 2. Normalization Profile
Profiles are pre-defined sets of operations designed for specific use cases. Using profiles is highly recommended for maintaining **unified normalization** standards across your system.

By applying the same profile to similar fields in different DocTypes (e.g., using "URL Safe" for both Blog Slugs and Category Slugs), you ensure that data is stored consistently and behaves predictably across the entire platform.

- **Custom Pipeline**: Allows you to manually select and order operations.
- **Pre-defined Profiles**:
    - **URL Safe**: Optimized for generating slugs (Trim → Lowercase → Slug).
    - **Clean Text**: Standardizes human-readable text (Trim → Remove Extra Spaces).
    - **Upper Case Token**: Ideal for unique identifiers or codes (Trim → Uppercase → Remove Spaces).

{{< warning >}}
**Attention Required**: When configuring normalization, always check if an existing Profile fits your needs before creating a Custom Pipeline. Unified data standards prevent duplicate records and search inconsistencies.
{{< /warning >}}

### 3. Pipeline Operations
When using a **Custom Pipeline**, you can chain multiple operations together. Each operation processes the result of the previous one.

#### Text Cleaning
| Operation | Behavior |
| :--- | :--- |
| `trim` | Removes whitespace from the beginning and end of the text. |
| `remove_spaces` | Strips all spaces from the text. |
| `remove_extra_spaces` | Replaces multiple spaces with a single space and trims the ends. |

#### Case Transformation
| Operation | Behavior |
| :--- | :--- |
| `lowercase` | Converts all characters to lowercase. |
| `uppercase` | Converts all characters to uppercase. |
| `title_case` | Capitalizes the first letter of every word. |
| `slug` | Converts text into a URL-friendly format (lowercase, hyphen-separated, alphanumeric only). |
| `snake_case` | Converts text into a programming-friendly format (lowercase, underscore-separated). |

#### Character Filtering
| Operation | Behavior |
| :--- | :--- |
| `remove_punctuation` | Strips all symbols and punctuation marks. |
| `remove_numbers` | Removes all numeric digits (0-9). |
| `numeric_only` | Removes everything except numeric digits. |
| `alphanumeric_only` | Removes everything except letters and numbers. |

#### Advanced Encoding & Localization
| Operation | Behavior |
| :--- | :--- |
| `unicode_normalize` | Standardizes Unicode characters (using NFKD) to prevent encoding conflicts. |
| `remove_diacritics` | Strips accents and diacritics from Latin characters (e.g., `é` becomes `e`). |
| `translate_chars` | Handles specialized translations, such as converting Arabic/Persian digits to Western digits. |
| `phone_normalize` | Specialized cleaner for phone numbers that handles international prefixes and strips non-digit formatting. |

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
- [Assignment Action]({{< relref "core-actions/set-value.md/" >}})
- [Condition Nodes]({{< relref "core-actions/check.md/" >}})
- Any configuration panel requiring data mapping.
