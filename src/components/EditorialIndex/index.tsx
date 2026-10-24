import React, { type CSSProperties, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import type { Content } from '@theme/BlogPostPage';
import { SplitWords } from '@site/src/components/Editorial';

type Row = {
  key: string;
  to: string;
  title: ReactNode;
  meta?: ReactNode;
};

const formatDate = (date: string, options: Intl.DateTimeFormatOptions): string =>
  new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'UTC' }).format(new Date(date));

const stagger = (i: number): CSSProperties =>
  ({ '--d': `${200 + Math.min(i, 10) * 40}ms` }) as CSSProperties;

export const EditorialIndex = ({
  title,
  dek,
  byline,
  children,
}: {
  title: string;
  dek?: ReactNode;
  byline?: ReactNode;
  children: ReactNode;
}): ReactNode => (
  <Layout>
    <main className="editorial blog-index">
      <header className="post-hero editorial-grid">
        <div>
          <h1 className="post-hero__title rise">
            <SplitWords text={title} />
          </h1>
          {dek && (
            <p className="blog-index__dek enter" style={{ '--d': '240ms' } as CSSProperties}>
              {dek}
            </p>
          )}
          {byline && (
            <p className="post-hero__byline enter" style={{ '--d': '420ms' } as CSSProperties}>
              {byline}
            </p>
          )}
        </div>
      </header>
      <div className="editorial-grid blog-index__body">
        <div>{children}</div>
      </div>
    </main>
  </Layout>
);

export const IndexRows = ({ rows, offset = 0 }: { rows: Row[]; offset?: number }): ReactNode => (
  <ol className="blog-index__list">
    {rows.map(({ key, to, title, meta }, i) => (
      <li className="enter" key={key} style={stagger(offset + i)}>
        <Link className="blog-index__row" to={to}>
          <span className="blog-index__title">{title}</span>
          {meta && <span className="blog-index__date mono">{meta}</span>}
        </Link>
      </li>
    ))}
  </ol>
);

export const PostRows = ({
  items,
  dateFormat = { day: 'numeric', month: 'short', year: 'numeric' },
  offset,
}: {
  items: readonly { readonly content: Content }[];
  dateFormat?: Intl.DateTimeFormatOptions;
  offset?: number;
}): ReactNode => (
  <IndexRows
    offset={offset}
    rows={items.map(({ content }) => {
      const { date, permalink, title } = content.metadata;
      return {
        key: permalink,
        to: permalink,
        title,
        meta: <time dateTime={date}>{formatDate(date, dateFormat)}</time>,
      };
    })}
  />
);

export const IndexPager = ({
  previousPage,
  nextPage,
}: {
  previousPage?: string;
  nextPage?: string;
}): ReactNode =>
  (previousPage || nextPage) && (
    <nav className="blog-index__pager" aria-label="Blog pagination">
      {previousPage && (
        <Link to={previousPage}>
          <span aria-hidden="true">←</span> Newer entries
        </Link>
      )}
      {nextPage && (
        <Link className="blog-index__pager-next" to={nextPage}>
          Older entries <span aria-hidden="true">→</span>
        </Link>
      )}
    </nav>
  );

export const plural = (count: number, noun: string): string =>
  `${count} ${noun}${count === 1 ? '' : 's'}`;
