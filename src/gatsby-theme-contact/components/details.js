// src/gatsby-theme-contact/components/details.js
/** @jsx jsx */
import React from 'react'
import { IconContext } from "react-icons";
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
import { jsx, Styled } from 'theme-ui'

const Details = () => (
  <>
    <IconContext.Provider value={{ size:"2.2em" }}><MdLocationOn style= {{fill: 'black'}}/></IconContext.Provider>
    <br />
    <div style={{paddingLeft: 10}}>
      Lilian Cazabet
      <br />
      1 chemin de Saouis
      <br />
      31260 Cassagne
    </div>

    <div style={{marginTop: 35}} >
      <IconContext.Provider value={{ size:"2.2em" }}><MdPhone style= {{fill: 'black'}}/></IconContext.Provider>
      <br />
      <span>&nbsp;06 70 62 31 59</span>
      <br />
    </div>

    <div style={{marginTop: 35}} >
      <IconContext.Provider value={{ size:"2.2em" }}><MdEmail style= {{fill: 'black'}}/></IconContext.Provider>
      <br />

      <span style={{paddingLeft: 10}}>
        lilian.cazabet@wanadoo.fr
      </span>
    </div>
  </>
)

export default Details