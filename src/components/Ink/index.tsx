import React, {useEffect, useRef, type ReactNode} from 'react';
import {annotate} from 'rough-notation';
import styles from './styles.module.css';

type InkProps = {
  children: ReactNode;
  type?: 'underline' | 'circle' | 'bracket';
  replay?: number;
};

export const Ink = ({children, type = 'underline', replay = 0}: InkProps): ReactNode => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    let disposed = false;
    let annotation: ReturnType<typeof annotate> | undefined;
    let observer: IntersectionObserver | undefined;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const setup = async () => {
      await document.fonts.ready;
      if (disposed) return;

      annotation = annotate(target, {
        type,
        color: 'var(--ed-accent)',
        strokeWidth: 1.5,
        padding: type === 'circle' ? [3, 7] : 3,
        iterations: type === 'underline' ? 2 : 1,
        brackets: ['left', 'right'],
        multiline: true,
        animationDuration: 700,
      });

      const svg = target.nextElementSibling;
      svg?.setAttribute('aria-hidden', 'true');
      svg?.setAttribute('focusable', 'false');

      const show = () => {
        if (!annotation) return;
        annotation.animate = !motion.matches;
        annotation.show();
      };

      if (motion.matches || !('IntersectionObserver' in window)) {
        show();
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          show();
          observer?.disconnect();
        },
        {rootMargin: '0px 0px -12% 0px', threshold: 0.5},
      );
      observer.observe(target);
    };

    void setup();
    return () => {
      disposed = true;
      observer?.disconnect();
      annotation?.remove();
    };
  }, [type, replay]);

  return <span ref={ref} className={styles.ink} data-ink={type}>{children}</span>;
};
