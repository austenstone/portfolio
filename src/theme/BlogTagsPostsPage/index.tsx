import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { useBlogTagsPostsPageTitle } from '@docusaurus/theme-common/internal';
import SearchMetadata from '@theme/SearchMetadata';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import type { Props } from '@theme/BlogTagsPostsPage';
import {
  EditorialIndex,
  IndexPager,
  PostRows,
  plural,
} from '@site/src/components/EditorialIndex';

const BlogTagsPostsPage = ({ tag, items, listMetadata }: Props): ReactNode => {
  const title = useBlogTagsPostsPageTitle(tag);

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="blog_tags_posts" />
      <EditorialIndex
        title={tag.label}
        dek={tag.description}
        byline={
          <>
            <span className="mono">{plural(tag.count, 'post')}</span>
            <Link className="post-hero__who" to={tag.allTagsPath}>
              All tags
            </Link>
          </>
        }>
        {tag.unlisted && <Unlisted />}
        <PostRows items={items} />
        <IndexPager previousPage={listMetadata.previousPage} nextPage={listMetadata.nextPage} />
      </EditorialIndex>
    </HtmlClassNameProvider>
  );
};

export default BlogTagsPostsPage;
