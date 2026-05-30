# Hugo Theme Agent Context

This repository contains a standalone Hugo theme.

## Architecture & Tools
- Built using **Hugo Extended** (for Sass/SCSS pipeline support).
- Frontend framework assets are located in `/static/` or managed via `assets/` (Pipes).
- Content and layout configurations for testing are located inside the `/exampleSite` directory.

## Build and Verification Commands
To test if layouts, partials, or styles break the build, navigate to the test site and run the compiler:
1. `cd /app/exampleSite`
2. `hugo --gc`

Ensure no template parsing or missing variable errors occur during execution.
