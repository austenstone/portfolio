---
mode: agent
---

# Goal
Implement complete GitHub-style admonitions support in Docusaurus using TypeScript. Transform GitHub's blockquote syntax (`> [!TYPE]`) into Docusaurus native admonitions (`:::type`) while maintaining visual parity with GitHub's styling.

## Supported Admonition Types
All 5 GitHub admonition types must be implemented:

- **[!NOTE]** - Highlights information that users should take into account, even when skimming
- **[!TIP]** - Optional information to help a user be more successful  
- **[!IMPORTANT]** - Crucial information necessary for users to succeed
- **[!WARNING]** - Critical content demanding immediate user attention due to potential risks
- **[!CAUTION]** - Negative potential consequences of an action

## Requirements
- **TypeScript**: All code must be written in TypeScript (remark plugin, React components, tests)
- **Native Integration**: Use Docusaurus's built-in admonition system, not custom rendering
- **Syntax Transformation**: Convert GitHub syntax to Docusaurus directives during build
- **Visual Parity**: Match GitHub's styling, icons, and color scheme
- **Complete Coverage**: Support all 5 types with proper fallbacks

## Implementation Strategy

### Phase 1: Create TypeScript Remark Plugin
Create `plugins/remark-github-admonitions.ts` with complete transformation logic:

```typescript
import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Root, BlockQuote, Paragraph, Text } from 'mdast';

// Type mapping from GitHub to Docusaurus
const GITHUB_TO_DOCUSAURUS_MAPPING = {
  'NOTE': 'note',
  'TIP': 'tip',
  'IMPORTANT': 'important', // Custom type
  'WARNING': 'warning', 
  'CAUTION': 'caution'      // Custom type
} as const;

const remarkGithubAdmonitions: Plugin<[], Root> = () => {
  return (tree: Root) => {
    visit(tree, 'blockquote', (node: BlockQuote, index, parent) => {
      // Transform GitHub [!TYPE] syntax to Docusaurus :::type syntax
      // Handle multi-line content, titles, and nested elements
    });
  };
};

export default remarkGithubAdmonitions;
```

**Key Requirements:**
- Parse `> [!TYPE]` and optional `> [!TYPE] Title` syntax
- Handle multi-line blockquote content
- Preserve markdown formatting within admonitions
- Support nested elements (code blocks, lists, etc.)
- Graceful fallback for unsupported types

### Phase 2: Configure Docusaurus Integration
Update `docusaurus.config.ts` with complete plugin configuration:

```typescript
import remarkGithubAdmonitions from './plugins/remark-github-admonitions';

const config: Config = {
  presets: [
    [
      'classic',
      {
        docs: {
          remarkPlugins: [remarkGithubAdmonitions],
          admonitions: {
            keywords: ['note', 'tip', 'info', 'warning', 'danger', 'important', 'caution'],
            extendDefaults: true,
          },
        },
        blog: {
          remarkPlugins: [remarkGithubAdmonitions], 
          admonitions: {
            keywords: ['note', 'tip', 'info', 'warning', 'danger', 'important', 'caution'],
            extendDefaults: true,
          },
        },
      },
    ],
  ],
};
```

### Phase 3: Create Custom Admonition Components
Since GitHub's IMPORTANT and CAUTION don't map directly to Docusaurus defaults, create custom components in `src/theme/Admonition/Types.tsx`:

```typescript
import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import type { Props } from '@theme/Admonition/Types';

// Custom Important admonition (purple theme like GitHub)
function ImportantAdmonition(props: Props) {
  return (
    <div className="alert alert--info admonition admonition-important">
      <div className="admonition-heading">
        <h5>
          <span className="admonition-icon">
            {/* GitHub-style important icon */}
          </span>
          {props.title || 'Important'}
        </h5>
      </div>
      <div className="admonition-content">{props.children}</div>
    </div>
  );
}

// Custom Caution admonition (orange theme like GitHub)  
function CautionAdmonition(props: Props) {
  return (
    <div className="alert alert--warning admonition admonition-caution">
      <div className="admonition-heading">
        <h5>
          <span className="admonition-icon">
            {/* GitHub-style caution icon */}
          </span>
          {props.title || 'Caution'}
        </h5>
      </div>
      <div className="admonition-content">{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  important: ImportantAdmonition,
  caution: CautionAdmonition,
};

export default AdmonitionTypes;
```

### Phase 4: Add GitHub-Style CSS
Create `src/css/github-admonitions.css` to match GitHub's visual styling:

```css
/* GitHub-style admonition colors and spacing */
.admonition-important {
  --ifm-alert-background-color: #ddd6fe;
  --ifm-alert-border-color: #8b5cf6;
  --ifm-alert-foreground-color: #5b21b6;
}

.admonition-caution {
  --ifm-alert-background-color: #fef3c7; 
  --ifm-alert-border-color: #f59e0b;
  --ifm-alert-foreground-color: #92400e;
}

/* Dark theme variants */
[data-theme='dark'] .admonition-important {
  --ifm-alert-background-color: #4c1d95;
  --ifm-alert-border-color: #8b5cf6;
  --ifm-alert-foreground-color: #ddd6fe;
}

[data-theme='dark'] .admonition-caution {
  --ifm-alert-background-color: #92400e;
  --ifm-alert-border-color: #f59e0b; 
  --ifm-alert-foreground-color: #fef3c7;
}
```

### Phase 5: Comprehensive Testing Strategy
Create thorough test coverage:

**Unit Tests** (`plugins/__tests__/remark-github-admonitions.test.ts`):
```typescript
import { remark } from 'remark';
import remarkGithubAdmonitions from '../remark-github-admonitions';

describe('GitHub Admonitions Plugin', () => {
  test('transforms basic NOTE syntax', async () => {
    const input = `> [!NOTE]\n> This is a note`;
    // Test transformation to :::note
  });
  
  test('handles all 5 admonition types', async () => {
    // Test NOTE, TIP, IMPORTANT, WARNING, CAUTION
  });
  
  test('preserves titles and multi-line content', async () => {
    const input = `> [!TIP] Custom Title\n> Line 1\n> Line 2`;
    // Test complex content handling
  });
  
  test('handles nested markdown elements', async () => {
    // Test code blocks, lists, links within admonitions
  });
});
```

**Integration Tests** (`tests/admonitions.spec.ts`):
```typescript
import { test, expect } from '@playwright/test';

test.describe('GitHub-style Admonitions', () => {
  test('all admonition types render correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/docs/test-admonitions');
    
    // Test each admonition type is visible and styled correctly
    await expect(page.locator('.admonition-note')).toBeVisible();
    await expect(page.locator('.admonition-tip')).toBeVisible();
    await expect(page.locator('.admonition-important')).toBeVisible();
    await expect(page.locator('.admonition-warning')).toBeVisible();
    await expect(page.locator('.admonition-caution')).toBeVisible();
  });
  
  test('admonitions match GitHub styling', async ({ page }) => {
    // Test colors, icons, and layout match GitHub
  });
  
  test('admonitions work in both light and dark themes', async ({ page }) => {
    // Test theme switching
  });
});
```

### Phase 6: Create Test Content
Create `docs/test-admonitions.md` with all syntax examples:

```markdown
# GitHub Admonitions Test

> [!NOTE]
> This is a note admonition with important information.

> [!TIP] Pro Tip
> This tip has a custom title and helpful advice.

> [!IMPORTANT]
> This is crucial information that users must understand.

> [!WARNING]  
> This warning alerts users to potential risks.

> [!CAUTION]
> This caution explains negative consequences of actions.
```

### Phase 7: Required Dependencies
Add necessary TypeScript dependencies to `package.json`:

```json
{
  "devDependencies": {
    "unist-util-visit": "^4.1.2",
    "mdast-util-directive": "^2.2.4", 
    "@types/mdast": "^3.0.15",
    "@types/unist": "^2.0.10"
  }
}
```

## Validation Checklist

### Functional Requirements
- [ ] All 5 GitHub admonition types transform correctly
- [ ] Multi-line content is preserved
- [ ] Custom titles work (e.g., `> [!NOTE] Custom Title`)
- [ ] Nested markdown elements render properly
- [ ] Plugin works in docs, blog, and MDX contexts
- [ ] Build process completes without errors

### Visual Requirements  
- [ ] Admonitions match GitHub's color scheme
- [ ] Icons are consistent with GitHub's design
- [ ] Spacing and typography match GitHub
- [ ] Light and dark themes both work correctly
- [ ] Responsive design works on mobile

### Technical Requirements
- [ ] All code is written in TypeScript
- [ ] Unit tests achieve >90% coverage
- [ ] Integration tests pass in Playwright
- [ ] No console errors during development
- [ ] Production build optimizes correctly

## Implementation Order

1. **Start with the remark plugin** - This is the core transformation logic
2. **Configure Docusaurus** - Add plugin to config and enable custom keywords  
3. **Create custom components** - Build React components for IMPORTANT and CAUTION
4. **Add styling** - Implement GitHub-matching CSS
5. **Write tests** - Comprehensive unit and integration testing
6. **Validate with Playwright** - Visual testing and user interaction testing

## Troubleshooting Guide

### Common Issues
- **Plugin not transforming**: Check remark plugin is added to both docs and blog configs
- **Custom types not rendering**: Verify `AdmonitionTypes.tsx` exports custom components
- **Styling issues**: Ensure CSS is imported in main config
- **Build failures**: Check TypeScript types and imports

### Debug Steps
1. Test remark plugin in isolation with unit tests
2. Verify Docusaurus config includes all necessary keywords
3. Check browser console for React component errors
4. Validate CSS specificity for theme overrides

## Resources

### Documentation
- [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)
- [Docusaurus Plugins](https://docusaurus.io/docs/markdown-features/plugins)
- [Remark Plugin Development](https://unifiedjs.com/learn/guide/create-a-plugin/)
- [GitHub Admonitions Reference](https://github.com/orgs/community/discussions/16925)

### GitHub Examples
Navigate to https://github.com/orgs/community/discussions/16925 using Playwright to see GitHub's native admonition styling for reference.

### Key GitHub Visual Elements
- **Note**: Blue theme with info icon
- **Tip**: Green theme with lightbulb icon  
- **Important**: Purple theme with megaphone icon
- **Warning**: Yellow/orange theme with warning triangle
- **Caution**: Red/orange theme with stop sign icon