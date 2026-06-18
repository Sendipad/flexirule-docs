# Documentation Structure Audit

## 1. Overview

Total folders: 49
Total files: 103
Total markdown pages: 103
Last modified scan timestamp: 2026-06-09 23:17:38

---

## 2. Folder Tree Index

```
/
  _index.md
contributing/
  _index.md
  action-documentation-standard.md
  templates/
    _index.md
    action-architecture-template.md
    action-doc-template.md
    execution-semantics-template.md
reference/
  _index.md
  doctypes.md
  glossary.md
  terminology.md
  query-filters/
    index.md
  localized/
    _index.md
    arabic-overview.md
  timespan-keywords/
    index.md
  ai/
    action-metadata-schema.md
  execution/
    condition.md
    document-action.md
    entry.md
    loop.md
    query-records.md
user-guide/
  _index.md
  best-practices.md
  condition-builder-guide.md
  condition-builder.md
  how-rules-execute.md
  rule-builder.md
administration/
  _index.md
  faq.md
  troubleshooting.md
concepts/
  _index.md
  ai-features.md
  decision-trees.md
  system-philosophy.md
actions/
  _index.md
  switch/
    index.md
  process/
    index.md
  assignment/
    index.md
  entry/
    index.md
  document-action/
    index.md
  condition/
    index.md
  loop/
    index.md
  query-records/
    _index.md
    query-list/
      index.md
    group-by/
      index.md
    query-doc/
      index.md
    query-report/
      index.md
    aggregations/
      index.md
    exist-record/
      index.md
  notify/
    index.md
architecture/
  _index.md
  overview.md
  contracts/
    _index.md
  resolver/
    _index.md
    resolver-patterns.md
  actions/
    condition.md
    document-action.md
    entry.md
    loop.md
    query-records.md
  internals/
    _index.md
  ui/
    _index.md
    action-config-panels.md
    component-registry.md
    controls.md
    dynamic-forms.md
    overview.md
  runtime/
    _index.md
    execution-context.md
    graph-orchestration.md
    overview.md
  engine/
    _index.md
    action-implementation.md
    condition-system.md
    execution-engine.md
    orchestration.md
developer-guide/
  _index.md
  api/
    _index.md
  contributor-guide/
    _index.md
    overview.md
  custom-actions/
    _index.md
    standards.md
  development-standards/
    _index.md
  extension-points/
    _index.md
project/
  _index.md
  roadmap/
    _index.md
    assignment-action-improvements.md
    documentation-standardization.md
    event-driven-architecture.md
    platform-potential.md
    runtime-optimization.md
  research/
    _index.md
    action-zone.md
  audits/
    entry-action-gap-analysis.md
  audit/
    _index.md
    technical-audit.md
triggers/
  _index.md
  callable-triggers.md
  context-reference.md
  engine-details.md
  event-triggers.md
  scheduler-triggers.md
getting-started/
  _index.md
```

---

## 3. Detailed File Registry

### File: `content/en/docs/_index.md`
- **Title**: Introduction
- **Type**: unknown
- **Size**: 3491 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs`
- **Brief summary**: Advanced Visual Rule Engine & Orchestration for Frappe and ERPNext.
- **Potential issues**: None detected

### File: `content/en/docs/actions/_index.md`
- **Title**: Action Catalog
- **Type**: unknown
- **Size**: 765 bytes
- **Internal links count**: 8
- **Parent folder**: `content/en/docs/actions`
- **Brief summary**: The complete library of available action nodes.
- **Potential issues**: None detected

### File: `content/en/docs/actions/assignment/index.md`
- **Title**: Assignment
- **Type**: unknown
- **Size**: 6425 bytes
- **Internal links count**: 4
- **Parent folder**: `content/en/docs/actions/assignment`
- **Brief summary**: Change values of document fields and variables.
- **Potential issues**: potential outdated content

### File: `content/en/docs/actions/condition/index.md`
- **Title**: Condition
- **Type**: unknown
- **Size**: 7678 bytes
- **Internal links count**: 4
- **Parent folder**: `content/en/docs/actions/condition`
- **Brief summary**: Branching logic based on evaluation of expressions.
- **Potential issues**: None detected

### File: `content/en/docs/actions/document-action/index.md`
- **Title**: Document Action
- **Type**: unknown
- **Size**: 6929 bytes
- **Internal links count**: 3
- **Parent folder**: `content/en/docs/actions/document-action`
- **Brief summary**: Manage the lifecycle of records across any DocType, including creation, updates, and social interactions.
- **Potential issues**: None detected

### File: `content/en/docs/actions/entry/index.md`
- **Title**: Entry Action
- **Type**: unknown
- **Size**: 6981 bytes
- **Internal links count**: 8
- **Parent folder**: `content/en/docs/actions/entry`
- **Brief summary**: The starting point of every rule flow that anchors the trigger context.
- **Potential issues**: None detected

### File: `content/en/docs/actions/loop/index.md`
- **Title**: Loop
- **Type**: unknown
- **Size**: 7019 bytes
- **Internal links count**: 11
- **Parent folder**: `content/en/docs/actions/loop`
- **Brief summary**: Iterate over collections and child tables to perform batch processing.
- **Potential issues**: None detected

### File: `content/en/docs/actions/notify/index.md`
- **Title**: Notify
- **Type**: unknown
- **Size**: 3377 bytes
- **Internal links count**: 6
- **Parent folder**: `content/en/docs/actions/notify`
- **Brief summary**: Sending alerts and communications to users.
- **Potential issues**: None detected

### File: `content/en/docs/actions/process/index.md`
- **Title**: Process
- **Type**: unknown
- **Size**: 4218 bytes
- **Internal links count**: 7
- **Parent folder**: `content/en/docs/actions/process`
- **Brief summary**: Executing reusable, code-backed business logic.
- **Potential issues**: None detected

### File: `content/en/docs/actions/query-records/_index.md`
- **Title**: Query Records
- **Type**: unknown
- **Size**: 4014 bytes
- **Internal links count**: 10
- **Parent folder**: `content/en/docs/actions/query-records`
- **Brief summary**: Fetch and aggregate data from across your system to drive dynamic logic.
- **Potential issues**: None detected

### File: `content/en/docs/actions/query-records/aggregations/index.md`
- **Title**: Aggregations
- **Type**: unknown
- **Size**: 1508 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/actions/query-records/aggregations`
- **Brief summary**: Performing mathematical calculations (Count, Sum, Avg, Min, Max) across records.
- **Potential issues**: None detected

### File: `content/en/docs/actions/query-records/exist-record/index.md`
- **Title**: Exist Record
- **Type**: unknown
- **Size**: 1252 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/actions/query-records/exist-record`
- **Brief summary**: Verifying the presence of records matching specific criteria.
- **Potential issues**: None detected

### File: `content/en/docs/actions/query-records/group-by/index.md`
- **Title**: Group By
- **Type**: reference
- **Size**: 1282 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/actions/query-records/group-by`
- **Brief summary**: Aggregating data into bucketed categories.
- **Potential issues**: None detected

### File: `content/en/docs/actions/query-records/query-doc/index.md`
- **Title**: Query Doc
- **Type**: reference
- **Size**: 1409 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/actions/query-records/query-doc`
- **Brief summary**: Fetching a single, complete document by name or expression.
- **Potential issues**: None detected

### File: `content/en/docs/actions/query-records/query-list/index.md`
- **Title**: Query List
- **Type**: reference
- **Size**: 1647 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/actions/query-records/query-list`
- **Brief summary**: Fetching multiple records matching specific criteria.
- **Potential issues**: None detected

### File: `content/en/docs/actions/query-records/query-report/index.md`
- **Title**: Query Report
- **Type**: reference
- **Size**: 1913 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/actions/query-records/query-report`
- **Brief summary**: Executing existing system reports and retrieving their results.
- **Potential issues**: None detected

### File: `content/en/docs/actions/switch/index.md`
- **Title**: Switch
- **Type**: unknown
- **Size**: 3156 bytes
- **Internal links count**: 6
- **Parent folder**: `content/en/docs/actions/switch`
- **Brief summary**: Multi-path branching based on expression values.
- **Potential issues**: None detected

### File: `content/en/docs/administration/_index.md`
- **Title**: Administration
- **Type**: unknown
- **Size**: 61 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/administration`
- **Brief summary**: Documentation for Administration.
- **Potential issues**: None detected

### File: `content/en/docs/administration/faq.md`
- **Title**: FAQ
- **Type**: unknown
- **Size**: 2724 bytes
- **Internal links count**: 4
- **Parent folder**: `content/en/docs/administration`
- **Brief summary**: Frequently asked questions about FlexiRule.
- **Potential issues**: None detected

### File: `content/en/docs/administration/troubleshooting.md`
- **Title**: Troubleshooting
- **Type**: unknown
- **Size**: 3568 bytes
- **Internal links count**: 3
- **Parent folder**: `content/en/docs/administration`
- **Brief summary**: Identifying and resolving common issues in FlexiRule.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/_index.md`
- **Title**: Architecture
- **Type**: concept
- **Size**: 921 bytes
- **Internal links count**: 6
- **Parent folder**: `content/en/docs/architecture`
- **Brief summary**: Deep dive into the internal system design and deterministic execution engine of FlexiRule.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/actions/condition.md`
- **Title**: Condition: Architecture Reference
- **Type**: concept
- **Size**: 3944 bytes
- **Internal links count**: 2
- **Parent folder**: `content/en/docs/architecture/actions`
- **Brief summary**: Internal implementation details and developer reference for the Condition action.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/actions/document-action.md`
- **Title**: Document Action: Architecture Reference
- **Type**: concept
- **Size**: 3902 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/actions`
- **Brief summary**: Class structure, Resource Mapper internals, and mode dispatch logic for the Document Action.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/actions/entry.md`
- **Title**: Entry Action: Architecture Reference
- **Type**: concept
- **Size**: 3018 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/architecture/actions`
- **Brief summary**: Internal implementation details and developer reference for the Entry Action.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/actions/loop.md`
- **Title**: Loop: Architecture Reference
- **Type**: concept
- **Size**: 3080 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/actions`
- **Brief summary**: Internal implementation details and developer reference for the Loop action.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/actions/query-records.md`
- **Title**: Query Records Architecture
- **Type**: concept
- **Size**: 3587 bytes
- **Internal links count**: 2
- **Parent folder**: `content/en/docs/architecture/actions`
- **Brief summary**: Internal implementation details of the Query Records action handler.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/contracts/_index.md`
- **Title**: Contracts
- **Type**: tutorial
- **Size**: 2752 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/contracts`
- **Brief summary**: FlexiRule uses a "Contract-First" approach to ensure consistency between the Python backend and the Vue 3 frontend. Contracts define the rules, constraints, and UI behavior for every action in the sys...
- **Potential issues**: None detected

### File: `content/en/docs/architecture/engine/_index.md`
- **Title**: Engine
- **Type**: concept
- **Size**: 295 bytes
- **Internal links count**: 4
- **Parent folder**: `content/en/docs/architecture/engine`
- **Brief summary**: - Execution Engine Deep Dive - Orchestration - Condition System - Action Implementation
- **Potential issues**: None detected

### File: `content/en/docs/architecture/engine/action-implementation.md`
- **Title**: Action Implementation
- **Type**: concept
- **Size**: 5998 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/engine`
- **Brief summary**: Technical reference for backend action handlers and execution mechanics.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/engine/condition-system.md`
- **Title**: Condition System
- **Type**: concept
- **Size**: 6989 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/architecture/engine`
- **Brief summary**: FlexiRule employs a sophisticated, high-performance condition system that allows users to build complex logic visually while executing it with the speed and safety of native Python.
- **Potential issues**: potential outdated content

### File: `content/en/docs/architecture/engine/execution-engine.md`
- **Title**: Execution Engine
- **Type**: concept
- **Size**: 3468 bytes
- **Internal links count**: 3
- **Parent folder**: `content/en/docs/architecture/engine`
- **Brief summary**: Deep dive into the FlexiRule deterministic graph executor.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/engine/orchestration.md`
- **Title**: Orchestration
- **Type**: concept
- **Size**: 3154 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/engine`
- **Brief summary**: FlexiRule is more than a simple automation engine; it is a **Visual Orchestration Layer** that allows for the coordination of complex business processes across multiple DocTypes and systems.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/internals/_index.md`
- **Title**: Internals
- **Type**: concept
- **Size**: 2278 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/internals`
- **Brief summary**: This document covers the low-level management of the FlexiRule engine.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/overview.md`
- **Title**: Architecture
- **Type**: reference
- **Size**: 2704 bytes
- **Internal links count**: 3
- **Parent folder**: `content/en/docs/architecture`
- **Brief summary**: Core architecture and design philosophy of FlexiRule.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/resolver/_index.md`
- **Title**: Resolver: Resolver Engine
- **Type**: concept
- **Size**: 2282 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/resolver`
- **Brief summary**: ## 🎯 The Purpose of Resolvers Resolvers are the "Data Glue" of FlexiRule. They solve a fundamental problem: **How do we get dynamic data into an action without writing Python?**
- **Potential issues**: None detected

### File: `content/en/docs/architecture/resolver/resolver-patterns.md`
- **Title**: Resolver: Resolver Patterns
- **Type**: concept
- **Size**: 2128 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/resolver`
- **Brief summary**: ## 📚 Capability Encyclopedia This document catalogs the practical patterns enabled by the FlexiRule Resolver Engine.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/runtime/_index.md`
- **Title**: Runtime
- **Type**: concept
- **Size**: 220 bytes
- **Internal links count**: 3
- **Parent folder**: `content/en/docs/architecture/runtime`
- **Brief summary**: - Overview - Execution Context - Graph Orchestration
- **Potential issues**: None detected

### File: `content/en/docs/architecture/runtime/execution-context.md`
- **Title**: Architecture: Execution Context
- **Type**: concept
- **Size**: 2230 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/runtime`
- **Brief summary**: ## 🧠 The Shared Memory The `ExecutionContext` is the "Brain" of a rule execution. It travels through every node, carrying state and providing environmental awareness.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/runtime/graph-orchestration.md`
- **Title**: Architecture: Graph Orchestration
- **Type**: concept
- **Size**: 2050 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/runtime`
- **Brief summary**: ## 🕸️ The Logic Topology FlexiRule represents automation as a **Directed Graph**. This is not just a UI choice; it is the fundamental way the engine reasons about execution.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/runtime/overview.md`
- **Title**: Architecture: Action Runtime
- **Type**: concept
- **Size**: 2743 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/runtime`
- **Brief summary**: ## 🚂 The Execution Pipeline The `RuleEngine` is the heart of FlexiRule. It doesn't just run code; it manages a **Stateful Execution Pipeline**.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/ui/_index.md`
- **Title**: UI Architecture
- **Type**: concept
- **Size**: 569 bytes
- **Internal links count**: 5
- **Parent folder**: `content/en/docs/architecture/ui`
- **Brief summary**: The design of the visual builder and component system.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/ui/action-config-panels.md`
- **Title**: UI: Action Config Panels
- **Type**: reference
- **Size**: 2145 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/ui`
- **Brief summary**: ## 📦 Encapsulating Action Logic The Rule Builder uses a modular approach to action configuration. Instead of one massive form, it uses **Config Panels** that correspond to specific action types.
- **Potential issues**: None detected

### File: `content/en/docs/architecture/ui/component-registry.md`
- **Title**: UI: FlexiGrid Architecture
- **Type**: reference
- **Size**: 2176 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/ui`
- **Brief summary**: ## 📊 The Generic Collection Editor `FlexiGrid.vue` is one of the most sophisticated components in FlexiRule. It is a **recursive, schema-aware collection editor** that mimics the power of Frappe's Chi...
- **Potential issues**: None detected

### File: `content/en/docs/architecture/ui/controls.md`
- **Title**: Controls
- **Type**: reference
- **Size**: 12899 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/ui`
- **Brief summary**: This document details the smart and innovative Vue components used throughout the FlexiRule UI. These controls are designed for high reusability, particularly within action node configuration panels, ...
- **Potential issues**: potential outdated content

### File: `content/en/docs/architecture/ui/dynamic-forms.md`
- **Title**: UI: Schema-Driven UI
- **Type**: reference
- **Size**: 2212 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/ui`
- **Brief summary**: ## 🎨 The Philosophy: Metadata as UI FlexiRule uses a **Schema-Driven Rendering** approach. The frontend does not "know" what an action's configuration looks like; it asks the backend for the "Contract...
- **Potential issues**: None detected

### File: `content/en/docs/architecture/ui/overview.md`
- **Title**: Frontend Technical
- **Type**: concept
- **Size**: 2614 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/architecture/ui`
- **Brief summary**: The FlexiRule frontend is a Vue 3 application that synchronizes complex graph logic with Frappe's relational data model.
- **Potential issues**: None detected

### File: `content/en/docs/concepts/_index.md`
- **Title**: Concepts
- **Type**: concept
- **Size**: 54 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/concepts`
- **Brief summary**: Documentation for Concepts.
- **Potential issues**: None detected

### File: `content/en/docs/concepts/ai-features.md`
- **Title**: AI Features
- **Type**: concept
- **Size**: 2982 bytes
- **Internal links count**: 3
- **Parent folder**: `content/en/docs/concepts`
- **Brief summary**: Leveraging Artificial Intelligence within FlexiRule logic.
- **Potential issues**: None detected

### File: `content/en/docs/concepts/decision-trees.md`
- **Title**: Decision Trees
- **Type**: concept
- **Size**: 2873 bytes
- **Internal links count**: 3
- **Parent folder**: `content/en/docs/concepts`
- **Brief summary**: Guidance on choosing the right FlexiRule features.
- **Potential issues**: None detected

### File: `content/en/docs/concepts/system-philosophy.md`
- **Title**: Architecture: System Philosophy
- **Type**: concept
- **Size**: 3074 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/concepts`
- **Brief summary**: ## 📝 What FlexiRule Is FlexiRule is a **declarative automation orchestration platform** built for the Frappe ecosystem. It bridges the gap between hardcoded Python hooks and complex business requireme...
- **Potential issues**: None detected

### File: `content/en/docs/contributing/_index.md`
- **Title**: Contributing
- **Type**: unknown
- **Size**: 1224 bytes
- **Internal links count**: 3
- **Parent folder**: `content/en/docs/contributing`
- **Brief summary**: Guidelines and standards for contributing to FlexiRule documentation.
- **Potential issues**: None detected

### File: `content/en/docs/contributing/action-documentation-standard.md`
- **Title**: Action Documentation Standard
- **Type**: unknown
- **Size**: 4602 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/contributing`
- **Brief summary**: The authoritative specification for documenting any FlexiRule action.
- **Potential issues**: None detected

### File: `content/en/docs/contributing/templates/_index.md`
- **Title**: Templates
- **Type**: unknown
- **Size**: 808 bytes
- **Internal links count**: 3
- **Parent folder**: `content/en/docs/contributing/templates`
- **Brief summary**: Reusable templates for documenting FlexiRule actions, execution semantics, and architecture.
- **Potential issues**: None detected

### File: `content/en/docs/contributing/templates/action-architecture-template.md`
- **Title**: Action Name: Architecture Reference
- **Type**: concept
- **Size**: 1175 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/contributing/templates`
- **Brief summary**: Internal implementation details and developer reference for the Action Name action.
- **Potential issues**: None detected

### File: `content/en/docs/contributing/templates/action-doc-template.md`
- **Title**: Action Name
- **Type**: tutorial
- **Size**: 2338 bytes
- **Internal links count**: 2
- **Parent folder**: `content/en/docs/contributing/templates`
- **Brief summary**: A concise one-sentence description of the action.
- **Potential issues**: None detected

### File: `content/en/docs/contributing/templates/execution-semantics-template.md`
- **Title**: Action Name: Execution Semantics
- **Type**: unknown
- **Size**: 1428 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/contributing/templates`
- **Brief summary**: Technical runtime behavior and engine guarantees for the Action Name action.
- **Potential issues**: None detected

### File: `content/en/docs/developer-guide/_index.md`
- **Title**: Developer Guide
- **Type**: reference
- **Size**: 406 bytes
- **Internal links count**: 5
- **Parent folder**: `content/en/docs/developer-guide`
- **Brief summary**: Extend and customize FlexiRule.
- **Potential issues**: None detected

### File: `content/en/docs/developer-guide/api/_index.md`
- **Title**: API Reference
- **Type**: reference
- **Size**: 80 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/developer-guide/api`
- **Brief summary**: - Overview
- **Potential issues**: None detected

### File: `content/en/docs/developer-guide/contributor-guide/_index.md`
- **Title**: Contributor Guide
- **Type**: guide
- **Size**: 79 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/developer-guide/contributor-guide`
- **Brief summary**: - Overview
- **Potential issues**: None detected

### File: `content/en/docs/developer-guide/contributor-guide/overview.md`
- **Title**: Contributor Guide
- **Type**: tutorial
- **Size**: 2477 bytes
- **Internal links count**: 4
- **Parent folder**: `content/en/docs/developer-guide/contributor-guide`
- **Brief summary**: How to contribute to the FlexiRule project.
- **Potential issues**: None detected

### File: `content/en/docs/developer-guide/custom-actions/_index.md`
- **Title**: Custom Actions
- **Type**: guide
- **Size**: 78 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/developer-guide/custom-actions`
- **Brief summary**: - Standards
- **Potential issues**: None detected

### File: `content/en/docs/developer-guide/custom-actions/standards.md`
- **Title**: Standards
- **Type**: guide
- **Size**: 3101 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/developer-guide/custom-actions`
- **Brief summary**: Processes are the primary extensibility point for FlexiRule. A **Process** is a grouping of **Operations** (Python functions) that can be called from the visual builder.
- **Potential issues**: None detected

### File: `content/en/docs/developer-guide/development-standards/_index.md`
- **Title**: Development Standards
- **Type**: guide
- **Size**: 1365 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/developer-guide/development-standards`
- **Brief summary**: This section outlines the standards and expectations for developing FlexiRule components and contributing to the project.
- **Potential issues**: None detected

### File: `content/en/docs/developer-guide/extension-points/_index.md`
- **Title**: Extension Points
- **Type**: tutorial
- **Size**: 1031 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/developer-guide/extension-points`
- **Brief summary**: FlexiRule is designed to be highly extensible. This page details the various ways you can customize and extend its functionality.
- **Potential issues**: None detected

### File: `content/en/docs/getting-started/_index.md`
- **Title**: Getting Started
- **Type**: unknown
- **Size**: 63 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/getting-started`
- **Brief summary**: Documentation for Getting Started.
- **Potential issues**: None detected

### File: `content/en/docs/project/_index.md`
- **Title**: Project
- **Type**: unknown
- **Size**: 56 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/project`
- **Brief summary**: Documentation for Project.
- **Potential issues**: None detected

### File: `content/en/docs/project/audit/_index.md`
- **Title**: Audit
- **Type**: unknown
- **Size**: 112 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/project/audit`
- **Brief summary**: ## Reports - Technical Audit
- **Potential issues**: None detected

### File: `content/en/docs/project/audit/technical-audit.md`
- **Title**: Technical Audit
- **Type**: unknown
- **Size**: 2787 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/project/audit`
- **Brief summary**: This document outlines the current technical state of FlexiRule and provides a roadmap for future improvements.
- **Potential issues**: None detected

### File: `content/en/docs/project/audits/entry-action-gap-analysis.md`
- **Title**: Gap Analysis: Entry Action Documentation
- **Type**: unknown
- **Size**: 2264 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/project/audits`
- **Brief summary**: ## 1. Current State The "Entry Action" is mentioned in several high-level overview pages but lacks formal documentation within the FlexiRule 3-layer framework.
- **Potential issues**: missing frontmatter

### File: `content/en/docs/project/research/_index.md`
- **Title**: Research
- **Type**: unknown
- **Size**: 110 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/project/research`
- **Brief summary**: ## Topics - Action Zone
- **Potential issues**: None detected

### File: `content/en/docs/project/research/action-zone.md`
- **Title**: Action Zone: FlexiRule Research Initiative (A → Z)
- **Type**: unknown
- **Size**: 6393 bytes
- **Internal links count**: 16
- **Parent folder**: `content/en/docs/project/research`
- **Brief summary**: Welcome to the **Master Internal Knowledge Base** for FlexiRule. This workspace contains a complete deep-dive analysis of the FlexiRule architecture, discovered through reverse-engineering the codebas...
- **Potential issues**: None detected

### File: `content/en/docs/project/roadmap/_index.md`
- **Title**: Roadmap
- **Type**: unknown
- **Size**: 349 bytes
- **Internal links count**: 4
- **Parent folder**: `content/en/docs/project/roadmap`
- **Brief summary**: ## Vision - Platform Potential - Event Driven Architecture - Assignment Action Improvements - Runtime Optimization
- **Potential issues**: None detected

### File: `content/en/docs/project/roadmap/assignment-action-improvements.md`
- **Title**: Assignment Action Improvements
- **Type**: unknown
- **Size**: 4253 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/project/roadmap`
- **Brief summary**: Strategic roadmap for enhancing the core Assignment mechanism.
- **Potential issues**: None detected

### File: `content/en/docs/project/roadmap/documentation-standardization.md`
- **Title**: Documentation Standardization Roadmap
- **Type**: unknown
- **Size**: 3859 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/project/roadmap`
- **Brief summary**: Plan for migrating and standardizing FlexiRule action documentation to the 3-layer framework.
- **Potential issues**: None detected

### File: `content/en/docs/project/roadmap/event-driven-architecture.md`
- **Title**: Future: Event-Driven Architecture
- **Type**: concept
- **Size**: 1697 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/project/roadmap`
- **Brief summary**: ## 📡 Moving Beyond DocType Hooks While FlexiRule currently excels at document-level automation, its architecture is perfectly positioned to become a **Global Event Orchestrator**.
- **Potential issues**: None detected

### File: `content/en/docs/project/roadmap/platform-potential.md`
- **Title**: Future: Low-Code Platform Potential
- **Type**: unknown
- **Size**: 2342 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/project/roadmap`
- **Brief summary**: ## 🔭 The Vision: Beyond Simple Rules The FlexiRule architecture is a **foundation for an enterprise orchestration platform**. It contains all the necessary primitives to evolve into a world-class low-...
- **Potential issues**: None detected

### File: `content/en/docs/project/roadmap/runtime-optimization.md`
- **Title**: Future: Runtime Optimization
- **Type**: unknown
- **Size**: 3354 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/project/roadmap`
- **Brief summary**: ## 🚀 Scaling the Engine As FlexiRule deployments grow to thousands of rules and millions of executions, performance becomes the primary architectural challenge.
- **Potential issues**: None detected

### File: `content/en/docs/reference/_index.md`
- **Title**: Reference
- **Type**: reference
- **Size**: 51 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/reference`
- **Brief summary**: Documentation for Reference.
- **Potential issues**: None detected

### File: `content/en/docs/reference/ai/action-metadata-schema.md`
- **Title**: Action Metadata Schema
- **Type**: reference
- **Size**: 3168 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/reference/ai`
- **Brief summary**: Reference specification for action metadata used by AI and programmatic tools.
- **Potential issues**: None detected

### File: `content/en/docs/reference/doctypes.md`
- **Title**: DocTypes
- **Type**: reference
- **Size**: 2974 bytes
- **Internal links count**: 4
- **Parent folder**: `content/en/docs/reference`
- **Brief summary**: Reference for all DocTypes used in FlexiRule.
- **Potential issues**: None detected

### File: `content/en/docs/reference/execution/condition.md`
- **Title**: Condition: Execution Semantics
- **Type**: reference
- **Size**: 4665 bytes
- **Internal links count**: 3
- **Parent folder**: `content/en/docs/reference/execution`
- **Brief summary**: Technical runtime behavior and engine guarantees for the Condition action.
- **Potential issues**: None detected

### File: `content/en/docs/reference/execution/document-action.md`
- **Title**: Document Action: Execution Semantics
- **Type**: reference
- **Size**: 4677 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/reference/execution`
- **Brief summary**: Technical runtime behavior, transaction models, and permission escalation for the Document Action.
- **Potential issues**: None detected

### File: `content/en/docs/reference/execution/entry.md`
- **Title**: Entry Action: Execution Semantics
- **Type**: reference
- **Size**: 3225 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/reference/execution`
- **Brief summary**: Technical runtime behavior and engine guarantees for the Entry Action.
- **Potential issues**: None detected

### File: `content/en/docs/reference/execution/loop.md`
- **Title**: Loop: Execution Semantics
- **Type**: reference
- **Size**: 4602 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/reference/execution`
- **Brief summary**: Technical runtime behavior and engine guarantees for the Loop action.
- **Potential issues**: None detected

### File: `content/en/docs/reference/execution/query-records.md`
- **Title**: Query Records Execution Semantics
- **Type**: reference
- **Size**: 3639 bytes
- **Internal links count**: 2
- **Parent folder**: `content/en/docs/reference/execution`
- **Brief summary**: Detailed runtime behavior, filter resolution, and permission guarantees for Query Records.
- **Potential issues**: None detected

### File: `content/en/docs/reference/glossary.md`
- **Title**: Glossary
- **Type**: reference
- **Size**: 2396 bytes
- **Internal links count**: 3
- **Parent folder**: `content/en/docs/reference`
- **Brief summary**: Common terminology used in FlexiRule.
- **Potential issues**: None detected

### File: `content/en/docs/reference/localized/_index.md`
- **Title**: Localized Content
- **Type**: reference
- **Size**: 199 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/reference/localized`
- **Brief summary**: FlexiRule documentation in multiple languages.
- **Potential issues**: None detected

### File: `content/en/docs/reference/localized/arabic-overview.md`
- **Title**: System Overview (AR)
- **Type**: reference
- **Size**: 4359 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/reference/localized`
- **Brief summary**: ## التعريف بالنظام وبنيته الحالية
- **Potential issues**: None detected

### File: `content/en/docs/reference/query-filters/index.md`
- **Title**: Query Filters
- **Type**: reference
- **Size**: 2740 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/reference/query-filters`
- **Brief summary**: Reference guide for filtering logic across FlexiRule actions.
- **Potential issues**: None detected

### File: `content/en/docs/reference/terminology.md`
- **Title**: Terminology Migration
- **Type**: reference
- **Size**: 703 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/reference`
- **Brief summary**: This guide maps legacy FlexiRule terms to the new standardized terminology used in the documentation and future releases.
- **Potential issues**: potential outdated content

### File: `content/en/docs/reference/timespan-keywords/index.md`
- **Title**: Timespan Keywords
- **Type**: reference
- **Size**: 2280 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/reference/timespan-keywords`
- **Brief summary**: Reference for natural language date keywords in FlexiRule.
- **Potential issues**: None detected

### File: `content/en/docs/triggers/_index.md`
- **Title**: Triggers
- **Type**: unknown
- **Size**: 1203 bytes
- **Internal links count**: 8
- **Parent folder**: `content/en/docs/triggers`
- **Brief summary**: Triggers act as the entry point for all business logic in FlexiRule. They determine **when** a rule should begin its execution.
- **Potential issues**: None detected

### File: `content/en/docs/triggers/callable-triggers.md`
- **Title**: Callable Triggers
- **Type**: reference
- **Size**: 479 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/triggers`
- **Brief summary**: Callable triggers (also known as Sub-Rules) are designed to be invoked manually or as part of another rule's execution flow.
- **Potential issues**: None detected

### File: `content/en/docs/triggers/context-reference.md`
- **Title**: Execution Context Reference
- **Type**: reference
- **Size**: 405 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/triggers`
- **Brief summary**: This reference describes the variables available to the engine at the moment of triggering.
- **Potential issues**: None detected

### File: `content/en/docs/triggers/engine-details.md`
- **Title**: Trigger System
- **Type**: unknown
- **Size**: 3113 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/triggers`
- **Brief summary**: The FlexiRule Trigger System determines when a rule should begin its execution. It is managed by the `RuleCoordinator`, which acts as a high-performance dispatcher integrated into the Frappe lifecycle...
- **Potential issues**: None detected

### File: `content/en/docs/triggers/event-triggers.md`
- **Title**: Event Triggers
- **Type**: unknown
- **Size**: 893 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/triggers`
- **Brief summary**: Event triggers react directly to state changes within the Frappe DocType lifecycle.
- **Potential issues**: None detected

### File: `content/en/docs/triggers/scheduler-triggers.md`
- **Title**: Scheduler Triggers
- **Type**: unknown
- **Size**: 598 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/triggers`
- **Brief summary**: Scheduler triggers are used for background automation and periodic tasks that are not tied to a specific user action or document event.
- **Potential issues**: None detected

### File: `content/en/docs/user-guide/_index.md`
- **Title**: User Guide
- **Type**: guide
- **Size**: 53 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/user-guide`
- **Brief summary**: Documentation for User Guide.
- **Potential issues**: None detected

### File: `content/en/docs/user-guide/best-practices.md`
- **Title**: Actions: Action Patterns
- **Type**: guide
- **Size**: 1867 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/user-guide`
- **Brief summary**: ## 🎼 The Art of Orchestration Business automation emerges not from single actions, but from the **composition** of action patterns.
- **Potential issues**: None detected

### File: `content/en/docs/user-guide/condition-builder-guide.md`
- **Title**: User Guide (Conditions)
- **Type**: guide
- **Size**: 3824 bytes
- **Internal links count**: 0
- **Parent folder**: `content/en/docs/user-guide`
- **Brief summary**: The Condition Builder is your primary tool for defining "When" logic in FlexiRule. Whether you are deciding if a rule should run at all or branching a workflow based on a field value, the interface re...
- **Potential issues**: None detected

### File: `content/en/docs/user-guide/condition-builder.md`
- **Title**: Condition Builder
- **Type**: tutorial
- **Size**: 5106 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/user-guide`
- **Brief summary**: The Condition Builder is a specialized Vue 3 workspace designed to let users author complex business logic through a structured, visual interface.
- **Potential issues**: None detected

### File: `content/en/docs/user-guide/how-rules-execute.md`
- **Title**: How Rules Execute
- **Type**: guide
- **Size**: 728 bytes
- **Internal links count**: 1
- **Parent folder**: `content/en/docs/user-guide`
- **Brief summary**: A high-level overview of the rule execution lifecycle for users and designers.
- **Potential issues**: None detected

### File: `content/en/docs/user-guide/rule-builder.md`
- **Title**: Rule Builder
- **Type**: guide
- **Size**: 3082 bytes
- **Internal links count**: 8
- **Parent folder**: `content/en/docs/user-guide`
- **Brief summary**: Visual workspace for designing business logic graphs.
- **Potential issues**: None detected

---

## 4. Structural Observations

### Duplicate or overlapping topics
- Title 'architecture' used in: content/en/docs/architecture/_index.md, content/en/docs/architecture/overview.md
- Title 'contributor guide' used in: content/en/docs/developer-guide/contributor-guide/_index.md, content/en/docs/developer-guide/contributor-guide/overview.md

### Inconsistent naming conventions
- None detected.

### Broken or deep nesting issues
- Files nested more than 4 levels deep: content/en/docs/actions/query-records/aggregations/index.md, content/en/docs/actions/query-records/exist-record/index.md, content/en/docs/actions/query-records/group-by/index.md, content/en/docs/actions/query-records/query-doc/index.md, content/en/docs/actions/query-records/query-list/index.md, content/en/docs/actions/query-records/query-report/index.md

### Missing index pages
- Directories missing index.md or _index.md: content/en/docs/reference/ai, content/en/docs/reference/execution, content/en/docs/architecture/actions, content/en/docs/project/audits

### Orphan pages
- Potential orphan pages (not explicitly linked): content/en/docs/actions/_index.md, content/en/docs/actions/assignment/index.md, content/en/docs/actions/condition/index.md, content/en/docs/actions/document-action/index.md, content/en/docs/actions/entry/index.md, content/en/docs/actions/loop/index.md, content/en/docs/actions/notify/index.md, content/en/docs/actions/process/index.md, content/en/docs/actions/query-records/_index.md, content/en/docs/actions/query-records/aggregations/index.md, content/en/docs/actions/query-records/exist-record/index.md, content/en/docs/actions/query-records/group-by/index.md, content/en/docs/actions/query-records/query-doc/index.md, content/en/docs/actions/query-records/query-list/index.md, content/en/docs/actions/query-records/query-report/index.md, content/en/docs/actions/switch/index.md, content/en/docs/administration/_index.md, content/en/docs/administration/faq.md, content/en/docs/administration/troubleshooting.md, content/en/docs/architecture/_index.md, content/en/docs/architecture/actions/condition.md, content/en/docs/architecture/actions/document-action.md, content/en/docs/architecture/actions/entry.md, content/en/docs/architecture/actions/loop.md, content/en/docs/architecture/actions/query-records.md, content/en/docs/architecture/contracts/_index.md, content/en/docs/architecture/engine/_index.md, content/en/docs/architecture/engine/action-implementation.md, content/en/docs/architecture/engine/condition-system.md, content/en/docs/architecture/engine/execution-engine.md, content/en/docs/architecture/engine/orchestration.md, content/en/docs/architecture/internals/_index.md, content/en/docs/architecture/overview.md, content/en/docs/architecture/resolver/_index.md, content/en/docs/architecture/resolver/resolver-patterns.md, content/en/docs/architecture/runtime/_index.md, content/en/docs/architecture/runtime/execution-context.md, content/en/docs/architecture/runtime/graph-orchestration.md, content/en/docs/architecture/runtime/overview.md, content/en/docs/architecture/ui/_index.md, content/en/docs/architecture/ui/action-config-panels.md, content/en/docs/architecture/ui/component-registry.md, content/en/docs/architecture/ui/controls.md, content/en/docs/architecture/ui/dynamic-forms.md, content/en/docs/architecture/ui/overview.md, content/en/docs/concepts/_index.md, content/en/docs/concepts/ai-features.md, content/en/docs/concepts/decision-trees.md, content/en/docs/concepts/system-philosophy.md, content/en/docs/contributing/_index.md, content/en/docs/contributing/action-documentation-standard.md, content/en/docs/contributing/templates/_index.md, content/en/docs/contributing/templates/action-architecture-template.md, content/en/docs/contributing/templates/action-doc-template.md, content/en/docs/contributing/templates/execution-semantics-template.md, content/en/docs/developer-guide/_index.md, content/en/docs/developer-guide/api/_index.md, content/en/docs/developer-guide/contributor-guide/_index.md, content/en/docs/developer-guide/contributor-guide/overview.md, content/en/docs/developer-guide/custom-actions/_index.md, content/en/docs/developer-guide/custom-actions/standards.md, content/en/docs/developer-guide/development-standards/_index.md, content/en/docs/developer-guide/extension-points/_index.md, content/en/docs/getting-started/_index.md, content/en/docs/project/_index.md, content/en/docs/project/audit/_index.md, content/en/docs/project/audit/technical-audit.md, content/en/docs/project/audits/entry-action-gap-analysis.md, content/en/docs/project/research/_index.md, content/en/docs/project/research/action-zone.md, content/en/docs/project/roadmap/_index.md, content/en/docs/project/roadmap/assignment-action-improvements.md, content/en/docs/project/roadmap/documentation-standardization.md, content/en/docs/project/roadmap/event-driven-architecture.md, content/en/docs/project/roadmap/platform-potential.md, content/en/docs/project/roadmap/runtime-optimization.md, content/en/docs/reference/_index.md, content/en/docs/reference/ai/action-metadata-schema.md, content/en/docs/reference/doctypes.md, content/en/docs/reference/execution/condition.md, content/en/docs/reference/execution/document-action.md, content/en/docs/reference/execution/entry.md, content/en/docs/reference/execution/loop.md, content/en/docs/reference/execution/query-records.md, content/en/docs/reference/glossary.md, content/en/docs/reference/localized/_index.md, content/en/docs/reference/localized/arabic-overview.md, content/en/docs/reference/query-filters/index.md, content/en/docs/reference/terminology.md, content/en/docs/reference/timespan-keywords/index.md, content/en/docs/triggers/_index.md, content/en/docs/triggers/callable-triggers.md, content/en/docs/triggers/context-reference.md, content/en/docs/triggers/engine-details.md, content/en/docs/triggers/event-triggers.md, content/en/docs/triggers/scheduler-triggers.md, content/en/docs/user-guide/_index.md, content/en/docs/user-guide/best-practices.md, content/en/docs/user-guide/condition-builder-guide.md, content/en/docs/user-guide/condition-builder.md, content/en/docs/user-guide/how-rules-execute.md, content/en/docs/user-guide/rule-builder.md

### Overloaded folders
- None detected.

---

## 5. Refactor Recommendations (High-Level)

1. **3-Layer Architecture Consolidation**: The repository currently separates 'Execution Semantics', 'Architecture Reference', and 'User Guides' into different folder trees (e.g., `reference/execution/`, `architecture/actions/`, and `actions/`). It is recommended to use Hugo Leaf Bundles (folders with `index.md`) to keep all three layers of a single action together.
2. **Standardize Naming**: Fix the few remaining snake_case filenames to maintain a consistent kebab-case URL structure.
3. **Fill Index Gaps**: Add `_index.md` files to the missing directories to provide context and navigation for those sections.
4. **Resolve Duplication**: Merge pages with identical titles (e.g., 'Architecture' and 'Contributor Guide') to establish single sources of truth.

---

## 6. Migration Readiness Score

- **Structure clarity**: 6/10 (Current multi-tree approach for actions adds cognitive load)
- **Maintainability**: 5/10 (High risk of sync issues between decoupled architectural and user docs)
- **Scalability**: 7/10 (Sections are well-defined, but cross-referencing is manual)
