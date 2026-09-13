import React, {type ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import OriginalBlogPostItemFooter from '@theme-original/BlogPostItem/Footer';

const BlogPostItemFooter = (): ReactNode => {
  const {isBlogPostPage} = useBlogPost();

  return isBlogPostPage ? <OriginalBlogPostItemFooter /> : null;
};

export default BlogPostItemFooter;
