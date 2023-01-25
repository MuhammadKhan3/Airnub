import Filter from './filter';
import {AiOutlineSearch} from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi';
import {IoPersonCircle} from 'react-icons/io5'
import {GoSearch} from 'react-icons/go'
import { ToggleSwitch } from 'flowbite-react';
import Switch from "react-switch";
import {RxCross2} from 'react-icons/rx'
import {BsPlusLg} from 'react-icons/bs'
import {HiOutlineHomeModern} from 'react-icons/hi2'
import './header.css'
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import { NavLink } from 'react-router-dom';
const Header=()=>{
   const [activeheader,setheader]=useState(false);
   
   const [userSwitch,setuserSwitch]=useState('buy');
   const [filter,setfilter]=useState('');
return(
   <section className='relative  mx-auto border-b-[1px] w-full'>
   
      <div className='flex flex-row  items-center  w-[90%] justify-between    h-full relative   mx-auto'>

               <div className={`flex flex-row grow w-full   items-center  justify-between    !h-[80px] bg-white z-30 transition-all ${activeheader ? 'bg-opacity-0 hidden' :'bg-opacity-100 visible'}`}>
                     <NavLink to='/'>
                        <div className=' h-[26.22px] '>
                                    <img src={require('../assets/posts/logo.png')} className="logo"/>
                        </div>                                            
                     </NavLink>
                     <div className=' border-[1px] border-primaryWeb flex flex-row items-center  p-2 pl-8 py-3 rounded-3xl space-x-6 text-smallBold cursor-pointer  transition-all hover:shadow-lg ' onClick={()=>setheader(!activeheader)}>
                        <div>
                           Anywhere
                        </div>
                        <div className='border-l-[1px] pl-6'>
                           Any property
                        </div>
                        <div className=' border-l-[1px] pl-6'>
                           Add filters
                        </div>
                        <div className=' rounded-full  text-primaryWeb'>
                           <img src={require('../assets/navigation/searchHeader.png')}/>
                        </div>
                     </div>

                     <div className='flex flex-row items-center space-x-2 '>
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
      </div>

      <div className={` w-full h-screen    bg-gray-800  bg-opacity-20 transition-all ease-in-out  duration-300 delay-100   absolute z-50  ${activeheader ?  'opacity-100  top-0 visible':'opacity-0  -top-96 invisible'}`} onClick={(e)=>{e.stopPropagation(); console.log('parent') }}>
                  <div className={` flex flex-row justify-between items-center border-b-[1px]  w-full p-2 bg-white  `} onClick={(e)=>{e.stopPropagation(); console.log('child') }}>            
                        <div className=' p-4 h-[26.22px]'>
                           <img src={require('../assets/posts/logo.png')} className="logo"/>
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
                  <div className=' xl: xl: m-0   mx-auto overflow-hidden rounded-xl   h-[467px] shadow-lg w-[45%] bg-white z-50 absolute  left-1/3 top-40'>
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
                  <div className=' m-0 p-10   mx-auto overflow-hidden rounded-3xl   h-[467px] shadow-lg w-[45%]  space-x-3 z-50 bg-white absolute  left-[30vw] top-40'>
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
                  <div className=' m-0   mx-auto overflow-hidden rounded-xl   h-[467px] shadow-lg w-[45%] z-50 bg-white absolute  left-[30vw] top-40'>
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
               </div>
   </section>
);
}
export default Header;