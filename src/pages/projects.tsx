import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import ProjectGrid from '@site/src/components/ProjectGrid';
import styles from './projects.module.css';

const Projects = (): ReactNode => (
  <Layout
    title="Projects"
    description="GitHub automation, industrial software, and other things I've built.">
    <main className={styles.main}>
      <div className={styles.container}>
        <Heading as="h1" className={styles.title}>
          Projects
        </Heading>
        <p className={styles.description}>
          A few things I&apos;ve built, from GitHub automation to industrial
          software.
        </p>
        <ProjectGrid />
      </div>
    </main>
  </Layout>
);

export default Projects;
