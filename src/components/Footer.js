import React from 'react'
import styled from '@emotion/styled'
import config from '../utils/siteConfig'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  position: absolute;
  left: 0; 
  right: 0;
  bottom: 0;
  margin-left: auto; 
  margin-right: auto; 
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 2em 0 0.5em;
  margin: 0 1.5em;
`

const Footer = () => (
  <Wrapper>
    <List>
      <li>
        { config.copyright }
      </li>
    </List>
  </Wrapper>
)

export default Footer
