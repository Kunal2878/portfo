import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function LandingPage() {

  return (
    <div className='w-full flex flex-col  min-h-screen overfow-x-hidden'>
      <div className="w-full relative flex flex-row justify-center items-center">
        <div className='static w-full flex flex-row justify-center items-center'>
          <div className='w-full lg:w-1/2 h-screen bg-red-200'>

          </div>
          <div className='w-1/2 h-screen bg-white flex flex-row justify-center items-center'>

            <div className='w-full flex flex-col justify-center '>
              <span className="w-full flex flex-row justify-center  text-8xl font-black text-black mb-4">Hello</span>
              <span className="w-full flex flex-row justify-center  text-xl font-semibold text-black mb-4">I am a passionate software developer</span>
              <div className="w-full flex flex-row justify-center   mb-3">
                <Link href="/Resume" className="w-40 h-12 flex flex-row justify-center items-center rounded-full bg-blue-600 text-white mr-3">RESUME</Link>
                <Link href = "/projects" className="w-40 h-12 flex flex-row justify-center items-center rounded-full bg-white text-black border-2 border-black hover:bg-blue-600 hover:text-white font-light">PROJECTS</Link>
              </div>
<div className="w-11/12 ml-10 flex flex-row justify-center items-center text-sm text-gray-500 p-8">

I am a versatile full-stack web developer specializing in modern JavaScript metaframeworks (Next.js, Nuxt.js) and cloud-native applications. Expert in building dynamic web solutions using Angular.js, React.js, and TypeScript, with robust database skills spanning NoSQL and SQL environments. Proficient in DevOps practices including CI/CD pipelines, Docker, and Kubernetes. Skilled in cloud technologies (AWS, Supabase), authentication systems, and API integration, with a proven track record of developing innovative, secure, and high-performance web applications.

</div>


            </div>

          </div>
        </div>

        <div className=" absolute top-1/6 mt-4 left-1/4 w-full md:w-80 h-120 flex bg-red-100 flex-col rounded-md shadow-md shadow-gray-600">
          {/* <div className="w-full h-20 bg-amber-100 border-1 border-b-gray-600 border-amber-100 "></div> */}

          <div className='w-full h-80 flex flex-col justify-center items-center'>
            <Image
              unoptimized={true}
              src={"/dp_remote.png"}
              width={10}
              height={10}
              alt='Loading'
              className='size-40 md:size-40  rounded-full my-4'
            />
            <h2 className="w-full flex flex-row justify-center items-center text-black font-bold text-[20px] mb-3">Kunal Paul</h2>
            <span className='w-20 h-[2px] bg-blue-600 mb-3'></span>
            <span className="w-full flex flex-row justify-center items-center font-light text-black ">
              SOFTWARE DEVELOPER </span>

          </div>

          <div className="w-full h-16 flex flex-row justify-center items-center p-4 bg-white">
<Link
href="/"
>
            <Image
              src={"/facebook.svg"}
              width={10}
              height={10}
              alt = "Loading"
              className="size-12 mr-2"
            />
</Link>

<Link
href="/"
>
            <Image
              src={"/twitter.svg"}
              width={10}
              height={10}
              alt = "Loading"
              className="size-12 mr-2"
            />
</Link>

<Link
href="https://www.linkedin.com/in/kunal-paul-2085b02/"
>
            <Image
              src={"/linkedin.svg"}
              width={10}
              height={10}
              alt = "Loading"
              className="size-12 mr-2"
            />
</Link>

<Link
href="https://github.com/Kunal2878/"
>
            <Image
              src={"/github.svg"}
              width={10}
              height={10}
              alt = "Loading"
              className="size-10 mr-2"
            />
</Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default LandingPage
