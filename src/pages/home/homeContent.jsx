import React, { useState } from 'react'
import HomeFilter from '../../components/homeFilter';
import {BiGlobe} from 'react-icons/bi'
import {MdKeyboardArrowUp} from 'react-icons/md'

const HomeContent = () => {
  const [propertyType,setpropertyType]=useState('buy');
  return (
    // 
    <section className=' bg-gradient-to-tr  from-pink-50 via-pink-50   to-blue-50 mix-blend-multiply  backdrop-blur-xl backdrop-brightness-150  bg-white/30   flex flex-col items-center justify-center w-full   h-fit relative'>
       <div className='h-fit   mt-28 text-center'>
         <h1 className='text-bigHeading h-fit w-[62.5%] mx-auto'>
           Discover a <span className='text-primaryWeb'>place</span> you’ll love to live
         </h1>
       </div>
       <div className='h-fit space-x-2 mx-auto mt-8' >
         <button className={`py-[12px] px-[41px] text-subTitle rounded-full ${propertyType==='buy' ? 'border-[1px] border-[#717171] bg-[#222222]    text-white':'bg-white border-[1px] border-[#717171]'} h-fit `} onClick={()=>setpropertyType('buy')}>Buy</button>
         <button className={`py-[12px] px-[41px] text-subTitle rounded-full ${propertyType==='rent' ? 'border-[1px] border-[#717171] bg-[#222222]   text-white' :'bg-white border-[1px] border-[#717171] '} `} onClick={()=>setpropertyType('rent')}>Rent</button>
       </div>
       <div className='h-full w-[62%] mx-auto text-center mt-5 '>
          <HomeFilter/>
       </div>
       <div className='mx-auto border  border-[#C0C0C0] rounded-xl pt-[15px] pr-[26px] pb-[15px] pl-[26px] flex flex-row space-x-6 w-[30vw]'>
          <div>
            <img src={require('../../assets/orderedList.png')}/>
          </div>
          <div>
            <h1 className='text-base-bold'>Submit your requirements</h1>
            <p className='text-small '>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam</p>
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