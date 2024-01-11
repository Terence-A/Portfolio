import React from "react";
import Image from "next/image";
import whatsForDinner from "@/public/images/whatsForDinner.png";

const SmCard = (props) => {
  return (
    <div>
      <section className="flex-col w-96 m-12 ">
        <Image
          className="rounded-t-2xl w-96 h-64"
          src={props.image}
          alt="Image of whats for dinner app"
        ></Image>
        <div className="bg-gray-800 p-4 rounded-b-2xl">
          <h2 className="text-white">{props.title}</h2>
          <a target="_blank" href={props.repoLink}>
            <p className="text-gray-400">Github Repo</p>
          </a>

          {props.deployLink ? (
            <a target="_blank" href={props.deployLink}>
              <p className="text-gray-400">Live Site</p>
            </a>
          ) : (
            <a className="text-gray-400">
              Live Site: <span className="text-red-600">N/A</span>
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default SmCard;
