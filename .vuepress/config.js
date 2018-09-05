module.exports = {
    title: 'indicadores',
    port: '9001',
    dest: 'docs',
    base: '/indicadores/',
  themeConfig: {
    sidebar: [
      'indicadores'
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/ramonbarco/indicadores' }
    ],
    markdown: {
      toc: { includeLevel: [1, 2] }
    }
  }
}
