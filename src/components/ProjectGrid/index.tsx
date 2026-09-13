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
    title: 'GitHub Value',
    description:
      'An open-source app for understanding GitHub adoption, value, and impact.',
    href: '/docs/projects/github-value',
    image: '/assets/screenshots/github-value.png',
    imageAlt: 'GitHub Value analytics dashboard',
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
