---
title: "Assignment Action Improvements"
description: "Strategic roadmap for enhancing the core Assignment mechanism."
weight: 10
---

# Assignment Action Roadmap

This document outlines the strategic roadmap for the **Assignment** action type, moving from basic state mutation to a robust, type-safe, and highly efficient data manipulation engine.

---

## 1. Summary of Issues & Gaps

The current Assignment implementation (v1) provides fundamental batch mutation capabilities but faces several limitations when applied to complex enterprise orchestration:

- **Shallow Mutation**: No native support for deep document paths (e.g., `doc.items.0.qty`). Currently requires a separate Loop node.
- **Limited Scope**: Mutations are restricted to the current document (`doc`) and local variables (`vars`). No cross-document mutation support.
- **Implicit Typing**: Operators like `increment` perform runtime type coercion (float conversion) but lack proactive schema validation.
- **Trigger Recursion Risks**: Basic loop detection exists, but there is no specialized "mutation-aware" cycle prevention (e.g., field-level change suppression).
- **Concurrency & State**: No state snapshotting or "Revert on Failure" mechanics at the individual action row level.

---

## 2. Short-Term Fixes (v1 Improvements)

*Goal: Improve stability, safety, and basic usability.*

### Engine Enhancements
- **Initialization Guard (High)**: Automatically initialize `vars` to a default value (0, empty string, etc.) if they don't exist during an `increment` or `append` operation to avoid manual initialization rows.
- **Field-Level Suppress (Medium)**: Add a flag to skip change-tracking hooks for specific assignments to prevent triggering recursive rules.
- **Strict Boolean Toggle (Low)**: Update `Toggle` operator to strictly enforce boolean input, raising a clear validation error for non-boolean types instead of best-effort coercion.

### UI / Builder Enhancements
- **Inline Type Hints (High)**: Display the target field's data type (Int, Check, Link, etc.) in the Assignment row to help users choose the correct operator.
- **Resolver Auto-Complete (Medium)**: Provide suggestions for available `doc` and `vars` paths within the Value Resolver text area.

---

## 3. Mid-Term Enhancements (Engine + UX)

*Goal: Expand functional reach and developer observability.*

### Engine Enhancements
- **Deep Path Support (High)**: Implement dot-notation support for nested dictionaries and child tables (e.g., `doc.items.last.rate` or `doc.table_name.row_id.field`).
- **Conditional Merge Strategies (Medium)**: Add "Deep Merge" and "Overwrite if Null" operators for JSON and Dictionary targets.
- **Safe Math Operations (Low)**: New operators for `Multiply By`, `Divide By`, and `Round To`, reducing reliance on complex Formulas for basic math.

### UI / Builder Enhancements
- **Mutation Preview (High)**: A "Simulation Mode" in the builder that shows a before/after diff of the document based on the current Assignment configuration.
- **Execution Trace Visualization (Medium)**: Enhanced visual logs showing the value resolution for every single row in a batch assignment.

---

## 4. Long-Term Vision (Rule Engine Evolution)

*Goal: Transform Assignment into a declarative data transform layer.*

### Functional Evolution
- **Cross-Document Mutations (High)**: Support for `link.TARGET_DOC.field` targets, allowing a rule on an Invoice to directly update its parent Sales Order.
- **State Snapshots & Atomic Rollbacks (Medium)**: The ability to "checkpoint" document state before a batch assignment and perform a partial rollback of just that node on failure.
- **Reactive Trigger Suppression (Low)**: Intelligence to detect and block "Circular Assignment Paths" at compile-time (e.g., `doc.A` updates `doc.B`, which has a rule that updates `doc.A`).

---

## 5. Summary Table

| Feature | Category | Impact | Timeline |
| :--- | :--- | :--- | :--- |
| **Deep Path Support** | Engine | High | Mid-Term |
| **Cross-Doc Mutation** | Engine | High | Long-Term |
| **Simulation Diff** | UI | High | Mid-Term |
| **Auto-Initialization** | Engine | High | Short-Term |
| **Type Hints** | UI | Medium | Short-Term |
| **Atomic Checkpoints** | Engine | Medium | Long-Term |
