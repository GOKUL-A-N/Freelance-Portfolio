"use client"

import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { Bounce } from "react-awesome-reveal";

const Services = () => {
  return (
    <div className='text-white mt-20'>
      <h2 className='pl-10 pt-0 text-center font-semibold tracking-wider text-[28px]'> Services</h2>
      <div className=' w-full flex flex-col md:flex-row items-center justify-center pt-4 gap-10'>
      
      <div className='relative flex w-[280px] transition duration-150 ease-in-out hover:scale-110'>
      <Bounce className='z-10'>
        <div className='w-full z-10 relative h-full bg-[#222] p-5'>
            <h3 className='text-[23px] font-semibold '>Pro</h3><br />
            <h2 className='text-[30px] text-secondary font-bold'>Rs.5000</h2>
            <ul>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Business Websites(5 pages)</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> 10 free reviews</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Requirement Analysis</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Site Map</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Wire Framing</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Figma Design</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Website Development</span></li>
              <li className='flex items-start p-1'><span className='pr-1 mt-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Hosting (optional with extra Charges) </span></li>
            </ul><br />
            <Link href='/Contact'><button className='border-2 border-secondary p-3 hover:bg-secondary hover:text-[#111]'>Hire Me</button></Link>
        </div>
        </Bounce>
        <div className='absolute w-full rotate-2 h-full bg-secondary'></div>
      </div>


      <div className='relative flex w-[280px]  transition duration-150 ease-in-out hover:scale-110'>
        <Bounce className='z-10'>
        <div className='w-full z-10 relative h-full bg-[#222] p-5'>
            <h3 className='text-[23px] font-semibold '>Standard</h3><br />
            <h2 className='text-[30px] text-secondary font-bold'>Rs.3000</h2><br />
            <ul>
              <li className='flex items-strst p-1'><span className='pr-1 mt-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Business & Portfolio Websites(3 pages)</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> 3 free reviews</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Wire Framing</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Figma Design</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Website Development</span></li>
              <li className='flex items-start p-1'><span className='pr-1 mt-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Hosting (optional with extra Charges) </span></li>
            </ul><br />
            <Link href='/Contact'><button className='border-2 border-secondary p-3 hover:bg-secondary hover:text-[#111]'>Hire Me</button></Link>
        </div>
        </Bounce>
        <div className='absolute w-full rotate-2 h-full bg-secondary'></div>
      </div>

      <div className='relative flex w-[280px]  transition duration-150 ease-in-out hover:scale-110'>
      <Bounce className='z-10'>
        <div className='w-full z-10 relative h-full bg-[#222] p-5'>
            <h3 className='text-[23px] font-semibold '>Basic</h3><br />
            <h2 className='text-[30px] text-secondary font-bold'>Rs.1000</h2><br />
            <ul>
              <li className='flex items-strst p-1'><span className='pr-1 mt-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'>Portfolio Websites(1 page)</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> 1 free review</span></li>
              {/* <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Wire Framing</span></li> */}
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Figma Design</span></li>
              <li className='flex items-center p-1'><span className='pr-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Website Development</span></li>
              <li className='flex items-start p-1'><span className='pr-1 mt-1 text-secondary'><FaCheckCircle /></span><span className='font-semibold tracking-wide'> Hosting (optional with extra Charges) </span></li>
            </ul><br />
            <Link href='/Contact'><button className='border-2 border-secondary p-3 hover:bg-secondary hover:text-[#111]'>Hire Me</button></Link>
        </div>
        </Bounce>
        <div className='absolute w-full rotate-2 h-full bg-secondary'></div>
      </div>
    </div>
    </div>
  )
}

export default Services