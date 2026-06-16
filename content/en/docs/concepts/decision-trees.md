---
title: Decision Trees
description: Guidance on choosing the right FlexiRule features.
weight: 30
aliases:
- /docs/reference/decision_trees/
---

# Decision Trees

Keywords: decision trees, best practices, feature selection, architecture

## Audience

- End Users
- Developers

## Overview

Choosing the right tool for the job is critical for building maintainable and performant rules. These decision trees help you select the most appropriate FlexiRule feature based on your requirements.

---

## 1. Updating Data

**Question**: How should I update data in my rule?

Need to update data?
├── Single field on current doc → **Assignment (Assignment)**
├── Multiple fields on current doc → **Assignment (Batch)**
├── Numeric calculation on current doc → **Assignment (Increment/Decrement)**
├── Data in a different DocType?
│   ├── Create new record → **Document Action (Create)**
│   └── Update existing record → **Document Action (Update)**
└── Complex logic or external system?
    ├── Simple REST API → **API Action** (or Process)
    └── Complex Python logic → **Process Action**

---

## 2. Conditional Logic

**Question**: Which branching node should I use?

Need to branch execution?
├── Simple Yes/No check → **Condition Action**
├── Check against a child table?
│   ├── "Does any row match?" → **Condition (Any)**
│   ├── "Do all rows match?" → **Condition (All)**
│   └── "Do no rows match?" → **Condition (None)**
└── Multiple possible outcomes based on one field?
    ├── Status/Category check → **Switch Action**
    └── Complex multi-variable check → **Nested Conditions**

---

## 3. Data Retrieval

**Question**: How should I fetch data from the database?

Need data from the database?
├── Single record by Name/ID → **Query Records (Query Doc)**
├── Check if a record exists → **Query Records (Exist Record)**
├── Get a list of records → **Query Records (Query List)**
└── Perform a calculation (Sum, Count, Avg)?
    ├── Across many records → **Query Records (Aggregate)**
    └── Across child table rows → **Assignment (Formula Resolver)**

---

## 4. Iteration

**Question**: How should I process a list of items?

Need to process a collection?
├── Validate or Update every row → **Loop Action**
├── Find a specific item → **Loop Action + Condition + Stop**
└── Summarize data into a single value?
    ├── Simple Sum/Count → **Assignment (Formula Resolver)**
    └── Complex logic per row → **Loop Action + Assignment**

---

## Related Topics

- [Glossary]({{< relref "docs/reference/glossary.md" >}})
- [Rule Builder]({{< relref "docs/user-guide/rule-builder.md" >}})
- [Action Zone]({{< relref "docs/actions/" >}})
