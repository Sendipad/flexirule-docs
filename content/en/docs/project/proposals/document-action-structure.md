# Proposed Documentation Hierarchy: Document Action

To improve discoverability and reduce cognitive load, the Document Action documentation will be refactored into a Branch Bundle structure.

## Hierarchy

```text
content/en/docs/actions/document-action/
├── _index.md             # Parent Page: Overview, Capabilities, Navigation
├── create-new.md         # Operation: Create New
├── update-existing.md    # Operation: Update Existing
├── delete-record.md      # Operation: Delete Record
├── create-todo.md        # Operation: Create ToDo
└── add-comment.md        # Operation: Add Comment
```

## Page Responsibilities

### 1. Parent Page (`_index.md`)
- **Kind**: `action`
- **Focus**: High-level intent, common configuration (DocType selection, Return Variable), and a "catalog" of the operations below.
- **Navigation**: Acts as a hub for all document-related operations.

### 2. Operation Pages (`*.md`)
- **Kind**: `action_operation`
- **Focus**: Operation-specific configuration (e.g., Resource Mapper for `Create`, ToDo description for `Create ToDo`), specific inputs/outputs, and tailored examples.
- **Benefits**: Allows for deep-linking directly to a specific operation (e.g., linking from a ToDo guide directly to `create-todo.md`).
