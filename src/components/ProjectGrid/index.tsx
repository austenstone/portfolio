import React, {type ReactNode} from 'react';
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

const ProjectGrid = (): ReactNode => (
  <div className={styles.grid}>
    {projects.map(({title, description, href, image, imageAlt}) => (
      <Link className={styles.card} key={href} to={href}>
        <div className={styles.imageFrame}>
          <img
            alt={imageAlt}
            className={styles.image}
            decoding="async"
            loading="lazy"
            src={image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    ))}
  </div>
);

export default ProjectGrid;
