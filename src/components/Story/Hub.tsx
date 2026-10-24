import React, {type CSSProperties, type ReactNode} from 'react';
import {usePlayOnce} from './usePlayOnce';
import Caption from './Caption';
import {wrapLabel} from './wrap';

type Item = {label: string; description: ReactNode};

type Props = {
  center: string;
  items: Item[];
  caption?: ReactNode;
};

type Geometry = {width: number; height: number; rx: number; ry: number; core: number; offset: number};

const wide: Geometry = {width: 720, height: 330, rx: 205, ry: 118, core: 42, offset: 14};
const narrow: Geometry = {width: 360, height: 380, rx: 64, ry: 140, core: 36, offset: 12};
const start = 300;
const stagger = 160;

const timing = (i: number) => start + i * stagger;

function HubSvg({center, items, g, className}: {center: string; items: Item[]; g: Geometry; className: string}): ReactNode {
  const cx = g.width / 2;
  const cy = g.height / 2;
  const n = items.length;

  return (
    <svg className={`hub__svg ${className}`} viewBox={`0 0 ${g.width} ${g.height}`} aria-hidden="true">
      {items.map((item, i) => {
        // Start top-left and go clockwise so reading order matches the list below.
        const angle = ((-120 + (i * 360) / n) * Math.PI) / 180;
        const [cos, sin] = [Math.cos(angle), Math.sin(angle)];
        const x = cx + g.rx * cos;
        const y = cy + g.ry * sin;
        const len = Math.hypot(x - cx, y - cy);
        const x0 = cx + ((x - cx) / len) * g.core;
        const y0 = cy + ((y - cy) / len) * g.core;
        const d = `M${x0},${y0} L${x},${y}`;
        const anchor = cos > 0.1 ? 'start' : cos < -0.1 ? 'end' : 'middle';
        const lx = x + (anchor === 'start' ? g.offset : anchor === 'end' ? -g.offset : 0);
        const lines = wrapLabel(item.label);
        const t = timing(i);
        return (
          <g key={item.label} style={{'--d': `${t}ms`, '--d-end': `${t + 380}ms`} as CSSProperties}>
            <path className="hub__spoke" d={d} pathLength={1} />
            <circle className="hub__pulse" r={3} opacity={0}>
              <animateMotion data-at={t} begin="indefinite" dur="400ms" path={d} fill="freeze" />
              <animate data-at={t} begin="indefinite" attributeName="opacity" dur="400ms" values="0;1;1;0" keyTimes="0;0.15;0.85;1" />
            </circle>
            <circle className="hub__dot" cx={x} cy={y} r={5} />
            <text className="hub__label" x={lx} y={y - (lines.length - 1) * 8} textAnchor={anchor}>
              {lines.map((line, j) => (
                <tspan key={line} x={lx} dy={j ? 16 : 0}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
      <g className="hub__core">
        <circle cx={cx} cy={cy} r={g.core} />
        <text x={cx} y={cy}>
          {center}
        </text>
      </g>
    </svg>
  );
}

export default function Hub({center, items, caption}: Props): ReactNode {
  const {ref, animated, play} = usePlayOnce<HTMLElement>(timing(items.length - 1) + 800);
  return (
    <figure className="story hub" ref={ref}>
      <HubSvg center={center} items={items} g={wide} className="story__wide" />
      <HubSvg center={center} items={items} g={narrow} className="story__narrow" />
      <dl className="hub__list">
        {items.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.description}</dd>
          </div>
        ))}
      </dl>
      <Caption onReplay={animated ? play : undefined}>{caption}</Caption>
    </figure>
  );
}
