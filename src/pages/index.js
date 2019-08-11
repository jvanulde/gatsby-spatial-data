import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { withPrefix } from "gatsby"

const IndexPage = ({data}) => {

  const allHospitals = data.allGeoFeature.edges.map(
    edge => edge.node
  )

  return (
    <Layout>
      <p>Click on the name of a hospital below for more information and to see it's location on a map</p>
      <ul>
        {
          allHospitals.map(hospital => (<li><Link to={withPrefix(`hospital/${hospital.featureFields.ID}`)}>{hospital.featureFields.NAME}</Link></li>))
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
          NAME
          ID
        }
      }
    }
  }
}
`

export default IndexPage
