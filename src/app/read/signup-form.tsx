export default function NewsletterSignupForm() {
  return (
    <form className='w-full max-w-[600px] flex flex-col gap-3 border-2 bg-slate-900/50 border-white p-8 rounded-md'>
      <h2 className='text-lg font-bold py-3'>Sign up for the AtB newsletter</h2>
      <input name='email' autoComplete="true" className='p-3 rounded bg-transparent border-2 border-white' type="email" placeholder="Enter your email" />
      <button className='bg-white text-black p-3 rounded' type="submit">Subscribe</button>
    </form>
  );
}
