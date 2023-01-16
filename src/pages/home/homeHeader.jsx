import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi';
import {IoPersonCircle} from 'react-icons/io5'
import {GoSearch} from 'react-icons/go'
import { ToggleSwitch } from 'flowbite-react';
import Switch from "react-switch";
import {RxCross2} from 'react-icons/rx'
import {BsPlusLg} from 'react-icons/bs'
import {HiOutlineHomeModern} from 'react-icons/hi2'
// import './header.css'
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
const HomeHeader = () => {
    const [activeheader,setheader]=useState(false);
  return (<section className='flex flex-col h-full relative'>
          <div className={`flex flex-row justify-between items-center border-b-[1px] p-2 !h-[80px] bg-white z-30 transition-all ${activeheader ? 'bg-opacity-0 hidden' :'bg-opacity-100 visible '}`}>
         
         <div className='!ml-16 p-4 h-[26.22px]'>
               <img src={require('../../assets/posts/logo.png')} className="logo"/>
         </div>

         <div className='flex flex-row items-center space-x-2 mr-10'>
            <div className='group text-base2 transition-all hover:text-primaryWeb   hover:text-base2-bold ease-in duration-200 delay-75  flex flex-row items-center space-x-1 px-5  hover:stroke-1 hover:border-primaryWeb  border-[1px] border-midGray cursor-pointer p-2 rounded-full  '>
                    <BsPlusLg size='8'/>
                    <span className='property'>Add property</span>
             </div>
            <div className='flex flex-row items-center p-0 border-[1px] rounded-full pl-2 py-0.5 group hover:border-primaryWeb'>
               <BiMenu size='21' className='text-[#717171] group-hover:text-primaryWeb'/>
               <IoPersonCircle size='30'  className=' text-[#DDDDDD] text-[100%] max-w-[30px]'/>
            </div>
         </div>
   </div>
  </section>
  )
}

export default HomeHeader