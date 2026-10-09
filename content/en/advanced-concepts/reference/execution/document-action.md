---
title: 'Document Action: Execution Semantics'
description: Runtime behavior, permission checks, results, and transaction boundaries for Document Action.
weight: 30
---

# Document Action: Execution Semantics

Document Action performs one of five operations: Create New, Update Existing, Delete Record, Create ToDo, or Add Comment. The selected operation determines which fields are required, which result is returned, and which permission checks apply.

## Execution lifecycle

1. **Plan hydration:** the handler obtains the compiled action plan.
2. **Input mapping:** when configured, input mappings resolve values from the current execution context and apply them to the action configuration.
3. **Permission policy:** Skip Permissions is checked through the runtime's can_ignore_permissions policy. The bypass is privileged and requires an audit reason.
4. **Mode dispatch:** the handler calls the implementation for the selected mode.
5. **Return:** the handler returns the operation result to the rule engine and continues through the action's next True path if execution succeeds.

## Mode results

- **Create New:** synchronous mode inserts a new target document and returns its saved document data. Asynchronous mode enqueues creation and returns an acknowledgement containing the queued state and target DocType, not the saved document.
- **Update Existing:** loads the target by DocType and document name, applies mappings, saves it, and returns its saved data.
- **Delete Record:** verifies the target exists, checks delete permission unless a bypass is authorized, deletes the record, and returns a result containing the deletion flag, DocType, and name.
- **Create ToDo:** inserts a ToDo linked to the current context document and returns the created ToDo data.
- **Add Comment:** inserts a Comment linked to the current context document and returns the created Comment data.

The operation contracts constrain result types and context mutation options by mode. Do not assume that every mode exposes the same result selector or produces a full document result.

## Mapping precedence and child tables

For Create New, optional same-field copying runs first, dynamic scalar mappings run next, and explicit static values run last. For Update Existing, same-field copying runs first, static values next, and dynamic scalar mappings last. If multiple sources target the same field, the later source in this order wins.

Child-table mappings are applied in Create New and Update Existing. A source must resolve to a list or tuple. Configured conditions and filters determine which rows are appended. Reset Value defaults to true in the runtime mapping config, so a configured table mapping can clear existing target rows before adding mapped rows. Add If Empty can skip a mapping when the target table already has rows.

## Context visibility

Mapping expressions can read values from the execution context, including the current document and rule variables. The created or updated record data is returned as the action result, but later actions can only use it according to the operation's configured result/mutation settings.

In asynchronous Create New mode, the background job runs separately and the action does not return the created document synchronously. The worker should not be assumed to inherit transient context objects such as the current rule variables.

## Permissions

Normal Frappe permission checks apply unless Skip Permissions is enabled and the runtime permission policy authorizes the bypass. An audit reason is required for that bypass.

- Create New uses Frappe's insert permission behavior.
- Update Existing checks write permission on the loaded target unless bypassed.
- Delete Record checks delete permission for the target unless bypassed.
- Create ToDo and Add Comment insert the specialized records using the effective permission setting.

A permission error should be resolved by checking the user's actual access and the action's policy. Do not enable a privileged bypass simply to hide a configuration or permission problem.

## Transaction behavior

Synchronous operations run in the surrounding request/rule transaction. The handler does not explicitly commit the database; transaction outcome depends on the parent request and the rule's error/rollback policy.

Asynchronous Create New runs in a separate background job and transaction. Since the main rule receives an acknowledgement before insertion completes, a background validation or worker failure may occur after the rule has continued. Inspect background job logs when an asynchronous record is missing.

## Idempotency and repeated execution

- **Create New, Create ToDo, and Add Comment** normally create another record each time they run.
- **Update Existing** may write the same values again and still trigger Frappe save hooks.
- **Delete Record** fails if the target record no longer exists; it does not silently treat a missing record as success.

Saving a target document can trigger its normal Frappe lifecycle hooks and other rules. If a rule updates a DocType/event that triggers the same rule or another dependent rule, add guards to prevent unintended repeated execution.

## Common failures

- **Target name missing:** Update Existing and Delete Record require a target record name from Reference DocName or supported config fallback.
- **Target missing:** confirm the DocType and name resolve to an existing record.
- **Mapping failure:** inspect source expressions, target fields, mapping precedence, and child-table options.
- **Validation failure:** target DocType mandatory fields and normal Frappe validation still apply.
- **Async creation missing:** inspect the queued job and worker logs; the immediate action result is only an acknowledgement.
- **ToDo/Comment validation:** verify the specialized target DocType, current context document, and required assignee/description or comment text.
