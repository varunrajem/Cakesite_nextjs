import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter()

  const Llink = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About Us',
      path: '/about'
    },
    {
      name: 'Our Services',
      path: '/service'
    },
    {
      name: 'Menu',
      path: '/menu'
    },
  ]

  const Rlink = [
    {
      name: 'Recipes',
      path: '/recipe'
    },
    {
      name: 'Shop',
      path: '/shop'
    },
    {
      name: 'Gallery',
      path: '/gallery'
    },
    {
      name: 'Contact',
      path: '/contact'
    },

  ]

  return (
    <>
      <div className='grid grid-cols-3 pt-16 px-56 bg-pink-300'>
        <div className='flex justify-between '>
          {Llink.map((link, i) => {
            return <Link key={i} href={link.path} className='text-lg text-white'>{link.name}</Link>
          })}
        </div>
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" className="h-12 sm:h-2/4 w-full object-contain" />
          </Link>
        </div>
        <div className='flex justify-between'>
          {Rlink.map((link, i) => {
            return <Link key={i} href={link.path} className={router.asPath === link.path ? 'capitalize text-orange-500' : 'capitalize text-white'}>{link.name}</Link>
          })}
          <div>
            <HiOutlineShoppingBag size={32} className='text-white' />
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar