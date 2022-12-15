import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            developing for the better
          </p>
          <h1 className="py4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">h3lped!</span>
          </h1>
          <h1 className="py4 text-gray-700">
            A Backend developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[%70] m-auto">
            I&apos;m a rookie back-end developer who is interested in API&apos;s and many internet things. 
            Currently I&apos;m working on many Discord related projects and plan to expand my skills to many more languages.
            But I have current projects that I&apos;m working on and plan to release soon.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaTwitter size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaInstagram size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonFill size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
