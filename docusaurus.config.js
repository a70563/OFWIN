// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Test Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/OFWIN/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'a70563 and a64108', // Usually your GitHub org/user name.
  projectName: 'OFICINA WINRAR', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OFICINAWINRAR',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Serviços:',
            items: [
              {
                label: 'Serviços Disponiveis',
                to: 'docs/servicosdisp',
              },
              {
                label: 'Oficina',
                to: 'docs/serviços/oficina',
              },
              {
                label: 'Cortesia',
                to: 'docs/serviços/cortesia',
              },
              {
                label: 'Recrutamento',
                to: 'docs/serviços/recrutamento',
              },
            ],
          },
          {
            title: 'Redes Sociais',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'Informação',
            items: [
              {
                label: 'Contactos',
                to: 'contactonos',
              },
              {
                label: 'Recrutamento',
                to: '/docs/recrutamento',
              },
            ],
          },
          {
            title: 'Localizações:',
            items: [
              {
                label: 'Oficina de Faro',
                href: 'https://www.google.com/search?q=37.011698987033604%2C+-7.921883972344417&rlz=1C1ONGR_pt-PTPT1017PT1017&oq=37.011698987033604%2C+-7.921883972344417&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMTkxajBqNKgCALACAA&sourceid=chrome&ie=UTF-8',
              },
            ],
          },
        ],
        copyright: 'Copyright © ${new Date().getFullYear()} OFICINA WINRAR, Inc. Built with Docusaurus.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
