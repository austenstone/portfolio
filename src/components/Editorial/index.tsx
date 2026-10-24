import React, {
  Fragment,
  createContext,
  useEffect,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from 'react';

export const EditorialContext = createContext(false);
export const BandContext = createContext(false);

export function SplitWords({text}: {text: string}): ReactNode {
  const words = text.split(' ');
  return words.map((word, i) => (
    <Fragment key={i}>
      <span className="w">
        <span style={{'--i': i} as CSSProperties}>{word}</span>
      </span>
      {i < words.length - 1 && ' '}
    </Fragment>
  ));
}

export function ReplayButton({onClick}: {onClick: () => void}): ReactNode {
  return (
    <button type="button" className="diagram__replay" onClick={onClick} aria-label="Replay animation">
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M2.5 8a5.5 5.5 0 1 0 1.6-3.9" />
        <path d="M2.5 2v3h3" />
      </svg>
      Replay
    </button>
  );
}

export const prefersMotion = (): boolean =>
  typeof window !== 'undefined' &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealSelector = [
  'h2',
  'h3',
  '.code-figure',
  'table',
  'blockquote',
  'li',
  'p > img',
  '.stat',
].join(', ');

// Only content that starts below the fold is hidden, so server-rendered text never flickers after hydration.
export function useScrollReveal(
  root: RefObject<HTMLElement | null>,
  key: string,
): void {
  useEffect(() => {
    const container = root.current;
    if (!container || !prefersMotion()) return;

    const targets = [
      ...container.querySelectorAll<HTMLElement>(revealSelector),
    ].filter(
      (el) =>
        !el.parentElement?.closest('li, figure, details, table') &&
        el.getBoundingClientRect().top > innerHeight,
    );

    targets.forEach((el) => {
      const rises = el.matches('h2, h3') && el.querySelector('.w');
      el.dataset.reveal = rises ? 'rise' : '';
      if (el.matches('li')) {
        const index = [...el.parentElement!.children].indexOf(el);
        el.style.setProperty('--d', `${Math.min(index, 4) * 70}ms`);
      }
    });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.in = '';
          io.unobserve(entry.target);
        }),
      {rootMargin: '0px 0px -8% 0px', threshold: 0.05},
    );
    targets.forEach((el) => io.observe(el));
    container.dataset.motion = '';

    return () => io.disconnect();
  }, [root, key]);
}
