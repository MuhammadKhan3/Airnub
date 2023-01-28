import React, { Component, useState } from "react";
import Slider from "react-slick";
import {GoChevronRight} from 'react-icons/go'
import {GoChevronLeft} from 'react-icons/go'
import {AiOutlineHeart} from 'react-icons/ai'
import Favorite from '../assets/posts/favourite.png'
import ImageOne from '../assets/posts/1.jpg'
import Bed from '../assets/posts/bed.png';
import Bath from '../assets/posts/bath.png';
import Area from '../assets/posts/area.png';
import { NavLink } from "react-router-dom";



const Post = ({images}) => {
    
    const customeSlider=React.createRef();
    const [next,setnext]=useState(1);
    const [item,setitem]=useState([1,2,3,4,5,6]);
    const gotoNext = () => {
        setnext(next+1);
        customeSlider.current.slickNext();
    }
  
    const gotoPrev = () => {
        setnext(next-1);
      customeSlider.current.slickPrev()
    }

    const settings = {
        dots: true,
        speed: 500,
        infinite:true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,

      };
      console.log(images)
  return (

  <div className="group relative h-[378px] w-full     cursor-pointer group" onClick={()=>{}}>
    <NavLink to='/property/1'>
        <Slider ref={customeSlider} {...settings} className="h-[245px]  group-hover:outline group-hover:outline-primaryWeb group-hover:outline-offset-2 group-hover:outline-2 rounded-[15px] overflow-hidden w-full !p-0 relative ">
              {images.map((image)=>{
                return <div className="h-[245px] !w-full rounded-[15px] overflow-hidden " >
                        <div  
                          style={{
                              background: ` #DDDDDD url(${image}) no-repeat`,
                              backgroundSize:'cover',
                              width:'100%',
                              height:'100%'
                            }}

                          onMouseEnter={(e)=>{
                            e.target.style.background=` linear-gradient(180deg, rgba(196, 154, 80, 0.28) 0%, rgba(217, 217, 217, 0) 100%),url(${image}) no-repeat`;
                            e.target.style.width="100%"
                            e.target.style.height="100%";
                            e.target.style.backgroundSize="cover";

                          }}
                          onMouseLeave={(e)=>{
                            e.target.style.background=` #DDDDDD url(${image}) no-repeat`
                            e.target.style.width="100%"
                            e.target.style.height="100%";
                            e.target.style.backgroundSize="cover";
                          }}                          
                        ></div>
                  </div>
              })}
            
            </Slider>
        </NavLink>
        
        <div className="absolute  top-[30%] w-full hidden group-hover:inline-block">
            <div className="flex flex-row relative items-center justify-between w-[90%] mx-auto">
              <div className="bg-white rounded-full flex flex-row justify-center items-center p-2 h-[21px] w-[21px] " onClick={gotoPrev} >
                <img className="w-[4px] h-[8px]" src={require('../assets/posts/leftArrow.png')}/>
              </div>
              <div className="bg-white rounded-full flex flex-row justify-center items-center p-2 h-[21px] w-[21px]"  onClick={gotoNext} >
                  <img className="w-[4px] h-[8px]" src={require('../assets/posts/rightArrow.png')}/>
              </div>
            </div>
        </div>

        <img src={Favorite} className="w-6 absolute top-8 right-2"/>
        <div className="relative top-3 text-black">
          <h1 className="text-base-bold">Upper Portion For Rent</h1>
          <p className="text-smallBold text-secondaryWeb">Bahria Town, Phase-1,  Islamabad</p>
          <h1 className="text-subTitle text-[22px] text-primaryWeb mt-1">PKR 12 Lac</h1>
          
          <div className="flex flex-row items-center gap-[16px] mt-2">
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
        </div>

       </div>
       )
}

export default Post