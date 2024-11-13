"use client";

import Link from "next/link";
import React, { useState } from "react";
import CommonBtn from "./common/CommonBtn";
// import CommonBtn from "./commoncomponents/CommonBtn";
import Image from "next/image";
import logo from "../../public/images/logoheader.png"

import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {

  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    {
      href: "home",
      label: "Home",
    },
    {
      href: "#features",
      label: "Features",
    },
    {
      href: "#pricing",
      label: "Pricing",
    },
    {
      href: "#team",
      label: "Team",
    },
    {
      href: "#screens",
      label: "Screens",
    },
    {
      href: "#news",
      label: "News",
    },
    {
      href: "#contactus",
      label: "Contact Us",
    },
  ];

  const toggleMenu = () => { 
    // setIsMenuOpen(prevState => !prevState); 
    setIsMenuOpen(!isMenuOpen);
    // alert('im clickinggggg....');
    // console.log("sajid is clickingnnnn", isMenuOpen);
  };

  const handleItemClick = () => {
    if (!isMenuOpen) return; // Do nothing if menu is not open
    toggleMenu(); // Close the menu after clicking an item
  };

  const handleSmoothScroll = (event, id) => {
    // event.preventDefault();
    // console.log(event);
    const element = document?.querySelector(id);

    if (pathname==="/") {
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }

    handleItemClick(); // Close the menu after clicking an item
  };

  return (







    <header role="banner" className="py-6 w-full border z-[3] ">
      <div className=" px-10 mx-auto flex items-center justify-between ">
        <div className="flex items-center">
          <Link href="/" className="">
            <Image className="w-[80px] " src={logo} alt="logo header" />
            {/* <Image
            className="w-[190px]"
            src={rishtaLogoRedImage}
            alt="RishtaLogoImageRed"
          /> */}
          </Link>
          
          
        </div>
        <div className="flex">
            <ul
              className={`md:flex md:gap-6 ${
                isMenuOpen
                  ? "flex flex-col justify-center w-[100%] h-[41%] border-[#1f8891] right-0 absolute  top-[7rem] p-5 rounded-2xl items-center z-20 bg-[#fff] border"
                  : "hidden"
              } transition-all duration-300 ease-in-out`}
            >
              {navigationItems.map((links, index) => {
                return (
                  <li
                    className=""
                    key={links.label}
                    onClick={handleItemClick}
                  >
                    <p
                      className="hover:text-[#1f8891] cursor-pointer inline-block mt-2 md:mt-0 text-lg md:text-[16px] font-[600] text-[gray]"
                      // href={''}
                      onClick={(event) => handleSmoothScroll(event, links.href)}
                    >
                      {links.label}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <div className="flex relative">
            <ul
              className={`md:flex md:gap-6 ${
                isMenuOpen
                  ? "flex flex-col absolute right-[-120px] top-10 p-5 rounded-2xl items-center w-[200px] z-20 bg-[#680000] text-white  "
                  : "hidden"
              } transition-all duration-300 ease-in-out`}
            >
              {navigationMenu.map((links, index) => {
                return (
                  <li key={links.label} onClick={handleItemClick}>
                    <Link
                      className="hover:text-[#680000] hover:font-bold font-semibold"
                      href={links.href}
                      onClick={(event) => handleSmoothScroll(event, links.href)}
                    >
                      {links.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div> */}
         <div className="md:hidden pl-5" onClick={toggleMenu}>
           <RxHamburgerMenu className="text-2xl text-[#84B78F] " />
          {/* menu */}
          {/* //  <RxHamburgerMenu className="text-3xl text-[#680000] font-extrabold" />  */}
        </div> 
        <div className="hidden md:flex">
          {/* Download Now */}
          <CommonBtn link="https://play.google.com/store/apps/details?id=com.skinsquad" btntext="Download Now" />
        </div>
      </div>
    </header>
  );
};

export default Navigation;