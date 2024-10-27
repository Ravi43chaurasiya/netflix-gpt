import React from 'react'
import lang from '../utils/langConstant'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
  const selectedLang=useSelector(store=>store.language.selectedLang);
  return (
    <div className="flex justify-center ">
    <form className="flex w-full max-w-xl bg-gray-800 rounded-full overflow-hidden shadow-lg mt-20">
      <input
        className="flex-grow p-4 text-white bg-gray-800 placeholder-gray-400 focus:outline-none"
        type="text"
        placeholder={lang[selectedLang].gptSearchPlaceholder}
      />
      <button
        className="px-6 bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors duration-200"
        type="submit"
      >
        {lang[selectedLang].Search}
      </button>
    </form>
  </div>
  
  


  )
}

export default GPTSearchBar