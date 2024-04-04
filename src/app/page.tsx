import Clients from "@/components/Clients";
import Info from "@/components/Info";
import Nav from "@/components/Nav";
import Safate from "@/components/Safate";
import Showcase from "@/components/Showcase";
import Image from "next/image";

export default function Home() {
  return (
   
    <main>

      {/*  nav and  show */}
      <div className="w-full h-[410px]
      md:h-[550px] bg-gradient-to-r from-indigo-400 via-sky-300 to-purple-300 
      rounded-bl-[100px]">

        <Nav/>
        <Showcase/>
      </div>
      <div>

        <Info/>

        <Clients/>
        <Safate/>
      
      </div>
    </main>
  );
}
