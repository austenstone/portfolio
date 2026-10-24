import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Mermaid from '@theme-original/Mermaid';
import type {Props} from '@theme/Mermaid';
import {EditorialContext, ReplayButton, prefersMotion} from '@site/src/components/Editorial';

const fontTimeoutMs = 1500;

const waitForFonts = (): Promise<unknown> =>
  Promise.race([
    document.fonts?.load('400 16px "IBM Plex Mono"') ?? Promise.resolve(),
    new Promise((resolve) => setTimeout(resolve, fontTimeoutMs)),
  ]);

// Stagger nodes, then draw edges in DOM order, then reveal edge labels and arrowheads.
function choreograph(figure: HTMLElement, svg: SVGSVGElement): number {
  const set = (el: Element, ms: number, dur?: number) => {
    (el as SVGElement).style.setProperty('--d', `${ms}ms`);
    if (dur) (el as SVGElement).style.setProperty('--dur', `${dur}ms`);
  };

  svg.querySelectorAll('.cluster').forEach((el) => set(el, 0));
  const nodes = [...svg.querySelectorAll('.node')];
  nodes.forEach((el, i) => set(el, 120 + i * 60));

  const edgeStart = 120 + nodes.length * 60;
  const edges = [
    ...svg.querySelectorAll<SVGPathElement>('.edgePaths path, path.flowchart-link'),
  ].filter((el) => !el.matches('.edge-pattern-dotted, .edge-pattern-dashed'));
  edges.forEach((el, i) => {
    el.setAttribute('data-draw', '');
    el.style.setProperty('--len', `${Math.ceil(el.getTotalLength()) + 1}`);
    set(el, edgeStart + i * 90, 560);
  });
  [...svg.querySelectorAll('.edgeLabels .edgeLabel')].forEach((el, i) =>
    set(el, edgeStart + i * 90 + 380),
  );

  const end = edgeStart + Math.max(edges.length - 1, 0) * 90 + 560;
  figure.style.setProperty('--d-end', `${end}ms`);
  return end + 420;
}

function DiagramFigure({children}: {children: ReactNode}): ReactNode {
  const figure = useRef<HTMLElement>(null);
  const timer = useRef<number>(undefined);
  const duration = useRef(0);
  const [animated, setAnimated] = useState(false);

  const play = () => {
    const el = figure.current;
    if (!el) return;
    delete el.dataset.in;
    delete el.dataset.done;
    void el.offsetWidth;
    el.dataset.in = '';
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      el.dataset.done = '';
    }, duration.current);
  };

  useEffect(() => {
    const el = figure.current;
    if (!el || !prefersMotion()) return;

    let io: IntersectionObserver | undefined;
    const prepare = () => {
      const svg = el.querySelector('svg');
      if (!svg || svg.dataset.choreographed) return;
      svg.dataset.choreographed = '';
      duration.current = choreograph(el, svg);
      if (io) return;
      el.dataset.motion = '';
      setAnimated(true);
      io = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;
          io?.disconnect();
          play();
        },
        {threshold: 0.35},
      );
      io.observe(el);
    };

    const mo = new MutationObserver(prepare);
    mo.observe(el, {childList: true, subtree: true});
    prepare();

    return () => {
      mo.disconnect();
      io?.disconnect();
      window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <figure className="diagram" ref={figure}>
      {children}
      {animated && (
        <figcaption>
          <ReplayButton onClick={play} />
        </figcaption>
      )}
    </figure>
  );
}

export default function MermaidWrapper(props: Props): ReactNode {
  const editorial = useContext(EditorialContext);
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    if (!editorial) return;
    let live = true;
    waitForFonts().then(() => live && setFontsReady(true));
    return () => {
      live = false;
    };
  }, [editorial]);

  if (!editorial) return <Mermaid {...props} />;

  return <DiagramFigure>{fontsReady && <Mermaid {...props} />}</DiagramFigure>;
}
