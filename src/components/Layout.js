import React, { Component } from 'react'
import { ThemeProvider } from 'emotion-theming'
import Helmet from 'react-helmet'
import '../styles/reset'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import LayoutWrapper from './LayoutWrapper'
import Menu from '../components/Menu'
import { injectGlobal } from 'emotion'
import FreightSansBold from '../styles/fonts/FreightSansBold.woff'
import FreightSansBook from '../styles/fonts/FreightSansBook.woff'
import $ from 'jquery/dist/jquery.slim'
import { css, cx } from 'emotion'

const colorSchemes = {
  'darkMode':
    '--color-body: #16161D; \
    --color-base: white; \
    --color-secondary: #F5F5F5 ; \
    --color-tertiary: #c1c1c1 ; \
    --color-highlight: #C0392B ;',
  'lightMode':
  '--color-body: white; \
    --color-base: black; \
    --color-secondary: #444444 ; \
    --color-tertiary: white ; \
    --color-highlight: #C0392B ;'
};

injectGlobal`
@font-face {
    font-family: 'FreightSansBook';
    src: url(${FreightSansBold}) format("woff");
  }
@font-face {
    font-family: 'FreightSansBook';
    src: url(${FreightSansBook}) format("woff");
  }
@font-face {
    font-family: "FreightSansBook";
    src: url("/fonts/FreightSansBook.woff") format("woff");
  }
@font-face {
    font-family: "FreightSansBold";
    src: url("/fonts/FreightSansBold.woff") format("woff");
  }
@font-face {
     font-family: "Alfa Slab One";
     src: url("/fonts/AlfaSlabOne.woff") format("woff");
   }
@font-face {
  font-family:"BureauGrotCondLight";
  src:url("https://d1v5qbuvucewy1.cloudfront.net/webtype/Bureau-Grot-Cond-Book/32fcd702-c9f8-4846-8dae-e34bac5e4481-3.woff") format("woff");
  font-style:normal;
  font-weight:bold
}
@font-face {
   font-family: "BureauGrotCondBook";
   src: url("/fonts/BureauGrotCondBook.woff") format("woff");
  }
@font-face {
   font-family: "ConstantiaRegular";
   src: url("/fonts/ConstantiaRegular.woff") format("woff");
  }
body {
  background: var(--color-body);
  color: var(--color-secondary);
}
h1,h2,h3,h4,h5,h6,a,strong {
  color: var(--color-base);
  font-family: "FreightSansBook";
}
p {
  color: var(--color-secondary);
  font-family: "FreightSansBook";
}
a{
  transition: all 0.5s;
  color: var(--color-body);
  &:hover {
  color: var(--color-highlight);
  }
}
svg {
  transition: all 0.5s;
  fill: var(--color-tertiary);
  &:hover {
    fill: var(--color-highlight);
  }
}
.bm-overlay, .bm-menu-wrap {
  background: #212121;
}
.bm-cross {
  background: white;
}
.bm-burger-bars {
  background: var(--color-secondary);
}

#outer-container {
  overflow: visible !important;
}
`

class Layout extends Component {
  componentDidMount() {
    $('img').on('dragstart', function(event) { event.preventDefault(); });
    $("body").on("contextmenu", "img", function () {
      return false;
    });
  }

  render() {
    const { children, location } = this.props;
    return (
      <div className="siteRoot">
        <Helmet>
          <html lang="fr" className={css`
            ${ config.lightMode ? colorSchemes.lightMode : colorSchemes.darkMode }
          `}/>
          <title>{config.siteTitle}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logos/logo-512.png" />
          <link rel="apple-touch-icon" href="/logos/logo-512.png" />
          <meta name="description" content={config.siteDescription} />
          <meta property="og:title" content={config.siteTitle} />
          <meta property="og:url" content={config.siteUrl} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={config.siteTitle} />
        </Helmet>
  
        <ThemeProvider theme={theme}>
          <LayoutWrapper>
            <div id="outer-container" style={{height: '100%'}}>
              <Menu />
              <div className="siteContent" id="page-wrap">
                {children}
              </div>
            </div>
          </LayoutWrapper>
        </ThemeProvider>
      </div>
    )
  }
}

export default Layout
