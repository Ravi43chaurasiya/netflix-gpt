import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constant";
import { addTopRatedMovies} from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopRatedMovies=()=>{

   //Fetch Data from TMDB API and update stored movies
   const dispatch=useDispatch();

   const getTopRatedMovies=async()=>
   {
     const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_Options)
     const json=await data.json();
    console.log(json);
     dispatch(addTopRatedMovies(json.results));
   }
   useEffect(()=>{
 
     getTopRatedMovies()
 
   },[])
}

export default useTopRatedMovies;