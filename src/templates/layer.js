import { graphql } from "gatsby"
import React from "react"
import Layout from '../components/layout'
import LeafletMap from '../components/leafletmap'

const LayerTemplate = ({ data }) => {
  let layer = data.allGeoFeature.edges[0].node.featureFields;
  // let position = [layer.LATITUDE, layer.LONGITUDE];
  let position = [50, -123];
  return (
    <Layout>
    <h1>{layer.Sauid}</h1>
    <p>{layer.sCt_CasDay_min_b0}</p>
    <p>{layer.sCt_CasDay_mod_b0}</p>
    <p>{layer.sCt_CasDay_ser_b0}</p>

    {typeof window !== 'undefined' &&
        <LeafletMap
          position={position}
          zoom={13}
          markerText={layer.Sauid}
        />
    }
  </Layout>
);
}

export default LayerTemplate

export const query = graphql`

query($sauid: String!) {
  allGeoFeature(filter: {featureFields: {Sauid: {eq: $sauid}}}) {
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
