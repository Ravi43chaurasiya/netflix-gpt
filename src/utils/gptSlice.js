import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice(
  {
    name:"gpt",
    initialState:{
      showGpt:false
    },
    reducers:{
      addShowGpt:(state)=>{
        state.showGpt=!state.showGpt;
      }
    }

  }
)

export const {addShowGpt}=gptSlice.actions;
export default gptSlice.reducer;