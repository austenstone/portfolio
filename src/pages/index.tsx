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
          Austen Stone is a Senior Field Actions Specialist at{' '}
          <Link href="https://github.com/">GitHub</Link> and a{' '}
          <Link href="https://github.com/features/copilot">GitHub Copilot</Link>{' '}
          expert. He uses AI heavily in his work and advocates for applying it
          practically to automate the boring stuff and build better software. He
          builds developer tools, publishes open source Actions, and writes about
          automation, AI, and modern software delivery.
        </p>

        <p className={styles.email}>
          <Link href="mailto:hi@austen.info">hi@austen.info</Link>
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
            <Link href="/docs/projects/github-actions" className={styles.link}>
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
        description="GitHub Copilot expert, AI advocate, and builder of developer tools focused on automation and modern software delivery.">
        <MinimalHomepage />
      </Layout>
    </div>
  );
};

export default Home;
