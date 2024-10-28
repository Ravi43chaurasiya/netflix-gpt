import React, { useRef } from 'react'
import lang from '../utils/langConstant'
import { useDispatch, useSelector } from 'react-redux'
import client from '../utils/openAi';
import { API_Options } from '../utils/constant';
import { addMovieData } from '../utils/gptSlice';

const GPTSearchBar = () => {
  const selectedLang=useSelector(store=>store.language.selectedLang);
  const searchText=useRef(null);
  const dispatch=useDispatch();
const fetchMovie=async(movieName)=>{
  const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1", API_Options);
  const json=await data.json();
  console.log(json.results);
  return json.results;
  // console.log(data);
  
}

  const handleGptSearchClick=async()=>
  {
    console.log(searchText.current.value);
    // make an Api call to open Ai and get movie results.
    const gptQuery="Act as a movie Reccomendation system and suggest some movies for the query" + searchText.current.value +". only give me name of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmaal, Koi Mil Gaya";
    const gptResults= await client.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',});
      
      const moviesName=gptResults?.choices[0]?.message?.content.split(",").map(name=>name.trim());

      if(!moviesName)
      {
        console.log("No movies names received from GPT");
        return;
      }
      
      // for each movie , i will search Tmdb movie api
      const MoviesPromises= moviesName.map((movieName)=>{
        return fetchMovie(movieName)});
      
      const searchedMovies= await Promise.all(MoviesPromises);
      console.log(searchedMovies)
      dispatch(addMovieData({ movieName: moviesName, searchedMovies }));
  }

  return (
    <div className="flex justify-center ">
    <form className="flex w-full max-w-xl bg-gray-800 rounded-full overflow-hidden shadow-lg mt-20" onSubmit={(e)=>e.preventDefault()}>
      <input ref={searchText}
        className="flex-grow p-4 text-white bg-gray-800 placeholder-gray-400 focus:outline-none"
        type="text"
        placeholder={lang[selectedLang]?.gptSearchPlaceholder}
      />
      <button
        className="px-6 bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors duration-200"
        type="submit"
        onClick={handleGptSearchClick}
      >
        {lang[selectedLang]?.Search}
      </button>
    </form>
  </div>
  
  


  )
}

export default GPTSearchBar