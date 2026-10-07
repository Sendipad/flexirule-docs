---
title: Wait
description: Pause execution for a configured duration.
weight: 60
---

# Wait

**Wait** pauses execution for a configured duration and then continues through its normal next step.

## Configuration

The Action Type uses **WaitConfig**.

The current handler supports a duration in seconds. If no duration is configured, it can fall back to the Rule Action timeout value.

This is a duration wait; it is not a generic “wait until date” scheduler.

## Flow

Wait has one normal outbound path and no False branch.

## When to use it

Use Wait where a delay is appropriate for the rule's execution context.

For long-running workflows, verify the trigger and execution model before introducing a synchronous delay.

## Common mistake

Do not document an “Until Date” mode unless that capability is present in the installed application contract.
