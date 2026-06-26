---
title: FAQ
description: Frequently asked questions about FlexiRule.
weight: 20
---

# Frequently Asked Questions

### Is FlexiRule free?
FlexiRule is an open-source project. You can use it, modify it, and contribute to it under the license provided in the repository.

### Does it replace Server Scripts?
Not necessarily. While FlexiRule can handle most logic previously done in Server Scripts, Server Scripts are still useful for low-level system hooks or very specific Python logic that doesn't benefit from visual orchestration.

### How do I debug a failing rule?
1. Use the **Test Run** feature in the Rule Builder to see a visual trace.
2. Check the **Rule Execution Log** for detailed error messages and tracebacks.
3. Use the **Simulate** API for deep variable inspection.

### Can I run rules on a schedule?
Yes. Change the **Rule Type** to "Scheduled" and define a CRON expression or select a frequency (e.g., Every Hour).

### Can I call one rule from another?
Yes. Use the **Sub-rule** action. This allows you to create modular, reusable logic blocks.
