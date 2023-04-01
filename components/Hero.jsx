import React from 'react'
import Image from 'next/image'
import pic from '../public/slider.jpg'

const Hero = () => {
  return (
    <div className='relative'>
      <Image src={pic} alt="hero" className='h-[30rem] w-full object-cover' />
      <div className='absolute inset-0 flex justify-center items-center h-full'>

        <div className='text-white'>
          <div className='uppercase text-2xl text-center'>the most</div>
          <p className='uppercase font-bold text-6xl text-center'>Delicious</p>
          <div className='flex justify-center py-5 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className='flex justify-center'>
            <button className='flex justify-center items-center text-white bg-yellow-500 hover:bg-orange-500 px-10 uppercase font-bold py-4 rounded-full'>Get Started</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero