import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/BlogListPage';

import styles from './styles.module.css';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

const BlogListPageMetadata = ({ metadata }: Props): ReactNode => {
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const title = permalink === '/' ? siteTitle : blogTitle;

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
};

const BlogListPage = (props: Props): ReactNode => {
  const { items, metadata } = props;
  const { nextPage, previousPage } = metadata;

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <Layout noFooter>
        <main className={styles.page}>
          <h1 className={styles.heading}>Posts</h1>
          <div className={styles.posts}>
            {items.map(({ content: BlogPostContent }) => {
              const { date, permalink, title } = BlogPostContent.metadata;

              return (
                <article className={styles.post} key={permalink}>
                  <h2 className={styles.title}>
                    <Link to={permalink}>{title}</Link>
                  </h2>
                  <time className={styles.date} dateTime={date}>
                    {dateFormatter.format(new Date(date))}
                  </time>
                </article>
              );
            })}
          </div>
          {(previousPage || nextPage) && (
            <nav className={styles.pagination} aria-label="Blog pagination">
              {previousPage && (
                <Link className={styles.paginationLink} to={previousPage}>
                  <span aria-hidden="true">←</span> Newer entries
                </Link>
              )}
              {nextPage && (
                <Link
                  className={clsx(
                    styles.paginationLink,
                    styles.paginationLinkNext,
                  )}
                  to={nextPage}>
                  Older entries <span aria-hidden="true">→</span>
                </Link>
              )}
            </nav>
          )}
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
};

export default BlogListPage;
