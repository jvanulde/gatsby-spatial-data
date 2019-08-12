import { graphql } from "gatsby"
import React from "react"
import Layout from '../components/layout'
import LeafletMap from '../components/leafletmap'

const HospitalTemplate = ({ data }) => {
  let hospital = data.allGeoFeature.edges[0].node.featureFields;
  let position = [hospital.LATITUDE, hospital.LONGITUDE];
  return (
    <Layout>
    <h1>{hospital.NAME}</h1>
    <p>{hospital.ADDRESS_1} {hospital.POSTCODE}</p>
    <p>{hospital.NUMBER}</p>
    <p>{hospital.TYPE}</p>

    {typeof window !== 'undefined' &&
        <LeafletMap
          position={position}
          zoom={13}
          markerText={hospital.NAME}
        />
    }
  </Layout>
);
}

export default HospitalTemplate

export const query = graphql`

query($url: String!) {
  allGeoFeature(filter: {featureFields: {URL: {eq: $url}}}) {
    edges {
      node {
        id
        featureFields {
          ADDRESS_1
          NAME
          POSTCODE
          LATITUDE
          LONGITUDE
          URL
          TYPE
          NUMBER
          ID
        }
      }
    }
  }
}
`
