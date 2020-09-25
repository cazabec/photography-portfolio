import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  display: grid;
  height: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  margin-top: 75px;
  justify-items: center;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    height: 80%;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    margin-top: 75px;
    justify-items: center;
  }
`

const GalleryGrid = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default GalleryGrid
