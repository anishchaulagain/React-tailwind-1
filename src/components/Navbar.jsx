import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex h-22 items-center max-w-[1240px] mx-auto pr-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">AspireX</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">HOME</li>
        <li className="p-4 cursor-pointer">COMPANY</li>
        <li className="p-4 cursor-pointer">RESOURCES</li>
        <li className="p-4 cursor-pointer">ABOUT</li>
        <li className="p-4 cursor-pointer">CONTACT</li>
      </ul>
      <div onClick={handleNav} className="pt-3 cursor-pointer block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
      </div>
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out  duration-500 '
            : 'fixed left-[-100%] w-[60%] top-0 h-full ease-in-out duration-500'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 ">
          AspireX
        </h1>
        <ul className="p-3">
          <li className="p-4 border-b border-gray-600  cursor-pointer hover:border-gray-800">
            HOME
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:border-gray-800">
            COMPANY
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:border-gray-800">
            RESOURCES
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:border-gray-800">
            ABOUT
          </li>
          <li className="p-4 border- border-gray-600 cursor-pointer hover:border-gray-800">
            CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
