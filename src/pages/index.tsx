import React, { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const items = [
  { name: 'blog/', desc: 'things I wrote', href: '/blog' },
  { name: 'projects/', desc: 'things I built', href: '/projects' },
  { name: 'github', desc: '@austenstone', href: 'https://github.com/austenstone' },
  { name: 'linkedin', desc: 'in/austenstone', href: 'https://www.linkedin.com/in/austenstone/' },
  { name: 'resume', desc: 'the formal version', href: '/resume' },
];

const Terminal = () => {
  const [selected, setSelected] = useState(0);
  const links = useRef<(HTMLAnchorElement | null)[]>([]);
  const { colorMode, setColorMode } = useColorMode();
  const toggleTheme = useCallback(
    () => setColorMode(colorMode === 'dark' ? 'light' : 'dark'),
    [colorMode, setColorMode],
  );

  useEffect(() => {
    const select = (index: number) => {
      const next = (index + items.length) % items.length;
      setSelected(next);
      links.current[next]?.focus({ preventScroll: true });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.target instanceof HTMLElement && event.target.closest('input, textarea, [contenteditable]')) return;

      if (event.key === 'ArrowDown' || event.key === 'j') {
        event.preventDefault();
        select(selected + 1);
      } else if (event.key === 'ArrowUp' || event.key === 'k') {
        event.preventDefault();
        select(selected - 1);
      } else if (/^[1-9]$/.test(event.key) && Number(event.key) <= items.length) {
        select(Number(event.key) - 1);
      } else if (event.key === 't') {
        toggleTheme();
      } else if (event.key === 'Enter' && document.activeElement === document.body) {
        links.current[selected]?.click();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected, toggleTheme]);

  return (
    <main className={styles.page}>
      <div className={styles.tui}>
        <h1 className={styles.badges}>
          <span className={styles.badge}>austenstone</span>
          <span className={styles.badgeDim}>~</span>
        </h1>

        <div className={styles.box}>
          <p className={styles.bio}>
            I work on <Link href="https://github.com/features/actions">Actions</Link> at GitHub. I build things, and I
            use a lot of tokens. <strong>Automate everything.</strong>
          </p>

          <nav aria-label="Main">
            <ul className={styles.menu}>
              {items.map((item, index) => (
                <li key={item.href} onMouseEnter={() => setSelected(index)} onFocus={() => setSelected(index)}>
                  <Link
                    href={item.href}
                    ref={(el: HTMLAnchorElement | null) => {
                      links.current[index] = el;
                    }}
                    className={styles.item}
                    data-selected={index === selected}>
                    <span className={styles.cursor} aria-hidden="true">❯</span>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.desc}>{item.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className={styles.help}>
          <span><kbd>↑/k</kbd> up</span>
          <span><kbd>↓/j</kbd> down</span>
          <span><kbd>enter</kbd> open</span>
          <span><kbd>1-{items.length}</kbd> jump</span>
          <button type="button" className={styles.theme} onClick={toggleTheme}>
            <kbd>t</kbd> {colorMode === 'dark' ? 'light' : 'dark'}
          </button>
        </p>
      </div>
    </main>
  );
};

const Home = (): ReactNode => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.homepageContainer}>
      <Layout
        title={siteConfig.title}
        description="I work on GitHub Actions, build things, and use a lot of tokens. Automate everything.">
        <Terminal />
      </Layout>
    </div>
  );
};

export default Home;
