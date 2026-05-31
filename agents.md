# Hugo Custom Theme & Site Agent Context

This repository contains a custom Hugo site and theme layout architecture. 

## Architecture & Tools
- **Engine:** Built using **Hugo Extended (v0.162.1+)** to native-compile Sass/SCSS pipelines and optimize modern asset bundles.
- **Theme Handling:** This project uses a custom theme implementation. Layouts are designed to be read either directly from the root `/layouts/` directory (Root-Level Layouts) or isolated within a nested custom folder under `/themes/`.
- **Assets:** Asset management utilizes Hugo Pipes. Static elements belong in `/static/`, while processed styles/scripts are managed within `/assets/`.

## Layout & Template Customization Rules
When creating or modifying layout templates, strictly follow Hugo’s lookup order and block logic to prevent compilation failures:
1. **Base Skeleton:** All major pages must inherit from `layouts/_default/baseof.html`. Ensure it defines essential structural blocks like `{{ block "main" . }}{{ end }}`.
2. **Context Safety:** Always evaluate the dot context (`.`) when invoking partials or parameters. Use defensive checks like `{{ with .Params.variable }}` or `{{ if isset .Params "variable" }}` when rendering optional content blocks.
3. **Clean Generation:** Ensure custom HTML elements use correct self-closing structures and execute semantic HTML5 logic.

## Build and Verification Commands
To verify that structural layout updates, partial templates, or shortcodes have not broken the compiler compilation pipeline, execute the following validation steps:

1. Navigate to the execution root:
    ```bash
    cd /app
    ```
2. Run a garbage collection and minify compiler pass:
    ```bash
    hugo --gc --minify
    ```

*Note: If an `exampleSite` directory is explicitly added in future updates, shift directory context (`cd exampleSite`) prior to running the compiler command.*

Ensure zero parsing errors, missing context variables, or syntax faults occur during output production.

## Hugo Configuration Standards (v0.158.0+)
When creating, modifying, or refactoring site configurations (`hugo.toml` or `config.toml`), strictly adhere to the updated Hugo standards to prevent build warnings or failures:

1. **Localization over Language Codes:** - DO NOT use the deprecated `languageCode` key at the root level.
    - DO use `locale` instead.
    - Example: `locale = 'en-us'`

2. **Language Labels:**
    - DO NOT use `languageName` inside language definitions.
    - DO use `label` instead.
    - Example: `languages.en.label = 'English'`

3. **Strict Table Nesting:** - Avoid creating standalone root keys for specific language abbreviations (e.g., setting a raw `en` block). Ensure all language configurations are explicitly nested under the correct `[languages.en]` map.
