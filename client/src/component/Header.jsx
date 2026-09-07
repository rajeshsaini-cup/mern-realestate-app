
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
  
      <header  className='bg-gray-100 shadow-md flex items-center justify-between h-15 px-5 md:px-10'>
<Link to='/'>
 <div className='text-xs sm:text-2xl'>
       <span className='text-red-600  ' >Braj-raj</span>
<span className='text-gray-600 '>Properties</span>
 </div>
 </Link>

<div className='bg-blue-100 rounded-2xl flex items-center '>
    <input type="text" placeholder='Search....' className='w-15 sm:w-40  focus:outline-none bg-transparent'  />
    <FaSearch className='bg-blue-100 text-gray-500 flex justify-center items-center rounded-2xl'/>
</div>
<div>
    <ul className='flex gap-10' >

        <Link to='/'>
        <li className='hidden sm:inline text-gray-600 hover:underline hover:text-black '>Home</li>
        </Link>

<Link to='/about'>
        <li className='hidden sm:inline text-gray-600 hover:underline  hover:text-black '>About</li>
        </Link>

        <Link to='/signin'>
        <li className=' text-gray-600 hover:underline  hover:text-black '>Sign In</li>
</Link>

    </ul>
</div>
    </header>

  )
}

export default Header