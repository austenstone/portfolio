# austen.info

My personal site: portfolio, blog, and guides. Built with [Docusaurus](https://docusaurus.io/) and deployed to GitHub Pages at **[austen.info](https://austen.info)**.

## Requirements

Node `>=22.13.0`. The repo ships an [`.nvmrc`](.nvmrc), so `nvm use` picks the right version.

This project uses **npm**, not yarn. There is no `yarn.lock`.

## Getting started

```bash
npm ci      # use ci, not install, to respect the lockfile
npm start   # dev server at http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` | Dev server with hot reload |
| `npm run build` | Production build into `build/` |
| `npm run serve` | Serve the production build locally |
| `npm run typecheck` | `tsc` with no emit |
| `npm run lint` | ESLint across the repo |
| `npm run clear` | Clear the Docusaurus cache |

`typecheck` and `lint` both run in CI, so run them before pushing.

## Content

| Path | What lives there |
| --- | --- |
| [`blog/`](blog) | Blog posts. Filename sets the date, `slug:` in frontmatter sets the URL. |
| [`docs/`](docs) | Guides, including the [GitHub Actions cheat sheet](docs/guides). |
| [`src/`](src) | React components, pages, and CSS. |
| [`static/`](static) | Files copied verbatim to the site root. |

One thing worth knowing: [`docs/guides/01_Cheat Sheet.mdx`](docs/guides) renders [`.github/workflows/cheat-sheet.yml`](.github/workflows/cheat-sheet.yml) verbatim via `raw-loader`. That workflow is a live, running workflow *and* a published documentation page, so changes to it are user-facing.

## Deployment

Deployment is automatic. Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds and publishes to GitHub Pages via [`actions/deploy-pages`](https://github.com/actions/deploy-pages) using OIDC.

Pull requests run the same build as a check, but don't deploy.

**Don't run `npm run deploy`.** That's the stock Docusaurus command that pushes directly to a `gh-pages` branch, which is not how this site is published.
