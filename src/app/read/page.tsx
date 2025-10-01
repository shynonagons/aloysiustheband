import Link from "next/link";

export default async function ReadPage() {
    const allPosts = [
      { slug: 'test-post', title: 'Test Post' },
      { slug: 'deconstructed-just-a-tickle-in-the-throat', title: 'Deconstructed: Just a Tickle in the Throat' },
    ];
  return (
    <div>
      <h1>Read</h1>
      <p>Welcome to the read section!</p>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/read/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
