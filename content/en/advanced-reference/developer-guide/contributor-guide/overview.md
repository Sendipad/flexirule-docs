---
title: Contributor Guide
description: How to contribute to the FlexiRule project.
weight: 20
parent: reference
aliases:
- /advanced-reference/reference/contribution/
---

# Contributor Guide

Keywords: contributing, development, source code, setup, workflow

## Audience

- Contributors

---

## Overview

We welcome contributions to FlexiRule! This guide covers the project structure, development setup, and the workflow for submitting changes.

---

## Project Structure

```text
flexirule/
├── api/                # Whitelisted API methods
├── core/               # Engine, Coordinator, and Registry
│   ├── handlers/       # Action type handlers (Condition, Process, etc.)
│   └── compiler/       # Condition to Python compiler
├── public/
│   └── js/
│       └── flexirule/
│           └── rule_builder/ # Vue 3 Rule Builder source
├── templates/          # Jinja templates for notifications
└── tests/              # Python test suite
```

---

## Development Setup

### 1. Install Dependencies
Ensure you have a working Frappe environment.

```bash
bench get-app flexirule https://github.com/Sendipad/flexirule.git
bench --site [your-site] install-app flexirule
bench build --app flexirule
```

### 2. Frontend Development
The Rule Builder is a Vue 3 application.

```bash
# Watch for changes in public/js
bench watch
```

---

## Contribution Workflow

1. **Fork the Repository**: Create your own fork of the `flexirule` or `flexirule-docs` repo.
2. **Create a Branch**: Use a descriptive name (e.g., `feat/new-action` or `fix/loop-bug`).
3. **Implement Changes**: Follow the coding standards and ensure all new features have documentation.
4. **Run Tests**:
   ```bash
   bench --site [your-site] run-tests --app flexirule
   ```
5. **Submit a Pull Request**: Target the `develop` branch.

---

## Coding Standards

- **Python**: Follow PEP 8. Use `frappe._` for all user-facing strings.
- **Vue**: Use Composition API and follow the patterns established in existing components (see `CONTROLS.md`).
- **Documentation**: All new features must include updates to this documentation site following the [Standard Page Structure]({{< relref "advanced-reference/architecture/runtime/overview.md" >}}).

---

## Related Topics

- [Reusable UI Controls]({{< relref "advanced-reference/architecture/ui/controls.md" >}})
- [Architecture]({{< relref "advanced-reference/architecture/" >}})
- [API Reference]({{< relref "advanced-reference/developer-guide/api/" >}})
