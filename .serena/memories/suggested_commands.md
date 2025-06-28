# Suggested Commands for Development

## Package Management
**Note**: The project is configured for Yarn, but Yarn is not available in the current environment.

## Development Commands
```bash
# Start development server (with live reload)
yarn start
# Alternative: docusaurus start

# Build for production
yarn build
# Alternative: docusaurus build

# Type checking
yarn typecheck
# Alternative: tsc

# Serve built site locally
yarn serve
# Alternative: docusaurus serve

# Clear cache and build artifacts
yarn clear
# Alternative: docusaurus clear
```

## Deployment Commands
```bash
# Deploy to GitHub Pages (with SSH)
USE_SSH=true yarn deploy

# Deploy to GitHub Pages (with HTTPS)
GIT_USER=<username> yarn deploy
```

## Utility Commands
```bash
# Generate translations
yarn write-translations

# Generate heading IDs
yarn write-heading-ids

# Swizzle theme components (advanced customization)
yarn swizzle
```

## Windows-Specific Commands
Since the environment is Windows with PowerShell:
```powershell
# Directory navigation
Get-ChildItem (dir/ls equivalent)
Set-Location <path> (cd equivalent)

# File operations
Get-Content <file> (cat equivalent)
Select-String -Pattern <pattern> <file> (grep equivalent)

# Git operations
git status
git add .
git commit -m "message"
git push
```

## Testing and Quality
The project currently has no linting or testing setup, which is a gap that should be addressed.