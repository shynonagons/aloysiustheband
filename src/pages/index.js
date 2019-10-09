import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Social} from '../components/social'

const HomeHeader = styled.h1`
  font-size: 4rem;
`

const HomeSocialContainer = styled.div`
  padding: 20px;
  display: flex;
  position: fixed;
  right: 20px;
  top: 0;
  svg {
    color: white;
    font-size: 28px;
    margin-left: 10px;
    transition: all 0.3s;
    &:hover {
      color: #2A3E5C;
    }
  }
`

const ExplainerText = styled.p`
  font-size: 20px;
`

const VideoContainer = styled.div`
position: relative;
min-height: 35vh;
min-width: 50vw;
overflow: hidden;
@media (min-width: 650px) {
  min-height: 45vh;
}
`

const EmbeddedVideo = styled.iframe`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ShowsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: wrap;
  align-items: center;
`

const ShowsHeader = styled.h3`
  font-size: 1.5rem;
`

const ShowsList = styled.div`
  display: flex; 
  flex-flow: column;
`

const ShowCard = styled.a`
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: black;
    background: white;
  }
`

const IndexPage = () => (
  <Layout background='image.png'>
    <SEO title="Home" />
    <HomeHeader>aloysius the band</HomeHeader>
    <HomeSocialContainer>
      <Social />
    </HomeSocialContainer>
    <ExplainerText>GOOD NOISE available now at all digital music bodegas worth their salt</ExplainerText>
    <VideoContainer>
      <EmbeddedVideo width="560" height="315" src="https://www.youtube.com/embed/hT3LzX-9pWU" frameBorder="0" allowFullScreen />
    </VideoContainer>
    <ShowsContainer>
      <ShowsHeader>Upcoming Shows:</ShowsHeader>
      <ShowsList>
        <ShowCard href='https://www.facebook.com/pg/acadiaMPLS/events/'>CANCELED - Oct 13 - Acadia Cafe - Minneapolis MN</ShowCard>
      </ShowsList>
      
    </ShowsContainer>
  </Layout>
)

export default IndexPage
