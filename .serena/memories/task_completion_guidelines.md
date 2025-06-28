# Task Completion Guidelines

## When a Coding Task is Complete

### 1. Code Quality Checks
- **Type checking**: Run `yarn typecheck` or `tsc` to ensure no TypeScript errors
- **Build verification**: Run `yarn build` to ensure the site builds successfully
- **Local testing**: Run `yarn start` to test changes in development mode

### 2. Content Validation
- Verify all markdown/MDX files have proper frontmatter
- Check that images and assets are properly referenced
- Ensure all internal links are working

### 3. Responsive Design Testing
- Test on mobile, tablet, and desktop viewports
- Verify dark/light theme switching works properly
- Check that all interactive elements function correctly

### 4. Performance Considerations
- Optimize images before adding to static assets
- Keep bundle size reasonable
- Ensure fast loading times

### 5. Deployment Preparation
- Commit changes with descriptive messages
- Push to main branch for GitHub Pages deployment
- Verify deployment succeeds

## Missing Development Tools
The project currently lacks:
- **Linting**: No ESLint configuration
- **Code formatting**: No Prettier setup
- **Testing**: No Jest or testing framework
- **Pre-commit hooks**: No Husky or lint-staged

## Recommended Additions
Consider adding these tools for better development experience:
- ESLint with TypeScript support
- Prettier for code formatting
- Jest for testing React components
- Husky for git hooks
- GitHub Actions for CI/CD