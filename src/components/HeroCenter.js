import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const HeroCenter = styled.div`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-area: center;
    position: fixed !important;
    pointer-events: none;
    transition: opacity 0.3s, visibility 0.3s;
    width: 65%;
    height: 100vh;
    top: 0;
    left: 17%;
    z-index: -99;
    div {
      height: 66.67% !important;
      object-fit: contain !important;
      margin-top:16.65%;
    }
  }
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    grid-area: center;
    position: fixed !important;
    pointer-events: none;
    transition: opacity 0.3s, visibility 0.3s;
    width: 65%;
    height: calc(100vh - 5.5rem);
    top: 17%;
    left: 17%;
    z-index: -99;
    div {
      height: 66.67% !important;
      object-fit: contain !important;
      margin-top:16.65%;
    }
  }
  
`

const HomeHeroCenter = props => {
  return (
      <HeroCenter>
        <Img fluid={props.image.fluid} />
      </HeroCenter>
  )
}

export default HomeHeroCenter
