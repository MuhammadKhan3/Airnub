import React from 'react'
import Post from './post'

const PropertyPost = () => {
  return (<div className='flex flex-col   w-full mt-6'>

     <h1 className='text-small text-[#717171]'>Over <span className='text-smallBold'>(1000+)</span> homes within map area</h1>
    <div className='flex flex-row  flex-wrap mt-4 w-full  gap-5 '>
        <Post/>
        {/* <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/> */}

    </div>
  </div>)
}

export default PropertyPost