import React, { useState } from 'react'
import {MdOutlineAddBox} from 'react-icons/md'

const BottomNavigation = () => {
    const [menu,setmenu]=useState('');
  return (
    <div className='border-t-[1px] border-[#DDDDDD] hidden mb:flex mb:flex-row justify-around  text-Xsmall relative  top-28'>
        <div className={`flex flex-col p-5 cursor-pointer  ${menu==='post-ad' ? 'border-t border-primaryWeb text-primaryWeb': ''} `} onClick={()=>setmenu('post-ad')}>
           {menu==='post-ad' ?
              <img src={require('../assets/navigation/colorIcon/add.png')} className="w-[18px] h-[18px] mx-auto "/>
               :
               <img src={require('../assets/navigation/add.png')} className="w-[18px] h-[18px] mx-auto "/>
           }

           <span >Post ad</span>
        </div>
        <div className={`flex flex-col p-5 cursor-pointer  ${menu==='whislist' ? 'border-t border-primaryWeb text-primaryWeb': ''}`} onClick={()=>setmenu('whislist')}>
           {menu==='whislist' ?
              <img src={require('../assets/navigation/colorIcon/whilist.png')} className="w-[18px] h-[18px] mx-auto "/>
               :
               <img src={require('../assets/navigation/whislist.png')} className="w-[18px] h-[18px] mx-auto "/>
           }
           <span>Wishlist</span>
        </div>
        <div className={`flex flex-col p-5 cursor-pointer  ${menu==='search' ? 'border-t border-primaryWeb text-primaryWeb': ''}`} onClick={()=>setmenu('search')}>
            {menu==='search' ?
              <img src={require('../assets/navigation/colorIcon/search.png')} className="w-[18px] h-[18px] mx-auto "/>
               :
               <img src={require('../assets/navigation/search.png')} className="w-[18px] h-[18px] mx-auto "/>
            }
           <span>Search</span>
        </div>
        <div className={`flex flex-col p-5 cursor-pointer  ${menu==='inbox' ? 'border-t border-primaryWeb text-primaryWeb': ''}`} onClick={()=>setmenu('inbox')}>
            {menu==='inbox' ?
              <img src={require('../assets/navigation/colorIcon/message.png')} className="w-[18px] h-[18px] mx-auto "/>
               :
               <img src={require('../assets/navigation/message.png')} className="w-[18px] h-[18px] mx-auto "/>
            }
           <span>Inbox</span>
        </div>
        <div className={`flex flex-col p-5 cursor-pointer  ${menu==='person' ? 'border-t border-primaryWeb text-primaryWeb': ''}`} onClick={()=>setmenu('person')}>
            {menu==='person' ?
              <img src={require('../assets/navigation/colorIcon/person.png')} className="w-[18px] h-[18px] mx-auto "/>
               :
               <img src={require('../assets/navigation/person.png')} className="w-[18px] h-[18px] mx-auto "/>
            }
           <span>Person</span>
        </div>
    </div>
  )
}

export default BottomNavigation