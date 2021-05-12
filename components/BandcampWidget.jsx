import * as React from 'react';
import styles from '../styles/BandcampWidget.module.css';

export default function BandcampWidget() {
  return (
    <iframe
      className={styles.widget}
      src="https://bandcamp.com/EmbeddedPlayer/album=2821473407/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
      seamless
    >
      <a href="https://aloysius.bandcamp.com/album/good-noise">
        Good Noise by aloysius the band
      </a>
    </iframe>
  );
}
