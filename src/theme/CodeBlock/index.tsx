import React, {useContext, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import OriginalCodeBlock from '@theme-original/CodeBlock';   // Prism version
import hljs from 'highlight.js';
import './syntax-highlighting.css';                         // Custom GitHub-style HLJS theme
import type CodeBlockType from '@theme/CodeBlock';
import type {WrapperProps} from '@docusaurus/types';
import {EditorialContext} from '@site/src/components/Editorial';

type Props = WrapperProps<typeof CodeBlockType>;

function HljsCodeBlock({ children, className = '' }: Props): React.JSX.Element {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      hljs.highlightElement(ref.current);
    }
  }, [children]);

  const lang = className.replace(/^language-/, '');
  const displayLang = lang ? lang.toUpperCase() : '';

  const handleCopy = () => {
    if (typeof children === 'string') {
      navigator.clipboard.writeText(children);
    }
  };

  return (
    <div className="code-example hljs-wrapper">
      <header className="hljs-header">
        <span className="hljs-language-label">{displayLang}</span>
        <button 
          className="hljs-copy-button" 
          onClick={handleCopy}
          title={`Copy ${displayLang} code to clipboard`}
          aria-label={`Copy ${displayLang} code to clipboard`}
        >
          <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" className="octicon octicon-copy" aria-hidden="true">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
          </svg>
        </button>
      </header>
      <pre className={clsx('hljs', lang && `language-${lang}`)}>
        <code ref={ref} className={lang ? `language-${lang}` : undefined}>
          {children}
        </code>
      </pre>
    </div>
  );
}

const codeLabel = ({ title, metastring, language, className = '' }: Props): string =>
  (typeof title === 'string' ? title : undefined) ??
  metastring?.match(/title=(["'])(.*?)\1/)?.[2] ??
  language ??
  className.match(/language-(\S+)/)?.[1] ??
  'text';

function EditorialCodeFigure({ props, children }: { props: Props; children: React.ReactNode }): React.JSX.Element {
  const figure = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');

  useEffect(() => {
    if (state === 'idle') return;
    const timer = setTimeout(() => setState('idle'), 1600);
    return () => clearTimeout(timer);
  }, [state]);

  const copy = async () => {
    const text = typeof props.children === 'string'
      ? props.children
      : figure.current?.querySelector('pre')?.innerText ?? '';
    try {
      await navigator.clipboard.writeText(text.replace(/\n$/, ''));
      setState('copied');
    } catch {
      setState('failed');
    }
  };

  return (
    <div className="code-figure" ref={figure}>
      <div className="code-figure__bar">
        <span className="code-figure__label">{codeLabel(props)}</span>
        <button type="button" className="code-figure__copy" data-copied={state === 'copied' || undefined} onClick={copy}>
          {state === 'copied' ? 'Copied' : state === 'failed' ? 'Select and copy' : 'Copy'}
        </button>
      </div>
      {children}
    </div>
  );
}

/**
 * Renders with Highlight.js **only** when the fence/metadata contains `hljs`,
 * otherwise defers to the stock Prism-based <CodeBlock>.
 *
 * ```js hljs
 * // this snippet uses Highlight.js
 * ```
 */
export default function CodeBlockWrapper(props: Props): React.JSX.Element {
  const editorial = useContext(EditorialContext);
  const block = props.metastring?.includes('hljs')
    ? <HljsCodeBlock {...props} />
    : <OriginalCodeBlock {...props} />;

  return editorial ? <EditorialCodeFigure props={props}>{block}</EditorialCodeFigure> : block;
}
