# Code Style and Conventions

## TypeScript Configuration
- Uses `@docusaurus/tsconfig` as base configuration
- Strict type checking enabled
- Base URL set to "." for absolute imports

## React Components
- Functional components with TypeScript
- Props interfaces defined with explicit types
- Use of React hooks (useDocusaurusContext)
- CSS modules for component-specific styling

## File Organization
- Components in `src/components/`
- Pages in `src/pages/` 
- Global styles in `src/css/custom.css`
- CSS modules use `.module.css` suffix
- Static assets in `static/` directory

## Naming Conventions
- Components use PascalCase (e.g., `HomepageHeader`, `MainProjects`)
- CSS classes use camelCase in modules
- Files use kebab-case for markdown content
- Functions use camelCase

## Styling Approach
- CSS custom properties for theming
- Infima CSS framework (Docusaurus default)
- Responsive design with mobile-first approach
- Dark/light theme support built-in
- Component-specific styles via CSS modules
- Global styles for typography and layout

## Content Structure
- Markdown/MDX for documentation and blog posts
- YAML frontmatter for metadata
- Clear separation between content and presentation