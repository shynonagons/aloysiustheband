import { LinkCard } from './links/link-card';
import NewsletterSignupForm from './read/signup-form';

export default function Home() {
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden text-center flex-col items-center juify-center">
        <video
          className="absolute top-0 left-0 object-cover h-full w-full opacity-30 -z-10"
          poster="homepage_timelapse_poster.jpg"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="homepage_timelapse.mp4" />
          Your browser does not support the video tag.
        </video>
        <main className="flex min-h-screen flex-col items-center justify-center text-center gap-5 p-8 md:p-24">
          <h1 className="text-[4rem] max-sm:text-[3rem]">aloysius the band</h1>

          <LinkCard
            image={'mt-cover.jpeg'}
            href="https://aloysius.bandcamp.com/album/mortise-tenon"
            text="mortise+tenon available now"
          />

          <p>always an aloysius, sometimes a band</p>
          <p>minneapolis mn usa</p>
          <NewsletterSignupForm />
        </main>
      </div>
    </>
  );
}
