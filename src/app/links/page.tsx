import InstagramIcon from '@/icons/instagram';
import BandcampIcon from '@/icons/bandcamp';
import YoutubeIcon from '@/icons/youtube';
import SubstackIcon from '@/icons/substack';
import SpotifyIcon from '@/icons/spotify';
import clsx from 'clsx';
import ArrowUpRightFromSquareIcon from '@/icons/arrow-up-right-from-square';

const DEFAULT_ICON = <ArrowUpRightFromSquareIcon className='w-8 h-8' />;

const socialLinks = [
  {
    title: 'Bandcamp',
    url: 'https://aloysius.bandcamp.com',
    hoverColor: 'blue-300',
    icon: (
      <BandcampIcon className="hover:text-blue-300 group-hover:text-blue-300" />
    ),
    text: 'Bandcamp (the best way to support! 🤑)',
  },
  {
    title: 'Interview with Mostly MN Music',
    url: 'https://mostlyminnesota.com/2025/06/23/5-questions-with-aloysius-the-band-on-upcoming-album-mortisetenon-releasing-july-4/',
    hoverColor: '[#1ed760]',
    text: 'Interview with Mostly MN Music 6/23/25',
  },
  {
    title: 'Spotify',
    url: 'https://open.spotify.com/artist/2JMmqt6rZ0USvsJaqDExMv',
    hoverColor: '[#1ed760]',
    icon: (
      <SpotifyIcon className="hover:text-[#1ed760] group-hover:text-[#1ed760]" />
    ),
    text: 'AtB on Spotify',
  },
  {
    title: 'Substack',
    url: 'https://aloysiustheband.substack.com',
    hoverColor: 'orange-500',
    icon: (
      <SubstackIcon className="hover:text-orange-500 group-hover:text-orange-500" />
    ),
    text: 'Writings and such',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/aloysiustheband/',
    hoverColor: 'pink-300',
    icon: (
      <InstagramIcon className="hover:text-pink-300 group-hover:text-pink-300" />
    ),
    text: 'Ye Olde Instant-gram',
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/aloysiusmusic',
    hoverColor: 'red-500',
    icon: (
      <YoutubeIcon className="hover:text-red-500 group-hover:text-red-500" />
    ),
    text: 'Youtube',
  },
];

type SocialLink = (typeof socialLinks)[0];

/**
 * Link that's just an icon
 * @param param0
 * @returns
 */
const IconLink = ({ url, title, icon }: SocialLink) => (
  <a
    href={url}
    title={title}
    className="flex flex-row max-[360px]:w-12 max-[360px]:h-12 p-2 w-16 h-16 sm:w-20 sm:h-20 sm:p-3 rounded-full transition-all hover:p-[0.7rem]"
  >
    {icon}
  </a>
);

/**
 * Expanded, linktree style link
 * @returns
 */
const LinkCard = ({ url, title, icon = DEFAULT_ICON, text, hoverColor }: SocialLink) => {
  return (
    <a
      href={url}
      title={title}
      className="group p-3 border-4 border-white rounded-md flex flex-row gap-5 items-center min-w-[300px] md:transition-all hover:bg-slate-900 md:hover:-translate-y-1 md:hover:-translate-x-1 hover:border-blue-500"
    >
      
        <div className="flex items-center justify-center max-[360px]:w-8 max-[360px]:h-8 w-12 h-12 sm:w-16 sm:h-16">
          {icon}
        </div>
      <p className="group-hover:text-blue-300">{text}</p>
    </a>
  );
};

export default async function LinksPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-5">
      <div className="text-center">
        <h1 className="text-[4rem] max-sm:text-3xl">aloysius the band</h1>
        <p>proprietary interweb presence aggregator</p>
      </div>
      {/*<ul className="flex flex-row gap-2">
         {socialLinks.map((link, index) => (
          <li key={link.url}>
            <IconLink {...link} />
          </li>
        ))} 
        </ul>*/}
      <ul className="flex flex-col gap-3">
        {socialLinks.map((link) => (
          <LinkCard key={link.url} {...link} />
        ))}
      </ul>
    </div>
  );
}
