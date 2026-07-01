---
title: Setup Troubleshooting
description: Resolving issues during installation and configuration.
weight: 40
---

# Setup Troubleshooting

If you encounter issues while installing or configuring FlexiRule, check the following solutions.

## 1. App Not Found in Desk
- **Problem**: You installed the app, but "Rule List" doesn't appear in the search.
- **Solution**:
    1. Run `bench --site [your-site] install-app flexirule` again.
    2. Run `bench clear-cache`.
    3. Ensure you have the `System Manager` or `Rule Builder` role.

## 2. Rule Builder Canvas is Blank
- **Problem**: Opening the Rule Builder shows a blank page or a loading spinner that never disappears.
- **Solution**:
    1. This is usually due to missing assets. Run `bench build --app flexirule`.
    2. Check the browser console (F12) for 404 errors related to `.js` or `.css` files.
    3. If you are behind a proxy (like Nginx), ensure it is configured to serve static assets correctly.

## 3. Rules Not Triggering
- **Problem**: You created a rule, but nothing happens when you save a document.
- **Solution**:
    1. Ensure **Enable Rule Execution** is checked in **RuleFlow Settings**.
    2. Check the individual Rule document to see if it is **Enabled**.
    3. Verify that the **Trigger Event** matches the action you are taking (e.g., use "On Submit" for submitted documents).

## 4. Permission Errors
- **Problem**: Installation fails with permission denied errors.
- **Solution**: Ensure your bench user has write permissions to the `apps/flexirule` directory.
