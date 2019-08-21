import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const SiteHeader = styled.header`
  background: black;
  margin-bottom: 1.45rem;
`

const HamburgerMenu = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
  z-index: 50;
`

const HamburgerPatty = styled.span`
  display: block;
  width: 33px;
  height: 2px;
  margin-bottom: 7px;
  position: relative;
  
  background: white;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;

&:first-child
{
  transform-origin: 0% 0%;
}

&:nth-last-child(2)
{
  transform-origin: 0% 100%;
}
`

const SideNavigation = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: -1000px;
  padding-top: 50px;
  transition: all 0.5s;
  background: rgba(255,255,255,0.95);
  min-width: 33vw;
  min-height: 85vh;
`

const LinksList = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-bottom: 10px;
  transition: all 0.3s;
  &:hover {
    color: blue;
  }
`

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      sideNavOpen: false
    }
  }
  
  toggleSideNav = () => {
    this.setState({sideNavOpen: !this.state.sideNavOpen})
  }
  
  render() {
    const sideNavPosition = this.state.sideNavOpen ? {left: 0} : {left: '-1000px'}
    const hamburgerStyle = this.state.sideNavOpen ? {background: 'black'} : {background: 'white'}
    return (
      <SiteHeader>
        {/*<HamburgerMenu onClick={this.toggleSideNav}>
          <HamburgerPatty style={hamburgerStyle} />
          <HamburgerPatty style={hamburgerStyle} />
          <HamburgerPatty style={hamburgerStyle} />
        </HamburgerMenu>
        <SideNavigation style={sideNavPosition}>
          <LinksList>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/music/">Music</StyledLink>
            <StyledLink to="/press/">Press</StyledLink>
            <StyledLink to="/merch/">Merch</StyledLink>
            <StyledLink to="/blog/">Blog</StyledLink>
          </LinksList>
        </SideNavigation>*/}
      </SiteHeader>
    )
  }
} 

export default Header
