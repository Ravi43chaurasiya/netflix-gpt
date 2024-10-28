import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title,movies}) => {
  
  console.log(movies);
  return (
    <div className='px-4 '>
      <div className='text-3xl text-white font-bold py-2'>{title}</div>
      <div className='flex overflow-x-auto space-x-4 py-2'>
        {movies && movies.map((movie)=>(
          <MovieCards key={movie.id} posterPath={movie.poster_path}></MovieCards>
        ))}
        
 

</div>
      
    </div>
  )
}

export default MovieList