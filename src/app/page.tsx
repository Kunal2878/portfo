import Image from "next/image";
import LandingPage from "./Landing_page/page";
import Navbar from "./Navbar/page";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar/>
      <div className="z-10 w-full items-center  font-mono text-sm lg:flex">
      <LandingPage/>
      
      </div>


  



    </div>
  );
}
