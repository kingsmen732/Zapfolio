import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import githubLogo from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";
import xLogo from "../assets/x-logo.svg";
import mailLogo from "../assets/mail.png";
import experienceImage from "../assets/experience.svg";
import resumeImage from "../assets/resume.svg";
import backgroundImage from "../assets/profile.png";
import setupImage from "../assets/setup.jpg";
import { email, github, linkedin, twitter, resume } from "../profileconfig";

const BentoLayout = () => {
  const gridRef = useRef(null);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const elements = gridRef.current.children;
    gsap.set(elements, {
      opacity: 0,
      y: () => -Math.random() * 500 - 100,
      x: () => 50 - Math.random() * 100,
    });
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      x: 0,
      stagger: 0.1,
      ease: "elastic.out(1, 0.75)",
      duration: 1.2,
      delay: 0.5,
      onComplete: () => setAnimationDone(true),
    });
  }, []);

  useEffect(() => {
    if (animationDone) {
      const elements = gridRef.current.children;
      for (let element of elements) {
        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: 1.1,
            duration: 0.2,
            ease: "Power1.easeOut",
            overwrite: "auto",
            zIndex: 10,
          });
        });
        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            duration: 0.2,
            ease: "Power1.easeOut",
            overwrite: "auto",
            zIndex: 1,
          });
        });
      }
    }
  }, [animationDone]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4"
    >
      <div
        className="col-span-1 sm:col-span-2 lg:col-span-2 aspect-square sm:aspect-[2/1] rounded-xl border-transparent p-4 shadow-md flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="text-xl lg:text-4xl text-black font-bold">
          Who Am I?
        </span>
      </div>

      <div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <img
            src={resumeImage}
            alt="Resume"
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      <div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
        <img
          src={experienceImage}
          alt="Experience"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 aspect-square sm:aspect-[4/1] rounded-xl border-transparent shadow-md overflow-hidden">
        <img
          src={setupImage}
          alt="Setup"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img
            src={githubLogo}
            alt="GitHub Logo"
            className="w-full h-full object-cover"
          />
        </a>
      </div>
      <div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img
            src={linkedInLogo}
            alt="LinkedIn Logo"
            className="w-full h-full object-cover"
          />
        </a>
      </div>
      <div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <img
            src={xLogo}
            alt="XTwitter"
            className="w-full h-full object-cover"
          />
        </a>
      </div>
      <div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
        <a href={`mailto:${email}`}>
          <img
            src={mailLogo}
            alt="Mail Logo"
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </div>
  );
};

export default BentoLayout;
