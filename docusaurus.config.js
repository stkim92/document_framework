module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
<<<<<<< HEAD
<<<<<<< HEAD
  url: 'https://Stkim92.github.io',
  baseUrl: '/document_framework/',
  //baseUrl: '/',
=======
  url: 'https://wiznet.github.io',
  //url: 'https://doc.wiznet-cloud.com',
  baseUrl: '/document_framework/',
>>>>>>> upstream/master
=======
  //url: 'https://Stkim92.github.io',
  url: 'https://doc.wiznet-cloud.com',
  //baseUrl: '/document_framework/',
  baseUrl: '/',
>>>>>>> 8a74c83499c7b2218e8b6e88fdc98f8c2f5772a0
  favicon: 'img/favicon.ico',
  organizationName: 'Stkim92', // Usually your GitHub org/user name.
  projectName: 'document_framework', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/wiznet-logo.svg',
      },
      links: [
        {to: 'docs/introduction', label: 'Documentation', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
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
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
