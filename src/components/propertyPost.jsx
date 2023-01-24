import React from 'react'
import Post from './post'
import HouseOne from '../assets/baksh/House-1.png';
import HouseTwo from '../assets/baksh/House-2.png';
import HouseThree from '../assets/baksh/House-3.png';
import HouseFour from '../assets/baksh/House-4.png';
import HouseFive from '../assets/baksh/House-5.png';
import HouseSix from '../assets/baksh/House-6.png';
import HouseSeven from '../assets/baksh/House-7.png';
import HouseEight from '../assets/baksh/House-8.png';
import HouseNine from '../assets/baksh/House-9.png';
import HouseTen from  '../assets/baksh/House-10.png';
import HouseEleven from '../assets/baksh/House-11.png';
import HouseTewelve from  '../assets/baksh/House-12.png'

const PropertyPost = () => {
  const images=
  [
    "../assets/baksh/House-1.png",
    "../assets/baksh/House-2.png",
    "../assets/baksh/House-3.png",
    "../assets/baksh/House-4.png",
    "../assets/baksh/House-5.png",
    "../assets/baksh/House-6.png",
    "../assets/baksh/House-7.png",
    "../assets/baksh/House-8.png",
    "../assets/baksh/House-9.png",
    "../assets/baksh/House - 10.png",
    "../assets/baksh/House-11.png",
    "../assets/baksh/House -12.png"
  ]
  return (<div className='flex flex-col   w-full mt-6'>

     <h1 className='text-small text-[#717171]'>Over <span className='text-smallBold'>(1000+)</span> homes within map area</h1>
    <div className='grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb:grid-cols-1  mt-4 w-full  gap-5 '>
        <Post images={[HouseOne,HouseTwo,HouseThree,HouseFour,HouseFive,HouseSix]} />
        <Post images={[HouseTwo,HouseThree,HouseFour,HouseFive,HouseSix,HouseSeven]} />
        <Post images={[HouseThree,HouseFour,HouseFive,HouseSix,HouseSeven,HouseEight]} />
        <Post images={[HouseFour,HouseFive,HouseSix,HouseSeven,HouseEight,HouseNine]} />
        <Post images={[HouseFive,HouseSix,HouseSeven,HouseEight,HouseNine,HouseTen]} />
        <Post images={[HouseSix,HouseSeven,HouseEight,HouseNine,HouseTen,HouseEleven]} />
        <Post images={[HouseSeven,HouseEight,HouseNine,HouseTen,HouseEleven,HouseTewelve]} />
        <Post images={[HouseEight,HouseNine,HouseTen,HouseEleven,HouseTewelve,HouseFour]} />
        <Post images={[HouseNine,HouseTen,HouseEleven,HouseTewelve,HouseTen,HouseEleven,]} />
        <Post images={[HouseTen,HouseEleven,HouseTewelve,HouseTen,HouseEleven,HouseTewelve]} />
        <Post images={[HouseEleven,HouseTewelve,HouseTen,HouseEleven,HouseTewelve,HouseEight]} />
        <Post images={[HouseTewelve,HouseTen,HouseEleven,HouseTewelve,HouseEleven,HouseTewelve]} />


    </div>
  </div>)
}

export default PropertyPost