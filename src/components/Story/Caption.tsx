import React, {type ReactNode} from 'react';
import {ReplayButton} from '@site/src/components/Editorial';

export default function Caption({
  children,
  onReplay,
}: {
  children?: ReactNode;
  onReplay?: () => void;
}): ReactNode {
  if (!children && !onReplay) return null;
  return (
    <figcaption className="story__caption">
      <span>{children}</span>
      {onReplay && <ReplayButton onClick={onReplay} />}
    </figcaption>
  );
}
