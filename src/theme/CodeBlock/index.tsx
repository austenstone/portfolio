import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import OriginalCodeBlock from '@theme-original/CodeBlock';   // Prism version
import hljs from 'highlight.js';
import './syntax-highlighting.css';                         // Custom GitHub-style HLJS theme
import type CodeBlockType from '@theme/CodeBlock';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof CodeBlockType>;

/**
 * Renders with Highlight.js **only** when the fence/metadata contains `hljs`,
 * otherwise defers to the stock Prism-based <CodeBlock>.
 *
 * ```js hljs
 * // this snippet uses Highlight.js
 * ```
 */
export default function CodeBlockWrapper(props: Props): React.JSX.Element {
  const { children, className = '', metastring } = props;
  const wantsHljs = metastring?.includes('hljs');
  
  // --- 1. Prism path (default) -------------------------------
  if (!wantsHljs) {
    return <OriginalCodeBlock {...props} />;
  }

  // --- 2. Highlight.js path ----------------------------------
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      hljs.highlightElement(ref.current);
    }
  }, [children]);

  const lang = (className || '').replace(/^language-/, '');

  return (
    <pre className={clsx('hljs', lang && `language-${lang}`)}>
      <code ref={ref} className={lang ? `language-${lang}` : undefined}>
        {children}
      </code>
    </pre>
  );
}
