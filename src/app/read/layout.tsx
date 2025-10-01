
export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex items-center justify-center w-screen p-5 md:p-12 prose lg:prose-xl dark:prose-invert`}
    >
      <main>{children}</main>
    </div>
  );
}
