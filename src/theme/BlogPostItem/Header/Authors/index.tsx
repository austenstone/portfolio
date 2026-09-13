import React, {type ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import OriginalBlogPostItemHeaderAuthors from '@theme-original/BlogPostItem/Header/Authors';
import type {Props} from '@theme/BlogPostItem/Header/Authors';

const BlogPostItemHeaderAuthors = (props: Props): ReactNode => {
  const {isBlogPostPage} = useBlogPost();

  return isBlogPostPage ? (
    <OriginalBlogPostItemHeaderAuthors {...props} />
  ) : null;
};

export default BlogPostItemHeaderAuthors;
