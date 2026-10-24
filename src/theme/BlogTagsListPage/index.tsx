import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/BlogTagsListPage';
import { EditorialIndex, IndexRows, plural } from '@site/src/components/EditorialIndex';

const BlogTagsListPage = ({ tags }: Props): ReactNode => {
  const title = translateTagsPageTitle();
  const sorted = [...tags].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_tags_list" />
      <EditorialIndex
        title={title}
        byline={<span className="mono">{plural(tags.length, 'tag')}</span>}>
        <IndexRows
          rows={sorted.map(({ label, permalink, count }) => ({
            key: permalink,
            to: permalink,
            title: label,
            meta: plural(count, 'post'),
          }))}
        />
      </EditorialIndex>
    </HtmlClassNameProvider>
  );
};

export default BlogTagsListPage;
