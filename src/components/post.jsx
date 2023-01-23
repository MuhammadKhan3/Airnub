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
  return (<div className="group relative h-[378px] w-full     cursor-pointer group">
    <Slider ref={customeSlider} {...settings} className="h-[245px] group-hover:outline group-hover:outline-primaryWeb group-hover:outline-offset-2 group-hover:outline-2 rounded-[15px] overflow-hidden w-full !p-0 relative " >
    {/* w-[270px] */}
    {/* https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80 */}
        <div className="h-[245px] w-full rounded-[15px] overflow-hidden "  >
              <div  
                 className="bg-[url(https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)]   bg-contain bg-no-repeat h-[100vh] bg-gradient-to-br from-[rgba(196, 154, 80, 0.28)] to-[rgba(217, 217, 217)]  "
               ></div>
        </div>
        <div className="h-[245px] w-full rounded-[15px] overflow-hidden">
              <div  
              // style={{backgroundColor:'#DDDDDD',  backgroundRepeat: 'no-repeat',backgroundSize:'contain', backgroundImage:"url(https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",height:'100vh'}} 
              className="bg-[url(https://images.unsplash.com/photo-1674245926388-1fbb62063114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)] bg-[#DDDDDD] bg-contain bg-no-repeat h-[100vh] "
               ></div>
        </div>

        <div className="h-[245px] w-full rounded-[15px] overflow-hidden">
              <div  
              // style={{backgroundColor:'#DDDDDD',  backgroundRepeat: 'no-repeat',backgroundSize:'contain', backgroundImage:"url(https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",height:'100vh'}} 
              className="bg-[url(https://images.unsplash.com/photo-1674340775631-0a60b21ec466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)] bg-[#DDDDDD] bg-contain bg-no-repeat h-[100vh] "
               ></div>
        </div>


        <div className="h-[245px] w-full rounded-[15px] overflow-hidden">
              <div  
              // style={{backgroundColor:'#DDDDDD',  backgroundRepeat: 'no-repeat',backgroundSize:'contain', backgroundImage:"url(https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",height:'100vh'}} 
              className="bg-[url(https://images.unsplash.com/photo-1674316347515-a9b35630f1aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)] bg-[#DDDDDD] bg-contain bg-no-repeat h-[100vh] "
               ></div>
        </div>


        <div className="h-[245px] w-full rounded-[15px] overflow-hidden">
              <div  
              // style={{backgroundColor:'#DDDDDD',  backgroundRepeat: 'no-repeat',backgroundSize:'contain', backgroundImage:"url(https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",height:'100vh'}} 
              className="bg-[url(https://images.unsplash.com/photo-1674396661451-83686947efdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)] bg-[#DDDDDD] bg-contain bg-no-repeat h-[100vh] "
               ></div>
        </div>


        <div className="h-[245px] w-full rounded-[15px] overflow-hidden">
              <div  
              // style={{backgroundColor:'#DDDDDD',  backgroundRepeat: 'no-repeat',backgroundSize:'contain', backgroundImage:"url(https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",height:'100vh'}} 
              className="bg-[url(https://images.unsplash.com/photo-1674413332524-2105d41d9970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)] bg-[#DDDDDD] bg-contain bg-no-repeat h-[100vh] "
               ></div>
        </div>
        {/* <div> */}
          {/* <div className="w-full h-full object-cover bg-[url('https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-no-repeat bg-origin-border bg-cover	bg-[#DDDDDD]"  /> */}
        {/* </div> */}
          {/* <div className=" h-64 w-full ">
            <img src={require('../assets/posts/3.jpg')} className="h-full w-full object-cover"/>
          </div> */}
          {/*          <div className=" h-64 w-full ">
            <img src={require('../assets/posts/4.jpg')} className="h-full w-full object-cover"/>
          </div>
          <div className=" h-64 w-full ">
            <img src={require('../assets/posts/4.jpg')} className="h-full w-full object-cover"/>
          </div>
          <div className=" h-64 w-full ">
            <img src={require('../assets/posts/2.jpg')} className="h-full w-full object-cover"/>
          </div> */}
        </Slider>
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

        <img src={Favorite} className="w-6 absolute top-8 right-8"/>
        <div className="relative top-3 text-black">
          <h1 className="text-base-bold">Upper Portion For Rent</h1>
          <p className="text-smallBold text-secondaryWeb">Bahria Town, Phase-1,  Islamabad</p>
          <h1 className="text-subTitle text-[22px] text-primaryWeb mt-1">PKR 12 Lac</h1>
          
          <div className="flex flex-row items-center gap-[16px] mt-1">
            <div className="flex flex-row items-center gap-1">
               <img src={Bed} className="w-[18.34px] h-[18.34px]"/>
               <h1 className="text-base2 text-secondaryWeb">5</h1>
            </div>
            <div className="flex flex-row items-center gap-1">
               <img src={Bath} className="w-[18.34px] h-[18.34px]"/>
               <h1 className="text-base2 text-secondaryWeb">6</h1>
            </div>
            <div className="flex flex-row items-center gap-1">
               <img src={Area} className="w-[18.34px] h-[18.34px]"/>
               <h1 className="text-base2 text-secondaryWeb">1 Kanal</h1>
            </div>
          </div>
        </div>

       </div>)
}

export default Post