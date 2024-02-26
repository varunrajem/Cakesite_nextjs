import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import logo from '../public/logo.png'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from 'next/router';
import { IoMdHome } from "react-icons/io";
import { CiSquareQuestion } from "react-icons/ci";
import { MdOutlineRoomService } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { RiGalleryFill } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";


const Navbar = () => {
  const router = useRouter()
  // console.log(router.asPath)
  const [isopen, setisOpen] = useState(false)


  const llink = [
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

  const rlink = [
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

  const alllinks = [
    {
      name: 'Home',
      path: '/',
      icon: <IoMdHome />
    },
    {
      name: 'About Us',
      path: '/about',
      icon: <CiSquareQuestion />

    },
    {
      name: 'Our Services',
      path: '/service',
      icon: <MdOutlineRoomService />
    },
    {
      name: 'Menu',
      path: '/menu',
      icon: <CiMenuBurger />
    },
    {
      name: 'Recipes',
      path: '/recipe',
      icon: <IoFastFoodOutline />
    },
    {
      name: 'Shop',
      path: '/shop',
      icon: <CiShop />
    },
    {
      name: 'Gallery',
      path: '/gallery',
      icon: <RiGalleryFill />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <MdOutlineContactSupport />
    },

  ]

  return (
    <>
      <div className='flex justify-between sm:justify-center items-center h-[120px] bg-pink-300 sticky top-0 z-30 px-3'>
        <div className='md:flex justify-between gap-5 hidden px-5'>
          {llink.map((link, i) => {
            return <Link key={i} href={link.path} className={router.asPath === link.path ? 'font-bold text-md text-orange-500' : 'text-lg text-white'}>{link.name}</Link>
          })}
        </div>
        <div className='flex justify-start'>
          <Image src={logo} alt="logo" className="h-20 w-44 object-contain" />
        </div>
        <div className='md:flex justify-between gap-5 hidden px-5'>
          {rlink.map((link, i) => {
            return <Link key={i} href={link.path} className={router.asPath === link.path ? 'font-bold text-md text-orange-500' : 'text-lg text-white'}>{link.name}</Link>
          })}
        </div>
        <div
          className={`md:hidden hover:cursor-pointer z-20 text-4xl`}
          onClick={() => setisOpen(!isopen)}
        >
          {isopen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        {isopen &&
          <div onClick={() => setisOpen(!isopen)} className='absolute top-[120px] bg-black/75 left-0 w-full h-screen z-10'>
          </div>
        }
        {isopen ?
          <div className='absolute top-[120px] left-0 w-2/3 h-screen z-20'>
            <ul className='bg-pink-100 shadow-xl h-full'>
              {alllinks.map((e, i) => {
                return (
                  <div key={i} className='flex justify-start items-center px-4 py-1 gap-3'>
                    <span>{e.icon}</span>
                    <li><Link href={e.path} onClick={() => setisOpen(!isopen)} className={router.asPath === e.path ? 'font-bold text-lg text-blue-500' : 'text-lg'}>{e.name}</Link></li>
                  </div>
                )
              })}

            </ul></div> : ''
        }
      </div>

    </>
  )
}

export default Navbar