import React, {type ReactNode} from 'react';

type Props = {
  value: string;
  label: ReactNode;
  note?: ReactNode;
};

export default function Stat({value, label, note}: Props): ReactNode {
  return (
    <figure className="stat">
      <p className="stat__value">{value}</p>
      <figcaption>
        <span className="stat__label">{label}</span>
        {note && <span className="stat__note">{note}</span>}
      </figcaption>
    </figure>
  );
}
