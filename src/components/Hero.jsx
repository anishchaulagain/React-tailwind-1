import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 md:text-3xl sm:text-2xl text-1xl">
          THINK BIG, THINK CODING
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
          Aspiring Innovation
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold p-2">
            Our Offerings
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold text-[#279AF1]"
            strings={['FRONTEND', 'BACKEND', 'FULLSTACK']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-1xl sm:text-1xl text-sm  text-gray-600 pt-1">
          Join now for USD 9.99 per month. Cancel anytime.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#f5f749] ">
          Start your free trial*
        </button>
      </div>
    </div>
  );
};

export default Hero;
