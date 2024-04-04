import React from 'react'
import { Button } from './ui/button'
import  show from "../../public/image/undraw_code_inspection_bdl7-removebg-preview.png"
import Image from 'next/image'

function Showcase() {
  return (
    <div className='max-w-4xl mx-auto p-4 mt-10'>

      {/* main */}
      <div className='flex flex-col md:flex-row
      space-x-5'>

        {/* tedxt */}
        <div className='space-y-6'>

            <h1 className='text-3xl font-bold leading-10
            md:text-4xl capitalize pl-16 md:pl-0'>
                <span className='text-blue-800'> Top star 
                <span className='text-pink-600'> {" "}Tech</span></span>
                <span>{"  "}  <br />
                Digital tech 
                   <br /> company  Agency</span>
            </h1>
            <p className='md:pl-3 md:pr-10 px-16 text-sm
             
            '>The company does software development and website design and 
                development at a high level</p>
                <div className='md:px-4 px-16'>

                    <Button>Get sign In</Button>
                </div>
        </div>
        {/* imgae */}
        <div className='mt-10 md:mt-0'>

            <Image className='md:max-w-md hidden md:flex' src={show} width={0}
            height={0} alt='img' />
        </div>
      </div>
      
    </div>
  )
}

export default Showcase
