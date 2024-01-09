import React from "react";
import signImg from "@/public/images/sign.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-wrap  p-4">
      <div className="w-1/2 pl-16">
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
          <ul className="flex">
            <li className="px-2 hover:border-b-8 hover:border-blue-800 hover:duration-150">
              Skills
            </li>
            <li className="px-2 hover:border-b-8 hover:border-blue-800 hover:duration-150">
              Education
            </li>
            <li className="px-2 hover:border-b-8 hover:border-blue-800 hover:duration-150">
              Certifications
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
