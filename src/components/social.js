import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaPatreon } from 'react-icons/fa'

const SocialContainer = styled.div`
`

const socialData = [
  {
    icon: <FaFacebook />,
    link: 'https://facebook.com/aloysiustheband'
  },
  {
    icon: <FaTwitter />,
    link: 'https://twitter.com/aloysiustheband'
    
  },
  {
    icon: <FaPatreon />,
    link: 'https://www.patreon.com/aloysiustheband'
  }
]

export const Social = () => (
  <>
    {socialData.map((item, index) => <a key={index} href={item.link}>{item.icon}</a>)}
  </>
)