import React, {type CSSProperties, type ReactNode} from 'react';
import clsx from 'clsx';

type Props = {
  head: string[];
  rows: ReactNode[][];
  highlight?: string;
  label?: string;
};

// On narrow screens the row labels fold into each cell, so the subject column can pin at the left edge.
export default function Compare({head, rows, highlight, label = 'Comparison'}: Props): ReactNode {
  const subject = highlight ? head.indexOf(highlight) : -1;
  const cell = (i: number) =>
    clsx(i === subject && 'compare__subject', i === 1 && subject === 1 && 'compare__pin');

  return (
    <div className="compare" role="region" aria-label={label} tabIndex={0} style={{'--cols': head.length - 1} as CSSProperties}>
      <table>
        <colgroup>
          {head.map((h, i) => (
            <col key={h} className={i === 0 ? 'compare__labels' : undefined} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={h} scope="col" className={cell(i)}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((value, i) =>
                i === 0 ? (
                  <th key={i} scope="row">
                    {value}
                  </th>
                ) : (
                  <td key={i} className={cell(i)} data-label={typeof row[0] === 'string' ? row[0] : undefined}>
                    {value}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
