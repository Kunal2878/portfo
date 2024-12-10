import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar/page'
import type { Metadata } from "next";
import Link from 'next/link'
export const metadata: Metadata = {
  title: "Projects",
};
function Projects() {
          const info =[

              {
                name:"TalkToGPT", desc:"TalkToGPT, an innovative web-based AI chat application that leverages the power of the Gemini API to provide an intuitive and interactive conversational experience. Built using Angular.js and styled with Tailwind CSS and AWS(Amazon Web Services), the application offers users a seamless platform for engaging with advanced AI-driven conversations.",img:"/talk-to-gpt.png", link:"https://talk-to-gpt-web.vercel.app/"

              },
              {
                name:"SmartChat", desc:"SmartChat, a robust chat app built with Next.js, integrating Supabase for data storage and PostgreSQL for efficient querying. It features secure authentication with Supabase AuthJS and real-time communication using Socket.IO and PusherJS, showcasing expertise in full-stack development, real-time data management, and modern web app security.",img:"/smartchat.jpeg", link:"https://smartchatweb.vercel.app/"

              },

              {
                name:"MovFlix", desc:"MovFlixWeb, a dynamic Next.js web app offering a comprehensive platform for exploring movies, anime, and manga via open-source APIs. It features multi-category support, intuitive search functionalities, and visually appealing, responsive design for seamless exploration and content discovery",img:"/movflix.jpeg",link:" https://movflixweb.vercel.app/"
              },

              
              {
                name:"Shopsmart", desc:"Shopsmart, an e-commerce site developed with Nuxt.js, MongoDB Atlas, and Mongoose ODM for robust data management. Authentication is handled securely via Lucia Auth. Using Pinia ensures streamlined data management, enhancing performance and scalability. The project demonstrates expertise in full-stack development, secure authentication, and efficient e-commerce data handling",img:"/shopsmart.jpeg",
                link:"https://shopsmartweb.vercel.app/"

              },
          ]
        return ( 
<div className='static w-full flex justify-center items-center flex-col bg-red-200 min-h-screen '>
<div className="w-full sticky top-0"><Navbar/></div>
<div className='w-full h-full flex justify-center items-center flex-col p-2 '>


<div className='w-full flex flex-row justify-center items-center text-black font-black text-3xl mt-10 mb-10 '> <span className='size-4 bg-blue-600 mr-3'></span> Projects</div>
              {

              info.map((itr,index)=>(


            <div key ={index} className='w-full lg:w-1/2 h-[340px] lg:h-[400px] flex flex-row justify-center items-center mb-10 rounded-md shadow-md shadow-gray-600'>
            <div className='w-1/2 h-[340px] lg:h-[400px] text-black  bg-white flex flex-col  pt-8'>

<div className='w-full flex flex-row justify-start'>
<span className='w-3 h-10 left-0 bg-blue-600 mr-8'></span>
<div className='text-[20px] text-blue-600 font-bold'>{itr.name}</div>
</div>
<div className="w-full flex flex-row justify-start p-6 text-[9px] lg:text-[12px]">{itr.desc}</div>
            </div>

           <Link className="w-1/2 h-[340px] lg:h-[400px]" 
           href={itr.link}
           
           >
<Image
unoptimized={true}
src={itr.img}
width={10}
height={10}
alt="loading"
className="w-full h-[340px] lg:h-[400px] "
/>

           </Link>
      
            </div>
              ))

              }
              </div>
          </div>
        )
}

export default Projects
