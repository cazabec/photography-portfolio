import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import GalleryGrid from '../components/Portfolio/GalleryGrid'
import GalleryLink from '../components/Portfolio/GalleryLink'



const CommercialGallery = ({ data, location }) => {
  const commercials = data.allContentfulExtendedCommercial.edges;
  return (
    <Layout location={location}>
    <SEO />
        <GalleryGrid>
            {
              commercials.map(({ node: commercial }) => (
                <GalleryLink
                  key={commercial.id}
                  slug={commercial.slug}
                  image={commercial.heroImage}
                  title={commercial.title}
                  year={commercial.year}
                  date={commercial.publishDate}
                />
              ))}
              
        </GalleryGrid>
    </Layout>
  )
}

export const query = graphql`
  query Commercials {
    allContentfulExtendedCommercial {
      edges {
        node {
          title
          id
          slug
          year
          publishDate(formatString: "DD MMM YYYY h:mm a")
          heroImage {
            title
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
  }
`

export default CommercialGallery
