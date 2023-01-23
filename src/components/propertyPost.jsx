import React from 'react'
import Post from './post'

const PropertyPost = () => {
  return (<div className='flex flex-col   w-full mt-6'>

     <h1 className='text-small text-[#717171]'>Over <span className='text-smallBold'>(1000+)</span> homes within map area</h1>
    <div className='grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb:grid-cols-1  mt-4 w-full  gap-5 '>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  </div>)
}

export default PropertyPost