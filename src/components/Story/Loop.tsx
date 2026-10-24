import React, {useEffect, useRef, type CSSProperties, type ReactNode} from 'react';
import {prefersMotion} from '@site/src/components/Editorial';
import Caption from './Caption';

type Props = {
  steps: string[];
  center?: string[];
  label: string;
  caption?: ReactNode;
  period?: number;
};

const width = 360;
const height = 250;
const cx = width / 2;
const cy = 128;
const r = 74;

const polar = (deg: number, radius = r): [number, number] => {
  const a = (deg * Math.PI) / 180;
  return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)];
};

// The one looping animation: it only runs while on screen and never under reduced motion.
export default function Loop({steps, center = [], label, caption, period = 6}: Props): ReactNode {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !prefersMotion()) return;
    el.dataset.motion = '';
    const io = new IntersectionObserver(([entry]) => {
      el.toggleAttribute('data-running', Boolean(entry?.isIntersecting));
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const n = steps.length;
  const [ox, oy] = polar(-90);

  return (
    <figure className="story loop" ref={ref} style={{'--period': `${period}s`} as CSSProperties}>
      <svg className="loop__svg" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label}>
        <circle className="loop__track" cx={cx} cy={cy} r={r} />
        {steps.map((_, i) => {
          const mid = -90 + ((i + 0.5) * 360) / n;
          const [x, y] = polar(mid);
          return (
            <path
              key={`chevron-${i}`}
              className="loop__chevron"
              d="M-4,-5 L2,0 L-4,5"
              transform={`translate(${x} ${y}) rotate(${mid + 90})`}
            />
          );
        })}
        <g className="loop__orbit">
          <circle cx={ox} cy={oy} r={5} />
        </g>
        {steps.map((step, i) => {
          const deg = -90 + (i * 360) / n;
          const [x, y] = polar(deg);
          const cos = Math.cos((deg * Math.PI) / 180);
          const anchor = cos > 0.1 ? 'start' : cos < -0.1 ? 'end' : 'middle';
          const [lx, ly] = anchor === 'middle' ? [x, y - 18] : [x + (anchor === 'start' ? 14 : -14), y + 4];
          return (
            <g key={step} className="loop__step" style={{'--phase': `${(i / n) * period - period}s`} as CSSProperties}>
              <circle cx={x} cy={y} r={6} />
              <text x={lx} y={ly} textAnchor={anchor}>
                {step}
              </text>
            </g>
          );
        })}
        <text className="loop__center" x={cx} y={cy - ((center.length - 1) * 16) / 2}>
          {center.map((line, i) => (
            <tspan key={line} x={cx} dy={i ? 16 : 0}>
              {line}
            </tspan>
          ))}
        </text>
      </svg>
      <Caption>{caption}</Caption>
    </figure>
  );
}
