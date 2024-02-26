import React from 'react'
import CupcakeCard from '../components/CupcakeCard'
import cake1 from '../public/Images/MenuCake/ourmenu-6.jpg'
import cake2 from '../public/Images/MenuCake/ourmenu-6.jpg'
import cake3 from '../public/Images/MenuCake/ourmenu-6.jpg'
import cake4 from '../public/Images/MenuCake/ourmenu-6.jpg'
import cake5 from '../public/Images/MenuCake/ourmenu-6.jpg'
import cake6 from '../public/Images/MenuCake/ourmenu-6.jpg'
import cake7 from '../public/Images/MenuCake/ourmenu-6.jpg'
import cake8 from '../public/Images/MenuCake/ourmenu-6.jpg'

const service = () => {
  return (
    <>
      <div className='px-6 md:px-44 py-2'>
        <p className='text-3xl font-bold'>Cake Services </p>
        <div className='text-sm py-3'>
          <p>Lorem lipsum Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upien disse comete dolo lectus fgilla itollicil tua ludin dolor. nec met quam accumsan dolore condime netus lullam utlacus adipiscing ipsum molestie euismod estibulum vel.Lorem lipsum Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upien disse comete dolo lectus fgilla itollicil tua ludin dolor. nec met quam accumsan dolore condime netus lullam utlacus adipiscing ipsum molestie euismod estibulum vel.</p>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-36 gap-16' >
        <CupcakeCard pic={cake1} title='GREEN CRAMEL' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
        <CupcakeCard pic={cake2} title='GREEN CRAMEL' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
        <CupcakeCard pic={cake3} title='GREEN CRAMEL' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
        <CupcakeCard pic={cake4} title='GREEN CRAMEL' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
        <CupcakeCard pic={cake5} title='GREEN CRAMEL' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
        <CupcakeCard pic={cake6} title='GREEN CRAMEL' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
        <CupcakeCard pic={cake7} title='GREEN CRAMEL' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
        <CupcakeCard pic={cake8} title='GREEN CRAMEL' desc='Cras metus quam, condimentu venen rutrum ediam. Sed vehicquis fringnull lobortis fermentum dignissim.' />
      </div>
    </>
  )
}

export default service