import React from 'react'
import Image from 'next/image'
function Projects() {
    const info =[

        {name:"SmartChat", desc:"SmartChat is a robust chat app built with Next.js, integrating Supabase for data storage and PostgreSQL for efficient querying. It features secure authentication with Supabase AuthJS and real-time communication using Socket.IO and PusherJS, showcasing expertise in full-stack development, real-time data management, and modern web app security.",img:"/dp_remote.png"},

        {name:"MovFlix", desc:"MovFlixWeb is a dynamic Next.js web app offering a comprehensive platform for exploring movies, anime, and manga via open-source APIs. It features multi-category support, intuitive search functionalities, and visually appealing, responsive design for seamless exploration and content discovery",img:"/dp_remote.png"},
        {name:"Shopsmart", desc:"Shopsmart is an e-commerce site developed with Next.js, MongoDB Atlas, and Mongoose ODM for robust data management. Authentication is handled securely via Lucia Auth. Using Pinia ensures streamlined data management, enhancing performance and scalability. The project demonstrates expertise in full-stack development, secure authentication, and efficient e-commerce data handling",img:"/dp_remote.png"},
    ]
  return (
    <div className='w-full flex flex-col bg-red-200 min-h-screen overfow-x-hidden'>
        {

        info.map((itr,index)=>(


      <div className='w-1/2 h-150 flex flex-row justify-center items-center'>
      <div className='w-1/2 flex flex-col '>

<div className='w-full flex flex-row justify-start'>
<span className='w-4 h-6 left-0 bg-blue-600 mr-8'></span>
<div className='text-[20px] text-blue-600 font-bold'>{itr.name}</div>
</div>
<div className="w-full flex flex-row justify-start p-4">{itr.desc}</div>
      </div>

     <div className="w-1/2 h-full" >
<Image
src={itr.img}
width={10}
height={10}
alt="loading"
className="object-cover"
/>

     </div>
      
      </div>
        ))

        }
    </div>
  )
}

export default Projects
