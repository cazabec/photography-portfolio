import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const Portrait = styled.div`
  text-decoration: none;
  width: 75%;
  margin: 0;
  padding: 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    transition: all 0.5s;
    display: inline-block;
    &:hover div {
      @supports (object-fit: contain) {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`

const PortraitComponent = props => {
  return (
    <Portrait>
      <a href={props.image.fluid} onClick={e => props.callback(e)} target="blank">
        <Img fluid={props.image.fluid} />
      </a>
    </Portrait>
  )
}

export default PortraitComponent
