import React from "react";
import linkedIn from "@/public/images/linkedin.png";
import github from "@/public/images/github.png";
import discord from "@/public/images/discord.png";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex justify-center  mb-4 absolute w-full bottom-0">
      <a href="https://www.linkedin.com/in/terence-arseneault" target="_blank">
        <Image
          className=" opacity-75 hover:opacity-100 w-14 mx-4"
          src={linkedIn}
          alt="Linked in icon"
        />
      </a>
      <a href="https://github.com/Terence-A" target="_blank">
        <Image
          className=" opacity-75 hover:opacity-100 w-16 px-1 mx-4"
          src={github}
          alt="Github icon"
        />
      </a>

      {/* <Image
        className=" opacity-75 hover:opacity-100 w-16 px-1 mx-4"
        src={discord}
        alt="Github icon"
      /> */}
    </section>
  );
};

export default Footer;
