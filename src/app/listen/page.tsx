import { BandcampEmbed } from "./bandcamp-embed";

const streamingPlatformLinks = [
  {
    name: 'Bandcamp',
    url: 'https://aloysius.bandcamp.com',
    icon: 'bandcamp-button-circle-aqua-64.png',
  },
  {
    name: 'Apple Music',
    url: 'https://distrokid.com/images/icons/applemusic.png',
    icon: 'https://distrokid.com/images/icons/applemusic.png',
  },
  {
    name: 'Qobuz',
    url: 'https://play.qobuz.com/artist/24392188',
    icon: 'https://distrokid.com/images/icons/qobuz.png',
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/us/artist/63866612',
    icon: 'https://distrokid.com/images/icons/deezer.png',
  },
  {
    name: 'TIDAL',
    url: 'https://tidal.com/artist/15556490',
    icon: 'https://distrokid.com/images/icons/tidal.png',
  },
  {
    name: 'Pandora',
    url: 'https://www.pandora.com/artist/aloysius-the-band/ARXpl5n2rKZrjtJ',
    icon: 'https://distrokid.com/images/icons/rdio.png',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/2JMmqt6rZ0USvsJaqDExMv',
    icon: 'https://distrokid.com/images/icons/spotify.png',
  },
];

const defaultIcon = null

export default async function ListenPage() {
    return (
        <div className='p-3 flex flex-col items-center justify-center mt-8'>
            <h1 className='text-2xl'>Listen to AtB</h1>
            <ul className='flex flex-wrap gap-3 my-12'>
                {streamingPlatformLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.url} title={link.name}><img width={40} height={40} src={link.icon ?? defaultIcon} alt={link.name} /></a>
                    </li>
                ))}
            </ul>
            <BandcampEmbed />
        </div>
    );
}