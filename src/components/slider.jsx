import React, { useState } from 'react';
import BentoLayout from './BentoLayout';
import ProfileSidebar from './ProfileSidebar';
import Footer from './Footer';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Education from './EducationSection';

const Slider = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [isHorizontalSwipe, setIsHorizontalSwipe] = useState(true); // State to track swipe direction

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        const diffX = e.touches[0].clientX - startX;
        const diffY = e.touches[0].clientY - startY;
        // Calculate swipe angle
        const angle = Math.abs(diffY / diffX);
        console.log("angle", angle);
        if (angle>(1.732)) { // Adjusted to determine steepness
            setIsHorizontalSwipe(false); // If swipe angle is too steep, treat it as a vertical swipe
        }else{
            setIsHorizontalSwipe(true);
        }
    };
    return (
        <AwesomeSlider
            className="awesome-slider"
            style={{ height: '100vh', overflow: 'hidden' }} // Keep overflow hidden
            mobileTouch= {isHorizontalSwipe}
        >
            {/* Wrapping div for touch events */}
            <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                className={`flex flex-col justify-between h-full w-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} px-4 lg:px-20 overflow-y-auto`}
            >
                {/* First slide: Profile Sidebar and BentoLayout */}
                <div className="flex flex-col lg:flex-row w-full items-center max-w-7xl mx-auto gap-4 flex-grow">
                    {/* Profile Sidebar */}
                    <div className="flex-1 min-w-[280px] lg:min-w-[300px] rounded-lg p-4 lg:p-6">
                        <ProfileSidebar isDarkMode={isDarkMode} />
                    </div>
                    {/* BentoLayout */}
                    <div className="flex-1 min-w-[280px] lg:min-w-[300px] rounded-lg p-4 lg:p-6 flex-grow">
                        <BentoLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    </div>
                </div>
                {/* Footer */}
                <div className="my-4 lg:my-6">
                    <Footer />
                </div>
            </div>

            {/* Second slide: Education Section */}
            <div className={`flex justify-center items-center h-full w-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
                <Education isDarkMode={isDarkMode} />
            </div>
        </AwesomeSlider>
    );
};

export default Slider;
