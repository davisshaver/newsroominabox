/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [];

const siteConfig = {
  title: 'Newsroom in a Box' /* title for your website */,
  tagline: 'Open source guide to starting a digital news outlet.',
  algolia: {
    apiKey: "1229c5896abf1fb0e8f9de29f271942f",
    indexName: "newsroominabox"
  },
  url: 'https://newsroominabox.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'guide',
  headerLinks: [
    {doc: 'mission', label: 'Mission'},
    {doc: 'projects', label: 'Projects'},
    {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  footerIcon: 'img/ben.png',
  favicon: 'img/ben.png',
  /* colors for website */
  colors: {
    primaryColor: '#727272',
    secondaryColor: '#234196',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Philadelphia Publishing Company',
  organizationName: 'davisshaver', // or set an env variable ORGANIZATION_NAME
  projectName: 'newsroominabox', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  cname: 'newsroominabox.com',
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://www.googletagmanager.com/gtm.js?id=GTM-K7GRFRN'
  ],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/davisshaver/newsroominabox',
};

module.exports = siteConfig;
