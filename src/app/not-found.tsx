import {getRandomLyric} from '@/util/lyrics'

export default function NotFound() {
  const randomLyric = getRandomLyric();

  return (
    <div className='flex flex-col items-center mt-12 lg:mt-24 gap-12'>
      <h1 className="text-2xl lg:text-[96px] font-bold">404</h1>
      <p className='text-lg'>There is nothing here. As consolation, have a random lyric:</p>
      <blockquote className='border-2 border-gray-300 italic rounded-md p-12'>
        {randomLyric}
      </blockquote>
    </div>
  );
}
