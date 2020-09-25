import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Portrait from '../components/Portrait/Portrait'
import SEO from '../components/SEO'
import Gallery from '../components/Gallery/GalleryGrid'
import GalleryGrid from '../components/Portfolio/GalleryGrid'



const PortraitGallery = ({ data, location }) => {
  const portraits = data.allContentfulPortrait.edges;
  const photos = portraits.map(c => c.node.image);
  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${config.siteTitle} - Portrait`}</title>
      </Helmet>
      <SEO pagePath="portrait" />
      <GalleryGrid>
        <Gallery photos={photos} customModel={portraits} layout={<Portrait />} />
      </GalleryGrid>
    </Layout>
  )
}

export const query = graphql`
  query Portrait {
    allContentfulPortrait(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          publishDate(formatString: "DD MMM YYYY h:mm a")
          image {
            title
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default PortraitGallery
