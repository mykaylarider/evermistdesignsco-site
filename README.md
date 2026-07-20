# EvermistDesignsCo Website

GitHub Pages-ready static website for EvermistDesignsCo.

## Sprint 1 Scope

- Project structure in `site/`
- Homepage with hero, navigation, featured product, category paths, and free library callout
- Basic shop, resources, about, contact, and affiliate disclosure pages
- Responsive navigation bar
- GitHub Pages workflow in `.github/workflows/pages.yml`

## Local Preview

Open `site/index.html` in a browser.

## GitHub Pages Setup

1. Push this repository to GitHub.
2. Push to the `main` branch or run the workflow manually.
3. The deploy workflow configures Pages automatically (`actions/configure-pages` with `enablement: true`).

The workflow publishes the `site/` folder only, so private working assets and product packages outside `site/` are not deployed.
