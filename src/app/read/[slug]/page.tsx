import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let Post;
  try {
    const { default: defaultPost } = await import(`@/posts/${slug}.mdx`);
    Post = defaultPost;
  } catch (error) {
    console.error(error);
    return notFound()
  }

  return <Post />;
}

// TODO: at buildtime parse files and generateStaticParams here
// export function generateStaticParams() {
//   return [{ slug: 'welcome' }, { slug: 'about' }];
// }

// TODO: once staticParams are implemented, set dynamicParams accordingly
// export const dynamicParams = false;
