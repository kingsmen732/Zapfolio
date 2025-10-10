import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { name, skills, title } from '../profileconfig';

const ProfileSidebar = ({ isDarkMode }) => {
  // const isDarkMode = props.isDarkMode;

  // Convert your existing skills array (from react-typical format)
  // to the format react-type-animation expects.
  // react-type-animation expects: ['text', duration, 'next text', duration, ...]
  // Example: ['Frontend Developer', 2000, 'Backend Developer', 2000, ...]

  const animationSequence = skills.flatMap(skill => [skill, 2000]); // 2s per skill

  return (
    <div className="flex flex-col justify-center h-full p-4">
      <h2 className={`text-2xl lg:text-3xl font-light ${isDarkMode ? 'text-white' : 'text-black'}`}>
        I'm
      </h2>
      <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
        {name}
      </h1>
      <p className="text-xl lg:text-2xl font-light mb-4">{title}</p>

      <p className={`text-xl lg:text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <TypeAnimation
          sequence={animationSequence}
          wrapper="p"
          speed={50}
          repeat={Infinity}
        />
      </p>
    </div>
  );
};

export default ProfileSidebar;
