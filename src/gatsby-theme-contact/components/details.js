// src/gatsby-theme-contact/components/details.js
/** @jsx jsx */
/* eslint-disable no-unused-vars */
import React from 'react'
import { IconContext } from "react-icons";
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
import { jsx } from 'theme-ui'

const Details = () => (
  <>
    <IconContext.Provider value={{ size:"2.2em" }}><MdLocationOn style= {{fill: 'black'}}/></IconContext.Provider>
    <br />
    <div style={{paddingLeft: 10}}>
      John doe
      <br />
      1 Pkw street
      <br />
      86578 NY City
    </div>

    <div style={{marginTop: 35}} >
      <IconContext.Provider value={{ size:"2.2em" }}><MdPhone style= {{fill: 'black'}}/></IconContext.Provider>
      <br />
      <span>&nbsp;888 888 8888</span>
      <br />
    </div>

    <div style={{marginTop: 35}} >
      <IconContext.Provider value={{ size:"2.2em" }}><MdEmail style= {{fill: 'black'}}/></IconContext.Provider>
      <br />

      <span style={{paddingLeft: 10}}>
        john.doe@gmail.com
      </span>
    </div>
  </>
)

export default Details