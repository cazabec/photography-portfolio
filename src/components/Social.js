import React from 'react'
import styled from '@emotion/styled'
import { IconContext } from "react-icons";
import { IoMdCamera, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'
import config from '../utils/siteConfig'

const Wrapper = styled.section`
  margin-top: 2rem;
  text-align: left;
`
const SocialIcon = styled.div`
  display: inline-block;
  padding: 0 0.5rem;
  fill: black;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`

const Social = props => {
  return (
    <Wrapper>
      <SocialIcon>
        <a href={config.instagramLink} rel="noopener" alt="instagram" target="_blank">
          <IconContext.Provider value={{ size:"2.4em" }}><IoLogoInstagram style= {{fill: 'black'}}/></IconContext.Provider>
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href={config.facebookLink} rel="noopener" alt="facebook" target="_blank">
          <IconContext.Provider value={{ size:"2.4em" }}><IoLogoFacebook style= {{fill: 'black'}} /></IconContext.Provider>
        </a>
      </SocialIcon>
    </Wrapper>
  )
}

export default Social
