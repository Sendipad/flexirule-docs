---
title: Wait
description: Pause your rule for a set amount of time.
weight: 80
---

# Wait

The **Wait** action allows you to pause your rule and wait before moving on to the next step. This is perfect for building follow-up schedules or delayed alerts.

## When to Use It
- **Follow-up Reminders**: Wait 3 days after sending a quote before sending a follow-up email.
- **Scheduled Updates**: Wait until a specific "Due Date" before changing a task's priority to "Urgent".
- **Cool-down Periods**: Wait a few hours before sending a customer satisfaction survey.

## Ways to Wait

1. **Wait for a Duration**: Pause for a specific amount of time, like "2 hours", "5 days", or "1 week".
2. **Wait Until a Date**: Pause until a specific date or time is reached. You can pick a date field from your document (like "Delivery Date") to tell the rule when to resume.

## How it Works
When a rule hits a Wait block, it "goes to sleep". The system keeps track of exactly where it stopped and which document it was working on. When the time is up, the rule "wakes up" and continues exactly where it left off.

## Tips for Success
- **Check the Calendar**: If you use "Wait until a Date", make sure the date field you choose is actually filled out on the document!
- **Background Tasks**: Rules that use Wait blocks automatically run in the background, so they won't slow down your system while they are "sleeping".
