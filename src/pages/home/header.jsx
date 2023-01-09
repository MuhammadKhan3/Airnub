import Filter from '../../components/filter';
import {IoPersonCircle} from 'react-icons/io5'
import {FiMenu} from 'react-icons/fi'
import {FiGlobe} from 'react-icons/fi'
const Header=()=>{

return(<div className="flex items-center justify-between px-10 border-b-[1px]">
    <div>
        <img src={require('../../assets/posts/logo.jpg')} className="w-24"/>
    </div>
    <div>
        <Filter/>
    </div>
    <div className='flex flex-row items-center space-x-2'>
        <div className='hover:bg-gray-100 p-3 flex justify-center items-center rounded-full cursor-pointer'>
            <h1>Airbnb your home</h1>
        </div>
        <div className='hover:bg-gray-100 p-3 flex justify-center items-center rounded-full cursor-pointer' >
          <FiGlobe className="text-xl inline  text-gray-600"/>
        </div>
        {/* Avatar Menu */}
        <div className="dropdown dropdown-end">
            <label tabIndex={0}  className="">
                <div className="  border-[1px]  w-auto h-fit text-gray-500 flex flex-row items-center rounded-3xl p-1 shadow-black hover:shadow-lg  cursor-pointer transition-all space-x-1 justify-around ">     
                    <FiMenu className="text-2xl inline  text-gray-600"/>
                    <IoPersonCircle  className='text-4xl inline text-gray-600' />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-64">
             <div className='py-2'>
                <li>
                <a className="justify-between">
                    Signup
                </a>
                </li>
                <li><a>Login</a></li>
                <hr/>
                <li><a>Airnub Your home</a></li>
                <li><a>Host a Experience</a></li>
                <li><a>Help</a></li>
              </div>
            </ul>
        </div>
        {/* Close Avatar Menu */}
    </div>

</div>
);
}
export default Header;