import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function MinimalHomepage() {
  return (
    <div className={styles.minimalContainer}>
      <div className={styles.content}>
        <Heading as="h1" className={styles.title}>
          <span className={styles.tilde}>~</span>austenstone
        </Heading>
        
        <p>
          hi (at) austen (dot) info
        </p>

        <div className={styles.section}>
          {/* <h2 className={styles.sectionTitle}>links</h2> */}
          <div className={styles.linksList}>
            <Link href="/blog" className={styles.link}>
              blog<span className={styles.linkDir}>/</span>
            </Link>
            <Link href="/docs/guides/Intro%20to%20Concepts" className={styles.link}>
              guides<span className={styles.linkDir}>/</span>
            </Link>
            <Link href="https://github.com/austenstone" className={styles.link}>
              github
            </Link>
            <Link href="https://www.linkedin.com/in/austenstone/" className={styles.link}>
              linkedin
            </Link>
            <Link href="/resume" className={styles.link}>
              resume
            </Link>
            <Link href="/docs/projects/github-actions" className={styles.link}>
              projects<span className={styles.linkDir}>/</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.homepageContainer}>
      <Layout
        title={siteConfig.title}
        description="Passionate developer focused on using cutting edge technology to solve business problems">
        <MinimalHomepage />
      </Layout>
    </div>
  );
}
