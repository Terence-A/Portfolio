import React from "react";

const AboutList = ({ children, onSelect }) => {
  return (
    <li className="px-2 hover:border-b-8 hover:border-blue-800 hover:duration-150 hover:cursor-pointer">
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default AboutList;
