import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {usePlayOnce} from './usePlayOnce';
import Caption from './Caption';

export type FlowNode = {
  id: string;
  label: string;
  sub?: string;
  tone?: 'accent' | 'ink';
};

type Props = {
  columns: FlowNode[][];
  edges: [from: string, to: string][];
  label: string;
  caption?: ReactNode;
};

type Box = FlowNode & {x: number; y: number; w: number; h: number; col: number};

const step = 900;
const pad = 8;
const nodeHeight = (node: FlowNode) => (node.sub ? 50 : 34);

function layoutWide(columns: FlowNode[][]) {
  const width = 840;
  const nodeW = 150;
  const gap = 14;
  const stackH = (col: FlowNode[]) =>
    col.reduce((sum, n) => sum + nodeHeight(n), 0) + (col.length - 1) * gap;
  const height = Math.max(...columns.map(stackH)) + pad * 2;
  const span = (width - pad * 2 - nodeW) / Math.max(columns.length - 1, 1);

  const boxes = columns.flatMap((col, c) => {
    let y = (height - stackH(col)) / 2;
    return col.map((node) => {
      const box = {...node, x: pad + c * span, y, w: nodeW, h: nodeHeight(node), col: c};
      y += box.h + gap;
      return box;
    });
  });
  return {width, height, boxes, vertical: false};
}

// Columns become rows; a crowded column wraps into a balanced grid.
function layoutNarrow(columns: FlowNode[][]) {
  const width = 360;
  const gap = 8;
  const rowGap = 48;
  const boxes: Box[] = [];
  let y = pad;

  columns.forEach((col, c) => {
    const perRow = Math.ceil(col.length / Math.ceil(col.length / 3));
    for (let start = 0; start < col.length; start += perRow) {
      const row = col.slice(start, start + perRow);
      const w = Math.min(160, (width - pad * 2 - (row.length - 1) * gap) / row.length);
      const rowW = row.length * w + (row.length - 1) * gap;
      const h = Math.max(...row.map(nodeHeight));
      row.forEach((node, i) =>
        boxes.push({...node, x: (width - rowW) / 2 + i * (w + gap), y, w, h, col: c}),
      );
      y += h + (start + perRow < col.length ? gap : rowGap);
    }
  });
  return {width, height: y - rowGap + pad, boxes, vertical: true};
}

function edgePath(a: Box, b: Box, vertical: boolean): string {
  if (vertical) {
    const [x1, y1, x2, y2] = [a.x + a.w / 2, a.y + a.h, b.x + b.w / 2, b.y];
    const my = (y1 + y2) / 2;
    return `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`;
  }
  const [x1, y1, x2, y2] = [a.x + a.w, a.y + a.h / 2, b.x, b.y + b.h / 2];
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

function FlowSvg({
  layout,
  edges,
  label,
  className,
}: {
  layout: ReturnType<typeof layoutWide>;
  edges: Props['edges'];
  label: string;
  className: string;
}): ReactNode {
  const {width, height, boxes, vertical} = layout;
  const byId = new Map(boxes.map((b) => [b.id, b]));
  const targets = new Set(edges.map(([, to]) => to));

  return (
    <svg className={clsx('flow__svg', className)} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label}>
      {edges.map(([from, to]) => {
        const a = byId.get(from);
        const b = byId.get(to);
        if (!a || !b) return null;
        const d = edgePath(a, b, vertical);
        const at = a.col * step + 400;
        return (
          <g key={`${from}-${to}`}>
            <path className="flow__edge" d={d} pathLength={1} style={{'--d': `${a.col * step + 250}ms`} as React.CSSProperties} />
            <circle className="flow__pulse" r={3.5} opacity={0}>
              <animateMotion data-at={at} begin="indefinite" dur="500ms" path={d} fill="freeze" />
              <animate data-at={at} begin="indefinite" attributeName="opacity" dur="500ms" values="0;1;1;0" keyTimes="0;0.15;0.85;1" />
            </circle>
          </g>
        );
      })}
      {boxes.map((b) => (
        <g
          key={b.id}
          className={clsx('flow__node', b.tone && `flow__node--${b.tone}`, targets.has(b.id) && 'flow__node--target')}
          style={{'--d': `${b.col * step}ms`} as React.CSSProperties}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={6} />
          <text className="flow__label" x={b.x + b.w / 2} y={b.y + b.h / 2 + (b.sub ? -7 : 0)}>
            {b.label}
          </text>
          {b.sub && (
            <text className="flow__sub" x={b.x + b.w / 2} y={b.y + b.h / 2 + 11}>
              {b.sub}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}

export default function Flow({columns, edges, label, caption}: Props): ReactNode {
  const {ref, animated, play} = usePlayOnce<HTMLElement>((columns.length - 1) * step + 700);
  return (
    <figure className="story flow" ref={ref}>
      <FlowSvg layout={layoutWide(columns)} edges={edges} label={label} className="story__wide" />
      <FlowSvg layout={layoutNarrow(columns)} edges={edges} label={label} className="story__narrow" />
      <Caption onReplay={animated ? play : undefined}>{caption}</Caption>
    </figure>
  );
}
