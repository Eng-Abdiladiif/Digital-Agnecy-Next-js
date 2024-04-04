import Nav from "@/components/Nav";
import Image from "next/image";
import React from "react";
import img from "../../../public/image/work.png";
import  web  from  "../../../public/image/code (3).png"
import   design  from "../../../public/image/web-design (1).png"
import  socila from "../../../public/image/social-media (3).png"
import Stripe from "@/components/Stripe";

function page() {
  return (
    <>
      <div>
        <Nav />
      </div>

      <div className="max-w-5xl mx-auto p-4 mt-10">
        {/* main */}
        <div className="">
          {/* one */}
          <div className="space-y-5">
            <h2
              className="text-xl font-bold
                text-orange-600"
            >
              WE PROMISE FOR
            </h2>
            <h1 className="text-2xl font-bold">
              QUALITY & AMAZING <br />
              GLOBAl<span className="text-orange-600"> SERVICES.</span>
            </h1>
          </div>
          <div className="my-16 flex justify-center items-center text-center">
            <h1 className="text-md font-semibold">
              "A good quality service for the company with <br />
              the required quality and development of
              <span className="text-orange-700"> Top star tech "</span>
            </h1>
          </div>

          {/* two */}
          <div className=" flex flex-col justify-around
          md:flex-row items-center">
            {/* 1 */}
            <div>
              <div className="md:mt-16">
                <Image
                  src={img}
                  className="max-w-lg"
                  width={0}
                  height={0}
                  alt="img"
                />
              </div>
            </div>
            {/* 2 */}
            <div
            className="grid grid-cols-1 md:grid-cols-1
            gap-5 md:mt-32 mt-10 "
          >
            {/* web */}
            <div  data-aos = "zoom-in">
              {/* one */}
              <div className="flex space-x-3 items-center">
                <Image
                  src={web}
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
                  src={design}
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
                  src={socila}
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
        <Stripe/>
      </div>
    </>
  );
}

export default page;
