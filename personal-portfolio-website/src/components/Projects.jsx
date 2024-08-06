import React from "react";

import projects from "../projects.json";

const Projects = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white px-[80px] pb-[100px] pt-[100px]">
      <div className="flex justify-center items-center">
        <h1 className="italic text-5xl inline text-center border-b-8 border-cyan-500 font-bold mb-6">
          My Projects
        </h1>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center mt-4 gap-8">
          {projects.map((project) => {
            return (
              <div
                className="border-2 border-cyan-500 w-[400px] rounded-xl"
                key={project.title}
              >
                <div className="p-4">
                  <img
                    src={project.img}
                    className="w-[390px] h-[200px] sm:h-[290px] cursor-pointer mb-2"
                  />
                  <div className="mb-4">
                    <h1 className="text-2xl mb-2">{project.title}</h1>
                    <p className="text-[16px]">{project.desc}</p>
                  </div>
                  <div className="text-black flex justify-center items-center">
                    <a href={project.code_link} target="_blank">
                      <button className="px-[30px] border-2 bg-cyan-500 py-2 text-[18px] rounded-2xl">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
