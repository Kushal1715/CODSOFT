import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-[80px]"
    >
      <form
        method="POST"
        action="https://getform.io/f/agdyvmyb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="flex justify-center items-center text-white">
          <h1 className="italic text-5xl inline text-center border-b-8 border-cyan-500 font-bold mb-6">
            Contact Me
          </h1>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 text-black"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-cyan-600  px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
