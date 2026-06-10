---
title: "Deployment Guide"
description: "Instructions for deploying FlexiRule documentation to different repositories and branches."
weight: 110
---

# Deployment Guide

FlexiRule documentation is built using Hugo and deployed via GitHub Actions. There are two main workflows for deployment: local and external.

## 1. Local Deployment (Current Repository)

The **Deploy Hugo site to Pages** workflow handles deployment to the current repository's GitHub Pages.

- **Triggers**:
  - Automatically on push to the `develop` branch.
  - Manually via `workflow_dispatch`.
- **Requirements**:
  - GitHub Pages must be enabled for the repository.
  - **Settings > Pages > Build and deployment > Source** must be set to **GitHub Actions**.

## 2. External Deployment (Manual)

The **Deploy Hugo site to External Repository** workflow allows you to publish the documentation to a different repository (e.g., the main FlexiRule repository).

- **Trigger**: Manually via `workflow_dispatch`.
- **Inputs**:
  - `repository`: The target repository in `owner/repo` format (Default: `Sendipad/flexirule`).
  - `branch`: The target branch for deployment (Default: `gh-pages`).
  - `base_url`: The base URL for the generated site (Default: `https://sendipad.github.io/flexirule/`).

### Setup for External Deployment

To use the external deployment workflow, you must configure a secret in the documentation repository:

1. **Create a Fine-Grained PAT**:
   - Create a Personal Access Token with the following permissions on the **target** repository:
     - **Contents**: Read and Write
     - **Metadata**: Read
2. **Add Secret**:
   - Go to **Settings > Secrets and variables > Actions > Secrets** in the documentation repository.
   - Add a new secret named `DEPLOY_TOKEN` with your PAT as the value.

### Running External Deployment

1. Go to the **Actions** tab in the documentation repository.
2. Select the **Deploy Hugo site to External Repository** workflow.
3. Click **Run workflow**.
4. (Optional) Adjust the `repository`, `branch`, and `base_url` inputs if needed.
5. Click **Run workflow** again to start the build and deployment process.
