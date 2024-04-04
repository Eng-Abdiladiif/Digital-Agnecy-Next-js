"use client"

import React, { useEffect } from "react";
import { Card } from "./ui/card";
import { SlCheck } from "react-icons/sl";
import { Button } from "./ui/button";
import   Aos  from  "aos"
import    "aos/dist/aos.css"
import Link from "next/link";



function Stripe() {

    useEffect(()  => {

        Aos.init({duration:3000})
    })
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <div className="space-y-4">
        <h1
          className="text-lg font-bold
        text-orange-700 font-Poppins"
        >
          PRICING PLANS
        </h1>
        <h1
          className="text-2xl md:text-3xl font-Poppins
        font-semibold"
        >
          WE MADE THE PLANS
          <br />{" "}
          <span
            className="text-orange-700
            font-semibold"
          >
            FOR YOU
          </span>
        </h1>
      </div>

      {/* grid */}

      <div
        className="grid grid-cols-1 md:grid-cols-3 
       gap-5 mt-10 px-16 md:px-0"
      >
        <Card className="p-3 my-3 space-y-4
        border-br-2 border-orange-700 rounded-md"
        data-aos = "zoom-in">
          <div
            className="p-4 flex flex-col justify-center
            text-center space-y-3"
          >
            <h1
              className="text-2xl
                font-bold"
            >
              Basic
            </h1>
            <p className="text-md ">Starter Business</p>
            <h1 className="text-3xl italic
            font-bold text-orange-600">$250</h1>
          </div>
          <div className="border-b-2 border-gray-200 my-5"></div>

          {/* one */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold"
            >
              Web Creation
            </h2>
          </div>
          {/* two */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold"
            >
              Web Design
            </h2>
          </div>
          {/* thre */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold text-gray-400 line-through"
            >
              Domain
            </h2>
          </div>
          {/* f4*/}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold "
            >
              Strategy & Research
            </h2>
          </div>

          {/* five */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold text-gray-300 line-through"
            >
              SEO Optimization
            </h2>
          </div>
          <div className="pt-5  flex justify-center items-center
            text-center">
            <Link href="https://buy.stripe.com/test_4gw5or0IpaKC1Xi144">
            <button className="px-3  py-2 bg-orange-700
            text-white rounded-full  
            text-md font-semibold uppercase text-sm">buy now</button>
            </Link>
          </div>
        </Card>
        <Card className="p-3 my-3 space-y-4
        border-br-2 border-orange-700 rounded-md"
        data-aos = "zoom-in">
          <div
            className="p-4 flex flex-col justify-center
            text-center space-y-3"
          >
            <h1
              className="text-2xl
                font-bold"
            >
             Pro Standard
            </h1>
            <p className="text-md ">Medium Business</p>
            <h1 className="text-3xl italic
            font-bold text-orange-600">$450</h1>
          </div>
          <div className="border-b-2 border-gray-200 my-5"></div>

          {/* one */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold"
            >
              Web Creation
            </h2>
          </div>
          {/* two */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold"
            >
              Web Design
            </h2>
          </div>
          {/* thre */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold text-gray-400 line-through"
            >
              Domain
            </h2>
          </div>
          {/* f4*/}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold "
            >
              Strategy & Research
            </h2>
          </div>

          {/* five */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold "
            >
              SEO Optimization
            </h2>
          </div>
          <div className="pt-5  flex justify-center items-center
            text-center">
            <Link href="https://buy.stripe.com/test_9AQeZ176N4me0Te3cd">
               
            <button className="px-3  py-2 bg-orange-700
            text-white rounded-full  
            text-md font-semibold uppercase text-sm">buy now</button>
            </Link>
          </div>
        </Card>
        {/* thre */}

        <Card className="p-3 my-3 space-y-4
        border-br-2 border-orange-700 rounded-md"
        data-aos = "zoom-in">
          <div
            className="p-4 flex flex-col justify-center
            text-center space-y-3"
          >
            <h1
              className="text-2xl
                font-bold"
            >
              Premium
            </h1>
            <p className="text-md ">Large Business</p>
            <h1 className="text-3xl italic
            font-bold text-orange-600">$900</h1>
          </div>
          <div className="border-b-2 border-gray-200 my-5"></div>

          {/* one */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold"
            >
              Web Creation
            </h2>
          </div>
          {/* two */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold"
            >
              Web Design
            </h2>
          </div>
          {/* thre */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold "
            >
              Domain
            </h2>
          </div>
          {/* f4*/}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold "
            >
              Strategy & Research
            </h2>
          </div>

          {/* five */}
          <div
            className="flex space-x-3 items-center
            my-3 justify-center"
          >
            <SlCheck
              className="text-xl
                text-orange-700 "
            />
            <h2
              className="text-sm font-Poppins 
                font-semibold "
            >
              SEO Optimization
            </h2>
          </div>
          <div className="pt-5  flex justify-center items-center
            text-center">

              <Link href="https://buy.stripe.com/test_cN23gj2Qx3iabxS6oq">

              <button className="px-3  py-2 bg-orange-700
            text-white rounded-full  
            text-md font-semibold uppercase text-sm">buy now</button>
              </Link>

          </div>
        </Card>
      </div>
    </div>
  );
}

export default Stripe;
