import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../utils/constant'

const GPTSearch = () => {
  return (
    <div>
      <div >
        <img className='fixed opacity-80 -z-10' src={BG_URL} alt='Background image'></img>
      </div>
      <GPTSearchBar></GPTSearchBar>
      <GPTMovieSuggestions></GPTMovieSuggestions>
    </div>
  )
}

export default GPTSearch