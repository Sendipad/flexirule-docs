---
title: Which Action Should I Use?
weight: 5
description: Choose the right FlexiRule action based on the business outcome you need.
---

# Which Action Should I Use?

Start with the business outcome, then choose the smallest action that clearly expresses it.

| If you need to… | Start with |
|---|---|
| Make a true/false decision | **Condition** |
| Choose among several cases | **Switch** |
| Repeat steps for a collection | **Loop** |
| Stop execution or raise an error | **Stop & Error** |
| Pause or defer supported work | **Wait** |
| Reuse another rule | **Sub-Rule** |
| Set a field or variable | **Assignment / Set Value** |
| Read records or calculate a result | **Query Records** |
| Update a document | **Update Record** |
| Send a notification | **Notify** |
| Run a reusable server-side process | **Process** |

## Rule of thumb

**Decide** → Condition or Switch  
**Read** → Query Records  
**Change data** → Assignment or Update Record  
**Tell someone** → Notify  
**Repeat** → Loop  
**Reuse logic** → Sub-Rule  
**Technical/custom operation** → Process

See the individual action guides for exact supported behavior.
