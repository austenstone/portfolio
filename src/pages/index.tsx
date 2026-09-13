import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const MinimalHomepage = () => {
  return (
    <div className={styles.minimalContainer}>
      <div className={styles.content}>
        <Heading as="h1" className={styles.title}>
          <span className={styles.tilde}>~</span>austenstone
        </Heading>

        <p className={styles.intro}>
          I&apos;m Austen. I work on <Link href="https://github.com/features/actions">
            GitHub Actions
          </Link>{' '}
          at <Link href="https://github.com/">GitHub</Link>. I build things, and I
          love using AI to automate the boring stuff and see what&apos;s possible.
          This is where I share some of what I&apos;m working on.
        </p>

        <p className={styles.email}>
          <Link href="mailto:stone@austen.info">stone@austen.info</Link>
        </p>

        <div className={styles.section}>
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
            <Link href="/projects" className={styles.link}>
              projects<span className={styles.linkDir}>/</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = (): ReactNode => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.homepageContainer}>
      <Layout
        title={siteConfig.title}
        description="I work on GitHub Actions, build things, and love using AI.">
        <MinimalHomepage />
      </Layout>
    </div>
  );
};

export default Home;
