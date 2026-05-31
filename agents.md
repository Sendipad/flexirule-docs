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

CSS & Design Rules
Use:
- SCSS
- CSS Variables (declared in theme stylesheets)
- Modern CSS layouts (Flexbox, Grid)

Do NOT use:
- Tailwind CSS
- Bootstrap
- Large UI frameworks or utility-class injections

All component modifications (e.g., Badge Breadcrumbs, Floating TOC FAB) must be styled natively using custom SCSS rules and project-specific CSS variables.

---

JavaScript & Data Safe-Handling Rules
Use:
- Vanilla JavaScript
- ES Modules

Avoid unnecessary dependencies.

**Data Ingestion & Escaping Guardrails:**
When extracting or passing Hugo page data (such as `.Plain`, `.Content`, or context payloads) into JavaScript strings or URL parameters, **never** inject raw Go template strings directly into inline HTML attributes. 
Always use Hugo's safe serialization filters (`jsonify`) inside script blocks, and allow client-side JavaScript to run `encodeURIComponent()` dynamically to protect against template compilation errors caused by unescaped quotes or markdown characters.

---

Performance & Log Handling Rules
To prevent context window bloat, terminal hangs, and infinite rebuild loops:
1. **Never read or index the entire `hugo.log` file.** To verify builds or catch compilation errors, exclusively read the last 50 lines using target tools (e.g., `tail -n 50`).
2. Do not monitor or track changes to `hugo.log` within active file-watching tool loops. Treat log outputs as transient and ephemeral.
3. Keep the development server light: if log parsing slows down processing, run the Hugo builder with the `--quiet` flag.

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

Active & Future Features
**Currently Authorized Core Tasks:**
- Floating Table of Contents (FAB UI)
- Single-line Badge Breadcrumbs (Native SCSS)
- Footer Cleanups (Last Modified positioning & single-source `pager.html`)
- AI Action Dropdown with deep linking (`flexirule://open?context=`)

**Future Phases (Do not implement unless explicitly requested):**
- Dark Mode
- Search / Pagefind
- Mobile Navigation hamburger systems
- Advanced SEO mappings
