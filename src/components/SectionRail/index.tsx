import React, {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
  type RefObject,
} from 'react';
import clsx from 'clsx';
import type {TOCItem} from '@docusaurus/mdx-loader';

export type Section = {id: string; label: string};

const ACTIVE_LINE = 0.4;
const MIN_TOP = 96;
const DRAG_THRESHOLD = 4;

const toLabel = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/^\d+\.\s+/, '')
    .trim();

export const sectionsFromToc = (toc: readonly TOCItem[], level = 2): Section[] =>
  toc.filter((item) => item.level === level).map(({id, value}) => ({id, label: toLabel(value)}));

const topOf = (el: Element | null) => (el ? el.getBoundingClientRect().top : null);

const endOf = (el: HTMLElement | null | undefined) =>
  el ? el.getBoundingClientRect().bottom : null;

function useRailSpy(sections: Section[], until: RefObject<HTMLElement | null>) {
  const nav = useRef<HTMLElement>(null);
  const list = useRef<HTMLOListElement>(null);
  const targets = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [top, setTop] = useState<number>();

  useEffect(() => {
    if (sections.length === 0) return undefined;
    targets.current = sections.map(({id}) => document.getElementById(id));
    let frame = 0;
    let listening = false;

    const measure = () => {
      frame = 0;
      const vh = window.innerHeight;
      const firstTop = topOf(targets.current.find(Boolean) ?? null);
      const end = endOf(until.current);
      setTop(Math.max(MIN_TOP, (vh - (list.current?.offsetHeight ?? 0)) / 2));
      setVisible(
        firstTop !== null && firstTop < vh * 0.5 && !(end !== null && end < vh * 0.5),
      );
      let index = 0;
      targets.current.forEach((el, i) => {
        const t = topOf(el);
        if (t !== null && t <= vh * ACTIVE_LINE) index = i;
      });
      setActive(index);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    const sync = () => {
      const shown = !!nav.current && getComputedStyle(nav.current).display !== 'none';
      if (shown && !listening) window.addEventListener('scroll', schedule, {passive: true});
      if (!shown && listening) window.removeEventListener('scroll', schedule);
      listening = shown;
      if (shown) schedule();
    };

    sync();
    window.addEventListener('resize', sync);
    return () => {
      window.removeEventListener('resize', sync);
      window.removeEventListener('scroll', schedule);
      cancelAnimationFrame(frame);
    };
  }, [sections, until]);

  return {nav, list, targets, active, visible, top};
}

// Dragging along the rail scrubs the whole article, like a scrollbar mapped to the sections.
function useScrub(
  list: RefObject<HTMLOListElement | null>,
  targets: RefObject<(HTMLElement | null)[]>,
  until: RefObject<HTMLElement | null>,
) {
  const [dragging, setDragging] = useState(false);
  const state = useRef({active: false, moved: false, startY: 0});

  const scrubTo = (clientY: number) => {
    const el = list.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const ratio = box.height > 0 ? Math.min(1, Math.max(0, (clientY - box.top) / box.height)) : 0;
    const first = targets.current?.find(Boolean);
    const start = first ? first.getBoundingClientRect().top + window.scrollY - MIN_TOP : 0;
    const bottom = endOf(until.current);
    const stop = bottom !== null ? bottom + window.scrollY : document.body.scrollHeight;
    const end = Math.max(start, stop - window.innerHeight * 0.6);
    window.scrollTo({top: start + ratio * (end - start), behavior: 'auto'});
  };

  const release = (e: PointerEvent<HTMLOListElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    state.current.active = false;
    setDragging(false);
    setTimeout(() => {
      state.current.moved = false;
    });
  };

  return {
    dragging,
    consumeDrag: () => {
      const {moved} = state.current;
      state.current.moved = false;
      return moved;
    },
    handlers: {
      onPointerDown: (e: PointerEvent<HTMLOListElement>) => {
        if (e.button === 0) state.current = {active: true, moved: false, startY: e.clientY};
      },
      onPointerMove: (e: PointerEvent<HTMLOListElement>) => {
        const s = state.current;
        if (!s.active || (!s.moved && Math.abs(e.clientY - s.startY) < DRAG_THRESHOLD)) return;
        if (!s.moved) {
          s.moved = true;
          setDragging(true);
          e.currentTarget.setPointerCapture(e.pointerId);
        }
        scrubTo(e.clientY);
      },
      onPointerUp: release,
      onPointerCancel: release,
    },
  };
}

export default function SectionRail({
  sections,
  until,
}: {
  sections: Section[];
  until: RefObject<HTMLElement | null>;
}): ReactNode {
  const {nav, list, targets, active, visible, top} = useRailSpy(sections, until);
  const {dragging, consumeDrag, handlers} = useScrub(list, targets, until);

  if (sections.length < 2) return null;

  return (
    <nav
      ref={nav}
      className={clsx('section-rail', {
        'is-visible': visible || dragging,
        'is-dragging': dragging,
      })}
      style={top !== undefined ? {top} : undefined}
      aria-label="On this page">
      <ol ref={list} className="section-rail__list" {...handlers}>
        {sections.map(({id, label}, i) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={clsx('section-rail__link', i === active && 'is-active')}
              aria-current={i === active ? 'location' : undefined}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onClick={(e) => {
                if (consumeDrag()) e.preventDefault();
              }}>
              <span className="section-rail__pill">{label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
