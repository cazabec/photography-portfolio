import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const Publication = styled.div`
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
    &:hover h1 {
      color: var(--color-highlight) !important;
    }
  }
`
const Title = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  margin: 0;
  animation: fadeup 1.2s;
  animation-timing-function: cubic-bezier(.25,.1,.25,1) ;
  @keyframes fadeup {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    z-index: 3;
  }
`

const Year = styled.p`
  text-transform: uppercase;
  font-size: 1rem;
  z-index: 3;
  color: var(--color-secondary);
  animation: fadeup 1.2s;
  animation-timing-function: cubic-bezier(.25,.1,.25,1) ;
  @keyframes fadeup {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
  margin-bottom: 0.2rem !important;
  padding: 0.1rem;
  }
`

const PublicationComponent = props => {
  return (
    <Publication>
      <Title>{props.media}</Title>
      <Year>{props.publishDate}</Year>
      <a href={props.image.fluid} onClick={e => props.callback(e)} target="blank">
        <Img fluid={props.image.fluid} />
      </a>
    </Publication>
  )
}

export default PublicationComponent
