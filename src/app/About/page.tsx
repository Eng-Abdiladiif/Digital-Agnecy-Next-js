"use client"

import Nav from '@/components/Nav'
import React, { useEffect } from "react";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import Image from "next/image";
import img from "../../../public/image/showcase.png";
import web from "../../../public/image/web-design (1).png";
import code from "../../../public/image/code (3).png";
import social from "../../../public/image/social-media (3).png";
import  Aos from "aos"
import   "aos/dist/aos.css"
import Tools from '@/components/Tools';

function page() {
    useEffect(() => {

        Aos.init({duration:3000})
      })
  return (
    <>
    <div>
        <Nav/>
    </div>

    <div
      className="max-w-5xl mx-auto md:mt-10 p-4
    mt-16"
    >
      {/* text and des */}
      <h1
        className="text-sm animate
      font-bold uppercase 
     font-Josefin "
      >
        __About Your{" "}
        <span className="bg-blue-500 p-1  text-white"> Company</span>
      </h1>

      {/* main */}
      <div>
        {/* one */}
        <div
          className=" flex flex-col md:flex-row 
     items-center   justify-between mt-10 space-y-5 
     "
        >
          <h1
            className="text-2xl md:text-3xl
             font-Josefin font-bold"
          >
            We Want To Give You
            <br />
            The Best Service
          </h1>
          <p
            className="px-16 md:px-0  text-sm md:w-1/2
              leading-7 "
          >
            Top Star Tech is a company whose mission is to build and deliver a
            variety of software that will make you enjoy the world of connecting
            and being part of our customer base.
          </p>
        </div>
        {/* Two */}

        <div
          className="mt-10 flex flex-col md:flex-row
        justify-between space-x-10 items-center"
        >
          {/* image */}
          <div  data-aos = "zoom-in">
            <Image
              src={img}
              className="md:max-w-md 
              max-w-sm"
              width={0}
              height={0}
              alt="image"
            />
          </div>
          {/* text */}
          <div
            className="grid grid-cols-1 md:grid-cols-1
            gap-5 md:mt-32 mt-10 "
          >
            {/* web */}
            <div  data-aos = "zoom-in">
              {/* one */}
              <div className="flex space-x-3 items-center">
                <Image
                  src={code}
                  width={0}
                  height={0}
                  className="w-10 h-10"
                  alt="image"
                />
                <h1 className="text-md font-bold capitalize">
                  web development
                </h1>
              </div>
              {/* two */}
              <div>
                <p
                  className="md:px-24 px-16 text-sm font-Poppins font-light
                  leading-7 line-clamp-2"
                >
                  The company's activities include the development and
                  maintenance of various software that are built in a
                  high-quality manner.
                </p>
              </div>
            </div>

            {/* brand */}
            <div
            data-aos = "zoom-in">
              {/* one */}
              <div className="flex space-x-3 items-center">
                <Image
                  src={web}
                  width={0}
                  height={0}
                  className="w-10 h-10"
                  alt="image"
                />
                <h1 className="text-md font-bold capitalize">Brand Desing</h1>
              </div>
              {/* two */}
              <div>
                <p
                  className="md:px-24 px-16 text-sm font-Poppins font-light
                 leading-7 line-clamp-2"
                >
                  We are ready for you if you want your business to have a brand
                  that you are going with a company and we are ready to do that.
                </p>
              </div>
            </div>

            {/* socila */}
            <div   >
              {/* one */}
              <div className="flex space-x-3 items-center">
                <Image
                  src={social}
                  width={0}
                  height={0}
                  className="w-10 h-10"
                  alt="image"
                />
                <h1 className="text-md font-bold capitalize">Digital marketing</h1>
              </div>
              {/* two */}
              <div>
                <p
                  className="md:px-24 px-16 text-sm font-Poppins font-light
                 leading-7 line-clamp-2"
                >
                  We are ready for you if you want your business to have a brand
                  that you are going with a company and we are ready to do that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
        <Tools/>
    </div>
    
    </>
  )
}

export default page
