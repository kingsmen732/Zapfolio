import React from "react";
import cross from "../../assets/cross.svg";
import Contact from "../ContactMeForm.jsx"

const ContactModal = (props) => {
  const isDarkMode = props?.mode;

  return (
    <div className="fixed inset-0 z-[1000] w-[90%] md:w-[75%] lg:w-[50%] mx-auto my-auto h-full grid place-items-center overflow-auto ">
      <div
        className={`relative backdrop-blur-lg py-8 px-6 md:px-10 ${isDarkMode
          ? "text-white border border-gray-500 bg-gradient-to-br from-gray-700 to-gray-900"
          : "text-black border border-gray-200 bg-gradient-to-br from-white to-blue-50"
          } shadow-lg rounded-lg w-full`}
      >
        <img
          src={cross}
          alt="Close"
          className="absolute top-5 right-5 w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
          onClick={() => props?.setContactOpen(false)}
        />
        <div
          className={`text-3xl font-bold text-center border-b mx-6 pb-4 mb-6 ${isDarkMode
            ? "border-gray-400 text-teal-300"
            : "border-gray-300 text-blue-600"
            }`}
        >
          Contact Me
        </div>
        <Contact />

      </div>
    </div>
  );
};

export default ContactModal;
