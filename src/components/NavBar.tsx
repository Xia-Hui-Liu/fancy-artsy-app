"use client"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "./ProductsDropdown";

const links = [
  {
    href: "/",
    text: "Home"
  },
  {
    href: "/about",
    text: "About"
  },
  {
    href: "/products",
    text: "Products"
  },
  {
    href: "/news",
    text: "News"
  },
  {
    href: "/contact",
    text: "Contact Us"
  }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuRef, productsRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 bg-white">
      <div className="flex item-center flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex item-center lg:ml-10">
          <Image src="/images/logo.jpg" alt="logo" width={130} height={130} />
        </a> 
        <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="true"
        onClick={toggleMenu}
        >
        <span className="sr-only">Open main menu</span>
        <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1zM3 20a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
        </svg>
        </button>
        <div ref={menuRef}
          className={`md:inline-flex md:flex-grow md:w-auto w-full md:items-center flex flex-col md:h-auto w-32 ml-auto md:bg-transparent bg-white md:shadow-none shadow-lg mt-2 md:mt-0
          ${ isMenuOpen ? 'block' : 'hidden' }`}
          id="navbar-sticky"
          >
            <div className="flex flex-col md:space-x-8 md:inline-flex md:flex-row md:mx-auto md:justify-center md:w-full md:items-center items-start text-base md:h-auto">
              {links.map(({ href, text }, index) => (
                href === "/products"?
                <div key={index} className="relative md:inline-flex md:w-auto w-full" ref={productsRef}>
                  <button
                    onClick={toggleProducts}
                    className="inline-flex items-center px-2 py-2 w-full rounded-md border border-transparent  hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:text-sm md:text-xl lg:text-2xl"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    >{text}
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                  <Dropdown isOpen={isProductsOpen} />
                </div>
                  :
                <Link href={href} key={index} legacyBehavior>
                  <a className="md:inline-flex md:w-auto w-full px-3 py-2 rounded hover:text-gray-400 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-400 dark:focus:bg-gray-700 sm:text-sm md:text-xl lg:text-2xl">
                  {text}
                  </a>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </nav>
  )}

export default Navbar