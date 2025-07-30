import React from "react";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useEffect,useState } from "react";


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
      <header className="bg-black text-white shadow-sm">
        {/* Top Section */}
        <div className="flex items-center justify-between px-6 py-6">
          {/* Logo */}
          <div className="text-xl font-bold text-white hover:text-red-600 hover:underline">
            ATAL Optical Store
          </div>

          {/* Search Bar */}
          <div className="flex-grow mx-8 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                    placeholder={placeholders[index]}
                className="w-full rounded-full border border-gray-300 bg-gray-100 py-2 pl-6 pr-10  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-xl">
            <div className="flex items-center gap-1 text-white cursor-pointer hover:text-red-600">
              <FaUser />
              <span className="hover:underline">Sign In</span>
            </div>
            <FaHeart className="text-white cursor-pointer hover:text-red-600" />
            <FaCartShopping className="text-white cursor-pointer hover:text-yellow-400" />
          </div>
        </div>

        {/* Bottom Navigation Menu */}
        <nav className="bg-gray-100">
          <ul className="flex items-center justify-center gap-8 pb-5 pt-3 font-semibold text-white bg-black tracking-wide text-base">
            <li className="cursor-pointer hover:text-red-600">EYEGLASSES</li>
            <li className="cursor-pointer hover:text-red-600">SUNGLASSES</li>
            <li className="cursor-pointer hover:text-red-600">
              SCREEN GLASSES
            </li>
            <li className="cursor-pointer hover:text-red-600">
              CONTACT LENSES
            </li>
            <li className="cursor-pointer hover:text-red-600">ACCESSORIES</li>
            <li className="cursor-pointer hover:text-red-600">STORE LOCATOR</li>
            <li className="cursor-pointer hover:text-red-600">SALE</li>
            <li className="cursor-pointer hover:text-red-600">BLOG</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
