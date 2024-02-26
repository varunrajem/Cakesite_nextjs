import Image from 'next/image'
import React from 'react'
import { RiCakeLine } from 'react-icons/ri'
import ourstory from '../public/ourstory.jpg'
import icons1 from '../public/Images/Icons/icon-ourstory-1.png'
import icons2 from '../public/Images/Icons/icon-ourstory-2.png'
import icons3 from '../public/Images/Icons/icon-ourstory-3.png'

const about = () => {
  return (
    <>
      <div className='px-4 md:px-44'>
        <p className='text-2xl font-bold'>About Us </p>
        <div className='mt-2 space-y-4 text-base'>
          <h1>Lorem lipsum Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upien disse comete dolo lectus fgilla itollicil tua ludin dolor. nec met quam accumsan dolore condime netus lullam utlacus adipiscing ipsum molestie euismod estibulum vel.Lorem lipsum Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upien disse comete dolo lectus fgilla itollicil tua ludin dolor. nec met quam accumsan dolore condime netus lullam utlacus adipiscing ipsum molestie euismod estibulum vel.</h1>
          <p>Lorem lipsum Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upien disse comete dolo lectus fgilla itollicil tua ludin dolor. nec met quam accumsan dolore condime netus lullam utlacus adipiscing ipsum molestie euismod estibulum vel.Lorem lipsum Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upien disse comete dolo lectus fgilla itollicil tua ludin dolor. nec met quam accumsan dolore condime netus lullam utlacus adipiscing ipsum molestie euismod estibulum vel.</p>
        </div>
        <div>
          <h1 className='text-center text-5xl font-extrabold pt-6 mt-10 tracking-widest'>OUR STORY</h1>
          <div className='flex justify-center p-5'>
            <RiCakeLine size={40} />
          </div>
          <div className='flex justify-center text-center'>
            <h1>Cras metus quam, condimentum ut venen rutrum ediam. Sed vehicula at r quis<br /> fringnull lobortis fermentum dignissim.</h1>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 p-4 md:p-28  '>
        <Image src={ourstory} alt='..' className='' />


        <div className='p-4 md:px-14 space-y-8'>
          <div>
            <p className='font-bold font-lg'>OUR MISSION</p>
            <p>Lorem lipsum Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upien disse comete dolo lectus fgilla itollicil tua ludin dolor.</p>
            <Image src={icons1} alt='' className='mt-2' />
          </div>

          <div>
            <p className='font-bold font-lg'>OUR VISION</p>
            <p>Lorem lipsum Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upien disse comete dolo lectus fgilla itollicil tua ludin dolor.</p>
            <Image src={icons2} alt='' className='mt-2' />
          </div>

          <div>
            <p className='font-bold font-lg'>WHAT WE DO</p>
            <p>Lorem lipsum Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upien disse comete dolo lectus fgilla itollicil tua ludin dolor.</p>
            <Image src={icons3} alt='' className='mt-2' />
          </div>
        </div>
      </div>
    </>
  )
}

export default about