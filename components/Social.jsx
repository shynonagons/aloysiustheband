import * as React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faPatreon,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Social.module.css';
import BandcampSVG from './svg/bandcamp.svg';

const socialLinks = [
  //   {
  //     icon: '',
  //     link: 'https://aloysius.bandcamp.com/',
  //   },
  {
    icon: faSpotify,
    link: 'https://open.spotify.com/artist/2JMmqt6rZ0USvsJaqDExMv',
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/aloysiustheband',
  },
  {
    icon: faInstagram,
    link: 'https://www.instagram.com/aloysiustheband/',
  },
  {
    icon: faPatreon,
    link: 'https://www.patreon.com/aloysiustheband/',
  },
];

const BandcampIcon = ({ size, className }) => (
  <BandcampSVG width={`${size}px`} height={`${size}px`} className={className} />
);

export default function Social() {
  return (
    <div className={styles.container}>
      <a href="https://aloysius.bandcamp.com/">
        <BandcampIcon size={72} className={styles.icon} />
      </a>
      {socialLinks.map(({ icon, link }, index) => (
        <a href={link} key={index} className={styles.icon}>
          <FontAwesomeIcon className={styles.icon} icon={icon} size={'6x'} />
        </a>
      ))}
    </div>
  );
}
