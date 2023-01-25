import React from 'react'
import Bed from '../assets/posts/bed.png';
import Bath from '../assets/posts/bath.png';
import Area from '../assets/posts/area.png';

const PostDetailComponent = () => {

  return (<section className=' w-[90%] mx-auto mt-4 h-full flex flex-row gap-5'>
        
        <div className=''>
            <div className='flex flex-col  gap-5'>
               <div className='w-[190px] h-[140px] flex flex-col rounded-[5px] overflow-hidden cursor-pointer outline outline-1 outline-offset-1 outline-primaryWeb'>
                  <div  className='bg-[#D9D9D9] w-[190px] h-[140px] object-cover ' />
               </div>
               <div className='w-[190px] h-[140px] flex flex-col rounded-[5px] overflow-hidden cursor-pointer'>
                  <div  className='bg-[#D9D9D9] w-[190px] h-[140px] object-cover'/>
               </div>
               <div className=' w-[190px] h-[140px] flex flex-col rounded-[5px] overflow-hidden cursor-pointer'>
                  <div  className='bg-[#1E3240B2] w-[190px] h-[140px] object-cover flex flex-row gap-1 items-center justify-center'>
                     <img src={require('../assets/posts/image.png')}  className="w-[18px] h-[18px]"/>
                     <h1 className='text-base2 text-white'>15</h1>
                  </div>
               </div>
            </div>
            <div className='text-primaryWeb text-Title mt-4'>
                  <h1>PKR 12 Lac</h1>
            </div>
        </div>

        <div className='w-[670px] h-full '>
            <div 
              className="w-full h-[460px] bg-[#D9D9D9] rounded-[10px] overflow-hidden flex flex-col justify-end items-end " 
              style={{backgroundImage:"url('/post.png')"}} 
            >
               <h1 className='text-white w-[91px] rounded-[38px]   pt-[10px] pr-[30px] pb-[10px] pl-[30px] bg-[#1E3240B2] mr-8 mb-8 '>1/15</h1>
            </div>
            <div className='mt-6 flex flex-row justify-between '>
               <div>
                  <h1 className='text-Title'>Upper Portion For Rent</h1>
                  <h4 className='text-base-bold mt-1 text-[#717171]'>Bahria Town, Phase-1,  Islamabad</h4>
               </div>
               <div className='flex flex-row items-center gap-10 mr-20 '>
                  <img src={require('../assets/posts/share.png')}  className="w-[24px] h-[22px] cursor-pointer"/>
                  <img src={require('../assets/posts/star.png')}   className="w-[23px] h-[23px] cursor-pointer"/>
                  <img src={require('../assets/posts/burger.png')} className="w-[16px] h-[4px]  cursor-pointer"/>                  
               </div>
            </div>
            <hr className='mt-6'/>

            <div className="flex flex-row items-center gap-[16px] mt-4">
               <div className="flex flex-row items-center gap-1">
                  <img src={Bed} className="w-[22.41px] h-[18.34px]"/>
                  <h1 className="text-base2 text-secondaryWeb">5</h1>
               </div>
               <div className="flex flex-row items-center gap-1">
                  <img src={Bath} className="w-[22.41px] h-[18.34px]"/>
                  <h1 className="text-base2 text-secondaryWeb">6</h1>
               </div>
               <div className="flex flex-row items-center gap-1">
                  <img src={Area} className="w-[22.41px] h-[18.34px]"/>
                  <h1 className="text-base2 text-secondaryWeb">1 Kanal</h1>
               </div>
          </div>
            {/* <div className='  border-[1px] border-[rgba(221, 221, 221, 1)] border-b mt-4'></div> */}
        </div>
        <div className='w-[352px] bg-white h-[460px]  rounded-[12px] ml-8 ' style={{boxShadow: '0px 3px 18px rgba(0, 0, 0, 0.2)'}}>
             
        </div>
    </section>)
}

export default PostDetailComponent