import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full xl:h-screen bg-[#0a192f] text-white px-[80px] md:px-[130px] lg:px-[145px] pt-[100px]  xl:pt-0">
      <div className="flex flex-col lg:flex-row justify-start items-center w-full h-full">
        {/* left section  */}
        <div className="lg:w-[60%] flex flex-col justify-center items-start lg:mb-0 mb-[30px]">
          <h1 className="text-3xl md:text-5xl xl:text-7xl">Passionate</h1>
          <h1 className="text-3xl md:text-5xl xl:text-7xl text-cyan-400 mb-4">
            {" "}
            Frontend Developer
          </h1>
          <p className="text-[20px] md:text-2xl xl:text-3xl font-bold mb-4 lg:w-[80%]">
            Creative web developer focusing on responsive design and front-end
            technologies.
          </p>
          <p className="text-[20px] md:text-2xl  mb-6 lg:w-[80%]">
            Passionate about web development, I specialize in HTML, CSS,
            JavaScript, and modern frameworks and libraries like Tailwind,
            React, and Redux. I thrive on creating seamless and responsive user
            experiences.
          </p>

          <a
            href="mailto:kushalkhadka77@gmail.com"
            target="_blank"
            className="bg-cyan-400 px-5 py-4 w-[124px] rounded-3xl leading-3 text-[18px] text-black"
          >
            Contact me
          </a>
        </div>

        {/* right section  */}
        <div className="lg:w-[40%] md:flex md:flex-col md:justify-center md:items-center pb-[100px] sm:pb-0">
          <img
            src="/myImg/myProfile.png"
            className="w-[250px] h-[250px] lg:h-[410px] lg:w-[410px] "
          />
          <ul className="flex justify-center items-center mb-6">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
