import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies=()=>{

   //Fetch Data from TMDB API and update stored movies
   const dispatch=useDispatch();

   const getPopularMovies=async()=>
   {
     const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_Options)
     const json=await data.json();
    console.log(json);
     dispatch(addPopularMovies(json.results));
   }
   useEffect(()=>{
 
     getPopularMovies()
 
   },[])
}

export default usePopularMovies;