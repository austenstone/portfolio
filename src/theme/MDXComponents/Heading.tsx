import React, {useContext, type ReactNode} from 'react';
import MDXHeading from '@theme-original/MDXComponents/Heading';
import type {Props} from '@theme/MDXComponents/Heading';
import {
  BandContext,
  EditorialContext,
  SplitWords,
} from '@site/src/components/Editorial';

export default function MDXHeadingWrapper(props: Props): ReactNode {
  const editorial = useContext(EditorialContext);
  const inBand = useContext(BandContext);
  const {as, children} = props;

  if (!editorial || (as !== 'h2' && as !== 'h3') || typeof children !== 'string') {
    return <MDXHeading {...props} />;
  }

  const numbered = children.match(/^(\d+)\.\s+(.+)$/s);
  const text = numbered ? numbered[2] : children;
  const body = inBand && as === 'h2' ? <SplitWords text={text} /> : text;

  return (
    <MDXHeading {...props}>
      {numbered && (
        <>
          <span className="heading-num" aria-hidden="true">
            {numbered[1]}
          </span>
          <span className="visually-hidden">{numbered[1]}. </span>
        </>
      )}
      {body}
    </MDXHeading>
  );
}
