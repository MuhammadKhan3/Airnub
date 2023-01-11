import React from 'react'
import Post from './post'

const PropertyPost = () => {
  return (<div className='flex flex-col '>
     <h1>Over 1,000 homes within map area</h1>
    <div className='grid grid-rows-6 grid-cols-3 mt-4 w-[55%] gap-x-2'>
        <Post/>
        <Post/>
        <Post/>

    </div>
  </div>)
}

export default PropertyPost