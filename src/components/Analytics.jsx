import React from 'react';

const Analytics = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 flex flex-cols">
        <img
          className="w-[500px] mx-auto py-4"
          src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX8124794.jpg "
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">
            WEBSITE ANALYTCS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Website Analytics{' '}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non
          </p>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
