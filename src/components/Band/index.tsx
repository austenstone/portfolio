import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {BandContext} from '@site/src/components/Editorial';

export type BandTone = 'tint' | 'ink';

type Props = {
  tone?: BandTone;
  className?: string;
  children: ReactNode;
};

export default function Band({tone = 'tint', className, children}: Props): ReactNode {
  return (
    <BandContext.Provider value>
      <section className={clsx('band', `band--${tone}`, className)}>{children}</section>
    </BandContext.Provider>
  );
}
