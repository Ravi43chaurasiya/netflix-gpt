import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {

  const movies=useSelector(store=>store.gpt);
  
  const moviesNames=movies.movieName;
  console.log("this is moviesNames"+ moviesNames)
  const searchedMovies=movies.searchedMovies;
  console.log("this is searched movies" + searchedMovies);
  return (
    <div>
       {moviesNames && moviesNames.map((movieName,index)=><MovieList key={movieName}   title={movieName} movies={searchedMovies[index]} ></MovieList>)} 
      
    </div>
  )
}

export default GPTMovieSuggestions