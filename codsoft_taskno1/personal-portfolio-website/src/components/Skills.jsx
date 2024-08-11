import React from "react";
import skills from "../skills.json";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full sm:h-screen bg-[#0a192f] text-gray-300 pt-[80px] sm:pt-[100px] md:pt-0"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mb-6 flex justify-center items-center">
          <p className="text-5xl font-bold inline text-center border-b-8 border-cyan-500 italic">
            My Top Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill) => {
            return (
              <div
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
                key={skill.title}
              >
                <img
                  className="w-20 mx-auto"
                  src={skill.img}
                  alt={`${skill.title} icon`}
                />
                <p className="my-4">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
