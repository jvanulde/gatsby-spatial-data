const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const hospitalTemplate = path.resolve(`src/templates/hospital.js`)
    // Query for recipe nodes to use in creating pages.
    resolve(
      graphql(
        `
        query MyQuery {
  allGeoFeature {
    edges {
      node {
        id
        featureFields {
        ID 
          ADDRESS_1
          NAME
          POSTCODE
          LATITUDE
          LONGITUDE
          URL
          TYPE
          NUMBER
        }
      }
    }
  }
}
`
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }


        // Create pages for each article.
        result.data.allGeoFeature.edges.forEach(({node}) => {
          createPage({
            path: "/hospital/" + node.featureFields.ID,
            component: hospitalTemplate,
            context: {
              url: node.featureFields.URL,
            },
          })
        })
      })
    );

  }
  )}
