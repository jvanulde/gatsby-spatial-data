import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { withPrefix } from "gatsby"

const IndexPage = ({data}) => {

  const allFeatures = data.allGeoFeature.edges.map(
    edge => edge.node
  )

  return (
    <Layout>
      <p>Click on the Saiud of a feature below for more information and to see it's location on a map</p>
      <ul>
        {
          allFeatures.map(layer => (<li><Link to={`layer/${layer.featureFields.Sauid}`}>{layer.featureFields.Sauid}</Link></li>))
        }
      </ul>
    </Layout>
  );
}



export const query = graphql`
query{
   allGeoFeature {
    edges {
      node {
        id
        featureFields {
          Sauid
        }
      }
    }
  }
}
`

export default IndexPage
