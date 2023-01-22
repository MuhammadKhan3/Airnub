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
  return (<div className="group relative h-[378px] w-[280px]     cursor-pointer group">
    <Slider ref={customeSlider} {...settings} className="h-[245px] group-hover:outline group-hover:outline-primaryWeb group-hover:outline-offset-2 group-hover:outline-2 rounded-[15px] overflow-hidden w-[270px] !p-0 relative " >
       
          
    {/* https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80 */}
        <div className="h-[245px] w-[270px] rounded-[15px] overflow-hidden">
              <div  
              // style={{backgroundColor:'#DDDDDD',  backgroundRepeat: 'no-repeat',backgroundSize:'contain', backgroundImage:"url(https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",height:'100vh'}} 
              className="bg-[url(https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)] bg-[#DDDDDD] bg-contain bg-no-repeat h-[100vh] "
               ></div>
        </div>
        <div className="h-[245px] w-[270px] rounded-[15px] overflow-hidden">
              <div className="bg-primaryWeb w-full h-full object-cover" style={{backgroundImage:"url(https://images.unsplash.com/photo-1674354419830-fe4ac561f651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"}}></div>
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
          <h1 className="text-subTitle text-primaryWeb">PKR 12 Lac</h1>
          
          <div className="flex flex-row items-center gap-5">
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