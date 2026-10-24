import React, {useEffect, useId, useState, type CSSProperties, type ReactNode} from 'react';
import clsx from 'clsx';
import {scaleLinear, scalePoint} from 'd3-scale';
import {usePlayOnce} from './usePlayOnce';
import Caption from './Caption';

type Bar = {label: string; value: number; display?: string; subject?: boolean};
type Series = {name: string; values: number[]; subject?: boolean};

type Common = {tab?: string; title: string; subtitle?: string; format?: (v: number) => string};
export type ChartSpec =
  | (Common & {type: 'bar'; data: Bar[]})
  | (Common & {type: 'line'; x: string[]; series: Series[]});

type Props = (ChartSpec | {charts: ChartSpec[]}) & {caption?: ReactNode};

const rowH = 58;
const barH = 22;
const axisH = 26;
const valueRoom = 76;
const lineH = 260;
const stagger = 120;

const fmt = (spec: ChartSpec, v: number) => spec.format?.(v) ?? String(v);

function BarChart({spec, width}: {spec: Extract<ChartSpec, {type: 'bar'}>; width: number}): ReactNode {
  const max = Math.max(...spec.data.map((d) => d.value));
  const x = scaleLinear().domain([0, max]).nice().range([0, width - valueRoom]);
  const height = spec.data.length * rowH + axisH;
  const bottom = height - axisH;

  return (
    <svg className="chart__svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      {x.ticks(4).map((t) => (
        <g key={t} className="chart__grid">
          <line x1={x(t)} x2={x(t)} y1={0} y2={bottom} />
          <text x={x(t)} y={bottom + 18} textAnchor={t ? 'middle' : 'start'}>
            {fmt(spec, t)}
          </text>
        </g>
      ))}
      {spec.data.map((d, i) => {
        const y = i * rowH + 22;
        const w = Math.max(x(d.value), 2);
        return (
          <g key={d.label} className={clsx('chart__bar', d.subject && 'is-subject')} style={{'--d': `${i * stagger}ms`} as CSSProperties}>
            <text className="chart__rowlabel" x={0} y={y - 8}>
              {d.label}
            </text>
            <rect x={0} y={y} width={w} height={barH} rx={2} />
            <text className="chart__value" x={w + 8} y={y + barH / 2}>
              {d.display ?? fmt(spec, d.value)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function LineChart({spec, width}: {spec: Extract<ChartSpec, {type: 'line'}>; width: number}): ReactNode {
  const max = Math.max(...spec.series.flatMap((s) => s.values));
  const [left, right, top, bottom] = [36, valueRoom + 24, 12, lineH - axisH];
  const x = scalePoint<string>().domain(spec.x).range([left, width - right]);
  const y = scaleLinear().domain([0, max]).nice().range([bottom, top]);
  const ordered = [...spec.series].sort((a, b) => Number(Boolean(a.subject)) - Number(Boolean(b.subject)));

  return (
    <svg className="chart__svg" width={width} height={lineH} viewBox={`0 0 ${width} ${lineH}`} aria-hidden="true">
      {y.ticks(4).map((t) => (
        <g key={t} className="chart__grid">
          <line x1={left} x2={width - right} y1={y(t)} y2={y(t)} />
          <text x={left - 8} y={y(t)} textAnchor="end" dominantBaseline="middle">
            {fmt(spec, t)}
          </text>
        </g>
      ))}
      {spec.x.map((label) => (
        <text key={label} className="chart__tick" x={x(label)} y={bottom + 18} textAnchor="middle">
          {label}
        </text>
      ))}
      {ordered.map((s, i) => {
        const points = s.values.map((v, j) => [x(spec.x[j]!) ?? 0, y(v)] as const);
        const last = points[points.length - 1]!;
        return (
          <g key={s.name} className={clsx('chart__line', s.subject && 'is-subject')} style={{'--d': `${i * stagger}ms`} as CSSProperties}>
            <path d={`M${points.map((p) => p.join(',')).join(' L')}`} pathLength={1} />
            {points.map(([px, py], j) => (
              <circle key={j} cx={px} cy={py} r={3} />
            ))}
            <text className="chart__value" x={last[0] + 10} y={last[1]}>
              {s.name} {fmt(spec, s.values[s.values.length - 1]!)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function summary(spec: ChartSpec): string {
  if (spec.type === 'bar') return spec.data.map((d) => `${d.label}: ${d.display ?? fmt(spec, d.value)}`).join('; ');
  return spec.series.map((s) => `${s.name}: ${s.values.map((v, j) => `${spec.x[j]} ${fmt(spec, v)}`).join(', ')}`).join('; ');
}

export default function Chart(props: Props): ReactNode {
  const charts = 'charts' in props ? props.charts : [props];
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(680);
  const {ref, animated, play} = usePlayOnce<HTMLElement>(1100 + charts.length * stagger);
  const id = useId();
  const spec = charts[active]!;
  const legend = spec.type === 'line' && spec.series.length > 1 ? spec.series : [];

  useEffect(() => {
    const plot = ref.current?.querySelector('.chart__plot');
    if (!plot) return;
    const ro = new ResizeObserver(([entry]) => entry && setWidth(Math.floor(entry.contentRect.width)));
    ro.observe(plot);
    return () => ro.disconnect();
  }, [ref]);

  const select = (i: number) => {
    setActive(i);
    requestAnimationFrame(play);
  };

  return (
    <figure className="story chart" ref={ref}>
      {charts.length > 1 && (
        <div className="chart__tabs" role="tablist" aria-label="Charts">
          {charts.map((c, i) => (
            <button
              key={c.title}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${id}-panel`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => {
                const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
                if (!dir) return;
                const next = (active + dir + charts.length) % charts.length;
                select(next);
                document.getElementById(`${id}-tab-${next}`)?.focus();
              }}>
              {c.tab ?? c.title}
            </button>
          ))}
        </div>
      )}
      <div id={`${id}-panel`} role={charts.length > 1 ? 'tabpanel' : undefined} aria-labelledby={charts.length > 1 ? `${id}-tab-${active}` : undefined}>
        <div className="chart__head">
          <p className="chart__title">{spec.title}</p>
          {spec.subtitle && <p className="chart__subtitle">{spec.subtitle}</p>}
        </div>
        {legend.length > 0 && (
          <ul className="chart__legend">
            {legend.map((s) => (
              <li key={s.name} className={clsx(s.subject && 'is-subject')}>
                {s.name}
              </li>
            ))}
          </ul>
        )}
        <div className="chart__plot">
          {spec.type === 'bar' ? <BarChart key={active} spec={spec} width={width} /> : <LineChart key={active} spec={spec} width={width} />}
          <p className="visually-hidden">{summary(spec)}</p>
        </div>
      </div>
      <Caption onReplay={animated ? play : undefined}>{props.caption}</Caption>
    </figure>
  );
}
