import {AiOutlineSearch} from 'react-icons/ai'

const Filter=()=>{
    return<div className="border-[1px] flex flex-row items-center p-1 rounded-full cursor-pointer hover:shadow-lg font-thin">
      <div className="flex flex-row p-2 divide-x-[1px] space-x-2">
        <div className="px-2">
            Map Area
        </div>
        <div className="px-2">
            10-11Jan
        </div>
        <div className="px-2">
            2 guest
        </div>

       </div>
       <div className='bg-red-500 bg-opacity-900 text-white p-2 rounded-full'>
         <AiOutlineSearch className='text-lg '/>
       </div>
    </div>
}
export default Filter;