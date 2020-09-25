import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Maintenance from '../components/maintenance'
import SEO from '../components/SEO'
import styled from '@emotion/styled'

import Slideshow from "../components/Slideshow/Slideshow";
import "../components/Slideshow/custom.css";

const s = {
  container: "screenW screenH dGray col padded",
  header: "flex1 fCenter fSize2",
  main: "flex8 white",
  footer: "flex1 fCenter"
};

const Index = ({ data, location }) => {
  if (process.env.MAINTENANCE && process.env.MAINTENANCE === 'true') {
    return <Maintenance />
  }
  const images = data.contentfulSlideshow.images.map(img => img.fluid);
  return (
    <Layout location={location}>
      <SEO />
      <div className={s.container}>
        <div className={s.main}>
          <Slideshow slides={images} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Index {
    contentfulSlideshow {
      images {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default Index
