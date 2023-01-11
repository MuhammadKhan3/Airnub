import React, { Component, useState } from "react";
import Slider from "react-slick";
import {GoChevronRight} from 'react-icons/go'
import {GoChevronLeft} from 'react-icons/go'
import {AiOutlineHeart} from 'react-icons/ai'
const Post = () => {
    const customeSlider=React.createRef();
    const [next,setnext]=useState(1);
    const [item,setitem]=useState([1,2,3,4,5,6]);
    const gotoNext = () => {
        setnext(next+1);
      customeSlider.current.slickNext()
    }
  
    const gotoPrev = () => {
        setnext(next-1);
      customeSlider.current.slickPrev()
    }

    const settings = {
        dots: true,
        speed: 500,
        infinite:false,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,

      };
      console.log(next)
      console.log(next<=item.length)
  return (<div className="group relative  w- cursor-pointer">
{/* Previos action */}

 
{/* Next Action */}
    <Slider {...settings} className="w-68 h-5 !p-0" ref={customeSlider}>
          <div className=" h-64 w-64  overflow-hidden rounded-lg">
            <img src={require('../assets/posts/2.jpg')} className="h-full w-full object-cover"/>
            
          </div>
          <div className=" h-64 w-full overflow-hidden rounded-lg">
            <img src={require('../assets/posts/3.jpg')} className="h-full w-full object-cover"/>
          </div>
          <div className=" h-64 w-full overflow-hidden rounded-lg">
            <img src={require('../assets/posts/4.jpg')} className="h-full w-full object-cover"/>
          </div>
          <div className=" h-64 w-full overflow-hidden rounded-lg">
            <img src={require('../assets/posts/4.jpg')} className="h-full w-full object-cover"/>
          </div>
          <div className=" h-64 w-full overflow-hidden rounded-lg">
            <img src={require('../assets/posts/2.jpg')} className="h-full w-full object-cover"/>
          </div>
        </Slider>
        <div className="relative  bg-black z-10 bg-opacity-40 !w-fit flex items-center  justify-end    text-white ml-56 ">
           <AiOutlineHeart size='22' className="text-current"/>
        </div>
        <div className="relative  my-auto flex  items-center  top-14 justify-between">
              {next>1 &&
              <div onClick={gotoPrev} className=" bg-white hover:inline hover:bg-gray-50 hover:scale-105  transition-all ml-1 !float-left   cursor-pointer hidden group-hover:inline  border w-fit rounded-full h-fit hover:shadow-xl active:scale-105 p-1">
                      <GoChevronLeft size='25'/>
              </div>
            }
            {next<=item.length &&
              <div onClick={gotoNext} className="bg-white hover:inline   hover:bg-gray-50 hover:scale-105  transition-all  !float-right   hidden  cursor-pointer border w-fit rounded-full h-fit hover:shadow-xl active:scale-105 p-1">
                              <GoChevronRight size='25'/>
              </div>
            }
        </div>
    </div>)
}

export default Post