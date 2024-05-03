import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center gap-5 p-8 md:p-24">
      <h1 className="text-2xl">aloysius the band</h1>
      <p>always an aloysius, sometimes a band</p>
      <p>minneapolis mn usa</p>
      <Link
        href="/links"
        className="text-cyan-100 hover:text-cyan-200 underline"
      >
        links
      </Link>
    </main>
  );
}
