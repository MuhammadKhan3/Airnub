import React, { useEffect } from 'react'
import {MdHomeWork} from 'react-icons/md' 
import Slider from "react-slick";
import {GoChevronRight} from 'react-icons/go'
import {GoChevronLeft} from 'react-icons/go'
import {FiFilter} from 'react-icons/fi'
import PerfectScrollbar from 'react-perfect-scrollbar'

const NavigationMenu = () => {
  const [scrollPosition, setPosition] = React.useState(0);
  const customeSlider=React.createRef();
  const settings = {
    dots: false,
    infinite:false,
    arrows:true,
    speed: 500,
    cssEase:'linear',
    slidesToShow: 12 ,
    slidesToScroll: 10,
  };

      const gotoNext = () => {
        setPosition(scrollPosition+20)
        console.log(customeSlider.current);
        customeSlider.current.slickNext()
      }
    
      const gotoPrev = () => {
        setPosition(scrollPosition-20)
        customeSlider.current.slickPrev()
      }

      console.log(scrollPosition)
  return (<section className='flex  flex-row border-b-[1px]  items-center relative space-x-2'>
    {scrollPosition>0 &&
        <div onClick={gotoPrev} className=" cursor-pointer  border w-fit rounded-full h-fit hover:shadow-xl active:scale-105 p-1">
                <GoChevronLeft size='25'/>
        </div>
     }
    <div className='mt-3   overflow-hidden h-auto w-[85vw] '>

      <div>

      <Slider {...settings} className='h-full scroll-smooth' ref={customeSlider} id="scrollDemo" s>
          <div className='flex flex-col content-center   items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit    transition-all hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16 after:relative after:left-10 after:top-0 after:border-r-[1px]  after:pt-10 after:border-gray-600'>
                  <MdHomeWork  className='text-2xl mx-auto '/>
                  <span className='text-sm'>All homes</span>
          </div>
          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>

          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>

          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>



          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>



          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>




          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>

          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>



          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>

          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>



          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>

          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>



          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>


          <div className='flex flex-col content-center  items-center text-gray-500 hover:text-gray-800  cursor-pointer justify-center    !w-fit   transition-all   hover:underline decoration-gray-300 decoration-4   underline-offset-[18px] h-16'>
                  <MdHomeWork  className='text-2xl mx-auto'/>
                  <span className='text-sm'>Countryside</span>
          </div>



      </Slider>
      </div>
    </div>
    {scrollPosition<40 &&
        <div onClick={gotoNext} className="cursor-pointer border w-fit rounded-full h-fit hover:shadow-xl active:scale-105 p-1">
                        <GoChevronRight size='25'/>
        </div>
    }
    <div className='flex flex-row cursor-pointer items-center p-3 rounded-lg border-[1px] space-x-1  relative left-5'>
                <FiFilter size="19"/>
                <span className='text-lg'>Filters</span>
    </div>
    
    </section>)
}

export default NavigationMenu