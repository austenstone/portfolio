import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import type { ArchiveBlogPost, Props } from '@theme/BlogArchivePage';
import { EditorialIndex, PostRows, plural } from '@site/src/components/EditorialIndex';

const groupByYear = (posts: readonly ArchiveBlogPost[]) =>
  Array.from(
    posts.reduce((years, post) => {
      const year = post.metadata.date.slice(0, 4);
      return years.set(year, [...(years.get(year) ?? []), { content: post }]);
    }, new Map<string, { content: ArchiveBlogPost }[]>()),
  );

const BlogArchivePage = ({ archive }: Props): ReactNode => {
  const title = translate({
    id: 'theme.blog.archive.title',
    message: 'Archive',
    description: 'The page & hero title of the blog archive page',
  });
  const description = translate({
    id: 'theme.blog.archive.description',
    message: 'Archive',
    description: 'The page & hero description of the blog archive page',
  });
  const years = groupByYear(archive.blogPosts);
  let offset = 0;

  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.wrapper.blogPages, 'blog-archive-page')}>
      <PageMetadata title={title} description={description} />
      <EditorialIndex
        title={title}
        byline={<span className="mono">{plural(archive.blogPosts.length, 'post')}</span>}>
        {years.map(([year, items]) => {
          const start = offset;
          offset += items.length;
          return (
            <section className="blog-index__group" key={year} aria-labelledby={`y${year}`}>
              <h2 className="blog-index__year mono" id={`y${year}`}>
                {year}
              </h2>
              <PostRows items={items} offset={start} dateFormat={{ day: 'numeric', month: 'short' }} />
            </section>
          );
        })}
      </EditorialIndex>
    </HtmlClassNameProvider>
  );
};

export default BlogArchivePage;
