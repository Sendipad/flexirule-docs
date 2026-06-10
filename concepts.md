# FlexiRule System Concepts: Canonical Glossary

This document formalizes the canonical mental model of FlexiRule as implemented in its source code. It serves as a machine-accurate conceptual map for developers and architects.

---

## 1. Core Execution Concepts

### **Rule**
*   **Code Evidence**: `flexirule/ruleflow/doctype/rule/rule.py` (Class `Rule`)
*   **Definition**: The primary unit of logic definition. A persistent container for a directed graph of Actions, Trigger configurations, and metadata (priority, execution mode).
*   **Role in Execution Flow**: Serves as the source of truth for the `RuleEngine`. It is compiled into a runtime specification before execution.
*   **Relationships**: Contains multiple **Actions**; triggered by **Triggers**; executed by the **Rule Engine**.

### **Rule Coordinator**
*   **Code Evidence**: `flexirule/ruleflow/core/coordinator.py` (Class `RuleCoordinator`)
*   **Definition**: A high-level dispatcher responsible for rule discovery, eligibility filtering, and lifecycle management (caching, re-entry guarding).
*   **Role in Execution Flow**: The entry point for all Frappe-integrated events. It manages the **Runtime Registry** and ensures rules only run when appropriate.
*   **Relationships**: Dispatches execution to the **Rule Engine**; interfaces with **Frappe Hooks**.

### **Rule Engine**
*   **Code Evidence**: `flexirule/ruleflow/core/engine.py` (Class `RuleEngine`)
*   **Definition**: The graph-traversal runtime that manages the lifecycle of a single rule execution. It handles state management, error recovery, and action dispatching.
*   **Role in Execution Flow**: Executes the compiled graph of Actions.
*   **Relationships**: Initializes the **Execution Context**; invokes **Action Handlers**.

### **Execution Context**
*   **Code Evidence**: `flexirule/ruleflow/core/engine.py` (`RuleEngine._initialize_context`), `flexirule/ruleflow/core/context_manager.py` (Class `ContextManager`)
*   **Definition**: A stateful dictionary containing the current document (`doc`), previous state (`old_doc`), variables (`vars`), metadata (`meta`), and system proxies (`frappe`).
*   **Role in Execution Flow**: Serves as the shared memory for all nodes in an execution path.
*   **Relationships**: Managed by the **Rule Engine**; mutated by **Actions** via the **Context Manager**.

### **Node Execution**
*   **Code Evidence**: `engine.py` (`RuleEngine._execute_graph`)
*   **Definition**: The atomic invocation of an **Action Handler** with the current **Execution Context**. Each execution produces a result and determines the `next_id` for traversal.

### **Flow Traversal**
*   **Code Evidence**: `engine.py` (`RuleEngine._execute_graph`)
*   **Definition**: A sequential, state-based iteration through the action graph. The engine follows a single pointer (`current`) through nodes until a terminal state or dead end is reached.

---

## 2. Trigger Layer Concepts

### **Trigger Type: DocType Event**
*   **Code Evidence**: `contracts.py` (`TRIGGER_TYPE_CONTRACT`), `coordinator.py` (`execute_rules_from_event`)
*   **Source**: Frappe Document Events (hooks).
*   **Execution Entry**: Initiated by `flexirule.ruleflow.hooks.execute_rules` via `doc_events`.
*   **Payload**: The active Frappe Document object (`doc`) and its pre-save state (`old_doc`).

### **Trigger Type: Scheduler Event**
*   **Code Evidence**: `rule_scheduler.py`, `scheduler.py`
*   **Source**: Frappe Scheduler (`scheduler_events`).
*   **Execution Entry**: `check_scheduled_rules` enqueues `run_scheduled_rule` for due `Rule Scheduler` records.
*   **Payload**: A batch of document references identified by `filter_json`.

### **Trigger Type: Callable Event**
*   **Code Evidence**: `contracts.py`, `api.py` (`execute_rule`)
*   **Source**: REST API, internal Python calls, or **Sub-Rule** actions.
*   **Execution Entry**: Manual invocation via `RuleCoordinator.execute_rule`.
*   **Payload**: Explicitly provided `vars` and an optional document reference.

---

## 3. Action System Concepts

### **Action (Node)**
*   **Code Evidence**: `rule_action.json`, `engine.py` (`_execute_graph`)
*   **Definition**: A discrete node in the Rule graph representing a specific operation.
*   **Input Behavior**: Configuration is stored as JSON in `config` and resolved at runtime via the **Value Resolver**.
*   **Output Behavior**: Results are stored in `vars` (via `return_variable`) or applied to the `doc` (via `mutation_mode`).
*   **Transaction Behavior**: Actions can be wrapped in database savepoints. See `RuleEngine._execute_graph` error handling (Rollback mode).

### **Action Handler**
*   **Code Evidence**: `flexirule/ruleflow/core/action_handlers/` (Abstract Class `ActionHandler`)
*   **Definition**: The Python implementation of an action type's logic.
*   **Implementation Location**: `assignment.py`, `condition.py`, `create_doc.py`, `loop.py`, `process.py`, `query_records.py`, `simple_actions.py`, `sub_rule.py`, `switch.py`.

---

## 4. Condition System Concepts

### **Condition Node**
*   **Code Evidence**: `action_handlers/condition.py`
*   **Definition**: A branching node that evaluates logic to determine whether to follow the `next_step_if_true` or `next_step_if_false` path.

### **Expression Evaluation System**
*   **Code Evidence**: `compiler.py` (Class `ConditionCompiler`), `runtime_eval.py`
*   **Definition**: A two-stage system:
    1.  **Save-time**: JSON logic trees are compiled into Python Boolean strings.
    2.  **Runtime**: Compiled strings are evaluated via `frappe.safe_eval` in a restricted context.

### **Boolean Grouping Logic**
*   **Code Evidence**: `compiler.py` (`_compile_group`)
*   **Definition**: Recursive nesting of conditions using `and`/`or` operators.

### **Quantifiers (Any/All)**
*   **Code Evidence**: `compiler.py` (`_compile_collection`)
*   **Definition**: Logic that iterates over a collection (child table) to return a single Boolean based on whether `any` or `all` rows match a criteria.

### **Short-circuit Behavior**
*   **Code Evidence**: `compiler.py`, `evaluator.py`
*   **Definition**: Implemented via Python's native `and`, `or`, `any()`, and `all()` in compiled expressions. In the legacy `ConditionEvaluator`, it is NOT implemented (iterates all).

---

## 5. Variable & Context System

### **Execution Context Object**
*   **Code Evidence**: `engine.py` (`_initialize_context`)
*   **Structure**: A dictionary with top-level keys: `doc`, `old_doc`, `vars`, `item`, `loop`, `frappe`, `meta`, `stop`.

### **Variable Namespace System**
*   **Code Evidence**: `value_resolver.py` (`get_context_value`)
*   **Namespaces**:
    *   `doc`: Access to Frappe Document fields.
    *   `vars`: Custom runtime variables.
    *   `loop`: Internal iteration state.

### **Mutation Behavior**
*   **Code Evidence**: `context_manager.py` (`apply_mutation`)
*   **Modes**: `Set Doc Field`, `Update Doc Field`, `Set Context Variable`, `Update Context Variable`, `Append to Context Variable`, `Batch Database Set`.

### **Data Propagation**
*   **Code Evidence**: `engine.py` (`_execute_graph`)
*   **Definition**: Continuous passage of the `context` dictionary through successive action handler calls.

---

## 6. Flow & Graph Execution Model

### **Node Graph Model**
*   **Code Evidence**: `Rule` DocType (`actions` table), `graph_validator.py`
*   **Definition**: A Directed Graph where nodes (Actions) are connected by directed edges (`next_step_if_true`, `next_step_if_false`, or `Switch` cases).

### **Traversal Strategy**
*   **Code Evidence**: `engine.py` (`_execute_graph`)
*   **Strategy**: Iterative pointer-following. It is a linear execution of a single path, not a branch-exploring traversal.

### **Loop Behavior**
*   **Code Evidence**: `action_handlers/loop.py`
*   **Definition**: A non-recursive iteration mechanism. Each "iteration" of the `Loop` action handler advances an index in `vars._loops`, executes the `true` path, and eventually exits via the `false` path.

### **Sub-Rule Execution Model**
*   **Code Evidence**: `action_handlers/sub_rule.py`
*   **Model**: Synchronous, nested invocation of the `RuleEngine`. Uses **Sub-Rule Isolation** (Overlay Context) to protect parent state.

### **Cycle Detection**
*   **Save-time**: `graph_validator.py` uses DFS with a recursion stack to block unintentional cycles.
*   **Runtime**: `RuleEngine` maintains `node_visits` counts to prevent infinite loops (limit: 100).

---

## 7. Integration Concepts (Frappe Layer)

### **Hook Integration Model**
*   **Code Evidence**: `hooks.py`
*   **Definition**: Global registration of `execute_rules` on all DocTypes (`*`).

### **Watched Fields**
*   **Code Evidence**: `coordinator.py` (`_extract_watched_fields`, `_passes_watched_field_filter`)
*   **Definition**: An optimization concept where a rule only executes if the fields changed in the document intersect with the fields it "watches" (derived from trigger conditions).

### **Scheduler Integration**
*   **Code Evidence**: `scheduler.py`, `rule_scheduler.py`
*   **Definition**: Integration with Frappe's `scheduler_events` to trigger batch processing via `Rule Scheduler` records.

---

## 8. System-Level Abstractions

### **Process (DocType)**
*   **Code Evidence**: `flexirule/ruleflow/doctype/process/process.py`
*   **Definition**: A metadata container for file-backed Python logic. Acts as a "Logic Provider" for the action system.

### **Runtime Registry**
*   **Code Evidence**: `coordinator.py` (`_build_runtime_registry`)
*   **Definition**: A Redis-cached, compiled index of all active rules and their triggering metadata.

### **Execution Logger**
*   **Code Evidence**: `engine.py` (`_save_execution_log`), `rule_execution_log/`
*   **Definition**: An asynchronous subsystem for persisting execution telemetry (path trace, context).

### **Compilation Layer**
*   **Code Evidence**: `rule.py` (`compile_conditions`, `compile_action_templates`)
*   **Definition**: The set of methods that transform visual configuration (JSON) into optimized runtime artifacts (Python, Jinja).

### **Validation Layer**
*   **Code Evidence**: `validation_service.py`, `graph_validator.py`
*   **Definition**: A set of services that enforce structural and semantic integrity of Rules and Actions before they are permitted to activate.
