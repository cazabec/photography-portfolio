import React from "react"
import PropTypes from "prop-types"
import spinner from '../static/spinners/camera-1.2s-173px.svg'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
              key={`loader`}
              id="___loader"
              style={{
                alignItems: "center",
                backgroundColor: "#F2F2F2",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 10000
              }}
           >
           <img 
              src={spinner} 
              alt="loading spinner" 
              style={{width: '132px !important', height: '132px !important'}}
           />
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
