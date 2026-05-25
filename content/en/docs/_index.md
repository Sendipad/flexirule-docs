---
title: "FlexiRule Documentation"
description: "Advanced Visual Rule Engine & Orchestration for Frappe and ERPNext."
lead: "FlexiRule is a powerful visual logic layer that transforms how you build and manage business processes in Frappe apps."
date: 2024-03-20T00:00:00+00:00
lastmod: 2024-03-20T00:00:00+00:00
draft: false
weight: 1
---

<div align="center">
  <img width="180" alt="flexiRule" src="https://github.com/user-attachments/assets/e3724231-fccc-4f92-89af-6dd7b93c640f" />

  <h1>FlexiRule</h1>

[![CI](https://github.com/Sendipad/flexirule/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/Sendipad/flexirule/actions/workflows/ci.yml?query=branch%3Adevelop)
![Beta Release](https://img.shields.io/badge/release-beta-orange)
![Frappe](https://img.shields.io/badge/built%20for-Frappe%20v15%2B-blue)

  <p><strong>The Visual Logic Layer for Frappe & ERPNext</strong></p>

</div>

<div align="center">
<img width="1307" height="751" alt="rule_builder" src="https://github.com/user-attachments/assets/8ff096b5-09b9-467a-925b-42530542c73d" />

  <p>
    <em>The Visual Rule Builder is the canonical representation of FlexiRule logic — what you see is exactly what executes.</em>
  </p>
</div>

---

## 🚀 Overview

In modern enterprise systems like **Frappe / ERPNext**, business logic often evolves into a fragmented web of Python hooks scattered across multiple custom apps. This technical debt leads to "hook-hell," where execution order is implicit, debugging is a nightmare, and upgrades are risky.

**FlexiRule** changes the paradigm by providing a **visual, graph-based orchestration layer**. Instead of writing hidden code, you design executable business logic visually — with full control, observability, and safety.

---

## ✨ Special Features

### 💎 Why FlexiRule?

-   **Centralized Logic**: Move rules out of scattered `.py` files into a single, auditable dashboard.
-   **No-Code Configuration**: Custom UI controls (pickers, autocomplete) allow complex logic setup without a single line of code.
-   **Explicit Execution**: Connections define deterministic paths. No more guessing which hook runs first.
-   **Schema-Driven UI**: Configuration forms for custom logic are auto-generated from JSON schemas.

### 🧠 The Mental Model

1. **The Rule**: Defines _when_ logic should trigger (DocType Events, Schedulers, or Callables).
2. **The Action**: Represents a _node_ in the graph - a specific step in your business process.
3. **The Process**: Code-backed reusable modules that perform the actual heavy lifting.

---

## 🏎️ Quick Start

Get up and running with FlexiRule in minutes:

```bash
# Get the app
bench get-app flexirule https://github.com/Sendipad/flexirule.git

# Install to your site
bench --site [your-site] install-app flexirule

# Build assets
bench build --app flexirule
```

---

## 🖼️ Visual Tour

<details>
<summary><strong>View Detailed Screenshots</strong></summary>

<br/>
<img width="1280" height="583" alt="IMG_20260509_194450_181" src="https://github.com/user-attachments/assets/212b96bf-9259-426b-90c1-dd55efce0bd7" />

<img
  src="https://github.com/user-attachments/assets/41ac7963-f334-4fb2-bf0a-49409956c4a3"
  alt="Condition node configuration"
  width="900"
  style="border-radius:14px;"
/>

<p align="center"><em>Declarative, deeply nested condition trees with deterministic evaluation.</em></p>

</details>

---

<div align="center">
  <p><strong>FlexiRule</strong> — Declarative, Visual, and Safe Business Logic for Frappe.</p>
  <p>Built with ❤️ by the community.</p>
</div>
