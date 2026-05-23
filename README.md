# FlexiRule Documentation

This repository contains the source for the FlexiRule documentation site, built with [Hugo](https://gohugo.io/) and the [Doks](https://getdoks.org/) theme.

## 🚀 Live Site

The documentation is automatically deployed to:
**[https://sendipad.github.io/flexirule-docs/](https://sendipad.github.io/flexirule-docs/)**

## 🛠️ Local Development

To run the documentation site locally, follow these steps:

### Prerequisites

- [Hugo (Extended version)](https://gohugo.io/installation/)
- [Node.js](https://nodejs.org/)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sendipad/flexirule-docs.git
   cd flexirule-docs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```
   The site will be available at `http://localhost:1313/`.

## 📂 Project Structure

- `content/en/`: The main documentation content in Markdown.
- `layouts/`: Custom HTML templates, including the landing page (`index.html`).
- `static/`: Static assets such as images.
- `config/`: Hugo configuration files.
- `hugo.toml`: Main Hugo configuration.

## 🚢 Deployment

Deployment is automated via GitHub Actions. Any push to the `main` branch will trigger a build and deploy the updated site to GitHub Pages.

## ✍️ Contributing

We welcome contributions to improve the documentation! Please feel free to open a Pull Request or report issues.

---

Built for the [FlexiRule](https://github.com/Sendipad/flexirule) project.
