import React, {useEffect, useRef, useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

type Project = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    title: 'GitHub Actions',
    description:
      'Open-source Actions that automate workflows and make GitHub work a little harder.',
    href: '/docs/projects/github-actions',
    image: '/assets/screenshots/github-actions-marketplace.png',
    imageAlt: 'GitHub Marketplace showing Actions published by Austen Stone',
  },
  {
    title: 'Actio',
    description:
      'A tiny YAML superset that compiles macros into standard GitHub Actions workflows.',
    href: 'https://austenstone.github.io/actio/',
    image: '/assets/screenshots/actio.png',
    imageAlt: 'Actio GitHub Actions YAML transpiler',
  },
  {
    title: 'RunnerX',
    description:
      'Benchmark GitHub-hosted runners across real CI scenarios, comparing speed, hardware, and cost.',
    href: '/docs/projects/runnerx',
    image: '/assets/screenshots/runnerx.png',
    imageAlt: 'RunnerX cost and performance benchmark dashboard',
  },
  {
    title: 'GitHub Actions Usage Report Viewer',
    description:
      'A client-side viewer for exploring Actions usage patterns and costs.',
    href: '/docs/projects/github-usage-report',
    image: '/assets/screenshots/chrome_xebwmFt39a.png',
    imageAlt: 'GitHub Actions usage report dashboard',
  },
  {
    title: '.copilot',
    description:
      'My reusable Copilot instructions, skills, agents, hooks, extensions, and plugins.',
    href: 'https://github.com/austenstone/.copilot',
    image: '/assets/screenshots/copilot-customizations.png',
    imageAlt: 'GitHub preview for the austenstone Copilot customizations repository',
  },
  {
    title: 'Thinking Phrases',
    description:
      "Turn VS Code's Copilot thinking indicator into a live dashboard with tips and real-time data.",
    href: 'https://github.com/austenstone/thinking-phrases',
    image: '/assets/screenshots/thinking-phrases.png',
    imageAlt: 'GitHub preview for the Thinking Phrases repository',
  },
  {
    title: 'Copilot Model Lag',
    description:
      'Tracks how long new AI models take to arrive in GitHub Copilot across dozens of launches.',
    href: 'https://austenstone.github.io/copilot-model-lag/',
    image: '/assets/screenshots/copilot-model-lag.png',
    imageAlt: 'Copilot Model Lag model availability statistics',
  },
  {
    title: 'MyInstants MCP',
    description:
      'An MCP server that lets AI assistants search and play MyInstants sound buttons.',
    href: 'https://github.com/austenstone/myinstants-mcp',
    image: '/assets/screenshots/myinstants-mcp.webp',
    imageAlt: 'MyInstants MCP soundboard artwork',
  },
  {
    title: 'GitHub Value',
    description:
      'An open-source app for understanding GitHub adoption, value, and impact.',
    href: '/docs/projects/github-value',
    image: '/assets/screenshots/github-value.png',
    imageAlt: 'GitHub Value analytics dashboard',
  },
  {
    title: 'deviceWISE View',
    description:
      'A no-code industrial dashboard and HMI builder created for manufacturing teams.',
    href: '/docs/projects/devicewise-view',
    image: '/assets/screenshots/chrome_EWhfXl9Ecn.png',
    imageAlt: 'deviceWISE View industrial dashboard editor',
  },
];

const pad = (value: number): string => String(value).padStart(2, '0');

const displayUrl = (href: string): string => {
  if (href.startsWith('/')) return `austen.info${href}`;
  const url = new URL(href);
  return `${url.hostname}${url.pathname}`.replace(/\/$/, '');
};

const ProjectGrid = (): ReactNode => {
  const [active, setActive] = useState(0);
  const shots = useRef<(HTMLElement | null)[]>([]);
  const project = projects[active];

  useEffect(() => {
    const observer = new IntersectionObserver(
      items => {
        for (const item of items) {
          if (item.isIntersecting) setActive(Number((item.target as HTMLElement).dataset.index));
        }
      },
      {rootMargin: '-45% 0px -45% 0px'},
    );
    shots.current.forEach(shot => shot && observer.observe(shot));
    return () => observer.disconnect();
  }, []);

  const jump = (index: number): void => {
    shots.current[index]?.scrollIntoView({behavior: 'smooth', block: 'center'});
  };

  return (
    <div className={styles.gallery}>
      <aside className={styles.panel}>
        <div className={styles.panelCopy} key={project.href}>
          <span className={styles.counter}>{pad(active + 1)} / {pad(projects.length)}</span>
          <h2><Link to={project.href}>{project.title}</Link></h2>
          <p>{project.description}</p>
          <Link to={project.href} className={styles.textLink}>
            Open project <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ol className={styles.list}>
          {projects.map((item, index) => (
            <li key={item.href}>
              <button
                type="button"
                aria-current={index === active ? 'true' : undefined}
                onClick={() => jump(index)}>
                <span>{pad(index + 1)}</span>
                {item.title}
              </button>
            </li>
          ))}
        </ol>
      </aside>
      <div className={styles.shots}>
        {projects.map((item, index) => (
          <section
            key={item.href}
            data-index={index}
            ref={node => {
              shots.current[index] = node;
            }}
            className={styles.shot}
            data-active={index === active || undefined}>
            <Link to={item.href} className={styles.frame} aria-label={`Open ${item.title}`} tabIndex={-1}>
              <span className={styles.frameBar} aria-hidden="true">{displayUrl(item.href)}</span>
              <span className={styles.frameShot}>
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </span>
            </Link>
            <div className={styles.mobileCopy}>
              <h2><Link to={item.href}>{item.title}</Link></h2>
              <p>{item.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
