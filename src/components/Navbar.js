import React from "react";
import addweb from "../assets/addweb.webp"
import addmobile from "../assets/addmobile.webp"
import { FiMenu } from 'react-icons/fi';
import { BiWorld } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import { TfiUser } from "react-icons/tfi"
const Navbar = () => {
  return <div className="">
    {/* Add */}

    <div className="flex sm:hidden">
      <img src={addmobile} alt="" />
    </div>
    {/* left */}

    <div className="hidden sm:flex">
      <img src={addweb} alt="" />
    </div>
    <div className="bg-[#005599] text-white">
      <FiMenu className="w-12 h-10" />
      <BiWorld className="w-12 h-10" />
    </div>
    {/* Midle */}

    {/* Right */}

    <div className=" text-white">
      <BsCart2 className="w-9 h-9" />
    </div>



  </div>;
};

export default Navbar;
