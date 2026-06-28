---
title: Timespan Keywords
description: Reference for natural language date keywords in FlexiRule.
weight: 10
type: docs
---

# Timespan Keywords

Timespan keywords allow you to filter records by relative time without manually calculating dates. When a keyword like `last month` is used, the engine automatically resolves it into a static date range at the moment of execution.

---

## Past Relative Dates

| Keyword | Resolution |
| :--- | :--- |
| `today` | The current calendar day. |
| `yesterday` | The previous calendar day. |
| `last week` | Monday to Sunday of the previous week. |
| `last month` | 1st to last day of the previous calendar month. |
| `last quarter` | All days within the previous fiscal quarter. |
| `last year` | Jan 1st to Dec 31st of the previous year. |
| `last 7 days` | From 7 days ago until today. |
| `last 30 days` | From 30 days ago until today. |
| `last 90 days` | From 90 days ago until today. |
| `last 6 months` | From 6 months ago until today. |

---

## Future Relative Dates

| Keyword | Resolution |
| :--- | :--- |
| `tomorrow` | The next calendar day. |
| `next week` | Monday to Sunday of the following week. |
| `next month` | 1st to last day of the next calendar month. |
| `next quarter` | All days within the next fiscal quarter. |
| `next year` | Jan 1st to Dec 31st of the next year. |
| `next 7 days` | From today until 7 days in the future. |
| `next 30 days` | From today until 30 days in the future. |
| `next 6 months` | From today until 182 days in the future. |

---

## Current Period Dates

| Keyword | Resolution |
| :--- | :--- |
| `this week` | Monday of current week to coming Sunday. |
| `this month` | 1st day to last day of the current month. |
| `this quarter` | All days within the current fiscal quarter. |
| `this year` | Jan 1st to Dec 31st of the current year. |

---

## Implementation Details

- **Timezone**: All keywords are resolved using the system timezone configured in your Frappe instance.
- **Reference Time**: Keywords are resolved relative to the exact moment the action is executed.
- **Precision**: Most keywords resolve to full days (00:00:00 to 23:59:59).
- **Fallback**: If an unknown keyword is provided, the engine defaults to `today` to prevent execution errors, while logging a warning.
