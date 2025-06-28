# GitHub Admonitions Test

This page demonstrates the GitHub-style admonitions functionality, showing how GitHub's `> [!TYPE]` syntax is transformed into native Docusaurus admonitions.
## Basic Admonitions

### Note
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

### Tip
> [!TIP]
> Optional information to help a user be more successful.

### Important
> [!IMPORTANT]
> Crucial information necessary for users to succeed.

### Warning
> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

### Caution
> [!CAUTION]
> Negative potential consequences of an action.

### Note with Custom Title

> [!NOTE] Pro Tip
> This note admonition has a custom title instead of the default "Note".

### Important with Custom Title

> [!IMPORTANT] Critical Information
> This important admonition has a custom title that replaces the default.

### Warning with Custom Title
> [!WARNING] Security Alert
> This warning has a custom title to provide more specific context.

## Multi-line Content

### Complex Note
> [!NOTE]
> This is a multi-line note admonition that demonstrates:
> - Support for multiple paragraphs
> - Preservation of markdown formatting
> - Proper line break handling

### Tip with Code
> [!TIP] Development Best Practice
> When working with GitHub Actions, always use:
> ```yml hljs
> - name: Checkout code
>   uses: actions/checkout@v4
> ```
> This ensures you're using the latest stable version.

### Important with Lists
> [!IMPORTANT]
> Before deploying to production, make sure you have:
> 
> 1. Run all tests locally
> 2. Updated the version number
> 3. Created a backup of the current deployment
> 4. Notified the team about the deployment

## Testing Edge Cases

### Nested Markdown Elements
> [!WARNING]
> This warning contains **bold text**, *italic text*, and even [links](https://github.com).
> 
> It also includes:
> - Bullet points
> - `inline code`
> - Multiple paragraphs
> 
> This tests the robustness of the transformation plugin.

### Empty Admonition
> [!CAUTION]

### Minimal Admonition
> [!TIP]
> Short tip.

## Visual Comparison

The admonitions above should match GitHub's styling:
- **Note**: Blue theme with info icon
- **Tip**: Green theme with lightbulb icon
- **Important**: Purple theme with megaphone icon  
- **Warning**: Yellow/orange theme with warning triangle
- **Caution**: Red/orange theme with stop sign icon

## Implementation Details

These admonitions are processed by:
1. **Remark Plugin**: Transforms GitHub `> [!TYPE]` syntax to Docusaurus `:::type` directives
2. **Custom Components**: Provides React components for IMPORTANT and CAUTION types
3. **GitHub-style CSS**: Matches GitHub's visual design and color scheme
4. **Theme Integration**: Works seamlessly with Docusaurus light/dark themes
