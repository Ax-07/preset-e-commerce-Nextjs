"use client";

import { useMediaQuery } from '@/src/hooks/useMediaQuery';
import React from 'react';
import { DesktopHeader } from '../Navbar/DesktopNavbar';
import { MobileHeader } from '../Navbar/MobileNavbar';

const Header = () => {
      const isDesktop = useMediaQuery("(min-width: 1024px)");
      const fixedNav = "fixed top-0 left-0 z-10 w-full bg-background";
    return (
    <>
        {isDesktop ? <DesktopHeader className={`border-b p-4 ${fixedNav}`}/>
        : <MobileHeader className={`border-b p-4 ${fixedNav}`}/>}
    </>
    );
};
 
export default Header;