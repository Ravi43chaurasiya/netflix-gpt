import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice(
  {
    name:"gpt",
    initialState:{
      showGpt:false,
      movieName:null,
      searchedMovies:null
    },
    reducers:{
      addShowGpt:(state)=>{
        state.showGpt=!state.showGpt;
      },
      addMovieData:(state,action)=>{
        const {movieName,searchedMovies}=action.payload;
        state.movieName=movieName;
        state.searchedMovies=searchedMovies;
      }
      
    }

  }
)

export const {addShowGpt,addMovieData}=gptSlice.actions;
export default gptSlice.reducer;