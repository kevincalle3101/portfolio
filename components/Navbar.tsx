"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

interface NavLink {
    title: string;
    path: string;
}

const navLinks: NavLink[] = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className='fixed top-0 left-0 sm:border-b sm:border-[#33353F] right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex container lg:py-4 items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='text-3xl md:text-5xl text-white font-semibold'>
                    <img src='/images/LogoKC.png' alt="logo" className='w-14 h-12' />
                </Link>
                <div className='mobile-menu block md:hidden'>{
                    !navbarOpen ? (
                        <button className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon onClick={() => setNavbarOpen(!navbarOpen)} className='h-5 w-5' />
                        </button>
                    ) :
                        (
                            <button className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon onClick={() => setNavbarOpen(!navbarOpen)} className='h-5 w-5' />
                            </button>
                        )
                }</div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar