import React,  { useState } from 'react';
import { graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import Helmet from 'react-helmet'
import DarkModeToggle from "react-dark-mode-toggle";
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import GalleryHead from '../components/Gallery/GalleryHead'
import GalleryGrid from '../components/Portfolio/GalleryGrid'
import Gallery from '../components/Gallery/GalleryGrid'
import SEO from '../components/SEO'
import styled from '@emotion/styled'
import theme from '../styles/theme';


const ToggleWrapper = styled.div`
  position: fixed;
  bottom: 25px;
  left: -10px;
  height: 40px;
  transform: rotate(-90deg);
`

function changeColorTheme() {
  const [darkMode, setDarkMode] = useState(false);
  return () => setDarkMode(darkMode => {
    config.lightMode = !config.lightMode;
    return !darkMode;
  });
}

const GalleryTemplate = ({ data, location }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: ' + theme.responsive.medium + ')' })
  const gallery = data.contentfulExtendedGallery ? data.contentfulExtendedGallery : data.contentfulExtendedCommercial;
  const galleryNode = gallery;
  const subGalleries = gallery.galleries;

  const changeTheme = changeColorTheme();
  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${config.siteTitle} - ${gallery.title} `}</title>
      </Helmet>
      <SEO pagePath={gallery.slug} postNode={galleryNode} gallerySEO />
      <GalleryHead title={gallery.title} desc={gallery.body} tags={gallery.tags} />
      <GalleryGrid>
      {
        subGalleries.map((subGallery) => (
          <Gallery
            key={subGallery.id}
            title={subGallery.title}
            photos={subGallery.images}
          />
        ))
      }
      </GalleryGrid>
      {
       config.enableDarkModeToggle && !isTabletOrMobile && <ToggleWrapper>
          <DarkModeToggle checked={!config.lightMode} onChange={changeTheme} size={80}/>
        </ToggleWrapper>
      }
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    contentfulExtendedGallery(slug: { eq: $slug }) {
      title
      id
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
        ogimg: resize(width: 900) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      galleries {
        __typename
        ... on ContentfulSubGallery {
          id
          title
          images {
            title
            fluid(maxWidth: 1800, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
              src
            }
          }
        }
      }
    }
    contentfulExtendedCommercial(slug: { eq: $slug }) {
      title
      id
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      heroImage {
        title
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
        ogimg: resize(width: 900) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      galleries {
        __typename
        ... on ContentfulSubGallery {
          id
          title
          images {
            title
            fluid(maxWidth: 1800, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
              src
            }
          }
        }
      }
    }
  }
`
export default GalleryTemplate
