import React from 'react'
import Link from 'next/link'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

const Footor = () => {
  return (
    <>
      <div className='grid grid-cols-1 text-center md:grid-cols-2 bg-black md:h-24 relative '>
        <div>
          <p className='text-white font-normal text-base p-7 ml-28 italic'>This site is made by 💖 by <span className='text-orange-500 underline'><Link href={'https://inflection.org.in/'}>InflectionOrg</Link></span></p>
        </div>
        <div>
          <div className='flex justify-end absolute inset-0 mt-6 md:gap-4 p-5'>
            <p className='text-white text-base'>Follow us</p>
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