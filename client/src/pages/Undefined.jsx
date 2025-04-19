import React from 'react'
import {Link} from "react-router-dom"
function Undefined() {
  return (
    <div className="h-[100vh] grid place-items-center place-content-center">
      <div className='text-center'>
        <h1 className='text-9xl font3 tracking-wider text-indigo-900'>4<span className='text-pink-800'>0</span>4</h1>
        <p className='text-center text-5xl text-white font3'>page not found !!</p>
      </div>
      <Link to="/"><button className='w-32 h-10 bg-pink-700 text-indigo-900 font-extrabold rounded-lg cursor-pointer font2 border-2 border-indigo-900 text-2xl'>Return Home¬ </button></Link>
    </div>
  )
}

export default Undefined
