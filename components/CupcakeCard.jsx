import React from 'react'
import Image from 'next/image'

const CupcakeCard = (props) => {
  return (
    <>
      <div>
        <div className='flex justify-center'>
          <Image src={props.pic} alt='pic' />
        </div>
        <div className='text-center font-bold text-lg  tracking-widest hover:text-orange-400'>{props.title}</div>
        <p className='text-center'>{props.desc}</p>
      </div>
    </>
  )
}

export default CupcakeCard