'use client';

import useNavigation from '@/hooks/useNavigation';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [nav, setNav] = useState<boolean>(false);
  const { links } = useNavigation();
  return (
    <header className="sticky top-0 z-50 flex items-center mt-3 justify-between ">
      {/* Logo */}
      <div className="flex">
        <Link href="/">
          <h1 className="font-bold text-lg lg:text-xl">Brainwave.io</h1>
        </Link>
      </div>
      {/* Nav */}
      <div
        aria-label="Menu"
        onClick={() => setNav(!nav)}
        onKeyDown={() => setNav(!nav)}
        role="button"
        tabIndex={0}
        className="absolute right-0 z-30 lg:hidden"
      >
        {nav ? (
          <FaTimes className="h-7 w-auto xs:h-8" />
        ) : (
          <FaBars className="h-7 w-auto xs:h-8" />
        )}
      </div>
      {/* Nav - Mobile */}
      {nav && (
        <div>
          <ul className="absolute left-0 top-0 z-20 flex h-screen w-full flex-col items-center justify-center">
            {links.map(({ name, path, isActive }) => (
              <li
                key={path}
                className={cn(
                  'cursor-pointer px-4 py-6 text-4xl',
                  isActive && 'text-primary',
                )}
              >
                <Link
                  aria-label="Menu"
                  onClick={() => setNav(!nav)}
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
            <div className="flexCenter space-x-2 xl:space-x-5 mt-10">
              <button className="p-2 px-4">Sign In</button>
              <button className="buttonBlue">Sign Up</button>
            </div>
          </ul>
        </div>
      )}
      {/* Nav - Desktop */}
      <nav className="lg:flexCenter hidden lg:text-base space-x-2 xl:space-x-5">
        <ul className="flexCenter space-x-2 xl:space-x-5">
          {links.map(({ name, path, isActive }) => (
            <li key={path}>
              <Link
                href={path}
                className={cn(
                  'cursor-pointer p-2 px-4 transition-all duration-75 hover:text-white/70',
                  isActive && 'text-primary hover:text-primary/70',
                )}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-[21px] border border-[#D5D7DD]" />
        <div className="flexCenter space-x-2 xl:space-x-5">
          <button className="p-2 px-4">Sign In</button>
          <button className="buttonBlue">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
