import React, { useState } from 'react'
import HomeFilter from '../../components/homeFilter';
import {BiGlobe} from 'react-icons/bi'
import {MdKeyboardArrowUp} from 'react-icons/md'
import SearchType from '../../components/searchType';

const HomeContent = () => {
  const [propertyType,setpropertyType]=useState('buy');
  const [filterClick,setfilterClick]=useState('');

  return (
    <section className=' lg:bg-gradient-to-tr  from-pink-50 via-pink-50   to-blue-50 mb:bg-white mix-blend-multiply    bg-white/30   flex flex-col items-center justify-center w-full   h-fit relative text-black' onClick={(e)=>{ console.log('bublin'); setfilterClick('')}}>
       <div className='h-fit   mt-28 text-center'>
         <h1 className='text-bigHeading h-fit w-[62.5%] mx-auto text-black'>
           Discover a <span className='text-primaryWeb'>place</span> you’ll love to live
         </h1>
       </div>
       <div className='h-fit  mx-auto mt-8' >
        <SearchType propertyType={propertyType} setpropertyType={setpropertyType}/>
       </div>
       <div className='h-full w-[50%] mb:w-[94%] sm:w-[80%] md:w-[80%] mx-auto text-center mt-5 ' onClick={(e)=>{e.stopPropagation()}}>
          <HomeFilter filterClick={filterClick} setfilterClick={setfilterClick} />
       </div>
       <div className='mx-auto rounded-xl  flex flex-row items-center  gap-10 w-[30vw]'>
          <div>
            <button style={{boxShadow:' 0px 3px 18px rgba(0, 0, 0, 0.2)'}} className='px-[34px] rounded-full text-white py-[12px] bg-primaryWeb'>Wanted</button>
          </div>
          <div>
            <p className='text-base2 text-[#717171]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam</p>
          </div>
       </div>

       <div className='flex flex-row items-center  justify-center max-w-full   w-[90%] h-fit mix-blend-multiply opacity-[0.4] -z-50 relative'>
              <img src={require('../../assets/footer/artOne.png')} className="basis-6/12 w-[50%] self-end     object-contain " alt="Art One"/>
              <img src={require('../../assets/footer/artTwo.PNG')} className="basis-6/12 w-[50%] self-center        object-contain " alt="Art Two"/>            {/* </div> */}
       </div>
       <span className='border-b-[1px] border-[#C0C0C0] mt-8  w-full'></span>
       <div className='h-44 flex flex-row text-smallBold space-x-10 justify-end w-full items-center text-black mr-32'>
         <div className='flex flex-row items-center space-x-2'>
            <BiGlobe size={20}/>
            <p className=''>English (US)</p>
         </div>
         <div className='flex flex-row items-center space-x-2'>
            <p>$</p>
            <p className='text-smallBold'>USD</p>
         </div>
         <div className='flex flex-row items-center'>
           <p>Support & resources</p>
           <MdKeyboardArrowUp size={20}/>
         </div>
       </div>
    </section>)
}

export default HomeContent