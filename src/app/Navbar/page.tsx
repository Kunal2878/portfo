import React from 'react'
import Link from 'next/link'
import Menu from '../mob_sidebar'
function Navbar() {
  return (
    <div className='w-full flex flex-row justify-between items-center bg-white text-black'>
      
      
        <div className=' w-3/5 md:2/5 text-[10px] md:text-[16px] flex flex-row justify-start md:justify-center p-2 md:p-4 items-center font-bold'> <span className='size-3 flex flex-row justify-center items-center mr-2  bg-blue-600 '></span> Kunal Paul /<span className='ml-3 md:text-[14px] text-[8px] font-light'>SOFTWARE DEVELOPER</span> 
        </div>
<div className="w-2/5 lg:hidden">

  <Menu/>
  </div>


      <div className=' hidden w-3/5 lg:flex flex-row justify-end text-[12px]'>
      <Link href='/'  className='cursor-pointer text-black hover:text-blue-600  mr-3 border-2 border-white hover:border-b-blue-600'>ABOUT ME</Link>
      <Link href='/Resume' className='cursor-pointer text-black hover:text-blue-600 mr-3  border-2 border-white hover:border-b-blue-600'>RESUME</Link>
      <Link href="/Projects" className='cursor-pointer text-black hover:text-blue-600 mr-3  border-2 border-white hover:border-b-blue-600'>PROJECTS</Link>
      <Link href='/Contact' className='cursor-pointer text-black hover:text-blue-600 mr-3  border-2 border-white hover:border-b-blue-600'>CONTACT</Link>
      <Link href='/Certifications' className='cursor-pointer text-black hover:text-blue-600 mr-3  border-2 border-white hover:border-b-blue-600'>CERTIFICATIONS</Link>
      
      </div>
    </div>
  )
}

export default Navbar
