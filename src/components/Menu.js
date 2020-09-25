import React from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import { slide as Menu } from 'react-burger-menu'
import Social from '../components/Social'
import config from '../utils/siteConfig'
import theme from '../styles/theme';
import { useMediaQuery } from 'react-responsive'
import { StaticQuery, graphql } from "gatsby"

const EXPLODE_IF_LESS_THAN = config.explodeLinksInMenuIfLessThanXGalleries;

const Nav = styled.nav`
  background-color: var(--color-body);
  display: flex;
  width: 100%;
  height: 4rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 901;
  transition: 0.5s ease;
`

const UnderlinedItem = styled.h4`
  text-decoration: underline;
  text-underline-position: under;
`

const Title = styled(Link)`
  text-decoration: none;
  display: inline-block;
  h1 {
    padding: 1.25rem 2rem;
    font-family: 'BureauGrotCondLight';
    font-weight: bold;
    font-size: 35px;
    font-style: normal;
    text-decoration: none;
    color: var(--color-secondary);
  }
  span {
  font-size: 1.6rem;
  color:#999;
  }
`

const Copyright = styled.p`
    font-size: 0.75rem;
    padding: 1rem 0;
    text-align: center;
    color: white;
`

const Header = styled.header`
  width: 3rem;
  height: 4rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  transition: 0.5s ease;
  opacity: ${props => (props.isOpen ? '0' : '1')};
  div {
    .bm-menu {
      padding: 2rem 0;
    }
    .bm-cross {
      height: 2rem !important;
      width: 0.35rem !important;
    }
    .bm-cross-button {
      height: 2rem !important;
      width: 2rem !important;
      top: 0.5rem !important;
      right: 2rem !important;
    }
    .bm-burger-bars {
      height: 0.35rem;
    }
    .bm-burger-button {
      position: relative;
      width: 1.5rem;
      height: 1.5rem;
      top: 1rem;
    }
  }
`

const MenuMobile = styled(Menu)`
  padding: 4rem 0;
  z-index: 902;
  text-align: left;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
  }
  li {
    display: block;
    margin: 0 0 0 10px;
    padding: 0.618rem 0;
  }
  h2 {
    text-transform: uppercase;
    }
  a {
    text-decoration: none;
    padding: 0.25rem;
    color: white;
    &:hover {
      color: var(--color-highlight);
    }
  }
  img {
    display: inline-block;
  }
  section {
    margin: 0;
    div {
      padding: 0;
    }
  }
  svg {
    transition: all 0.2s;
  }
`

const MenuPC = styled.div`
  padding: 0 4rem;
  flex-grow: 1;
  ul {
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem 0;
  }
  li {
    display: block;
    margin: 0 0 0 10px;
    padding: 0.618rem 0;
  }
  a {
    text-decoration: none;
    padding: 0.25rem;
    color: var(--color-secondary);
    &:hover {
      color: var(--color-highlight);
    }
    font-family: 'FreightSansBook';
  }
  section {
    margin: 0;
    div {
      padding: 0;
    }
  }
`

const links = [
  <Link to="/tearsheets">Tearsheets</Link>,
  <Link to="/commercial">Commercial</Link>,
  <Link to="/portraits">Portraits</Link>,
  <Link to="/biography">About</Link>,
  <Link to="/contact">Contact</Link>,
  <a target="_blank" href={config.hansLucasShopLink}>Shop</a>,
  <a target="_blank" href={config.hansLucasLink}>Hans Lucas</a>,
]

if (config.showBlog) {
  links.push(<Link to="/blog">Blog</Link>);
}

const explodeGalleriesLinks = (data) => {
  const galleries = data.allContentfulExtendedGallery.edges
  return galleries.map(gallery => <li>
      { renderLink(<Link to={`/${gallery.node.slug}/`}>{gallery.node.title}</Link>) }
  </li>);
}

const renderLink = link => {
  const currentPage = typeof window !== 'undefined' ?
    window.location.pathname.replace(/^\/([^\/]*).*$/, '/$1') :
    '';
  const href = link.props.to;
  return href === currentPage ? <UnderlinedItem>{link}</UnderlinedItem> : <h4>{link}</h4>;
}

const Navigation = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: ' + theme.responsive.medium + ')' })
  return <StaticQuery
    query={graphql`
      query GalleriesLinks {
        allContentfulExtendedGallery(
          sort: { fields: [publishDate], order: DESC }
        ) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <Nav>
        <Title to="/">
          <h1>{config.titleTopLeft}</h1>
        </Title>
          { isTabletOrMobile ?
            <Header>
              <MenuMobile
                right
                isOpen={false}
                pageWrapId={'page-wrap'}
                outerContainerId={'outer-container'}
              >
                <ul>
                  <li>
                    <h3><Link to="/series">Series</Link></h3>
                  </li>
                  {
                    links.map(link => <li>
                      <h3>
                        { link }
                      </h3>
                    </li>
                    )
                  }
                  <li>
                  <br />
                  <br />
                  </li>
              </ul>
              <Copyright>
                { config.copyright }
              </Copyright>
              </MenuMobile>
            </Header> :
            <MenuPC>
              <ul>
                {
                  data.allContentfulExtendedGallery.edges.length < EXPLODE_IF_LESS_THAN ?
                  explodeGalleriesLinks(data) :
                  <li>{renderLink(<Link to="/series">Series</Link>)}</li>
                }
                {
                  links.map(link => <li>
                    { renderLink(link) }
                  </li>
                  )
                }
              </ul>
            </MenuPC>
          }
      </Nav>
    )}
  />;
}

export default Navigation
