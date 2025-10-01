export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href='/read' className='no-underline hover:text-white/90'>⬅️ Back</a>
      {children}
    </>
  );
}
