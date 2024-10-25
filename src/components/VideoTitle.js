import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
<div className='w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>


<div>
      
<button className="bg-white text-black border border-gray-950 border-b-4 font-medium overflow-hidden relative mx-2 px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  ▶️play
</button>

<button
  className="overflow-hidden relative w-32 p-2 h-12 bg-gray-500 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  More..
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-gray-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-gray-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >ℹ️ Info</span
  >
</button>

      </div>

    </div>
  )
}

export default VideoTitle