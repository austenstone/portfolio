import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { translateBlogAuthorsListPageTitle } from '@docusaurus/theme-common/internal';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/Blog/Pages/BlogAuthorsListPage';
import { EditorialIndex, IndexRows, plural } from '@site/src/components/EditorialIndex';

const BlogAuthorsListPage = ({ authors }: Props): ReactNode => {
  const title = translateBlogAuthorsListPageTitle();

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogAuthorsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_authors_list" />
      <EditorialIndex title={title}>
        <IndexRows
          rows={authors.flatMap(({ key, name, imageURL, page, count }) =>
            page
              ? [
                  {
                    key,
                    to: page.permalink,
                    title: (
                      <span className="blog-index__author">
                        {imageURL && <img src={imageURL} alt="" width={32} height={32} />}
                        {name}
                      </span>
                    ),
                    meta: plural(count, 'post'),
                  },
                ]
              : [],
          )}
        />
      </EditorialIndex>
    </HtmlClassNameProvider>
  );
};

export default BlogAuthorsListPage;
