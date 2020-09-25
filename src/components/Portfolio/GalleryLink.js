import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import config from '../../utils/siteConfig'

const ProjectLink = styled(Link)`
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
const Title = styled.h2`
  text-transform: uppercase;
  white-space: nowrap;
  margin: 0;
  font-weight: 900;
  font-size: 20px;
  &:hover{
    color: var(--color-highlight) !important;
  }

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

const Year = styled.h3`
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

const List = styled.ul`
  display: contents;
  position: relative;
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
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-secondary);
`
const GalleryLink = props => {
  const tags = config.enableGalleryTags;
  return (
    <ProjectLink key={props.id} to={`/${props.slug}/`}>
      <Title>{props.title}</Title>
      <Year>{props.year}
      {
       tags &&
        <span> &nbsp;-&nbsp;
          <List>{props.tags.map(tag => (
              <Tag key={tag.id}>
                {tag.title}
              </Tag>
            ))}
          </List>
        </span>
      }
      </Year>
      <Img fluid={props.image.fluid} />
    </ProjectLink>
  )
}

export default GalleryLink
