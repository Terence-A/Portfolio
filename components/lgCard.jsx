import React from "react";
import Image from "next/image";
import factVImg from "@/public/images/fact-v.png";

const LgCard = (props) => {
  conole.log(props.repoLInk);
  return (
    <div>
      <section className="flex-col w-1/2">
        <Image
          className="rounded-t-3xl"
          src={factVImg}
          alt="Image of fact-v-lounge screen shot"
        ></Image>
        <div className="bg-gray-900 rounded-b-3xl p-4">
          <h2 className="text-white  p-2 rounded-b-3xl">
            Group Full Stack Project
          </h2>
          <a
            className="text-gray-400 p-2"
            target="_blank"
            href="https://github.com/Terence-A/fact-v-tech-lounge?tab=readme-ov-file"
          >
            Github Repository
          </a>
        </div>
      </section>
    </div>
  );
};

export default LgCard;
