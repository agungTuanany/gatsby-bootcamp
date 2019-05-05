module.exports = {
  siteMetadata: {
    title: 'Full-stack Gatsby Bootcamp',
    author: 'Agung Tuanany'

  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}
