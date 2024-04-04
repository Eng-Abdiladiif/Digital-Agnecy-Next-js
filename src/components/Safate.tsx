"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import img from "../../public/image/mintors.png"
import { SlCheck } from "react-icons/sl";

import  Aos from "aos"
import   "aos/dist/aos.css"

function Safate() {

    useEffect(()  => {

        Aos.init({duration:3000})
    })
  return (
    <div className='max-w-5xl mx-auto p-4 mt-20'>


        {/* main */}
        <div className='flex flex-col justify-between 
        items-center md:flex-row md:space-x-16'>

            {/* one  */}
            <div className=''>

                <Image src={img} className='max-w-md' width={0}
                height={0} alt='img' />
            </div>
            {/* tow */}
            <div>

                {/* one */}
                <div className='space-y-5'>
                    <h1 className='text-md 
                    font-bold text-orange-700'>ABOUT COMPANY</h1>
                    <h3 className='w-[400px]
                    text-sm leading-7'>There are many variations of 
                    passages of Lorem Ipsum available, the majority have suffered alteration in some form, by injected humour. randomised words which don't look even slightly believable. It uses a dictionary of over 200 
                        Latin words, combined with.</h3>


                </div>
                {/* two */}
                <div className='grid grid-cols-1
                md:grid-cols-2 gap-5 mt-10'>


                    {/* one */}
                    <div className='flex space-x-4
                    items-center'
                    data-aos = "fade-left">

                        <SlCheck  className='text-2xl 
                        text-orange-700'/>
                        <h1 className='text-md
                        font-bold'>Creative Conceptions</h1>


                    </div>
                    {/* tow */}
                    <div className='flex space-x-4
                    items-center'
                    data-aos = "fade-right">

                        <SlCheck  className='text-2xl 
                        text-orange-700'/>
                        <h1 className='text-md
                        font-bold'>Business Solutions</h1>


                    </div>
                    {/*  thre*/}
                    <div className='flex space-x-4
                    items-center'
                    data-aos = "fade-up">

                        <SlCheck  className='text-2xl 
                        text-orange-700'/>
                        <h1 className='text-md
                        font-bold'>Corporate Relationship</h1>


                    </div>
                    {/* four */}
                    <div className='flex space-x-4
                    items-center'
                    data-aos = "fade-down-in">

                        <SlCheck  className='text-2xl 
                        text-orange-700'/>
                        <h1 className='text-md
                        font-bold'>Mission & Vission</h1>


                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Safate
