"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Quicksand } from "next/font/google";
import { BiMenuAltLeft } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const quicksand = Quicksand({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex items-center justify-between lg:px-10 md:px-10 px-4 lg:h-20 md:h-20 h-16 text-[#C45C61] sticky z-50 bg-[#FFEFF1]">
      <div className="text-xl font-bold">Logo</div>

      {/* Desktop Navbar */}
      <ul
        className={`lg:flex md:flex hidden space-x-8 ${quicksand.className} font-semibold text-[15px]`}
      >
       {[
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT", href: "/contact" },
].map(({ name, href }) => (
  <li
    key={name}
    className="hover:translate-x-1 hover:-translate-y-1 duration-700"
  >
    <Link href={href}>{name}</Link>
  </li>
))}
      </ul>

      {/* Get Quote Button */}
      <div
        className={`bg-[#C45C61] lg:flex md:flex hidden text-white p-2 rounded-md shadow-md ${quicksand.className} font-bold hover:translate-x-1 hover:-translate-y-1 duration-700`}
      >
        <Link href="/quote">Get Quote</Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden md:hidden relative">
        <BiMenuAltLeft size={40} onClick={handleMenu} />
        {/* Slide-in mobile menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-60 bg-white shadow-lg transform ${
            menu ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out z-50`}
        >
          {/* X Icon */}
          <div className="flex justify-end p-4">
            <RxCross1
              size={24}
              className="cursor-pointer text-[#C45C61]"
              onClick={handleMenu}
            />
          </div>

          {/* Mobile Nav Links */}
          <ul
            className={`${quicksand.className} font-semibold text-[15px] px-6 space-y-4 text-[#C45C61]`}
          >
            <li onClick={handleMenu}>
              <Link href="/">HOME</Link>
            </li>
            <li onClick={handleMenu}>
              <Link href="/">ABOUT</Link>
            </li>
            <li onClick={handleMenu}>
              <Link href="/">SERVICES</Link>
            </li>
            <li onClick={handleMenu}>
              <Link href="/gallery">GALLERY</Link>
            </li>
            <li onClick={handleMenu}>
              <Link href="/">CONTACT</Link>
            </li>
            <li onClick={handleMenu}  className={`bg-[#C45C61] w-24 text-white p-2 rounded-md shadow-md ${quicksand.className} font-bold `}>
            
        <Link href="/quote">Get Quote</Link>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
