"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductsDropdown from "./ProductsDropdown";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  let dropdownTimer: ReturnType<typeof setTimeout> | null = null;

  const toggleDropdown = (isOpen: boolean) => {
    setIsDropdownOpen(isOpen);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      toggleDropdown(false);
    }, 2000); // set a 200ms delay before closing the dropdown
  };

  const handleMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer); // clear the timeout if the user re-enters the dropdown before it closes
      dropdownTimer = null;
    }
    toggleDropdown(true);
  };

  return (
    <nav className="fixed flex top-0 left-0 right-0 bg-white px-4 py-0 w-full h-30 items-center justify-between my-0 font-serif">
      <div className="flex items-center ml-20 p-0 mr-30">
        <Image src="/images/logo.jpg" alt="logo" width={130} height={130} />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded  border-white hover:text-gray-200 hover:border-gray-200">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-base lg:flex-grow flex justify-center">
          <Link legacyBehavior href="/">
            <a className="block lg:inline-block text-xl text-center text-gray-600 hover:text-gray-200 mr-10">
              Home
            </a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="block lg:inline-block text-xl text-center text-gray-600 hover:text-gray-200 mr-10">
              About
            </a>
          </Link>
          <div className="relative">
            <Link
              legacyBehavior
              href="/products"
              className="block lg:inline-block text-xl text-center text-gray-600 hover:text-gray-200 mr-10"
            >
              <a
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="block lg:inline-block text-xl text-center text-gray-600 hover:text-gray-200 mr-10"
              >
                Products
              </a>
            </Link>
            {isDropdownOpen && <ProductsDropdown />}
          </div>

          <Link legacyBehavior href="/news">
            <a className="block lg:inline-block text-xl text-center text-gray-600 hover:text-gray-200 mr-10">
              News
            </a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="block lg:inline-block text-xl text-center text-gray-600 hover:text-gray-200">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

             
export default Navbar