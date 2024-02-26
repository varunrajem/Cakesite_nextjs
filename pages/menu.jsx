import React from 'react'
import { Data } from '../constant/index'
import Image from 'next/image'

const menu = () => {
  return (
    <>
      <div className='px-4 md:px-44 py-6'>
        <p className='text-4xl font-normal'>Menu</p>
        <div className='py-3 space-y-4 text-base'>
          <p>Donec in metus lectus. Integer vulputate porta elit, fringilla mollis mag luctus vel. Interdum et malesuada fames ac ante ipsum primis in fauci. Pellentesque in aliquam enim, quis lobortis arcu. Curabitur quis ultrices est. Donec dapibus felis vel venenatis consequat. Sed feugiat diam consequat velit un fermentum turpis cursus ante ipsum primis in fauci.</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 p-2 md:px-56 py-10 md:py-20 gap-7'>{
        Data.map((e, i) => {
          return (<>
            <div key={i} className='grid grid-cols-1 md:grid-cols-2 w-full py-5'>
              <div className=''>
                <Image src={e.cakeimg} alt='pic' className='' />
              </div>
              <div className='px-4'>
                <p className='text-lg font-medium uppercase'>{e.title}</p>
                <p className='text-md mt-2'>{e.desc}</p>
                <button className='text-white hover:text-black bg-yellow-500 hover:bg-orange-500 px-8 uppercase font-bold py-3 rounded-full mt-6'>Order Now</button>
              </div>
            </div>
          </>)
        })
      }
      </div>
    </>
  )
}

export default menu