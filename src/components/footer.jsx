import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaDiscord,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a] ">AspireX</h1>
          <p className="py-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non
          </p>
          <div className="mx-auto flex md:-[60%] justify-between mt-2 ">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaGithubSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaDiscord size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 w-full">
          <div>
            <h6 className="text-gray-400 font-medium">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="text-gray-400 font-medium">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="text-gray-400 font-medium">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div className="mr-2">
            <h6 className="text-gray-400 font-medium ">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-center text-white mb-10 text-gray-500">
        Credit: Anish Chaulagain
      </h1>
    </>
  );
};
export default Footer;
