"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/Tabs";
import albarka from "../../public/image/albaraka.png";
import almadiina from "../../public/image/almadiina.png"

function TabsDemo() {
  const tabs = [
    {
      title: "E-commerce",
      value: "product",
      content: (
        <div
          className="w-96 md:w-full px-20  overflow-hidden relative 
        md:h-full h-[300px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-purple-900
        "
        >
          <p>Al barka</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Developer",
      value: "services",
      content: (
        <div className="w-96 md:w-full px-20  overflow-hidden relative 
        md:h-full h-[300px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-purple-900">
          <p>Al madina Clothes</p>
         <Almadiina/>
        </div>
      ),
    },
    {
      title: "Design",
      value: "playground",
      content: (
        <div className="w-96 md:w-full px-20  overflow-hidden relative 
        md:h-full h-[300px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-purple-900">
          <p>Madiina</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "AI",
      value: "random",
      content: (
        <div className="w-96 md:w-full px-20  overflow-hidden relative 
        md:h-full h-[300px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-purple-900">
          <p>Random tab</p>
          <div className="my-5">
            <DummyContent />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src={albarka}
      alt="dummy image"
      width="1000"
      height="1000"
      className="cover object-left-top h-[60%] w-77 md:h-[70%] absolute  inset-x-0 w-[90%] rounded-xl mx-auto
      my-5"
    />
  );
};
const Almadiina = () => {
  return (
    <Image
      src={almadiina}
      alt="dummy image"
      width="1000"
      height="1000"
      className="cover object-left-top h-[60%] w-77 md:h-[70%] absolute  inset-x-0 w-[90%] rounded-xl mx-auto
      my-5"
    />
  );
};

export default TabsDemo;
