---
title: "API Usage"
date: 2025-05-01
weight: 40
---

# API Usage

FlexiRule provides a robust REST API for evaluating rules.

## Evaluate Endpoint

`POST /api/v1/evaluate`

### Request Body

```json
{
  "rule": "Discount",
  "data": {
    "customer": {
      "total": 150
    }
  }
}
```
