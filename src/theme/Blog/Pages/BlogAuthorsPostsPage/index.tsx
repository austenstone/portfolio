import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  BlogAuthorNoPostsLabel,
  BlogAuthorsListViewAllLabel,
  useBlogAuthorPageTitle,
} from '@docusaurus/theme-common/internal';
import { useBlogMetadata } from '@docusaurus/plugin-content-blog/client';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/Blog/Pages/BlogAuthorsPostsPage';
import {
  EditorialIndex,
  IndexPager,
  PostRows,
  plural,
} from '@site/src/components/EditorialIndex';

const BlogAuthorsPostsPage = ({ author, items, listMetadata }: Props): ReactNode => {
  const title = useBlogAuthorPageTitle(author);
  const { authorsListPath } = useBlogMetadata();

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogAuthorsPostsPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_authors_posts" />
      <EditorialIndex
        title={author.name ?? title}
        dek={author.description ?? author.title}
        byline={
          <>
            <span className="mono">{plural(author.count, 'post')}</span>
            <Link className="post-hero__who" to={authorsListPath}>
              <BlogAuthorsListViewAllLabel />
            </Link>
          </>
        }>
        {items.length === 0 ? (
          <p>
            <BlogAuthorNoPostsLabel />
          </p>
        ) : (
          <>
            <PostRows items={items} />
            <IndexPager previousPage={listMetadata.previousPage} nextPage={listMetadata.nextPage} />
          </>
        )}
      </EditorialIndex>
    </HtmlClassNameProvider>
  );
};

export default BlogAuthorsPostsPage;
