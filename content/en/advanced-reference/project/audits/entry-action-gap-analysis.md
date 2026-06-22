---
title: Entry Action Gap Analysis
description: The "Entry Action" is mentioned in several high-level overview pages
  but lacks formal documentation within the FlexiRule 3-layer framework.
weight: 30
---
# Gap Analysis: Entry Action Documentation

## 1. Current State
The "Entry Action" is mentioned in several high-level overview pages but lacks formal documentation within the FlexiRule 3-layer framework.

### References Found:
- **User Guide (Rule Builder)**: Identifies it as the starting point.
- **How Rules Execute**: Mentions it as the beginning of the action execution path.
- **Architecture (Runtime/UI Overviews)**: References it as the BFS root or engine starting point.

## 2. Identified Gaps

### Layer 1: Action Documentation
- **Missing**: No dedicated page in `content/en/docs/actions/entry/index.md`.
- **Inconsistency**: Users might be confused whether "Entry" is a node, a trigger, or an action. The UI calls it "TRIGGER" or "Start", but the code calls it "Entry Action".
- **Detail**: No explanation of its passthrough nature or its role in anchoring the initial context (`doc`, `vars`).

### Layer 2: Execution Semantics
- **Missing**: No reference in `content/en/docs/reference/execution/`.
- **Detail**: No formal documentation on how the engine selects the entry node if multiple exist (though validation prevents this), or how it initializes the `RuleEngine` context during the first "step".

### Layer 3: Architecture Reference
- **Missing**: No technical reference in `content/en/docs/architecture/actions/`.
- **Detail**: The relationship between `EntryActionHandler`, `HandlerRegistry`, and `RuleEngine` is not explicitly documented.

## 3. Implementation vs. Documentation Discrepancies
- **Naming**: The code consistently uses `Entry Action`, while the UI components use `StartNode` and label it `TRIGGER`. Documentation should bridge this by explaining that the Entry Action *represents* the trigger's entry into the logic graph.
- **Configurability**: Contracts mark it as `configurable: False`, but it holds metadata like `document_type` and `trigger_event` which come from the Rule header. This "inherited configuration" needs clarification.

## 4. Recommendations
- Create the 3-layer documentation set.
- Standardize on "Entry Action" as the formal name while acknowledging the "Start" and "Trigger" labels used in the UI.
- Explain the "structural" nature of this action—it performs no work but provides the execution anchor.
