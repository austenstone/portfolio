import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              Hey👋, I'm Austen
            </Heading>
            <p className="hero__subtitle">I write code and solve people's business problems.</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                View My Projects
              </Link>
              <Link
                className="button button--outline button--primary button--lg"
                to="/resume">
                See My Resume
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link href="https://github.com/austenstone" className="button button--secondary">
                GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/austenstone/" className="button button--secondary">
                LinkedIn
              </Link>
              <Link href="mailto:hi@austen.info" className="button button--secondary">
                Email
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://avatars.githubusercontent.com/u/22425467?v=4"
              alt="Austen Stone"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function MainProjects() {
  const projects = [
    {
      title: "GitHub Actions",
      description: "GitHub Actions marketplace presence with 50+ published actions. Making it easy to automate all your software workflows with world-class CI/CD.",
      image: "/assets/screenshots/chrome_nSvEKPj2YO.png",
      links: [
        { text: "Marketplace", url: "https://github.com/marketplace?query=austenstone" }
      ]
    },
    {
      title: "deviceWISE View",
      description: "A powerful no-code dashboard builder that generated $1M+ revenue. Visualize your data or create UI's by simply dragging and dropping widgets into a canvas.",
      image: "/assets/screenshots/chrome_EWhfXl9Ecn.png",
      links: [
        { text: "Demo", url: "https://view.devicewise.com/login?user=demo&pass=demo" },
        { text: "Docs", url: "https://docs.devicewise.com/Content/Products/GatewayDevelopersGuide/deviceWISE_View/deviceWISE-View.htm" },
        { text: "Video", url: "https://youtu.be/Gh3EXo6ZuYE" }
      ]
    },
    {
      title: "GitHub Actions Usage Report Viewer",
      description: "Visualize a GitHub Actions usage report entirely client-side. Helping organizations understand their GitHub Actions usage patterns.",
      image: "/assets/screenshots/chrome_xebwmFt39a.png",
      links: [
        { text: "Live Demo", url: "https://austenstone.github.io/github-actions-usage-report/" },
        { text: "Source", url: "https://github.com/austenstone/github-actions-usage-report" },
        { text: "Video", url: "https://youtu.be/VSrB4Qhqgs8" }
      ]
    },
    {
      title: "GitHub Value",
      description: "GitHub Value is a free and open-source application designed to help measure the adoption, value, and impact of GitHub features.",
      image: "https://github.com/user-attachments/assets/09c494cd-fbdb-4b8e-9cb3-696371e9487a",
      links: [
        { text: "Demo", url: "https://oauth.gvm-chart.com/copilot" },
        { text: "Source", url: "https://github.com/austenstone/github-value" }
      ]
    }
  ];

  return (
    <section className={styles.mainProjects}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Main Projects
        </Heading>
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectLinks}>
                  {project.links.map((link, linkIdx) => (
                    <Link key={linkIdx} href={link.url} className="button button--outline button--sm">
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OtherProjects() {
  const projects = [
    {
      title: "The Game of Life",
      description: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.",
      links: [
        { text: "Play Game", url: "https://life.austen.info" },
        { text: "Source", url: "https://github.com/austenstone/game-of-life" }
      ]
    },
    {
      title: "Spotify Share",
      description: "Share your liked Spotify songs with others.",
      links: [
        { text: "App", url: "https://spotify-share.austen.info" },
        { text: "Source", url: "https://github.com/austenstone/spotify-share" }
      ]
    },
    {
      title: "Audi Car Search",
      description: "I reverse engineered Audi's website so I could find the cheapest certified pre owned vehicle in America.",
      links: [
        { text: "Source", url: "https://github.com/austenstone/audi-car-search" }
      ]
    },
    {
      title: "React Chat",
      description: "Simple chatroom using Firebase and React.",
      links: [
        { text: "App", url: "https://chat.austen.info" },
        { text: "Source", url: "https://github.com/austenstone/react-chat" }
      ]
    }
  ];

  return (
    <section className={styles.otherProjects}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Other Projects
        </Heading>
        <div className={styles.projectsList}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectItem}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.projectLinks}>
                {project.links.map((link, linkIdx) => (
                  <Link key={linkIdx} href={link.url} className="button button--outline button--sm">
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Support My Work
        </Heading>
        <div className={styles.sponsorContent}>
          <iframe src="https://github.com/sponsors/austenstone/button" title="Sponsor austenstone" height="32" width="114" style={{border: 0, borderRadius: 6}}></iframe>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Software Engineer`}
      description="Passionate developer focused on using cutting edge technology to solve business problems">
      <HomepageHeader />
      <main>
        <MainProjects />
        <OtherProjects />
        <Sponsors />
      </main>
    </Layout>
  );
}
