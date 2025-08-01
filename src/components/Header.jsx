import React from "react";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useEffect,useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import logo from '../assets/category/logo.png'
function Header() {

const placeholders = [
    "Search for sunglasses...",
    "Search for eyeglasses...",
    "Search for contact lenses...",
    "Search for offers..."
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % placeholders.length);
        setFade(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <div className="bg-red-600 py-1 text-white flex justify-between items-center">
      <p className="pl-6 text-base">Call Us Today! 1-866-242-3545 | atalopticalstore@gmail.com</p>
      <div className="flex gap-4 text-xl mr-6">
      <FaFacebookF className="hover:cursor-pointer hover:text-black"/>
      <FaYoutube className="hover:cursor-pointer hover:text-black"/>
      <FaSquareInstagram className="hover:cursor-pointer hover:text-black"/>
      </div>
    </div>
      <header className="bg-white text-white shadow-xl">
        {/* Top Section */}
        <div className="flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <div className="">
            <img src={logo} loading="lazy" decoding="async" className="object-cover h-[80px] w-[240px]"/>
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-2xl">
            <div className="relative">
              <input
                type="text"
                    placeholder={placeholders[index]}
                className="w-full rounded-full border border-gray-300 bg-gray-100 py-2 pl-6 pr-10  placeholder-gray-500 focus:outline-none ring-2 ring-red-600 text-black"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-2xl">
            <div className="flex items-center gap-1 text-red-600 cursor-pointer hover:text-black">
              <FaUser />
              <span className="hover:underline">Sign In</span>
            </div>
            <FaHeart className="text-red-600 cursor-pointer hover:text-black" />
            <FaCartShopping className="text-red-600 cursor-pointer hover:text-black" />
          </div>
        </div>

        {/* Bottom Navigation Menu */}
        <nav className="">
          <ul className="flex items-center justify-center gap-8 py-3 font-semibold text-white bg-black tracking-wide text-base">
            <li className="cursor-pointer hover:text-red-600 ">HOME</li>
            <li className="cursor-pointer hover:text-red-600 ">ABOUT US</li>
            <li className="cursor-pointer hover:text-red-600 ">
              SERVICES
            </li>
            <li className="cursor-pointer hover:text-red-600">
              PROMOTION
            </li>
            <li className="cursor-pointer hover:text-red-600 ">CATEGORY</li>
            <li className="cursor-pointer hover:text-red-600 ">CONTACT US</li>
            <li className="cursor-pointer hover:text-red-600 ">FAQ</li>
            <li className="cursor-pointer hover:text-red-600 ">COLLECTIONS</li>
            <li className="cursor-pointer hover:text-black hover:bg-white bg-red-600 py-1 px-4 rounded-xl">BOOK EYE EXAM</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
