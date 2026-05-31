AGENTS.md

Project Overview

This repository contains the FlexiRule Documentation Website.

The site is built using Hugo.

All agents working on this repository must follow the requirements in this document before making any changes.

---

Hugo Version Requirement

Required Hugo version:

Hugo v0.162.1

Always assume the project uses the latest Hugo APIs and conventions available in Hugo v0.162.1.

Do not generate code targeting older Hugo versions.

Do not introduce compatibility code for older Hugo releases unless explicitly requested.

---

Hugo Compatibility Rules

Before implementing any feature:

1. Verify it is compatible with Hugo v0.162.1.
2. Prefer modern Hugo APIs over legacy patterns.
3. Avoid deprecated functions.
4. Avoid deprecated configuration formats.
5. Avoid examples copied from old Hugo tutorials.

If a feature has both:

- legacy implementation
- modern Hugo implementation

always choose the modern implementation.

---

Configuration Rules

Use current Hugo configuration conventions.

Avoid deprecated patterns.

When modifying configuration:

- keep multilingual support compatible with Hugo v0.162.1
- preserve future multilingual capability
- use current recommended configuration structure

---

Theme Development Rules

This project is building a custom documentation theme.

Do NOT:

- introduce Doks dependencies
- reintroduce Doks layouts
- reintroduce Doks SCSS architecture
- reintroduce Doks navigation logic

Build original FlexiRule components instead.

---

CSS Rules

Use:

- SCSS
- CSS Variables
- Modern CSS

Do NOT use:

- Tailwind
- Bootstrap
- Large UI frameworks

---

JavaScript Rules

Use:

- Vanilla JavaScript
- ES Modules

Avoid unnecessary dependencies.

---

Documentation Navigation

Documentation navigation must be generated from the content structure.

Use:

content/en/docs/

as the source of truth.

Do not use Hugo menus for documentation navigation.

---

Architecture Principles

Prioritize:

1. Simplicity
2. Maintainability
3. Performance
4. Accessibility
5. Hugo best practices

Avoid overengineering.

Prefer small reusable partials.

---

Agent Workflow

Before making significant architectural changes:

1. Check AGENTS.md
2. Verify Hugo v0.162.1 compatibility
3. Prefer modern Hugo approaches
4. Avoid deprecated features

If uncertain, choose the solution that aligns with current Hugo documentation.

---

Future Features

Future phases may include:

- Dark Mode
- Search
- Pagefind
- Mobile Navigation
- SEO
- Breadcrumbs
- TOC
- Footer Navigation

Do not implement future features unless explicitly requested in the current task.

Build extension points only.
