import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import GalleryLink from '../components/Portfolio/GalleryLink'

import SEO from '../components/SEO'
import GalleryGrid from '../components/Portfolio/GalleryGrid'

const Galleries = ({ data, location }) => {
  const galleries = data.allContentfulExtendedGallery.edges
  return (
    <Layout location={location}>
    <SEO />
        <GalleryGrid>
            {
              galleries.map(({ node: gallery }) => (
                <GalleryLink
                  key={gallery.id}
                  slug={gallery.slug}
                  image={gallery.heroImage}
                  title={gallery.title}
                  year={gallery.year}
                  tags={gallery.tags}
                  date={gallery.publishDate}
                />
              ))}
              
        </GalleryGrid>
    </Layout>
  )
}

export const query = graphql`
  query Galleries {
    allContentfulExtendedGallery(
      sort: { fields: [year], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          year
          tags {
            title
            id
            slug
          }
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
          displayHome
        }
      }
    }
  }
`

export default Galleries
