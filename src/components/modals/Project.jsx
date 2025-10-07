import React, { useState } from 'react';
import githubLogo from "../../assets/github.svg";
import siteLogo from "../../assets/internet.svg";
import cross from "../../assets/cross.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import "swiper/css";
import "swiper/css/free-mode";

const Project = React.memo(({ proj, index }) => {
  const [preview, setPreview] = useState(false);

  return (
    <div
      key={index}
      className="border relative p-6 m-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
        <img
          src={proj.logo}
          alt={`${proj.name} Logo`}
          className="w-20 h-20 md:w-24 md:h-24 object-cover"
        />

        <div className="text-2xl font-semibold text-gray-800">
          {proj.name}
        </div>

        <div className="flex flex-row gap-4">
          <a
            href={proj.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={githubLogo}
              alt="GitHub Logo"
              className="w-10 h-10"
            />
          </a>
          <a
            href={proj.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={siteLogo}
              alt="Website Logo"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>

      <p className="italic text-gray-600 mt-4">{proj.briefDesc}</p>

      <h3 className="font-bold mt-4 text-gray-700">Description:</h3>
      <ul className="list-disc list-inside text-gray-600">
        {proj.desc.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h3 className="font-bold mt-4 text-gray-700">Technologies:</h3>
      <p className="flex justify-between items-center text-gray-600">
        <span>{proj.tech.join(", ")}</span>
        <button
          onClick={() => setPreview(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all duration-300"
        >
          Preview
        </button>
      </p>

      {preview && (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white shadow-xl rounded-lg p-8 relative max-w-3xl w-full">
            <img
              src={cross}
              alt="Close"
              className="absolute top-5 right-5 w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setPreview(false)}
            />

            <h2 className="text-2xl font-semibold text-gray-800">{proj.name} Preview</h2>

            <Swiper
              slidesPerView={1}
              spaceBetween={25}
              loop={false}  
              freeMode={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Autoplay]}
              className="w-full"
            >
              {proj.previewImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    className="w-full h-auto rounded-lg object-cover lazy-load"  // Lazy load images
                    alt={`Preview ${idx}`}
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
});

export default Project;
