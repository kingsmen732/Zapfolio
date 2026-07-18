import React from "react";
import cross from "../../assets/cross.svg";

const ExperienceModal = (props) => {
  const isDarkMode = props?.mode;

  return (
    <div className="fixed inset-0 z-[1000] w-[90%] md:w-[75%] lg:w-[50%] mx-auto my-auto h-full grid place-items-center overflow-auto">
      <div
        className={`relative backdrop-blur-lg py-8 px-6 md:px-10 ${
          isDarkMode
            ? "text-white border border-gray-500 bg-gradient-to-br from-gray-700 to-gray-900"
            : "text-black border border-gray-200 bg-gradient-to-br from-white to-blue-50"
        } shadow-lg rounded-lg w-full`}
      >
        <img
          src={cross}
          alt="Close"
          className="absolute top-5 right-5 w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
          onClick={() => props?.onClose()}
        />
        <div
          className={`text-3xl font-bold text-center border-b mx-6 pb-4 mb-6 ${
            isDarkMode
              ? "border-gray-400 text-teal-300"
              : "border-gray-300 text-blue-600"
          }`}
        >
          Experience
        </div>
        <div className="space-y-8">
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xl font-semibold">VITOMIZE – Medical Startup</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Role: AI – Software Developer</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-gray-800 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
              >
                Full-time
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm leading-6 text-gray-900 dark:text-gray-500">
              <li>Developed a real-time patient monitoring system utilizing medical electronics and WebSockets for continuous vital-sign tracking.</li>
              <li>Implemented a self-deployable database to improve patient data management.</li>
              <li>Engineered predictive algorithms to detect abnormalities in patient vitals and prioritize alerts.</li>
              <li>Designed a token-based notification system that alerted doctors of critical conditions for timely medical intervention.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xl font-semibold">OctaNet Services Pvt Ltd</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Role: Python Intern</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-gray-800 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
              >
                Internship
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm leading-6 text-gray-900 dark:text-gray-500">
              <li>Developed a transaction validation platform using Flask.</li>
              <li>Implemented customer ID validation against account information.</li>
              <li>Applied responsive design principles for cross-device compatibility.</li>
              <li>Integrated encryption techniques to protect sensitive transaction data.</li>
            </ul>
          </section>
        </div>
        <div className="mx-auto flex justify-center mt-6">
          <button
            onClick={() => props?.onClose()}
            className={`px-6 py-2 font-semibold rounded-md shadow-md transition-all duration-200 ease-in-out ${
              isDarkMode
                ? "bg-teal-500 text-white hover:bg-teal-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
