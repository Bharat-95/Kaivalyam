import React from 'react'
import { Pacifico, Quicksand, Poppins } from "next/font/google";
import Phone from '../components/Phone';
import Together from '../components/Together';
import Happen from '../components/Happen';
import Image from 'next/image';

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], display: "swap" });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"], display: "swap" });

const Work = () => {
  return (
    <div className='space-y-10'>
        <div className={`${quicksand.className} font-semibold text-4xl flex justify-center text-[#C45C61] lg:px-0 md:px-0 px-4 text-center`}>You&apos;re Wondering - How Does It Work ?</div>
        <div className="lg:flex md:flex justify-evenly items-center lg:space-y-0 md:space-y-0 space-y-10 ">

           <div className='flex flex-col justify-center items-center  space-y-4'>
            <Phone />
           <span className={`${quicksand.className} font-semibold text-2xl text-[#C45C61] w-72 text-center`}>Let’s Chat – Share Your Vision With Us</span>
           </div>
           <div className='flex flex-col justify-center items-center  space-y-4'>
            <Together />
           <span className={`${quicksand.className} font-semibold text-2xl text-[#C45C61] w-72 text-center`}>Plan Together – We&apos;ll Craft Every Detail</span>
           </div>
           <div className='flex flex-col justify-center items-center  space-y-4'>
            <Happen />
           <span className={`${quicksand.className} font-semibold text-2xl text-[#C45C61] w-72 text-center`}>Make It Happen – Event Comes Alive</span>
           </div>
           
        </div>
    </div>
  )
}

export default Work