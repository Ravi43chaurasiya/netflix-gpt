import { createSlice } from "@reduxjs/toolkit";

const langSlice=createSlice({
  name:"language",
  initialState:{
    selectedLang:"en"
  },
  reducers:{
    addSelectedLangauge:(state,action)=>{
      state.selectedLang=action.payload;
    }
  }

})
 export const {addSelectedLangauge}=langSlice.actions;
export default langSlice.reducer;