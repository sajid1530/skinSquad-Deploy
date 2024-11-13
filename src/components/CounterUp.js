"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const CounterUp = () => {
  const [counterOn, setCounterOn] = useState(true);

  useEffect(() => {
    // Set counterOn to false after component has mounted
    setCounterOn(false);
  }, []);

   

  return (
    <section className="py-28 w-full bgImage bg-gradient-to-r from-[#87B88F] to-[#1F8891]">
      <div className="w-[80%] text-[#fff] justify-evenly mx-auto flex flex-col md:flex-row flex-wrap">
        <div className="md:mt-0 mt-14">
          <p className="md:text-5xl text-[32px]">
            <CountUp start={0} end={10000} duration={2} delay={0}  />
          </p>
          <p className="text-center text-lg md:mt-2 md:ml-0 -mt-10 ml-20">Downloads</p>
        </div>
        <div className="md:mt-0 mt-14">
          <p className="md:text-5xl text-[32px]">
            <CountUp start={0} end={9000} duration={2} delay={0}  />
          </p>
          <p className="text-center text-lg md:mt-2 md:ml-0 -mt-9 ml-20">Satisfied Patients</p>
        </div>
        <div className="md:mt-0 mt-14">
          <p className="md:text-5xl text-[32px]">
            <CountUp start={0} end={4.0} duration={2} delay={0} />
          </p>
          <p className="text-center  text-lg md:mt-2 md:ml-0 -mt-9 ml-0">Rating on Skinsquad</p>
        </div>
      </div>
    </section>
  );
};

export default CounterUp;