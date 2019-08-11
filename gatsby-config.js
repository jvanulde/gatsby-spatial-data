module.exports = {
  pathPrefix: `gatsby-spatial-data`,
  siteMetadata: {
    title: `Using spatial data to power a Gatsby site`,
    description: `Demonstrating how to build a Gatsby site from a spatial data source`,
    author: `@andrewl`,
  },
  plugins: [
    `gatsby-plugin-react-leaflet`,
    {
      resolve: `gatsby-source-geo`,
      options: {
        path: `./data/HospitalsPoint.shp`,
      },
    },
  ],
}
