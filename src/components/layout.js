/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"

const SiteContainer = styled.div`
  margin: 0 auto;
  maxWidth: 960;
  padding: 2rem 1.0875rem 1.45rem;
  paddingTop: 0;
`

const MainContainer = styled.main`
  min-height: 80vh;
  display: flex;
  flex-flow: column;  
  align-items: center;
  justify-content: center;
`

const SiteFooter = styled.footer`
  font-size: 12px;
`

const BandcampPlayer = styled.iframe`
  border: 0; 
  width: 100%; 
  height: 42px;
  position: fixed;
  bottom: -24px;
  left: 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <SiteContainer>
          <MainContainer>{children}</MainContainer>
          <SiteFooter>
            <BandcampPlayer id='player' src="https://bandcamp.com/EmbeddedPlayer/album=2821473407/size=small/bgcol=000000/linkcol=0687f5/transparent=true/" seamless><a href="http://aloysius.bandcamp.com/album/good-noise">Good Noise by aloysius the band</a></BandcampPlayer>
            © {new Date().getFullYear()} aloysius the band
          </SiteFooter>
        </SiteContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
