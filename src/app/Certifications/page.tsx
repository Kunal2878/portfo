import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar/page'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Certifications",

};

function Certificates() {

  const Num = [
    { num: 1 }, { num: 2 }, { num: 3 },{ num: 4}, { num: 5},{ num: 6},{ num: 7},{ num: 8}
  ]

  const certificates = [{name:"/Cdac_internship.pdf"},{name:"/Nielit_cerificate.pdf"},{name:"/freeCodeCamp_DSA.pdf"},{name:"/freeCodeCamp_Web.pdf"},{name:"/SIH_2022.pdf"},{name:"/NCSC_State.pdf"}, {name:"/NCSC_DISTRICT_2016.pdf"},{name:"/NCSC_2015_District.pdf"},]
  return (
    <div className='static w-full flex  flex-col bg-red-200 min-h-screen '>
      <div className="w-full sticky top-0"><Navbar /></div>

<div className=' static w-full flex  flex-col'>
<div className='sticky top-12 bg-red-200  w-full flex  flex-col justify-center items-center'>

      <div className='  w-full  flex flex-row justify-center items-center text-black font-black text-3xl mt-10 mb-10 '> <span className='size-4 bg-blue-600 mr-3'></span> Certificates</div>
{/* 
      <div className='w-full flex flex-row justify-center mb-4 '>
        {Num.map((itr, index) => (
          <div key={index} className=' rounded-full mr-3 size-6 md:size-8 flex flex-row justify-center items-center bg-white text-black border-2 border-black'>
            {itr.num}
          </div>
        ))}
      </div> */}
</div>
<div className='w-full flex flex-col justify-center items-center'>
  {
    certificates.map((itr,index)=>(

      <div  key ={index} className='w-full  flex flex-row justify-center items-center p-4'>
        <iframe src={itr.name} className='md:w-3/4 md:h-[800px] w-full h-screen flex flex-row justify-center items-center  ' />
      </div>
    ))
  }


</div>
</div>


    </div>
  )
}

export default Certificates
