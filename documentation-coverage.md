# FlexiRule Documentation Coverage Roadmap & Analysis

## 1. Scope & Methodology

This document serves as the comprehensive documentation coverage roadmap and inventory for the FlexiRule application and its user documentation repository (`flexirule-docs`).

### Methodology
1. **Source Code & Application Analysis**: Deep inspection of the FlexiRule application codebase (`Sendipad/flexirule`), including Vue 3 frontend components (`public/js/flexirule/rule_builder`), Python backend engine (`ruleflow/core`), Frappe DocTypes, Workspaces, and API endpoints.
2. **Documentation Inventory & Mapping**: Mapping existing documentation pages in `content/en/` against actual user-facing application capabilities, workflows, UI controls, and configuration options.
3. **Mismatch & Gap Identification**: Detecting discrepancies between documentation claims and application reality (e.g., outdated UI terminology, missing features, technical architecture exposed in user guides).
4. **Decomposition & Actionable Checklist**: Structuring all documentation tasks into small, self-contained units that a scheduled automated task or writer can complete independently in a single focused run.

---

## 2. Application Feature Inventory

Based on direct source code analysis, the current FlexiRule application contains the following core user-facing features and UI components:

### 2.1 Workspace & Application Navigation
- **Frappe Awesomebar Integration**: Searching rules, execution logs, and ruleflow settings directly.
- **RuleFlow Workspace**:
  - **Metrics & Cards**: Total Rules, Active Rules, Inactive Rules, Total Executions, Successful Executions, Recently Modified Rules.
  - **Dashboard Charts**: Rule Execution Activity (timeline graph), Rule Distribution by Trigger Type (pie/donut chart).
  - **Shortcuts & Actions**: Quick access to New Rule, Rule List, Rule Builder, Execution Logs, Ruleflow Settings.

### 2.2 Rule Management & Metadata Configuration
- **Rule List View**:
  - Search, filter by DocType, Trigger Type, Status (Active/Draft/Disabled).
  - Version history and active version toggle.
  - Duplicate/Clone Rule action.
  - Export/Import Rule definitions (JSON schema).
- **Rule Form / Header Configuration**:
  - **Basic Info**: Rule Name, Description, DocType target, Priority, Enabled state.
  - **Trigger Types**:
    - *Event Triggers*: Before Insert, After Insert, Before Save, After Submit, On Cancel, Before Trash.
    - *Scheduled Triggers*: Interval (minutes/hours), Cron expression, Target DocType query.
    - *Callable/Sub-rule*: Invocable by other rules or API.
  - **Execution Gate / Entry Condition**: Rule-level condition builder evaluated before graph execution.
  - **Sub-rule Configuration**: Input parameter definitions, Return value schema mappings.

### 2.3 Rule Builder Canvas & Interface Layout
- **Visual Node Canvas**:
  - Canvas interactions: Zoom in/out, pan, fit to view, grid snapping.
  - Node types: Entry Node, Action Nodes, Condition Nodes, Sub-rule Nodes, Exit/Stop Nodes.
  - Canvas Toolbar: Canvas search, Auto-layout (Dagre layout algorithm), Command Palette (`Ctrl+K`), Keyboard shortcuts help modal (`?`).
  - Action Palette / Node Insertion: Drag-and-drop or click-to-add action menu, connection edge controls.
- **Dual Configuration Modes**:
  - **Dialog Modal Mode**: 3-tab popup modal (Input/Schema, Settings, Output) launched upon clicking a node.
  - **Three-Panel Workspace Mode**: Integrated workspace with Left Input/Schema panel, Center Visual Canvas, and Right Action Configuration panel.
  - **Layout Mode Toggle**: Switch between Dialog Modal and Three-Panel View in user settings or canvas header.
- **Action Node General Settings**:
  - Node Title & Custom Description.
  - Enabled / Disabled toggle.
  - Continue on Error toggle.
  - Log Result toggle.

### 2.4 Smart Value System & Value Resolvers
- **Smart Value Selector (UI Component)**:
  - Input mode switcher: Static Value, Variable (`@`), Resolver (`/`).
  - Contextual variable auto-complete (`@doc.field`, `@user`, `@now`, `@env.system_setting`, `@prev_action.output`).
- **Resolver Categories & UI Modals**:
  - **Fetch / Lookup Resolver**: Fetch field from linked DocType via single/multi-level field paths.
  - **DateTime Resolver**:
    - *Calculate*: Add/Subtract time intervals (days, hours, minutes).
    - *Diff*: Calculate difference between two dates/times.
    - *Extract*: Extract year, month, day, day of week, hour.
    - *Format*: Format date/time using custom format strings.
    - *Current*: Get current date, time, or timestamp.
    - *Boundary*: Start of day/month/year, End of day/month/year.
  - **Math Formula Resolver**: Visual/expression math evaluator (`+`, `-`, `*`, `/`, `round`, `abs`, `min`, `max`).
  - **Text Transform Resolver**: String operations (Uppercase, Lowercase, Trim, Concatenate, Replace, Substring, Slugify).
  - **Collection Resolver**: Array & child-table operations:
    - Operations: `count`, `any`, `all`, `first/find`, `filter`, `pluck`, `unique`.
    - Safety limit cap: Max 10,000 child rows.
  - **Aggregation Resolver**: Perform Sum, Average, Count, Min, Max on query or child table data.
  - **System Context Resolver**: Dynamic access to current session user, current timestamp, system environment variables.

### 2.5 Action Types & Configuration Panels

#### 1. Set Value (Assignment)
- Target field selector (supports main document fields & child table fields).
- Smart Value expression builder.
- Automatic data type coercion (String, Number, Boolean, Date, JSON).
- Multi-field bulk assignment table.

#### 2. Check (Condition)
- Multi-condition step builder with AND/OR logical group trees.
- Comparison operators: Equals, Not Equals, Contains, Greater Than, Less Than, In, Is Set, Is Not Set, Matches Regex.
- Visual True / False output branching handles on canvas.

#### 3. Query Records
- **Operations**:
  - *Query List*: Retrieve array of records matching filters.
  - *Query Doc*: Single document retrieval strategies (Standard, Cached, Latest, Single).
  - *Exist Record*: High-performance boolean check for record existence.
  - *Query Report*: Run Frappe report programmatically and capture dataset.
  - *Aggregations*: Count, Sum, Average, Min, Max operations directly on database tables.
  - *Group By*: Grouped aggregation queries returning key-value buckets.
- **Configuration Controls**:
  - Target DocType dropdown with auto-complete.
  - Field browser & custom field selector.
  - Child DocType / Table drill-down navigation.
  - Filter builder (DocType fields, operators, dynamic Smart Values).
  - Order By (field sorting, ASC/DESC).
  - Limit & Offset (Pagination controls).
  - Distinct flag.

#### 4. Update Record
- **Operation Modes**:
  - *Update Existing*: Modify records in database matching criteria or specific document ID.
  - *Create New*: Insert new record into target DocType.
- Configuration controls: Target DocType, Field mapping table, Save vs Submit document lifecycle flags.

#### 5. Repeat (Loop)
- Array / Child table input source.
- Loop variable name declaration.
- Loop body canvas container / sub-action sequence.
- Loop iteration index and current item variable scope.

#### 6. Notify
- **Channels**: Email, System Notification (Frappe Alert / Bell), Webhook / External API, SMS.
- Recipient definition (Static emails, `@doc.owner`, user roles).
- Subject and Message templates with Smart Value and Jinja interpolation.

#### 7. Switch
- Switch expression input.
- Branch cases builder (value matching).
- Default / Fallback path.

#### 8. Wait
- Delay duration input.
- Time unit selector (Seconds, Minutes, Hours, Days).
- Resume condition / trigger listener.

#### 9. Stop / Raise Error
- Stop execution vs Raise Exception modes.
- Custom user-facing error message template.
- Error code / categorization.

#### 10. Sub-Rule
- Target Sub-Rule picker.
- Input parameter mapping table.
- Output variable mapping table.

#### 11. Advanced Process
- Process Doctype selection.
- Pipeline stages: Validation, Deduplication, Batch, Enrichment.
- Process operation selection and parameters.

### 2.6 Testing & Debugging Workflows
- **Dry-Run Testing Dialog**:
  - Select test document or input custom JSON payload.
  - Run rule in sandbox execution mode without committing database changes.
  - Step-by-step trace view: Visual path highlight on canvas, node input/output payload inspection, execution time per node.
  - Error diagnostic inspector.

### 2.7 Execution & Audit Logs
- **Rule Execution Log List & Detail View**:
  - Execution ID, Timestamp, Rule Name, Trigger Event, Status (Success, Failed, Aborted, Skipped).
  - Detailed Execution Tree: Node-by-node execution time, evaluated conditions, modified fields snapshot, stack traces on failure.
  - Re-run / Retry execution action.

### 2.8 System Setup, Governance & Permissions
- **Ruleflow Settings**: Default action config mode, Execution log retention policy, Asynchronous worker queue configuration.
- **Rule Permissions**: Role-based access control (RBAC) for rule editing, activation, and execution.
- **Ruleflow Excluded DocTypes**: System-level blacklist to prevent rules from running on sensitive internal DocTypes.

---

## 3. User-Facing Navigation & Workflow Inventory

| Workflow Area | Primary Entry Point | Core User Steps |
| :--- | :--- | :--- |
| **Workspace Navigation** | Desk Topbar / Awesomebar → `RuleFlow Workspace` | Access quick stats, execution metrics, rule distribution charts, shortcut buttons. |
| **Rule Lifecycle** | Workspace → `Rule List` → `+ New Rule` | 1. Name rule & select DocType.<br>2. Select Trigger Type & Entry Condition.<br>3. Open Rule Builder.<br>4. Configure graph.<br>5. Dry-run test.<br>6. Enable rule. |
| **Canvas Graph Building** | Rule Builder → Canvas | 1. Drag or add Action Node.<br>2. Connect nodes with edges.<br>3. Set condition branch paths.<br>4. Auto-layout canvas. |
| **Action Configuration** | Double click Node / Click Edit | 1. Open Dialog or 3-Panel Config.<br>2. Set target fields.<br>3. Use Smart Value Selector (`@`/`/`) for dynamic values.<br>4. Configure node error settings. |
| **Rule Testing** | Rule Builder → Header → `Test Rule` | 1. Select sample DocType record.<br>2. Execute dry-run.<br>3. Inspect node step outputs on visual trace viewer. |
| **Execution Auditing** | Workspace → `Rule Execution Logs` | 1. Search by Rule or Document ID.<br>2. Inspect status, execution duration, and variable state snapshots. |

---

## 4. Recommended Documentation Hierarchy

To support clear separation of concerns, user clarity, and maintainability, the documentation hierarchy is structured into two main tracks:

```
flexirule-docs/content/en/
├── getting-started/             # User Guide: Platform overview, Quick start, Core concepts
├── rule-builder/                # User Guide: Canvas, Layouts, Smart Values, Test runner
├── action-type/                 # User Guide: Action guides by business concept
│   ├── set-value/
│   ├── check/
│   ├── query-records/
│   ├── update-record/
│   ├── repeat/
│   ├── notify/
│   ├── switch/
│   ├── wait/
│   ├── stop-error/
│   ├── sub-rule/
│   └── process/
├── execution/                   # User Guide: Trigger gates, Schedules, Execution logs
├── setup/                       # User Guide: Installation, Settings, Permissions, Excluded DocTypes
├── troubleshooting/             # User Guide: FAQs, Error messages, Debugging steps
├── tutorials/                   # User Guide: Practical end-to-end recipe tutorials
└── advanced-concepts/          # Developer & Architecture Guide
    ├── architecture/            # Engine internals, Runtime graph orchestration, Compilers
    ├── contracts/               # Action contracts, Resolver interfaces, DTOs
    └── api-reference/           # REST APIs, Python Hooks, Whitelisted methods
```

---

## 5. User Guide Coverage Checklist

The following items represent small, focused documentation tasks for the User Guide.

- [ ] **[P1, Small]** Workspace → Overview → Metrics cards & execution activity charts *(Target: `content/en/getting-started/workspace.md`)*
- [ ] **[P1, Small]** Workspace → Navigation → Shortcuts, Awesomebar search, and quick links *(Target: `content/en/getting-started/workspace.md`)*
- [ ] **[P1, Medium]** Rule Lifecycle → Rule Creation → DocType selection and basic metadata *(Target: `content/en/rule-builder/rule-lifecycle.md`)*
- [ ] **[P1, Medium]** Rule Lifecycle → Triggers → Event triggers (Before Save, After Submit, On Cancel) *(Target: `content/en/rule-builder/rule-lifecycle.md`)*
- [ ] **[P1, Medium]** Rule Lifecycle → Triggers → Scheduled triggers (Interval & Cron setup) *(Target: `content/en/rule-builder/rule-lifecycle.md`)*
- [ ] **[P1, Small]** Rule Lifecycle → Entry Gate → Entry condition builder & skip logic *(Target: `content/en/rule-builder/rule-lifecycle.md`)*
- [ ] **[P2, Small]** Rule Lifecycle → Governance → Versioning, duplication, and JSON export/import *(Target: `content/en/rule-builder/rule-lifecycle.md`)*
- [ ] **[P1, Medium]** Rule Builder → Canvas → Navigation, zoom/pan, fit view, and grid snapping *(Target: `content/en/rule-builder/canvas.md`)*
- [ ] **[P2, Small]** Rule Builder → Canvas → Auto-layout, command palette (`Ctrl+K`), shortcuts modal *(Target: `content/en/rule-builder/canvas.md`)*
- [ ] **[P1, Medium]** Rule Builder → Workspace Layouts → Dialog Modal vs Three-Panel Workspace mode *(Target: `content/en/rule-builder/canvas.md`)*
- [ ] **[P2, Small]** Rule Builder → Node Settings → Title, description, enable toggle, continue-on-error *(Target: `content/en/rule-builder/action-settings.md`)*
- [ ] **[P1, Medium]** Smart Value System → Basics → Static Mode vs Variable Mode (`@`) vs Resolver Mode (`/`) *(Target: `content/en/rule-builder/smart-value-system.md`)*
- [ ] **[P1, Medium]** Smart Value System → Context Variables → `@doc`, `@user`, `@now`, and `@prev_action` variables *(Target: `content/en/rule-builder/smart-value-system.md`)*
- [ ] **[P2, Medium]** Smart Value System → Fetch Resolver → Single & multi-level link field lookup *(Target: `content/en/rule-builder/smart-value-system.md`)*
- [ ] **[P2, Medium]** Smart Value System → DateTime Resolver → Date math, difference, format, and boundaries *(Target: `content/en/rule-builder/smart-value-system.md`)*
- [ ] **[P2, Small]** Smart Value System → Math Resolver → Visual formula builder and arithmetic functions *(Target: `content/en/rule-builder/smart-value-system.md`)*
- [ ] **[P2, Small]** Smart Value System → Text Resolver → Uppercase, lowercase, concatenate, substring, slugify *(Target: `content/en/rule-builder/smart-value-system.md`)*
- [ ] **[P2, Medium]** Smart Value System → Collection Resolver → Child-table filtering, plucking, and operations *(Target: `content/en/rule-builder/smart-value-system.md`)*
- [ ] **[P1, Medium]** Set Value (Assignment) → Basic Configuration → Target field selection & Smart Value input *(Target: `content/en/action-type/assignment.md`)*
- [ ] **[P2, Small]** Set Value (Assignment) → Bulk Assignment → Setting multiple fields in one action *(Target: `content/en/action-type/assignment.md`)*
- [ ] **[P1, Medium]** Check (Condition) → Rule Tree → Building nested AND/OR condition groups *(Target: `content/en/action-type/condition.md`)*
- [ ] **[P1, Small]** Check (Condition) → Branching → Canvas True/False output path configuration *(Target: `content/en/action-type/condition.md`)*
- [ ] **[P1, Small]** Query Records → Overview → Operations choice (Query List, Query Doc, Aggregations) *(Target: `content/en/action-type/query-records/_index.md`)*
- [ ] **[P1, Medium]** Query Records → Query List → Target DocType selection & field selector *(Target: `content/en/action-type/query-records/query-list.md`)*
- [ ] **[P1, Medium]** Query Records → Query List → Child-table field drill-down navigation *(Target: `content/en/action-type/query-records/query-list.md`)*
- [ ] **[P1, Medium]** Query Records → Query List → Dynamic filters & Order By configuration *(Target: `content/en/action-type/query-records/query-list.md`)*
- [ ] **[P2, Small]** Query Records → Query Doc → Standard, Cached, Latest, and Single strategies *(Target: `content/en/action-type/query-records/query-doc.md`)*
- [ ] **[P1, Small]** Query Records → Exist Record → Boolean presence check configuration *(Target: `content/en/action-type/query-records/exist-record.md`)*
- [ ] **[P2, Medium]** Query Records → Aggregations → Count, Sum, Average, Min, Max setup *(Target: `content/en/action-type/query-records/sum.md`)*
- [ ] **[P2, Medium]** Query Records → Group By → Grouped aggregations & result schema format *(Target: `content/en/action-type/query-records/group-by.md`)*
- [ ] **[P2, Medium]** Query Records → Query Report → Report execution and dataset mapping *(Target: `content/en/action-type/query-records/query-report.md`)*
- [ ] **[P1, Medium]** Update Record → Update Existing → Targeting records & updating fields *(Target: `content/en/action-type/update-record/update-existing.md`)*
- [ ] **[P1, Medium]** Update Record → Create New → Creating records & setting initial values *(Target: `content/en/action-type/update-record/create-new.md`)*
- [ ] **[P1, Medium]** Repeat (Loop) → Configuration → Target array selection, loop variable, & inner execution *(Target: `content/en/action-type/loop.md`)*
- [ ] **[P1, Medium]** Notify → Channels → Email, System Notification, SMS, and Webhook setup *(Target: `content/en/action-type/notify/_index.md`)*
- [ ] **[P2, Small]** Notify → Templating → Jinja templates & Smart Value interpolation *(Target: `content/en/action-type/notify/email.md`)*
- [ ] **[P2, Medium]** Switch → Configuration → Expression evaluation & branch cases setup *(Target: `content/en/action-type/switch.md`)*
- [ ] **[P2, Small]** Wait → Configuration → Delay duration & TimeUnit selection *(Target: `content/en/action-type/wait.md`)*
- [ ] **[P2, Small]** Stop / Raise Error → Configuration → Message formatting & exception modes *(Target: `content/en/action-type/stop-error.md`)*
- [ ] **[P2, Medium]** Sub-Rule → Integration → Invocations, input parameter pass, output mapping *(Target: `content/en/action-type/sub-rule.md`)*
- [ ] **[P3, Medium]** Advanced Process → Pipelines → Process Doctype, Validation, Deduplication, Enrichment *(Target: `content/en/action-type/process.md`)*
- [ ] **[P1, Medium]** Testing & Debugging → Dry-Run Modal → Mock payload selection & sandbox execution *(Target: `content/en/rule-builder/debugging.md`)*
- [ ] **[P1, Medium]** Testing & Debugging → Step Trace Viewer → Visual node execution path & payload inspection *(Target: `content/en/rule-builder/debugging.md`)*
- [ ] **[P1, Medium]** Execution Logs → Log Viewer → Status monitoring, duration tracking, step details *(Target: `content/en/execution/logs.md`)*
- [ ] **[P2, Small]** Execution Logs → Actions → Re-running failed rule executions *(Target: `content/en/execution/logs.md`)*
- [ ] **[P2, Medium]** Setup → Permissions → Role-based access control for rules (`Rule Permission`) *(Target: `content/en/setup/permissions.md`)*
- [ ] **[P2, Small]** Setup → Governance → Managing excluded Doctypes (`Ruleflow Excluded Doctype`) *(Target: `content/en/setup/settings.md`)*
- [ ] **[P2, Small]** Setup → System Settings → Log retention policy & worker queue settings *(Target: `content/en/setup/settings.md`)*
- [ ] **[P1, Medium]** Troubleshooting → Common Errors → Step-by-step diagnostic guide for rule errors *(Target: `content/en/troubleshooting/troubleshooting.md`)*

---

## 6. Developer Guide Coverage Checklist

The following items represent developer-focused documentation tasks covering engine architecture, contracts, extension points, and testing.

- [ ] **[P2, Medium]** Architecture → Engine Overview → Graph compiler, compilation phases, DTOs *(Target: `content/en/advanced-concepts/architecture/overview.md`)*
- [ ] **[P2, Medium]** Architecture → Runtime Orchestration → Coordinator, context manager, and evaluator *(Target: `content/en/advanced-concepts/architecture/runtime/overview.md`)*
- [ ] **[P2, Medium]** Contracts → Action Registry → `base_contract.py` and action type registration *(Target: `content/en/advanced-concepts/architecture/contracts/_index.md`)*
- [ ] **[P2, Large]** Contracts → Action Handlers → Python execution contracts for all action types *(Target: `content/en/advanced-concepts/architecture/actions/_index.md`)*
- [ ] **[P2, Medium]** Contracts → Value Resolvers → Backend `value_resolver.py` contract & strategy pattern *(Target: `content/en/advanced-concepts/architecture/resolver/resolver-patterns.md`)*
- [ ] **[P2, Medium]** Contracts → Collection Resolver → `CollectionResolver` architecture, performance limits, and $O(N)$ evaluation *(Target: `content/en/advanced-concepts/architecture/resolver/collection-resolver.md`)*
- [ ] **[P2, Medium]** UI Architecture → Vue Registry → Component registry, control factory, dynamic forms *(Target: `content/en/advanced-concepts/architecture/ui/component-registry.md`)*
- [ ] **[P2, Medium]** UI Architecture → Custom Controls → Developing new custom Vue form controls *(Target: `content/en/advanced-concepts/architecture/ui/controls.md`)*
- [ ] **[P2, Medium]** API Reference → Python Hooks → Document event hook bindings (`hooks.py`) *(Target: `content/en/api-reference/hooks.md`)*
- [ ] **[P2, Medium]** API Reference → REST APIs → Whitelisted Frappe API endpoints (`ruleflow/api.py`) *(Target: `content/en/api-reference/public-apis.md`)*
- [ ] **[P2, Medium]** Developer Guide → Testing Architecture → Writing unit, integration, and Cypress E2E tests *(Target: `content/en/developer-guide/_index.md`)*

---

## 7. Existing Documentation Mapping & Status Analysis

| Documentation Topic | Current File Path | Status | Analysis & Required Action |
| :--- | :--- | :--- | :--- |
| **Workspace & Dashboard** | Missing | `MISSING` | Create dedicated workspace guide covering dashboard cards, charts, and shortcuts. |
| **Quick Start** | `getting-started/quick-start.md` | `PARTIAL` | Update UI steps; ensure Smart Value Selector is referenced instead of code syntax. |
| **Rule Lifecycle & Triggers** | `rule-builder/rule-lifecycle.md` | `PARTIAL` | Expand event trigger details, scheduled cron/interval setup, and entry gates. |
| **Canvas & Layout Modes** | `rule-builder/canvas.md` | `NEEDS SOURCE VERIFICATION` | Document layout toggle (Dialog Modal vs 3-Panel View) and command palette shortcuts. |
| **Action Settings** | `rule-builder/action-settings.md` | `COMPLETE` | Accurately describes node general settings (Title, Description, Continue on Error). |
| **Smart Value System** | `rule-builder/smart-value-system.md` | `PARTIAL` | Add comprehensive sections for Math, Text Transform, and DateTime Resolvers. |
| **Set Value (Assignment)** | `action-type/assignment.md` | `OUTDATED` | Update terminology from `Assignment` to UI label `Set Value`; add bulk assignment. |
| **Check (Condition)** | `action-type/condition.md` | `PARTIAL` | Clarify visual branch output handles (True/False edge connections). |
| **Query Records Index** | `action-type/query-records/_index.md` | `COMPLETE` | Clear performance guidance and operation map. |
| **Query List** | `action-type/query-records/query-list.md` | `PARTIAL` | Document child-table field navigation and Order By UI options. |
| **Query Doc** | `action-type/query-records/query-doc.md` | `COMPLETE` | Accurately details caching strategies and stale data warnings. |
| **Exist Record** | `action-type/query-records/exist-record.md` | `COMPLETE` | Complete user guide on high-performance existence check. |
| **Aggregations (Sum, Avg, etc.)**| `action-type/query-records/sum.md` | `PARTIAL` | Detail UI field selection and operation dropdown choices. |
| **Group By** | `action-type/query-records/group-by.md` | `COMPLETE` | Details dynamic group key outputs. |
| **Update Record** | `action-type/update-record/` | `COMPLETE` | Covers `create-new.md` and `update-existing.md` cleanly. |
| **Repeat (Loop)** | `action-type/loop.md` | `PARTIAL` | Add UI screenshot/steps for inner canvas body execution scope. |
| **Notify** | `action-type/notify/_index.md` | `PARTIAL` | Add channel-specific configuration steps for Email vs Alert vs Webhook. |
| **Switch & Wait** | `action-type/switch.md`, `wait.md` | `COMPLETE` | Clear UI-first guides. |
| **Stop / Raise Error** | `action-type/stop-error.md` | `COMPLETE` | Accurately details error raise vs stop execution modes. |
| **Sub-Rule** | `action-type/sub-rule.md` | `PARTIAL` | Update UI input/output parameter mapping control descriptions. |
| **Advanced Process** | `action-type/process.md` | `PARTIAL` | Needs UI step guide for process operation configuration. |
| **Testing & Debugging** | `rule-builder/debugging.md` | `NEEDS SOURCE VERIFICATION` | Update dry-run dialog mock selector and visual trace path viewer. |
| **Execution Logs** | Missing | `MISSING` | Create user guide for Rule Execution Log list, details, and retry functionality. |
| **Setup & Permissions** | `setup/permissions.md`, `settings.md` | `USER-GUIDE GAP` | Expose role-based rule permission setup and Excluded DocTypes. |
| **Architecture & Reference** | `advanced-concepts/` | `DEVELOPER-ONLY` | Isolated under developer guide hierarchy; accurate technical reference. |

---

## 8. Source/UI vs. Documentation Mismatches

1. **Internal Code Component Names vs User UI Labels**:
   - *Mismatch*: Code uses `FlexValueControl` / `ValueResolverControl`, whereas docs previously referred to internal Vue component names.
   - *Correction Requirement*: Use official UI term **"Smart Value Selector"** exclusively across all user guides.
2. **Action Type Technical Names vs Business UI Labels**:
   - *Mismatch*: Internal action key `assignment` is rendered in UI as **"Set Value"**; `condition` is rendered as **"Check"**; `loop` is rendered as **"Repeat"**.
   - *Correction Requirement*: Primary headers and titles in User Guides must use business terminology (**Set Value**, **Check**, **Repeat**), with technical keys relegated to Developer Reference.
3. **Configuration Layout Modes**:
   - *Mismatch*: Existing docs focus exclusively on popup modal dialogs, omitting the **Three-Panel Workspace View** configuration layout.
   - *Correction Requirement*: Update `canvas.md` and action guides to explain both Dialog Modal and Three-Panel View configuration layouts.
4. **Dry-Run Testing Capabilities**:
   - *Mismatch*: Testing guide omits current dry-run modal mock record builder and step-by-step trace view highlight capability.
   - *Correction Requirement*: Update `rule-builder/debugging.md` with UI steps for mock document payload selection and trace tree inspection.
5. **Execution Logs User Guide**:
   - *Mismatch*: `Rule Execution Log` is a primary user workspace menu item, but lacks a dedicated User Guide page under `execution/logs.md`.
   - *Correction Requirement*: Create `content/en/execution/logs.md` covering execution status, execution duration metrics, step log details, and retry actions.

---

## 9. Missing Documentation Analysis

1. **`RuleFlow Workspace` User Guide**:
   - *Missing*: Complete walkthrough of desk navigation, dashboard charts, metrics cards, and awesomebar integration.
2. **`Rule Execution Log` User Guide**:
   - *Missing*: Guide explaining log search, status filtering, execution step trace tree inspection, and execution retries.
3. **Smart Value Resolver Sub-components**:
   - *Missing*: Focused user guides for Math Formula Resolver, Text Transform Resolver, and DateTime Resolvers (Calculate, Diff, Extract, Format, Boundary).
4. **Rule Governance & Excluded DocTypes**:
   - *Missing*: End-user guide for configuring `Ruleflow Excluded DocType` and setting up role-based `Rule Permission` rules.

---

## 10. Task Categorization by Priority & Scope

### P0 — Incorrect or Misleading Documentation (High Priority Fixes)
- [ ] **[P0, Small]** Update `action-type/assignment.md` terminology to match UI label **"Set Value"** and reflect bulk assignment features. *(Scope: Small)*
- [ ] **[P0, Small]** Update `rule-builder/canvas.md` to document both Dialog Modal and Three-Panel Workspace View layout modes. *(Scope: Small)*
- [ ] **[P0, Medium]** Update `rule-builder/debugging.md` to match current dry-run modal mock builder and visual step trace viewer. *(Scope: Medium)*

### P1 — Important Missing User Documentation
- [ ] **[P1, Medium]** Create `content/en/getting-started/workspace.md` covering Workspace navigation, dashboard charts, and metrics cards. *(Scope: Medium)*
- [ ] **[P1, Medium]** Create `content/en/execution/logs.md` covering Rule Execution Log viewer, step details, and retry feature. *(Scope: Medium)*
- [ ] **[P1, Medium]** Update `rule-builder/smart-value-system.md` with explicit configuration guides for Math and Text Transform Resolvers. *(Scope: Medium)*
- [ ] **[P1, Medium]** Expand `action-type/query-records/query-list.md` to cover child-table field navigation and Order By sorting controls. *(Scope: Medium)*

### P2 — Important Incomplete Documentation
- [ ] **[P2, Medium]** Expand `rule-builder/rule-lifecycle.md` to detail scheduled triggers (Interval & Cron setup) and entry execution gates. *(Scope: Medium)*
- [ ] **[P2, Small]** Update `action-type/notify/_index.md` with channel-specific UI setup (Email vs System Alert vs Webhook). *(Scope: Small)*
- [ ] **[P2, Medium]** Update `setup/permissions.md` to detail role-based rule permission control and `Ruleflow Excluded DocType`. *(Scope: Medium)*

### P3 — Useful Enhancements & Tutorials
- [ ] **[P3, Medium]** Add practical end-to-end recipe tutorial for child-table collection filtering and bulk calculation. *(Scope: Medium)*
- [ ] **[P3, Small]** Add shortcut list and command palette guide (`Ctrl+K`) to `rule-builder/canvas.md`. *(Scope: Small)*

---

## 11. Dependencies Map

```
Workspace Overview (`getting-started/workspace.md`)
  └── Quick Start Guide (`getting-started/quick-start.md`)
        └── Rule Lifecycle & Triggers (`rule-builder/rule-lifecycle.md`)
              ├── Canvas & Workspace Modes (`rule-builder/canvas.md`)
              │     ├── Action Types (Set Value, Check, Query Records, etc.)
              │     └── Smart Value System (`rule-builder/smart-value-system.md`)
              │           ├── Fetch / Lookup Resolver
              │           ├── DateTime Resolver
              │           └── Collection Resolver
              └── Testing & Debugging (`rule-builder/debugging.md`)
                    └── Execution Logs (`execution/logs.md`)
```

*Key Dependency Rule*: Basic Smart Value System documentation must be established before documenting advanced action field assignments or complex query filters.

---

## 12. Canonical Terminology Guidance

| Official UI Label | Preferred Documentation Term | Deprecated / Disallowed Terms | Notes |
| :--- | :--- | :--- | :--- |
| **Smart Value Selector** | Smart Value Selector | `FlexValueControl`, `@doc picker` | Always use "Smart Value Selector" for the dynamic value UI input component. |
| **Set Value** | Set Value Action | `Assignment`, `Assignment Node` | User-facing guide title must be "Set Value". "Assignment" is reserved for backend reference. |
| **Check** | Check Action | `Condition Node`, `If-Else Node` | UI button label is "Check". |
| **Repeat** | Repeat Action | `Loop Node`, `For Each` | UI label is "Repeat". |
| **Exist Record** | Exist Record Operation | `Check Exist`, `Has Record` | Canonical name for the boolean query operation. |
| **Three-Panel View** | Three-Panel Workspace View | `Split View`, `Sidebar Mode` | Official layout mode name alongside "Dialog Modal". |
| **Entry Gate** | Entry Execution Gate | `Rule Filter`, `Pre-condition` | Evaluated before canvas graph execution. |
| **Dry-Run Test** | Dry-Run Test / Test Runner | `Mock Run`, `Sandbox Exec` | Executes rule without database commit. |

---

## 13. Recommended Implementation Order for Future Scheduled Tasks

To systematically achieve 100% documentation coverage with high clarity and no broken dependencies, future automated scheduled tasks should execute items in the following sequence:

1. **Task 1 (P0)**: Correct terminology and layout modes in `rule-builder/canvas.md` and `action-type/assignment.md`.
2. **Task 2 (P0)**: Update dry-run testing and trace inspection in `rule-builder/debugging.md`.
3. **Task 3 (P1)**: Create Workspace user guide in `getting-started/workspace.md`.
4. **Task 4 (P1)**: Create Rule Execution Logs user guide in `execution/logs.md`.
5. **Task 5 (P1)**: Expand Smart Value System guide with Math, Text, and DateTime Resolvers in `rule-builder/smart-value-system.md`.
6. **Task 6 (P1)**: Document Query Records child-table navigation and Order By sorting in `action-type/query-records/query-list.md`.
7. **Task 7 (P2)**: Expand Rule Lifecycle with Scheduled Cron/Interval triggers and Entry Gate logic in `rule-builder/rule-lifecycle.md`.
8. **Task 8 (P2)**: Update Setup & Governance guide with `Rule Permission` and Excluded DocTypes in `setup/permissions.md` and `setup/settings.md`.
