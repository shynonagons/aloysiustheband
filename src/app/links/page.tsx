import InstagramIcon from '@/icons/instagram';
import BandcampIcon from '@/icons/bandcamp';
import YoutubeIcon from '@/icons/youtube';
import SubstackIcon from '@/icons/substack';

const socialLinks = [
  {
    title: 'Bandcamp',
    url: 'https://aloysius.bandcamp.com',
    icon: <BandcampIcon />,
  },
  {
    title: 'Substack',
    url: 'https://aloysiustheband.substack.com',
    icon: <SubstackIcon />,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/aloysiustheband/',
    icon: <InstagramIcon />,
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/aloysiusmusic',
    icon: <YoutubeIcon />,
  },
];

export default function LinksPage() {
  // TODO: prefetch the URLs and display a rich link maybe
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-32">
      <h1 className="text-2xl">aloysius the band</h1>
      <ul className="flex flex-row gap-2">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} title={link.title}>
            <li className="w-20 h-20 p-3 rounded-full hover:p-[0.7rem]">
              {link.icon}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
