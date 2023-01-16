import React from 'react'

const SearchType = ({propertyType,setpropertyType}) => {
  return (
  <>
    <div className='mb:hidden inline-block space-x-2 '>
        <button className={`py-[12px] px-[41px] text-subTitle rounded-full ${propertyType==='buy' ? 'border-[1px] border-[#717171] bg-[#222222]    text-white':'bg-white border-[1px] border-[#717171]'} h-fit `} onClick={()=>setpropertyType('buy')}>Buy</button>
        <button className={`py-[12px] px-[41px] text-subTitle rounded-full ${propertyType==='rent' ? 'border-[1px] border-[#717171] bg-[#222222]   text-white' :'bg-white border-[1px] border-[#717171] '} `} onClick={()=>setpropertyType('rent')}>Rent</button>
    </div>
    <div className='hidden mb:inline-block '>
       <div className=' h-[42px] rounded-[21px] bg-[#F7F7F7] text-base flex flex-row w-[146px] mx-auto '>
          <div className={` cursor-pointer  text-base-bold rounded-[33px] !w-[82px] text-center pt-[0.7rem] h-full ${propertyType==='buy' ? 'bg-black text-white text-base-bold':'text-[#717171] text-base'}`} onClick={()=>setpropertyType('buy')}>Sell</div>
          <div className={`   rounded-[33px] cursor-pointer !w-[82px] text-center pt-[0.7rem]  text-base ${propertyType==='rent' ? 'bg-black text-white text-base-bold':'text-[#717171]'}`} onClick={()=>setpropertyType('rent')}>Rent</div>
          {/* <span /span> */}
       </div>
    </div>
  </>
  )
}

export default SearchType