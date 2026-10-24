import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/BlogListPage';
import {
  EditorialIndex,
  IndexPager,
  PostRows,
  plural,
} from '@site/src/components/EditorialIndex';

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
  const { blogTitle, blogDescription, totalCount, nextPage, previousPage } = metadata;

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <EditorialIndex
        title={blogTitle}
        byline={<span className="mono">{plural(totalCount, 'post')}</span>}>
        <PostRows items={items} />
        <IndexPager previousPage={previousPage} nextPage={nextPage} />
      </EditorialIndex>
    </HtmlClassNameProvider>
  );
};

export default BlogListPage;
