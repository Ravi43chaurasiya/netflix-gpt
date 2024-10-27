import React from 'react'
import { image_cdn_url } from '../utils/constant'

const MovieCards = ({posterPath}) => {
  return (
    <div className='shrink-0 hover:scale-105 transition-transform duration-200'>
      <img src={image_cdn_url + posterPath} alt='Moviecard'>

      </img>
    </div>
  )
}

export default MovieCards