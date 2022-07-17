import Image from 'next/image';
import { ThumbUpIcon, } from '@heroicons/react/outline';
import { forwardRef } from 'react';

// forwardRef passes ref from the component to one of its child.
export const ThumbNail = forwardRef(({ ...otherProps }, ref) => {

  const BASE_PATH = 'https://image.tmdb.org/t/p/original/'

  return (
    <div 
      ref={ref}
      className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
    >
      <Image
        layout='responsive'
        width={1920}
        height={1080}
        src={`${BASE_PATH}${otherProps.backdrop_path || otherProps.poster_path}` || `${BASE_PATH}${otherProps.poster_path}`}
       />
       <div className='p-2'>
        <p className='truncate max-w-md'>{otherProps.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{otherProps.title || otherProps.original_name}</h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {otherProps.media_type && `${otherProps.media_type} •`}{' '}
          {otherProps.release_date || otherProps.first_air_date} •{' '}
          <ThumbUpIcon className='h-5 mx-2' /> {otherProps.vote_count}
        </p>
       </div>
    </div>
  )
})

ThumbNail.displayName = 'ThumbNail'
