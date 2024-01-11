"use client";

import React, { useState } from "react";
import signImg from "@/public/images/sign.jpg";
import Image from "next/image";
import AboutList from "@/components/aboutList";

const About = () => {
  const [menuItem, setMenuItem] = useState("Skills");

  const handleSelect = (selectedBtn) => {
    console.log(selectedBtn);
    setMenuItem(selectedBtn);
  };

  return (
    <section className="flex flex-wrap justify-between  p-4">
      <div className="w-[600px] pl-28 ">
        <Image src={signImg} alt="image of sign saying do something great" />
      </div>
      <div className="text-white w-1/2 px-28 h-100 flex-col mt-12">
        <h2 className="text-5xl pb-8 font-semibold">About Me</h2>
        <p className="pb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          quibusdam omnis quasi, nesciunt ratione laudantium repellendus ullam
          voluptatibus unde temporibus pariatur veritatis vel aut labore officia
          itaque distinctio suscipit aliquam? Quam eos sed aperiam magni? Facere
          nemo eum ipsum, veniam ex dolore, fugiat pariatur enim commodi neque
          architecto eveniet quibusdam itaque. Qui quibusdam repellat, iure
          reprehenderit saepe sed nesciunt autem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Delectus sequi officiis saepe quis earum
          ad possimus consectetur libero nisi, inventore quod at nobis sapiente
          laborum consequuntur dolorum quia aut placeat.
        </p>
        <div>
          <menu className="flex absolute ">
            <AboutList onSelect={() => handleSelect("Skills")}>
              Skills
            </AboutList>
            <AboutList onSelect={() => handleSelect("Education")}>
              Education
            </AboutList>
            <AboutList onSelect={() => handleSelect("Certifications")}>
              Certifications
            </AboutList>
          </menu>
          <article className="mt-2 relative top-8 mb-36  pl-4 ">
            <p>{menuItem}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
