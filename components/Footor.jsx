import React from 'react'
import Link from 'next/link'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

const Footor = () => {
  return (
    <>
      <div className=' bg-black'>
        <div className='max-w-7xl container mx-auto px-4 py-20 md:py-0 flex flex-col items-center text-center md:flex-row md:justify-between md:h-20'>
          <div>
            <p className='text-white font-normal text-base italic'>This site is made by 💖 by <span className='text-orange-500 underline'><Link href={'https://varunraje.vercel.app/'}>Varunraje</Link></span></p>
          </div>
          <div className='flex justify-end gap-2 p-2'>
            <p className='text-white text-lg'>Follow us</p>
            <GrFacebookOption size={26} className='cursor-pointer text-orange-400' />
            <AiOutlineTwitter size={26} className='cursor-pointer text-orange-400' />
            <FaLinkedinIn size={26} className='cursor-pointer text-orange-400' />
            <AiOutlineGooglePlus size={26} className='cursor-pointer text-orange-400' />
          </div>
        </div>
      </div>


    </>
  )
}

export default Footor 