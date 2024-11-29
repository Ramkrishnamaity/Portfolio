import Link from "next/link";
import React from "react";
import DesktopNavbar from "./DesktopNav";
import { Button } from "../ui/button";
import MobileNavbar from "./MobileNav";

const Header = () => {
    return (
        <header className='py-4 lg:py-6 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* logo */}
                <Link href="/">
                    <h1 className='text-lg sm:text-2xl lg:text-4xl font-semibold'>
                        Ramkrishna<span className='text-accent'>.</span>
                    </h1>
                </Link>

                {/* desktop nav & contact btn */}
                <div className='hidden lg:flex items-center gap-8'>
                    <DesktopNavbar />

                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>

                </div>

                {/* mobile nav */}
                <div className="lg:hidden">
                    <MobileNavbar />
                </div>

            </div>
        </header>
    );
};

export default Header;