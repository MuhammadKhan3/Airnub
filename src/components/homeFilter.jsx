import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
const HomeFilter = () => {
    const [filterClick,setfilterClick]=useState('');
    
  return (
  <section className='flex flex-col relative'>
    <div className='border border-gray-900 h-[5.3rem] rounded-full  flex flex-row items-center '>
       <div className={`flex-[3]  flex flex-col  text-start  rounded-full  outline-transparent  cursor-pointer z-20   ${filterClick==='location' ? 'bg-[#FFFFFF] outline outline-2 outline-primaryWeb ':'outline hover:outline-2 hover:outline-[#717171]'}`} onClick={()=>setfilterClick('location')}>
            <div className=' p-5  '>
                <h3 className={` text-base2-bold ${filterClick==='location' ? 'text-primaryWeb':''}`}>Location</h3>
                <h3 className='text-base text-[#717171]'>Bahria Town,Islamabad</h3>
            </div>
       </div>
       <span className='border-r  pt-12 overflow-hidden box-border relative z-10 '></span>
       <div className={`flex-[2]  flex flex-col  text-start  rounded-full  outline-transparent  cursor-pointer  z-20  ${filterClick==='property' ? 'bg-[#FFFFFF] outline outline-2 outline-primaryWeb ':'outline hover:outline-2 hover:outline-[#717171]'}`} onClick={()=>setfilterClick('property')}>
            <div className=' p-5  '>
                <h3 className={` text-base2-bold ${filterClick==='property' ? 'text-primaryWeb':''}`}>Property</h3>
                <h3 className='text-base text-[#717171]'>Appartment</h3>
            </div>
       </div>
       <span className='border-r  pt-12 overflow-hidden box-border relative z-10 '></span>

       <div className={`flex-0 p-6 pt-8 text-blue-50 rounded-full  outline-transparent  cursor-pointer  relative z-20 ${filterClick==='filter' ? 'outline  outline-2 outline-primaryWeb':'outline hover:outline-2 hover:outline-[#717171]'}`} onClick={()=>setfilterClick('filter')}>
         <img src={require('../assets/posts/filter.png')}/>
       </div>
       <span className='border-r  pt-12 overflow-hidden box-border relative z-10 '></span>
       <div className={`flex-0 p-6 pt-[1.30rem] text-primaryWeb   rounded-full  outline-transparent  cursor-pointer   box-border z-20 ${filterClick==='search' ? 'outline  outline outline-2 outline-primaryWeb' :'outline hover:outline-2 hover:outline-primaryWeb'}`} onClick={()=>setfilterClick('search')}>
         <BiSearch  size={34} className=' h-full w-full'/>
       </div>
    </div>
    {filterClick==='location' ?
      <div className='bg-white shadow-2xl border border-inherit rounded-3xl  w-full h-[55vh] absolute top-24 z-50'>
        Location
      </div>
      : filterClick==='property'
      ?
      <div className='bg-white shadow-2xl border border-inherit rounded-3xl  w-full h-[55vh] absolute top-24 z-50'>
        Property
      </div>
      :filterClick==='filter' ?
      <div className='bg-white shadow-2xl border border-inherit rounded-3xl  w-full h-[55vh] absolute top-24 z-50'>
        Filter
      </div>
      :filterClick=='search' &&
      <div className='bg-white shadow-2xl border border-inherit rounded-3xl  w-full h-[55vh] absolute top-24 z-50'>
        Search
      </div>
    }

  </section>
  )
}

export default HomeFilter
