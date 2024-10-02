import React, { useState } from "react";
import { IoCart } from "react-icons/io5";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "MEN", link: "/" },
    { name: "WOMEN", link: "/" },
    { name: "ABOUT US", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="sticky w-full top-0 left-0 z-10 bg-white ">
      <div className="md:flex items-center justify-between py-3 md:px-10 px-7 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 md:bg-transparent pb-12 absolute md:static bg-slate-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-28 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-md md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="shadow-md w-full md:w-1/3 lg:w-1/4 flex items-center h-10 rounded-md overflow-hidden my-1 md:my-0 focus-within:shadow-xl  duration-200">
          <input
            className="shadow-md focus-within:shadow-lg h-full w-full text-sm px-2 outline-none"
            placeholder="Search for products..."
          />
          <div
            id="cart"
            className="text-2xl w-auto h-full flex justify-center items-center px-4 cursor-pointer"
          >
            <IoCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
