import React from 'react'
import Image from 'next/image'
import type { Metadata } from "next";
import Navbar from '../Navbar/page'
export const metadata: Metadata = {
  title: "Contact",

};

function Contact() {
  return (
    <div className='w-full static flex flex-col  items-center bg-red-200 h-screen'>
       <div className="w-full sticky top-0"><Navbar/></div>
<div className='w-full flex flex-col justify-center items-center '>



    <div className='w-full flex flex-row justify-center items-center text-black font-black text-3xl mt-16 mb-10 '> <span className='size-4 bg-blue-600 mr-3'></span> Contact
    
    </div>
    <div className='w-full flex flex-col lg:flex-row justify-center items-center '>
    

    <div className='lg:w-1/4 w-2/3 flex flex-col justify-center items-center p-4 bg-white rounded-md font-black text-black mr-3  mb-8 lg:mb-0'>
    <div className='w-full flex flex-row justify-center items-center'>
<Image
src={'/email.svg'}
width={10}
height={10}
alt="Loading"
className="size-4 mr-3"
/>


<span className=' font-bold'>Write</span>

    </div>
<span className='w-full flex flex-row justify-center items-center text-[14px] font-light'>kunaladvanceit2001@gmail.com</span>
    </div>
    <div className='lg:w-1/4 w-2/3 flex flex-col justify-center items-center p-4 bg-white rounded-md font-black text-black mr-3'>
    <div className='w-full flex flex-row justify-center items-center'>
<Image
src={'/phone.svg'}
width={10}
height={10}
alt="Loading"
className="size-4 mr-3"
/>


<span className=' font-bold'>Call</span>

    </div>
<span className='w-full flex flex-row justify-center items-center font-light text-[15px]'>+916002342024</span>
    </div>

    </div>
    </div>
    </div>
  )
}

export default Contact
