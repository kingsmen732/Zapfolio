// import React, { useState } from 'react';
// import BentoLayout from './BentoLayout';
// import ProfileSidebar from './ProfileSidebar';
// import Footer from './Footer';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
// import Education from './EducationSection';
// const Slider = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     const toggleDarkMode = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     return (
//         <AwesomeSlider className="awesome-slider" style={{ height: '100vh', overflow: 'hidden' }}>
//             <div className={`flex flex-col justify-center items-center h-full ${isDarkMode ? 'bg-gray-900 text-white' : 'text-black'} px-4 lg:px-20`}>
//                 <div className="flex flex-col lg:flex-row w-full max-w-8xl mx-auto gap-4">
//                     <div className="flex-1 min-w-[300px] rounded-lg p-6 overflow-hidden">
//                         <ProfileSidebar isDarkMode={isDarkMode} />
//                     </div>
//                     <div className="flex-1 min-w-[300px] rounded-lg p-6 overflow-hidden">
//                         <BentoLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//                     </div>
//                 </div>
//                 <div className="my-5 lg:my-0">
//                     <Footer />
//                 </div>
//             </div>
//             <div>
//                 <Education />
//             </div>
//         </AwesomeSlider>
//     );
// };

// export default Slider;







import React, { useState } from 'react';
import BentoLayout from './BentoLayout';
import ProfileSidebar from './ProfileSidebar';
import Footer from './Footer';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Education from './EducationSection';

const Slider = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <AwesomeSlider 
            className="awesome-slider" 
            style={{ height: '100vh', overflow: 'hidden' }} 
        >
            <div className={`flex flex-col justify-center items-center h-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} px-4 lg:px-20`}>
                <div className="flex flex-col lg:flex-row w-full max-w-8xl mx-auto gap-4">
                    <div className="flex-1 min-w-[300px] rounded-lg p-6 overflow-hidden">
                        <ProfileSidebar isDarkMode={isDarkMode} />
                    </div>
                    <div className="flex-1 min-w-[300px] rounded-lg p-6 overflow-hidden">
                        <BentoLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    </div>
                </div>
                <div className="my-5 lg:my-0">
                    <Footer />
                </div>
            </div>
            <div>
                <Education isDarkMode={isDarkMode} />
            </div>
        </AwesomeSlider>
    );
};

export default Slider;
