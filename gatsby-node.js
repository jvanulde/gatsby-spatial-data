const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const layerTemplate = path.resolve(`src/templates/layer.js`)
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
          Sauid
          sCt_CasDay_min_b0
          sCt_CasDay_mod_b0
          sCt_CasDay_ser_b0
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
            path: "/layer/" + node.featureFields.Sauid,
            component: layerTemplate,
            context: {
              url: node.featureFields.URL,
            },
          })
        })
      })
    );

  }
  )}
