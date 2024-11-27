"use client"

import React from 'react'
import { CiMenuFries } from "react-icons/ci"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { DialogTitle } from '@radix-ui/react-dialog'


const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "about",
        path: "/about"
    },
    // {
    //     name: "services",
    //     path: "/services"
    // },
    {
        name: "projects",
        path: "/projects"
    },
    {
        name: "contact",
        path: "/contact"
    },
]


const MobileNavbar: React.FC = () => {

    const pathName = usePathname()

    return <Sheet>
        <DialogTitle className='hidden' />
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[25px] sm:text-[32px] text-accent' />
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            {/* logo */}
            <div className='mt-12 mb-5 sm:my-12 text-center text-2xl'>
                <Link href="/">
                    <h1 className='text-2xl font-semibold'>
                        Ramkrishna<span className='text-accent'>.</span>
                    </h1>
                </Link>
            </div>

            {/* navbar */}
            <nav className='flex flex-col justify-center items-center gap-8'>
                {
                    links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathName && "text-accent border-b-2 border-accent"
                                    } text-xl capitalize hover:text-accent`}
                            >
                                {link.name}
                            </Link>
                        )
                    })
                }
            </nav>

            {/* hire me btn */}
            <div className='mx-auto m-5'>
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>

        </SheetContent>
    </Sheet>
}

export default MobileNavbar