# Icon Concept Proposal: Action vs. Action Operation

To improve visual discoverability and distinguish between a high-level action category and its specific operational modes, we propose a two-tier icon system.

## 1. The "Action" Icon
**Concept**: A "Terminal" or "Box" metaphor representing a functional block or a node in a flow.
**Visual Style**: Solid, slightly heavier weight to denote a primary entity.

### SVG Snippet
```svg
<!-- Action Icon: Represents the functional block -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
  <line x1="8" y1="21" x2="16" y2="21"></line>
  <line x1="12" y1="17" x2="12" y2="21"></line>
</svg>
```

---

## 2. The "Action Operation" Icon
**Concept**: A "Sub-node" or "Actionable Item" metaphor, often depicted as a branching line or a specialized command icon.
**Visual Style**: Lighter weight, perhaps utilizing a "chevron-right" or "bullet" style to indicate it is a child of an Action.

### SVG Snippet
```svg
<!-- Action Operation Icon: Represents a specific behavior within an action -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="9 6 15 12 9 18"></polyline>
  <line x1="3" y1="12" x2="15" y2="12"></line>
</svg>
```

---

## Usage Example
In a sidebar or navigation list, the distinction would look like this:

- [**Action**] Document Action
    - [**Operation**] Create New
    - [**Operation**] Update Existing

## Benefits
1. **Hierarchical Clarity**: Users can instantly distinguish between a category (Action) and a specific task (Operation).
2. **Search Results**: In a search UI, icons help users identify whether a result is a general guide or a specific configuration reference.
3. **Contributor Experience**: Clear visual cues help contributors understand where new content should be placed within the hierarchy.
