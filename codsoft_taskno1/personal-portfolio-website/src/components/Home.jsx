import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] px-[80px]">
      <div className="max-w-[1000px] mx-auto h-screen flex flex-col justify-center">
        <p className="text-white text-[15px] mb-4 md:mb-2 md:text-[20px] lg:text-2xl">
          Hello, It's me
        </p>
        <h1 className="text-4xl text-white mb-4 md:mb-2 md:text-5xl lg:text-7xl">
          Kushal Khadka
        </h1>
        <h2 className="text-4xl text-white mb-4 md:mb-2 md:text-5xl lg:text-7xl">
          And I'm a <span className="text-cyan-500">Frontend Developer</span>
        </h2>
        <p className="text-white text-[15px] mb-4 md:mb-2 md:text-[20px] lg:text-2xl">
          Proficient in HTML, CSS, JavaScript, with experience in frameworks and
          libraries like Tailwind, React, and Redux, focused on creating
          responsive, and user-friendly web applications.
        </p>

        {/* social icons  */}
        <ul className="flex justify-start items-center mb-6">
          <li className="text-white ml-[-14px]">
            <a
              href={"https://www.linkedin.com/in/kushal-khadka-495532255/"}
              target="_blank"
            >
              <FaLinkedin size={40} className="bg-blue-600" />
            </a>
          </li>
          <li className="text-white ml-[-2px]">
            <a href="https://github.com/Kushal1715" target="_blank">
              <FaGithub size={40} />
            </a>
          </li>
          <li className="text-white ml-[-2px]">
            <a href="mailto:kushalkhadka77@gmail.com" target="_blank">
              <HiOutlineMail size={40} className="bg-[#6fc2b0]" />
            </a>
          </li>
        </ul>
        <a
          href="/resume/kushalResume.pdf"
          download
          className="bg-cyan-400 px-5 py-4 w-[155px] rounded-3xl leading-3 text-[18px]"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
