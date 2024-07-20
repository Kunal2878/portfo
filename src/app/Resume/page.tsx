import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar/page'
function Resume() {
  return (
<div className='static w-full flex  flex-col bg-red-200 min-h-screen '>
<div className="w-full sticky top-0"><Navbar/></div>

<div className='w-full flex flex-row justify-center items-center text-black font-black text-3xl mt-10 mb-10 '> <span className='size-4 bg-blue-600 mr-3'></span> Resume</div>

<div className='w-full  flex flex-row justify-center items-center'>

    <iframe src={"/Resume_remote.pdf"}  className='w-3/4 h-[800px] flex flex-row justify-center items-center  ' />



</div>
    </div>
  )
}

export default Resume
