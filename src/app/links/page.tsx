import InstagramIcon from '@/icons/instagram';
import BandcampIcon from '@/icons/bandcamp';
import YoutubeIcon from '@/icons/youtube';
import SubstackIcon from '@/icons/substack';
import SpotifyIcon from '@/icons/spotify';

const socialLinks = [
  {
    title: 'Bandcamp',
    url: 'https://aloysius.bandcamp.com',
    icon: <BandcampIcon className="hover:text-blue-300" />,
  },
  {
    title: 'Spotify',
    url: 'https://open.spotify.com/artist/2JMmqt6rZ0USvsJaqDExMv',
    icon: <SpotifyIcon className="hover:text-[#1ed760]" />,
  },
  {
    title: 'Substack',
    url: 'https://aloysiustheband.substack.com',
    icon: <SubstackIcon className="hover:text-orange-500" />,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/aloysiustheband/',
    icon: <InstagramIcon className="hover:text-pink-300" />,
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/aloysiusmusic',
    icon: <YoutubeIcon className="hover:text-red-500" />,
  },
];

export default async function LinksPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-32">
      <h1 className="text-3xl">aloysius the band</h1>
      <p>proprietary interweb presence aggregator</p>
      <ul className="flex flex-row gap-2">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} title={link.title}>
            <li className="flex flex-row max-[360px]:w-12 max-[360px]:h-12 p-2 w-16 h-16 sm:w-20 sm:h-20 sm:p-3 rounded-full transition-all hover:p-[0.7rem]">
              {link.icon}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
