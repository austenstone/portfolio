import React, {useState, type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {Ink} from '@site/src/components/Ink';
import styles from './ink.module.css';

const InkExperiment = (): ReactNode => {
  const [replay, setReplay] = useState(0);

  return (
    <Layout title="Ink annotations" description="An experiment in hand-drawn emphasis for the blog." noFooter>
      <main className={`editorial ${styles.page}`}>
        <header className={styles.header}>
          <Link to="/blog" className={styles.back}>Back to the blog</Link>
          <h1>A little ink.<br />A little emphasis.</h1>
          <p>Hand-drawn marks, not more interface. An experiment with a few passages from the blog.</p>
          <div className={styles.controls}>
            <button type="button" onClick={() => setReplay((value) => value + 1)}>
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2.5 8a5.5 5.5 0 1 0 1.6-3.9M2.5 2v3h3" />
              </svg>
              Replay ink
            </button>
            <span>Scroll to draw. Reduced motion keeps the marks still.</span>
          </div>
        </header>

        <article className={`post-body ${styles.article}`} aria-label="Annotated article excerpts">
          <section className={styles.passage} aria-labelledby="underline-title">
            <h2 id="underline-title">Ask the better question</h2>
            <p>
              The better question is <strong><Ink replay={replay}>what does that repo publish?</Ink></strong>{' '}
              And right behind it, <strong>who runs whose tests?</strong> Answer those two and the rest of your pipeline design mostly falls out.
            </p>
            <p className={styles.note}>A loose underline. Just enough weight to pull out the question.</p>
          </section>

          <section className={styles.passage} aria-labelledby="circle-title">
            <h2 id="circle-title">Circle the thing that matters</h2>
            <p>
              In the source-coupled model, every repo is part of every other repo&apos;s build.
              With artifact coupling, each repo has one job: build, test, publish a{' '}
              <Ink type="circle" replay={replay}>versioned thing.</Ink>{' '}
              Consumers pin a version. Upgrades are PRs you can review and revert.
            </p>
            <p className={styles.note}>One circle, not a page full of corrections.</p>
          </section>

          <section className={styles.passage} aria-labelledby="bracket-title">
            <h2 id="bracket-title">Leave a mark in the margin</h2>
            <p>
              Flip it. <strong><Ink type="bracket" replay={replay}>The dependency triggers the consumer&apos;s tests.</Ink></strong>{' '}
              When a PR opens on <code>shared-lib</code>, it publishes a preview version
              (say <code>2.4.0-pr.123</code>) and kicks off each known consumer&apos;s test suite
              with <code>workflow_dispatch</code> or <code>repository_dispatch</code>.
              The consumer runs its tests against that preview, then reports back by creating
              a check run on the producer&apos;s PR.
            </p>
            <p className={styles.note}>A paired bracket for the sentence you want to remember.</p>
          </section>
        </article>

        <footer className={styles.footer}>
          <p>Same words. A different kind of emphasis.</p>
          <Link to="/blog/couple-to-artifacts-not-source">Read the original article</Link>
          <span>Prototype only. Existing posts are unchanged.</span>
        </footer>
      </main>
    </Layout>
  );
};

export default InkExperiment;
