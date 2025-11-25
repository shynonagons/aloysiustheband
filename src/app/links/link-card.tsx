import Link from "next/link";

export function LinkCard({href, image, text, className}: {href: string; image?: string; text: string; className?: string}) {
    return (
      <Link href={href} className={`flex gap-5 p-5 items-center rounded-md bg-black hover:bg-slate-800 text-white text-lg ${className}`}>
        {image && <img src={image} width={80} height={80} alt={text} className="mb-2 rounded-md" />}
        {text}
      </Link>
    );
}