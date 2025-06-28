# Codebase Structure

## Directory Layout
```
/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── css/               # Global styles
│   └── pages/             # Route pages
├── docs/                  # Documentation pages
│   └── projects/          # Project documentation
├── blog/                  # Blog posts
├── static/                # Static assets
│   ├── assets/           # Images, videos, screenshots
│   └── img/              # Site images/icons
├── build/                 # Generated site (git-ignored)
├── docusaurus.config.ts   # Main configuration
├── sidebars.ts           # Documentation sidebars
└── package.json          # Dependencies and scripts
```

## Key Files
- **docusaurus.config.ts**: Main site configuration, navigation, theme
- **src/pages/index.tsx**: Homepage with hero section and project showcases
- **src/pages/resume.mdx**: Resume/CV page
- **src/css/custom.css**: Global theme variables and styles
- **sidebars.ts**: Documentation navigation structure

## Content Organization
- **Blog posts**: Markdown files in `/blog/` with YAML frontmatter
- **Documentation**: Markdown files in `/docs/` for project documentation
- **Static assets**: Images, videos, screenshots in `/static/assets/`
- **Site images**: Logos, icons, favicons in `/static/img/`

## Component Architecture
- **Homepage components**: Hero section, project grids, sponsors section
- **HomepageFeatures**: Reusable feature showcase components
- **Layout**: Uses Docusaurus theme layout system
- **Styling**: CSS modules for component isolation