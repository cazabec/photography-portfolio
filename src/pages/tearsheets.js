import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Publication from '../components/Publication/Publication'
import SEO from '../components/SEO'
import Gallery from '../components/Gallery/GalleryGrid'
import GalleryGrid from '../components/Portfolio/GalleryGrid'

const Tearsheet = ({ data, location }) => {
  const publis = data.allContentfulPublication.edges;
  const photos = publis.map(p => p.node.image);
  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${config.siteTitle} - Tearsheets`}</title>
      </Helmet>
      <SEO pagePath="publications" />
      <GalleryGrid>
        <Gallery photos={photos} customModel={publis} layout={<Publication />} />
      </GalleryGrid>
    </Layout>
  )
}

export const query = graphql`
  query Tearsheet {
    allContentfulPublication(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          media
          publishDate(formatString: "DD MMM YYYY", locale: "fr")
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

export default Tearsheet
