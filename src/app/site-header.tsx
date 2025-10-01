import Link from "next/link";

export function SiteHeader() {
    return (
      <header className='fixed top-0 w-full h-12 flex items-center'>
             <Link
          href="/links"
          className="text-cyan-100 hover:text-cyan-200 underline"
        >
              proprietary internet presence aggregator
            </Link>
      </header>
    );
}