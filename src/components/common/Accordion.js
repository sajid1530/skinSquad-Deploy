"use client";

import React, { useState } from "react";

const Accordion = ({ title, content }) => {

  
  const [isActive, setIsActive] = useState(false);
 
  return (
    <div className="" >
      <div
        className={`rounded-lg cursor-pointer py-3 px-4 m-2 flex justify-between items-center border-2 border-[#1F8891] ${
          isActive ? "bg-[#1F8891] text-white" : ""
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="text-sm md:text-[16px] w-[80%]">{title}</div>
        <div className="text-xl">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div
          className={`accordion-content text-md text-justify md:text-[15px] py-4 px-8 ${
            isActive ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;