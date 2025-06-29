# Migration Steps

## Quick PowerShell Commands to Move Files

Run these commands in PowerShell from the portfolio root directory:

```powershell
# Move all files from "GitHub Actions" to "github-actions"
Get-ChildItem "docs/guides/GitHub Actions" | ForEach-Object {
    Copy-Item $_.FullName "docs/guides/github-actions/" -Force
}

# Remove the old directory after confirming files are copied
Remove-Item "docs/guides/GitHub Actions" -Recurse -Force
```

## What We've Set Up

1. **Multi-instance docs configuration** - Separate plugins for guides and projects
2. **Custom URL routing** - `/guides/*` and `/projects/*` instead of `/docs/*`
3. **Separate sidebar files** - `sidebars-guides.ts` and `sidebars-projects.ts`
4. **Index pages** - Introduction pages for both sections

## New URL Structure

- Guides: `http://localhost:3000/guides/github-actions/`
- Projects: `http://localhost:3000/projects/`

## Next Steps

1. Run the PowerShell commands above to move the GitHub Actions files
2. Test the build with `npm run build`
3. Verify the new URLs work correctly
