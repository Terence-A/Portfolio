import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center  py-2 border-b-2 border-gray-400 border-opacity-25 sticky top-0 bg-black">
      <Link href="/">
        <h2 className="text-white font-semibold ml-20 hover:text-yellow-500 hover:duration-200 border-4  rounded-full p-4 hover:border-black hover:bg-blue-800">
          TA
        </h2>
      </Link>
      <ul className="text-gray-400 duration-200 flex justify-between items-center mr-20">
        <li
          className="text-2xl 
        hover:text-yellow-500 
        px-4 
        hover:border-b-8
        hover:duration-
         hover:border-blue-800 p-3"
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className="text-2xl 
        hover:text-yellow-500 
        px-4 
        hover:border-b-8
        hover:duration-
          hover:border-blue-800 p-3"
        >
          <Link href="/projects">Projects</Link>
        </li>
        <li
          className="text-2xl 
        hover:text-yellow-500 
        px-4 
        hover:border-b-8
        hover:duration-
         hover:border-blue-800 p-3"
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
