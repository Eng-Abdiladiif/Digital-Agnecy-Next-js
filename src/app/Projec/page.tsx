import Nav from '@/components/Nav'
import Link from 'next/link'
import React from 'react'
import Project from "../../components/Projects"

function page() {
  return (
    

    <>
    <div>
      <Nav/>
    </div>

    <div className='max-w-4xl mx-auto p-4 mt-10'>

      
      <div className='space-y-3'>

        <h1
        className='text-lg md:text-xl font-bold text-orange-700 uppercase
        '>AT LASEST PROJECT WE WORK</h1>
        <h2 className='text-lg font-bold font-Poppins'>Our Projects</h2>
      </div>

      {/* grid */}
      <div  className='mb-20'>

        <Project/>




       


      </div>



    </div>
    
    </>
  )
}

export default page
