"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "projects",
        path: "/projects"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "contact",
        path: "/contact"
    },
]


const DesktopNavbar: React.FC = () => {

    const pathName = usePathname()

    return (
        <nav className='flex lg:gap-8 gap-6'>
            {
                links.map((link, index) => {
                    return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathName && "text-accent border-b-2 border-accent"
                            } capitalize hover:text-accent`}
                        >
                            {link.name}
                        </Link>
                    )
                })
            }

        </nav>
    )
}

export default DesktopNavbar