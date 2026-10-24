import React, {useMemo, useRef, type CSSProperties, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {
  BlogPostProvider,
  useBlogPost,
} from '@docusaurus/plugin-content-blog/client';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';
import ContentVisibility from '@theme/ContentVisibility';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import BlogPostPageStructuredData from '@theme/BlogPostPage/StructuredData';
import type {Props} from '@theme/BlogPostPage';
import GiscusComponent from '@site/src/components/GiscusComponent';
import SectionRail, {sectionsFromToc} from '@site/src/components/SectionRail';
import {
  EditorialContext,
  SplitWords,
  useScrollReveal,
} from '@site/src/components/Editorial';

const longDate = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const delay = (ms: number) => ({'--d': `${ms}ms`}) as CSSProperties;

function PostHero(): ReactNode {
  const {metadata} = useBlogPost();
  const {title, date, readingTime, tags, authors} = metadata;

  return (
    <header className="post-hero editorial-grid">
      <div>
        {tags.length > 0 && (
          <p className="post-hero__tags enter" style={delay(0)}>
            {tags.map((tag) => (
              <Link key={tag.permalink} to={tag.permalink}>
                {tag.label}
              </Link>
            ))}
          </p>
        )}
        <h1 className="post-hero__title rise">
          <SplitWords text={title} />
        </h1>
        <p className="post-hero__byline enter" style={delay(420)}>
          {authors.map((author) => (
            <React.Fragment key={author.key ?? author.name}>
              {author.page?.permalink ? (
                <Link className="post-hero__who" to={author.page.permalink}>
                  {author.name}
                </Link>
              ) : (
                <span className="post-hero__who">{author.name}</span>
              )}
              {author.title && <span>{author.title}</span>}
            </React.Fragment>
          ))}
          <time className="mono" dateTime={date}>
            {longDate.format(new Date(date))}
          </time>
          {readingTime !== undefined && (
            <span className="mono">{Math.max(1, Math.ceil(readingTime))} min read</span>
          )}
        </p>
      </div>
    </header>
  );
}

function PostMeta(): ReactNode {
  const {metadata} = useBlogPost();
  const {editUrl, lastUpdatedAt} = metadata;
  if (!editUrl && !lastUpdatedAt) return null;

  return (
    <div className="post-meta editorial-grid">
      <p>
        {lastUpdatedAt && (
          <span>
            Updated{' '}
            <time className="mono" dateTime={new Date(lastUpdatedAt).toISOString()}>
              {longDate.format(new Date(lastUpdatedAt))}
            </time>
          </span>
        )}
        {editUrl && <Link to={editUrl}>Edit on GitHub</Link>}
      </p>
    </div>
  );
}

function PostCloser(): ReactNode {
  const {metadata} = useBlogPost();
  const {prevItem, nextItem} = metadata;

  return (
    <section className="post-closer editorial-grid" aria-label="Keep reading">
      <div>
        {(prevItem || nextItem) && (
          <>
            <p className="post-closer__label mono">Keep reading</p>
            <nav className="post-closer__pager" aria-label="Blog post page navigation">
              {prevItem && (
                <Link className="post-closer__link" to={prevItem.permalink}>
                  <span className="post-closer__dir mono">← Newer</span>
                  <span className="post-closer__title">{prevItem.title}</span>
                </Link>
              )}
              {nextItem && (
                <Link
                  className="post-closer__link post-closer__link--next"
                  to={nextItem.permalink}>
                  <span className="post-closer__dir mono">Older →</span>
                  <span className="post-closer__title">{nextItem.title}</span>
                </Link>
              )}
            </nav>
          </>
        )}
        <span className="end-mark" aria-hidden="true" />
      </div>
    </section>
  );
}

function BlogPostPageContent({children}: {children: ReactNode}): ReactNode {
  const {metadata, toc} = useBlogPost();
  const {enableComments} = metadata.frontMatter as {enableComments?: boolean};
  const sections = useMemo(() => sectionsFromToc(toc), [toc]);
  const body = useRef<HTMLDivElement>(null);
  useScrollReveal(body, metadata.permalink);

  return (
    <Layout>
      <SectionRail sections={sections} until={body} />
      <main className="editorial">
        <article>
          <PostHero />
          <div className="editorial-grid">
            <ContentVisibility metadata={metadata} />
          </div>
          <EditorialContext.Provider value>
            <div
              ref={body}
              id={blogPostContainerID}
              className="markdown post-body editorial-grid">
              <MDXContent>{children}</MDXContent>
            </div>
          </EditorialContext.Provider>
        </article>
        <PostMeta />
        {enableComments && (
          <div className="editorial-grid">
            <GiscusComponent />
          </div>
        )}
        <PostCloser />
      </main>
    </Layout>
  );
}

export default function BlogPostPage(props: Props): ReactNode {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageStructuredData />
        <BlogPostPageContent>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
