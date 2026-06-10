---
title: "Deployment Guide"
description: "Instructions for deploying FlexiRule documentation to different repositories and branches."
weight: 110
---

# Deployment Guide

FlexiRule documentation is built using Hugo and deployed via GitHub Actions. The deployment process is configurable, allowing you to publish the site to the current repository or an external repository (like the main FlexiRule repository).

## Configuration Variables

The deployment workflow uses GitHub Actions **Variables** and **Secrets** to determine the deployment target.

### Variables

Go to **Settings > Secrets and variables > Actions > Variables** in your GitHub repository to configure these:

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `DEPLOY_REPOSITORY` | The target repository in `owner/repo` format. | Current repository |
| `DEPLOY_BRANCH` | The target branch for deployment. | `gh-pages` |
| `HUGO_BASEURL` | The base URL for the generated site. | `https://sendipad.github.io/flexirule-docs/` |

### Secrets

Go to **Settings > Secrets and variables > Actions > Secrets** to configure these:

| Secret | Description | Required For |
| :--- | :--- | :--- |
| `DEPLOY_TOKEN` | A Fine-Grained Personal Access Token (PAT). | External repository deployment |

#### DEPLOY_TOKEN Permissions
The PAT requires the following permissions on the **target** repository:
- **Contents**: Read and Write
- **Metadata**: Read

---

## Deployment Scenarios

### 1. Deploying to the Current Repository (`flexirule-docs`)

This is the default behavior if no variables are configured.

1. Ensure GitHub Pages is enabled for your repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Pushing to the `develop` branch will automatically build and deploy the site.

### 2. Deploying to an External Repository (e.g., `Sendipad/flexirule`)

To deploy the documentation from `flexirule-docs` to the `gh-pages` branch of the `flexirule` repository:

1. **Configure Variables** in `flexirule-docs`:
   - `DEPLOY_REPOSITORY`: `Sendipad/flexirule`
   - `DEPLOY_BRANCH`: `gh-pages`
   - `HUGO_BASEURL`: `https://sendipad.github.io/flexirule/`

2. **Configure Secret** in `flexirule-docs`:
   - `DEPLOY_TOKEN`: [Your Fine-Grained PAT]

3. **Trigger Deployment**:
   - Push a change to the `develop` branch.
   - Or, manually trigger the workflow from the **Actions** tab by selecting **Deploy Hugo site to Pages** and clicking **Run workflow**.

---

## Technical Details

The deployment is handled by the `.github/workflows/hugo.yml` workflow.

- **Local Deployment**: Uses `actions/deploy-pages@v5`. This is used when `DEPLOY_REPOSITORY` is empty or matches the current repository.
- **External Deployment**: Uses `peaceiris/actions-gh-pages@v4`. This is used when `DEPLOY_REPOSITORY` is set to a different repository. It requires `DEPLOY_TOKEN` to authenticate and push to the external target.
