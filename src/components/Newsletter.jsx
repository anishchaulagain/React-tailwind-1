import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 px-2 ml-2 text-center">
            Want to learn about our company?
          </h1>
          <p className="px-2 ml-2 mt-2 text-center">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="my-2 mx-4 ml-2">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 my-6 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#00df9a] t focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              type="email"
              placeholder="Enter Your Email"
            />

            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-2 px-3 py-2.5 text-black ">
              Notify Me
            </button>
          </div>
          <p className="mt-3 text-center">
            We care about the protection of your data. Read our{' '}
            <span className="text-[#00df9a] cursor-pointer">
              Privacy Policy.
            </span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
