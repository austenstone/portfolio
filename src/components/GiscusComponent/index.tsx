import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent(): React.ReactElement {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '2rem' }}>
      <Giscus
        id="comments"
        repo="austenstone/portfolio"
        repoId="MDEwOlJlcG9zaXRvcnkyNTUwNjU0MjI=" // Replace with your actual repo ID from https://giscus.app/
        category="General"
        categoryId="DIC_kwDODzP9Ts4CsRld" // Replace with your actual category ID from https://giscus.app/
        mapping="pathname"
        term="Welcome to giscus!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark' : 'light'}
        lang="en"
        loading="lazy"
        strict="0"
      />
    </div>
  );
}
