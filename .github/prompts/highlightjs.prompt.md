---
mode: agent
---

1. Install highlight.js and the rehype bridge
bash
Copy
Edit
npm i --save highlight.js rehype-highlight
# or: pnpm add highlight.js rehype-highlight
rehype-highlight runs at build-time and pipes Highlight.js into Docusaurus’ MDX compiler, so you get static, fully-highlighted HTML with zero extra JS on the client. 
npmjs.com

2. Wire the plugin into docusaurus.config.js
js
Copy
Edit
// docusaurus.config.js  (ES-module syntax recommended in v3)
import rehypeHighlight from 'rehype-highlight';

export default {
  // …your existing config…
  markdown: {
    rehypePlugins: [
      [
        rehypeHighlight,
        /** Highlight.js options (optional) */
        {
          ignoreMissing: true,      // don’t warn on unknown languages
          // prefix: 'hljs-',       // default — customise if you need
        },
      ],
    ],
  },
};
Any MDX/Markdown plugin can be injected this way; see Docusaurus’ MDX-plugin docs for context. 
docusaurus.io
docusaurus.io

3. Load the GitHub Highlight.js theme (light + dark)
Highlight.js ships pre-made CSS that mimics GitHub’s code blocks:

js
Copy
Edit
// still inside docusaurus.config.js
export default {
  // …
  stylesheets: [
    // light mode
    {
      href: 'https://cdn.jsdelivr.net/npm/highlight.js@11.10.0/styles/github.min.css',
      type: 'text/css',
    },
    // dark mode
    {
      href: 'https://cdn.jsdelivr.net/npm/highlight.js@11.10.0/styles/github-dark.min.css',
      type: 'text/css',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};
Both github.min.css and github-dark.min.css are available from the Highlight.js CDN. 
cdn.jsdelivr.net

Tip — custom palette: If you use Docusaurus’ built-in colour-scheme switcher (data-theme="dark"), drop the media attribute and instead wrap the dark sheet in a [data-theme='dark'] { … } rule inside src/css/custom.css.

4. Write code blocks exactly like on GitHub
mdx
Copy
Edit
```ts title="hello.ts"
export const greeting = (name: string) => `Hello, ${name}!`;
yaml
Copy
Edit

* language token (`ts`) maps straight to Highlight.js grammars;  
* titles, line-numbers, etc. work as usual—Docusaurus’ `<CodeBlock>` still wraps your HTML.

---

### 5. (Optional) disable Prism entirely

Highlight.js and Prism can coexist (only one’s CSS will actually “win”), but if you want to drop Prism’s JS bundle:

```js
// docusaurus.config.js
export default {
  // …
  themeConfig: {
    prism: {
      theme: /** empty object kills the default CSS */ {},
      additionalLanguages: [],
    },
  },
};
```

6. Alternate: client-side highlighting
If you need runtime highlighting (copy-to-clipboard buttons, dynamic snippets, etc.):

Create src/theme/CodeBlock/index.tsx.

Use hljs.highlightElement() inside a useEffect.
(You’ll still import a Highlight.js theme CSS as above.)

The pattern is identical to any React + Highlight.js tutorial—just remember you’re overriding Docusaurus’ default <CodeBlock> component.

Why Highlight.js instead of Prism?
Feature parity: GitHub’s docs still rely on Highlight.js, so the colour palette and tokenisation match 1:1. 
v1.docusaurus.io

Auto-detect + 190 grammars: Highlight.js can guess the language or let you register less common ones at runtime.

Static output: With rehype-highlight the markup is rendered during the build, so there’s no flash-of-unstyled-code.


Yes — you can leave Prism as the default highlighter that ships with Docusaurus and light-up Highlight.js only when you explicitly ask for it (for example, when the fence contains the flag hljs). The trick is to override the built-in <CodeBlock> component, look for that flag, and switch renderers on the fly.

1. Swizzle the CodeBlock component
bash
Copy
Edit
npx docusaurus swizzle @docusaurus/theme-classic CodeBlock --wrap
# puts a copy in: src/theme/CodeBlock/index.tsx
“—wrap” keeps the original component around as @theme-original/CodeBlock, so you can fall back to Prism whenever you like.

2. Implement a dual-renderer wrapper
tsx
Copy
Edit
// src/theme/CodeBlock/index.tsx
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import OriginalCodeBlock from '@theme-original/CodeBlock';   // Prism version
import hljs from 'highlight.js';
import 'highlight.js/styles/github.min.css';                 // light theme
import 'highlight.js/styles/github-dark.min.css';            // dark theme

/**
 * Renders with Highlight.js **only** when the fence/metadata contains `hljs`,
 * otherwise defers to the stock Prism-based <CodeBlock>.
 *
 * ```js hljs
 * // this snippet uses Highlight.js
 * ```
 */
export default function CodeBlockWrapper(props) {
  const { children, className = '', metastring } = props;
  const wantsHljs = metastring?.includes('hljs');

  // --- 1. Prism path (default) -------------------------------
  if (!wantsHljs) {
    return <OriginalCodeBlock {...props} />;
  }

  // --- 2. Highlight.js path ----------------------------------
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) hljs.highlightElement(ref.current);
  }, []);

  const lang = (className || '').replace(/^language-/, '');

  return (
    <pre className={clsx('hljs', lang && `language-${lang}`)}>
      <code ref={ref}>{children}</code>
    </pre>
  );
}
<br/>
3. Mark the snippets that should use Highlight.js
md
Copy
Edit
```bash hljs
$ git push origin main
tsx
Copy
Edit
// ← still Prism because no “hljs” flag
export const foo = 42;
Everything without hljs stays 100 % Prism (same bundle, same keyboard-nav, line-numbers, etc.).

Anything with hljs runs Highlight.js in the browser, so you can mix and match grammars or colour palettes freely.

4. Keep both CSS themes tidy
Because you imported both github.min.css and github-dark.min.css directly in the component, you don’t need extra lines in docusaurus.config.js. If you’d rather load the styles globally, move those two <link> tags to stylesheets: in the config instead.

5. Optional refinements
Need	Tweak
Build-time, not client-side	Replace the React wrapper with rehype-highlight plus a custom MDX plugin that detects the hljs flag and calls Highlight.js during the static build.
Different flag syntax	Parse metastring any way you like (e.g. highlight=hljs, use=hljs, separate fences like hljs-js).
Custom HLJS grammars	Register languages once: hljs.registerLanguage('terraform', terraformLang); inside the wrapper or a site-wide @root/src/theme/hooks/useHighlightjs.ts.

That’s it: Prism remains your dependable default, and Highlight.js is just a meta-tag away whenever you need GitHub-style colours or one of HLJS’s 190+ grammars.