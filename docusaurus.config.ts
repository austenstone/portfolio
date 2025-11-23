import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Austen Stone',
  tagline: 'Software Engineer who writes code and solves business problems',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://austen.info',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'austenstone', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  markdown: {
    format: 'detect',
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
    // preprocessor: processGithubAdmonitions, // Removed to avoid conflict with remark plugin
    // parseFrontMatter: async (params) => {
    //   const result = await params.defaultParseFrontMatter(params);
    //   result.frontMatter.description =
    //     result.frontMatter.description?.replaceAll('{{MY_VAR}}', 'MY_VALUE');
    //   return result;
    // },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    anchors: {
      maintainCase: true,
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        googleAnalytics: {
          trackingID: 'G-P3MLQ4GJP5',
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'G-P3MLQ4GJP5',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/austenstone/portfolio/tree/main/',
          beforeDefaultRemarkPlugins: [remarkGithubAdmonitionsToDirectives],
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
          blogTitle: 'Blog',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            xslt: true,
            copyright: `Copyright © ${new Date().getFullYear()} Austen Stone`
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/austenstone/portfolio/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'assets/img/japaneese_garden_small.jpg',
    navbar: {
      // title: 'Austen Stone',
      logo: {
        src: '/img/ChatGPT Image Jun 28, 2025, 04_41_42 PM.png',
        style: {
          'border-radius': '50%',
        }
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'guides',
          position: 'left',
          label: 'Actions',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projects',
          position: 'left',
          label: 'Projects',
        },
        {
          href: 'https://github.com/austenstone',
          className: 'header-github-link',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/austenstone/',
          className: 'header-linkedin-link',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/austenstone',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/austenstone/',
            },
            {
              label: 'Email',
              href: 'mailto:hi@austen.info',
            },
          ],
        },
        {
          title: ' ',
          items: [
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Resume',
              to: '/resume',
            },
            {
              label: 'Source Code',
              href: 'https://github.com/austenstone/portfolio/',
            },
          ],
        },
      ],
      copyright: `2024-${new Date().getFullYear()} © Austen Stone`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['yaml', 'bash', 'json', 'typescript', 'javascript', 'jsx', 'tsx'],
    },
  } satisfies Preset.ThemeConfig,
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        rel: 'stylesheet',
      },
    },
  ]
};

export default config;
