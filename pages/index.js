import Head from 'next/head';
import Image from 'next/image';
import BandcampWidget from '../components/BandcampWidget';
import Social from '../components/Social';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>aloysius the band</title>
        <meta
          name="description"
          content="Aloysius the Band; always an aloysius, sometimes a band"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Goblin+One&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>aloysius the band</h1>
        <div className={styles.videoContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DnoLglGSXvk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Social />
        <BandcampWidget />
      </main>

      <footer className={styles.footer}>
        <a href="/">
          Copyright {new Date().getFullYear()} aloysius the band
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  );
}
