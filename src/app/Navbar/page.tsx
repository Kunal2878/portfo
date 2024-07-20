import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div className='w-full flex flex-row justify-between items-center bg-white text-black'>
        <div className='w-2/5 text-[12px] md:text-[16px] flex flex-row justify-center p-2 md:p-4 items-center font-bold'> <span className='size-3 flex flex-row justify-center items-center mr-2  bg-blue-600 '></span> Kunal Paul /<span className='ml-3 md:text-[14px] text-[12px] font-light'>SOFTWARE DEVELOPER</span> </div>
      <div className='w-3/5 flex flex-row justify-end text-[12px]'>
      <span className='cursor-pointer text-black hover:text-blue-600  mr-3'>ABOUT ME</span>
      <span className='cursor-pointer text-black hover:text-blue-600 mr-3'>RESUME</span>
      <Link href="/projeects" className='cursor-pointer text-black hover:text-blue-600 mr-3'>PROJECTS</Link>
      <span className='cursor-pointer text-black hover:text-blue-600 mr-3'>CONTACT</span>
      
      </div>
    </div>
  )
}

export default Navbar
