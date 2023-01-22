import React, { useState } from 'react'
import {BiUpArrow} from 'react-icons/bi'
const PropertyFilter = () => {
  const [filterId,setFilterId]=useState();
  const list=[
    {
      name:
      "bahria Town",
    },
    {
      name:
      "Model Town",
    },
    {
      name:
      "Garden Town",
    },
    {
      name:
      "DHA",
    },
    {
      name:
      "Wapda Town",
    },
    {
      name:
      "Johar Town"
    }
  ]

  return (
  <section   style={{background: '#FFFFFF',boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)'}} >
   <div className="h-[78px] flex flex-row justify-between w-[90%] mx-auto ">

    <div  className=''>

       <ul className='list-none  relative top-4 flex flex-row gap-2 '>
          {list.map((data,i)=>{
            return <div className='group' key={i+1}>

            <li 
            className={`rounded-[39px] border-[1px]   flex flex-row items-center gap-4  w-fit  py-[10px] px-[16px] cursor-pointer transition-all    ${filterId===i ? 'border-primaryWeb' :'border-[#717171] group-hover:border-black'}`}              
                onClick={(e)=>{
                      setFilterId(i)
                      e.currentTarget.firstChild
                      .src
                      =require('../assets/navigation/locationFiltrerGold.png')
                }}
                onMouseOver={(e)=>{
                  if(filterId!==i){
                    e.currentTarget.firstChild
                    .src
                    =require('../assets/navigation/locationFilterBlack.png')}
                  }
                }
                onMouseOut={(e)=>{
                  if(filterId!==i){
                    e.currentTarget.firstChild
                    .src
                    =require('../assets/navigation/locationFilter.png')}
                  }
                }
              >
              <img
                    src={filterId===i ? require('../assets/navigation/locationFiltrerGold.png'):require('../assets/navigation/locationFilter.png')} 
                    className="w-[20px]"
                    />
                  {console.log(filterId)}
                  <span className={`text-smallBold    ${filterId===i ? 'text-primaryWeb' : 'text-[#717171] group-hover:text-[#222222]'}`}>{data.name}</span>
              </li>
            </div>
          })}
 



       </ul>
    </div>
    <div className=' align-middle self-center flex flex-row items-center'>
        <h1 className='text-small text-[#717171]'>Sort by:</h1>
        &nbsp;<span className='text-smallBold'>Price</span>
        <div className='self-center ml-1 cursor-pointer'>
          <img src={require('../assets/navigation/sort.png')} className="w-2.5 "/>
        </div>
    </div>
   </div>
  </section>
  )
}

export default PropertyFilter