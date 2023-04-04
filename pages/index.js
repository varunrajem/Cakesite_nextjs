import React from 'react'
import Hero from '../components/Hero'
import CupcakeCard from '../components/CupcakeCard'
import cake1 from '../public/cakes1.jpg'
import cake2 from '../public/cakes2.jpg'
import cake3 from '../public/cakes3.jpg'
import cake4 from '../public/cakes4.jpg'
import { RiCakeLine } from "react-icons/ri";
import { Data } from '../constant/index'
import Image from 'next/image'
import welcomeimg from '../public/welcomeimage.jpg'
import { Cheifdata } from '../constant/teams'


const index = () => {
  return (
    <>
      <Hero />

      {/***********  CUPCAKE ************/}
      <div>
        <h1 className='text-center text-5xl font-extrabold pt-6 text-gray-700 mt-14 tracking-widest'>CUP CAKES</h1>
        <div className='flex justify-center p-5'>
          <RiCakeLine size={40} />
        </div>
        <div className='flex justify-center text-center'>
          <h1>Cras metus quam, condimentum ut venen rutrum ediam. Sed vehicula at r quis<br /> fringnull lobortis fermentum dignissim.</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-36 gap-16' >
        <CupcakeCard pic={cake1} title='GREEN CRAMEL' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
        <CupcakeCard pic={cake2} title='PURPLE CREAM' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
        <CupcakeCard pic={cake3} title='BROWN CHOCOLATE' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
        <CupcakeCard pic={cake4} title='VIOLET CINNAMON' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
      </div>

      {/************* BAKERY *************/}
      <div className='grid grid-cols-2 md:grid-cols-2 p-20 bg-gray-100 '>
        <div>
          <Image src={welcomeimg} alt='welcome' />
        </div>
        <div>
          <p className='text-3xl tracking-widest'>WELCOME TO</p>
          <h1 className='text-4xl font-bold tracking-widest'>BAKERY</h1>
          <div className='text-justify mt-16'>
            <p>Donec in metus lectus. Integer vulputate porta elit, fringilla mollis mag luctus vel. Interdum et malesuada fames ac ante ipsum primis in fauci. Pellentesque in aliquam enim, quis lobortis arcu. Curabitur quis ultrices est. Donec dapibus felis vel venenatis consequat. Sed feugiat diam consequat velit un fermentum turpis cursus ante ipsum primis in fauci.</p>
            <h1 className='mt-8'>Cras semper, neque vitae hendrerit venenatis, tortor erat faucibus justo, sed faucibus <br /> orci felis vitae risus.</h1>
          </div>
          <div>
            <button className='text-white bg-yellow-500 hover:bg-orange-300 px-8 uppercase font-bold py-3 rounded-full mt-24'>READ MORE</button>
          </div>
        </div>

      </div>

      {/*********** MENU ***********/}
      <div>
        <h1 className='text-center text-5xl font-extrabold pt-6 text-gray-700 mt-10 tracking-widest'>OUR MENU</h1>
        <div className='flex justify-center p-5'>
          <RiCakeLine size={40} />
        </div>
        <div className='flex justify-center text-center'>
          <h1>Cras metus quam, condimentum ut venen rutrum ediam. Sed vehicula at r quis<br /> fringnull lobortis fermentum dignissim.</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 p-2 md:px-56 py-20 gap-7'>{
        Data.map((e, i) => {
          return (<>
            <div key={i} className='grid grid-cols-1 md:grid-cols-2'>
              <div className=''>
                <Image src={e.cakeimg} alt='...' className='h-auto w-auto' />
              </div>
              <div className='px-4'>
                <p className='text-lg font-medium uppercase '>{e.title}</p>
                <p className='text-md mt-2'>{e.desc}</p>
                <button className='text-white hover:text-black bg-yellow-500 hover:bg-orange-500 px-8 uppercase font-bold py-3 rounded-full mt-6'>Order Now</button>
              </div>
            </div>
          </>)
        })
      }
      </div>

      <div className=''>
        <div className='text-center bg-gray-200 w-full h-96'>
          <p className=''>Making your Hot cake in<br /> May is perfect. </p>
        </div>
      </div>


      {/*********** * TEAMS ****************/}
      <div>
        <h1 className='text-center text-5xl font-extrabold pt-6 text-gray-700 mt-10 tracking-widest'>OUR AWESOME TEAM</h1>
        <div className='flex justify-center p-5'>
          <RiCakeLine size={40} />
        </div>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-xl text-center px-40 p-10 gap-5'>{
        Cheifdata.map((e, i) => {
          return (
            <>
              <div key={i} className=''>
                <div className=' flex justify-center items-center'>
                  <Image src={e.img} alt='' className='hover:blur-sm cursor-pointer' />
                </div>
                <p className='font-semibold mt-3'>{e.name}</p>
                <span className='font-normal'>{e.type}</span>
              </div>
            </>
          )
        })
      }

      </div>
    </>
  )
}

export default index