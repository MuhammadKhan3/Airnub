import Filter from '../../components/filter';
import {AiOutlineSearch} from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi';
import {IoPersonCircle} from 'react-icons/io5'
import {GoSearch} from 'react-icons/go'
import { ToggleSwitch } from 'flowbite-react';
import Switch from "react-switch";
import {RxCross2} from 'react-icons/rx'
import {BsPlusLg} from 'react-icons/bs'
import {HiOutlineHomeModern} from 'react-icons/hi2'

import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
const Header=()=>{
   const [activeheader,setheader]=useState(false);
   const [userSwitch,setuserSwitch]=useState('buy');
   const [filter,setfilter]=useState('');
return(
   <section className='flex flex-col'>

      {/* main header */}
     {!activeheader ?
      <div className="flex flex-row justify-between items-center border-b-[1px] p-2 !h-[80px]">
         
            <div className='!ml-16 p-4 h-[26.22px]'>
                  BAKSH
            </div>
            <div className='border-[1px] flex flex-row items-center p-1.5 pl-8 rounded-3xl space-x-6 text-base2 cursor-pointer shadow-md hover:shadow-md hover:shadow-gray-400 transition-all hover:bg-[#EBEBEB]' onClick={()=>setheader(!activeheader)}>
               <div>
                  Anywhere
               </div>
               <div className='border-l-[1px] pl-6'>
                  Any property
               </div>
               <div className='text-[#717171] border-l-[1px] pl-6'>
                  Add filters
               </div>
               <div className='bg-primaryWeb text-white rounded-full p-2'>
                  <GoSearch size="14" />
               </div>

            </div>
            <div className='flex flex-row items-center space-x-10'>
               <div className='text-base2 flex flex-row items-center hover:bg-[#EBEBEB] cursor-pointer p-2 hover:rounded-full'>
                       <BsPlusLg size='8'/>
                       <span>Add property</span>
                </div>
               <div className='flex flex-row items-center border-[1px] transition-all shadow-sm p-1.5  hover:shadow-md hover:shadow-gray-400 rounded-full cursor-pointer mr-20'>
                  <BiMenu size='20'/>
                  <IoPersonCircle size="25"/>
               </div>
            </div>
      </div>
      :
      <div className=' w-full       h-full '>
         <div className={` flex flex-row justify-between items-center border-b-[1px]  w-full p-2 bg-white`}>
            
               <div className='!ml-16 p-4 h-[26.22px]'>
                     BAKSH
               </div>
               <div className='flex flex-col  mx-auto space-y-3 w-full'>
                     <div className='mx-auto   border-[1.8px] border-gray-500 w-fit rounded-full flex flex-row  cursor-pointer'>
                        <span className={`transition-colors ease-linear  duration-300  ${userSwitch==='buy' ?  'bg-gray-900 text-white h-full rounded-full  px-6 py-1.5' :'text-[#717171] text-base rounded-full  px-6 py-1.5'} `} onClick={()=>{setuserSwitch('buy')}}>Buy</span>
                        <span className={`transition-colors ease-in-out duration-300   ${userSwitch==='rent' ?  'bg-gray-900 text-white h-full rounded-full  px-6 py-1.5' :'text-[#717171] text-base rounded-full  px-6 py-1.5'} `} onClick={()=>{setuserSwitch('rent')}} >Rent</span>
                     </div>
                     <div className='border-[1px] mx-auto border-gray-300 flex flex-row items-center bg-[#EBEBEB] justify-between   py-1 pl-2 rounded-full  text-base2 cursor-pointer  transition-all  w-1/2  '>
                        <div className={` hover:bg-[#F7F7F7] p-7 pr-0 rounded-full w-full ${filter==='location' && 'bg-white shadow-lg'}`} onClick={()=>setfilter('location')}>
                           Location
                        </div>
                        <div className={`  hover:bg-[#F7F7F7] p-7 pr-0   rounded-full w-full ${filter==='property' && 'bg-white shadow-lg'}`} onClick={()=>setfilter('property')}>
                           Property
                        </div>
                        <div className={`flex flex-row items-center justify-end  hover:bg-[#F7F7F7]   rounded-full  w-[60%] px-2 py-2 space-x-2  mr-2 ${filter==='add-filter' && 'bg-white shadow-lg'}`} onClick={()=>{setfilter('add-filter')}}>
                           <div className='text-[#717171] '>
                              Add Filters
                           </div>
                           <div className='bg-primaryWeb text-white rounded-full p-5'>
                              <GoSearch size="14" />
                           </div>
                        </div>

                     </div>
               </div>

         </div>

         {filter==='location' ?
         <div className='relative left-20 m-0   mx-auto overflow-hidden rounded-xl   h-[467px] shadow-lg w-[45%] '>
                        <div className='bg-[#F7F7F7] h-[155px] p-6 rounded-b-3xl'>
                           <h1 className='text-base-bold'>Recent Searches</h1>
                           <div className='flex flex-row m-0 mt-1  items-center  gap-2  flex-wrap '>
                                      <div className="badge badge-info gap-2 bg-[#EBEBEB] rounded-md p-3">
                                          <span>House, Sale, Bahria Town,Islamabad</span>
                                          <RxCross2 size='12' className='text-[#717171] cursor-pointer' />
                                      </div>
                                      <div className="badge badge-info gap-2 bg-[#EBEBEB] rounded-md p-3">
                                          <span>Aparment, Rent,E-11,Islamabad</span>
                                          <RxCross2 size='12' className='text-[#717171] cursor-pointer' />
                                      </div>
                                      <div className="badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                          <span>Shop,Sale,Gullistan Coloney Block-1,Rawalpindi</span>
                                          <RxCross2 size='12' className='text-[#717171] cursor-pointer' />
                                      </div>
                           </div>
                        </div>

                        <div className=' p-6 text-base-bold flex flex-row items-center space-x-2'>
                           <h1>Search City</h1>
                           <div className='h-8 rounded-3xl border-[1px]  p-2 flex flex-row  items-center text-base2'>
                             <input type="text" placeholder="type here" className="border-none h-full outline-none focus:border-none focus:outline-none focus:ring-0 placeholder:text-sm"  />
                             <FiSearch className='cursor-pointer'/>
                           </div>
                        </div>

                        <div className='flex flex-wrap flex-row pl-6 gap-4'>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                    Islamabad
                              </div>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                    Lahore
                              </div>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                    Multan
                              </div>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                  Rawalpindi
                              </div>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                 Sahiwal
                              </div>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                 Karachi
                              </div>
                              
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                 Sahiwal
                              </div>

                              
                              
                              
                        </div>
         </div> 
         :filter==='property' ? 
          <div className='relative left-20 m-0 p-10   mx-auto overflow-hidden rounded-3xl   h-[467px] shadow-lg w-[45%]  space-x-3 '>
                        <div className='flex flex-row'>
                           <h1 className='text-base2 active:border-red-500 active:border-b-2 h-fit  px-2 w-fit cursor-pointer'>Residential</h1>
                           <h1 className='text-base2 active:border-red-500 active:border-b-2 h-fit  px-2 w-fit cursor-pointer'>Commercial</h1>
                           <h1 className='text-base2 active:border-red-500 active:border-b-2 h-fit  px-2 w-fit cursor-pointer'>Plots</h1>
                        </div>
                     <div>
                        <div className='mt-5 text-red-400 grid grid-cols-4 w-1/2 '>
                             <div className='flex flex-col '>
                                 <div className='border-[1px] p-2 border-red-400 rounded-sm w-fit'>
                                    <HiOutlineHomeModern size="40" />
                                 </div>
                                 <div className='mx-auto'>
                                   All
                                 </div>
                             </div>
                             <div>
                                 <div className='border-[1px] p-2 border-red-400 rounded-sm w-fit'>
                                    <HiOutlineHomeModern size="40" />
                                 </div>
                                 <div className='mx-auto '>
                                   All
                                 </div>
                             </div>
                             <div>
                                 <div className='border-[1px] p-2 border-red-400 rounded-sm w-fit'>
                                    <HiOutlineHomeModern size="40" />
                                 </div>
                                 <div className='mx-auto'>
                                   All
                                 </div>
                             </div>

                             <div>
                                 <div className='border-[1px] p-2 border-red-400 rounded-sm w-fit'>
                                    <HiOutlineHomeModern size="40" />
                                 </div>
                                 <div className='mx-auto'>
                                   All
                                 </div>
                             </div>

                             <div>
                                 <div className='border-[1px] p-2 border-red-400 rounded-sm w-fit'>
                                    <HiOutlineHomeModern size="40" />
                                 </div>
                                 <div className='mx-auto'>
                                   All
                                 </div>
                             </div>

                             <div>
                                 <div className='border-[1px] p-2 border-red-400 rounded-sm w-fit'>
                                    <HiOutlineHomeModern size="40" />
                                 </div>
                                 <div className='mx-auto'>
                                   All
                                 </div>
                             </div>


                             <div>
                                 <div className='border-[1px] p-2 border-red-400 rounded-sm w-fit'>
                                    <HiOutlineHomeModern size="40" />
                                 </div>
                                 <div className='mx-auto'>
                                   All
                                 </div>
                             </div>
                        </div>
                  </div>
         </div>
         :filter==='add-filter'
         &&
         <div className='relative left-20 m-0   mx-auto overflow-hidden rounded-xl   h-[467px] shadow-lg w-[45%] '>
                        <div className='bg-[#F7F7F7] h-[155px] p-6 rounded-b-3xl'>
                           <h1 className='text-base-bold'>Recent Searches</h1>
                           <div className='flex flex-row m-0 mt-1  items-center  gap-2  flex-wrap '>
                                      <div className="badge badge-info gap-2 bg-[#EBEBEB] rounded-md p-3">
                                          <span>House, Sale, Bahria Town,Islamabad</span>
                                          <RxCross2 size='12' className='text-[#717171] cursor-pointer' />
                                      </div>
                                      <div className="badge badge-info gap-2 bg-[#EBEBEB] rounded-md p-3">
                                          <span>Aparment, Rent,E-11,Islamabad</span>
                                          <RxCross2 size='12' className='text-[#717171] cursor-pointer' />
                                      </div>
                                      <div className="badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                          <span>Shop,Sale,Gullistan Coloney Block-1,Rawalpindi</span>
                                          <RxCross2 size='12' className='text-[#717171] cursor-pointer' />
                                      </div>
                           </div>
                        </div>

                        <div className=' p-6 text-base-bold flex flex-row items-center space-x-2'>
                           <h1>Search City</h1>
                           <div className='h-8 rounded-3xl border-[1px]  p-2 flex flex-row  items-center text-base2'>
                             <input type="text" placeholder="type here" className="border-none h-full outline-none focus:border-none focus:outline-none focus:ring-0 placeholder:text-sm"  />
                             <FiSearch className='cursor-pointer'/>
                           </div>
                        </div>

                        <div className='flex flex-wrap flex-row pl-6 gap-4'>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                    Islamabad
                              </div>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                    Lahore
                              </div>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                    Multan
                              </div>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                  Rawalpindi
                              </div>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                 Sahiwal
                              </div>
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                 Karachi
                              </div>
                              
                              <div className="cursor-pointer badge badge-info m-0 gap-2  bg-[#EBEBEB] rounded-md p-3">
                                 Sahiwal
                              </div>

                              
                              
                              
                        </div>
         </div>}

         
      </div>}
      {

      }
      
   </section>
);
}
export default Header;