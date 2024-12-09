import Image from "next/image";
import LandingPage from "./Landing_page/page";
import LandingPageMob from "./kunal-paul/page";
import Navbar from "./Navbar/page";
export default function Home() {
  return (
    <div className="static flex min-h-screen flex-col items-center justify-between">
      <div className="w-full sticky top-0 z-10"><Navbar/> </div>

      <div className="w-full hidden items-center  font-mono text-sm lg:flex">
      <LandingPage/>
      
      </div>
      <div className="w-full items-center  font-mono text-sm flex lg:hidden">
      <LandingPageMob/>
      
      </div>


  



    </div>
  );
}
