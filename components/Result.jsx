import { ThumbNail } from './ThumbNail';
import FlipMove from 'react-flip-move';

export const Result = ({ result }) => {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {
        result.map(({ id, ...otherProps }) => (
          <ThumbNail key={id} {...otherProps} />
        ))
      }
    </FlipMove>
  )
}
