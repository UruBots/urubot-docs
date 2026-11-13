// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UruBots Docs',
  tagline: 'Documentación de UruBots',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://urubots.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/urubot-docs/',

  // GitHub pages deployment config.
  organizationName: 'UruBots',
  projectName: 'urubot-docs',

  onBrokenLinks: 'throw',
  trailingSlash: false,

  // Internacionalización: español por defecto, inglés listo para el futuro.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeConfigs: {
      es: {
        htmlLang: 'es',
        label: 'Español',
      },
      en: {
        htmlLang: 'en',
        label: 'English',
      },
    },
  },

  // Habilitar diagramas Mermaid en los documentos
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/UruBots/urubot-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/UruBots/urubot-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'UruBots',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          height: 30,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://urubots.uy/',
            label: 'urubots.uy',
            position: 'right',
          },
          {
            href: 'https://github.com/UruBots/urubot-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {label: 'Introducción', to: '/docs/intro'},
              {label: 'Blog', to: '/blog'},
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {label: 'Instagram', href: 'https://instagram.com/urubotsutec'},
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCA_z5YODz_8rv_FEOuAKABA',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/urubots-utec-4a3267283/',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {label: 'Sitio oficial', href: 'https://urubots.uy/'},
              {label: 'GitHub', href: 'https://github.com/UruBots'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UruBots. Hecho con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
