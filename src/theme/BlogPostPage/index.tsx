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

const shortDate = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

const delay = (ms: number) => ({'--d': `${ms}ms`}) as CSSProperties;

function PostHero(): ReactNode {
  const {metadata} = useBlogPost();
  const {title, date, readingTime, tags} = metadata;

  return (
    <header className="post-hero editorial-grid">
      <div className="post-hero__inner">
        <h1 className="post-hero__title rise">
          <SplitWords text={title} />
        </h1>
        <dl className="post-hero__meta enter" style={delay(420)}>
          <div>
            <dt>Published</dt>
            <dd>
              <time dateTime={date}>{shortDate.format(new Date(date))}</time>
            </dd>
          </div>
          {readingTime !== undefined && (
            <div>
              <dt>Reading</dt>
              <dd>{Math.max(1, Math.ceil(readingTime))} min</dd>
            </div>
          )}
          {tags.length > 0 && (
            <div>
              <dt>Topics</dt>
              <dd className="post-hero__topics">
                {tags.map((tag) => (
                  <Link key={tag.permalink} to={tag.permalink}>
                    {tag.label}
                  </Link>
                ))}
              </dd>
            </div>
          )}
        </dl>
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
