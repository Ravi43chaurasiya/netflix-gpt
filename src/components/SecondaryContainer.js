import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies=useSelector((store) => store.movies);
  return (
    <div className='bg-black  -mt-20 relative z-0'>
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} ></MovieList>
     <MovieList title={"Top Rated"} movies={movies.topRatedMovies} ></MovieList>
     <MovieList title={"Popular"} movies={movies.popularMovies} ></MovieList>
     <MovieList title={"Action "} movies={movies.nowPlayingMovies} ></MovieList>
     <MovieList title={"Horror"} movies={movies.nowPlayingMovies} ></MovieList>
      
    </div>
  )
}

export default SecondaryContainer



  /**
   * MovieList- popular
   *    MovieCards * n
   * MovieList - nowplaying
   * MovieList - Trending
   * MovieList - Horror
   * 
   */
