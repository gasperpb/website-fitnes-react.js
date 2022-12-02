import React from "react";
import addweb from "../assets/addweb.webp"
import addmobile from "../assets/addmobile.webp"
import { FiMenu } from 'react-icons/fi';
import { BiWorld } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import { TfiUser } from "react-icons/tfi"
import logo from "../assets/logo.png"
const Navbar = () => {
  return (<div>
    {/* Add */}
    <div className=" bg-[#005599] flex justify-center">
      <div className="flex sm:hidden mx-auto">
        <img src={addmobile} alt="" />
      </div>
      <div className="hidden sm:flex mx-auto">
        <img src={addweb} alt="" />
      </div>
    </div>

    {/* Navbar */}

    <div className="bg-[#005599] flex items-center justify-between px-3">
      {/* left */}
      <div className=" text-white flex items-center">
        <FiMenu className="w-12 h-10" />
        <BiWorld className="w-12 h-10" />
      </div>

      {/* Middle */}

      <div className=" flex items-center w-20 h-20">
        <img src={logo} alt="" />
      </div>
      <div className="items-center hidden md:flex">
        <input
          type="search"
          className="rounded-[0.3rem] py-1 w-[25rem] lg:w-[35rem]"
        />
      </div>

      {/* Right */}

      <div className=" text-white flex items-center gap-3">
        <BsCart2 className="w-8 h-8" />
        <TfiUser className="w-8 h-8" />
      </div>
    </div>
  </div>
  );
};

export default Navbar;
