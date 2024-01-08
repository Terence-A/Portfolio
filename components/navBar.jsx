import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <h1>Terence Arseneault</h1>
      </Link>
      <li className="text-2xl">
        <Link href="/about">About</Link>
      </li>
      <li className="text-2xl">
        <Link href="/projects">Projects</Link>
      </li>
      <li className="text-2xl">
        <Link href="/contact">Contact</Link>
      </li>
    </nav>
  );
};

export default NavBar;
