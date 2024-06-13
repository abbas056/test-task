import React from "react";
import playIcon from "../assets/play-btn-bg.png";
import backgroundImage from "../assets/play-section-bg.png";
import floatingImage from "../assets/img-full.png";
import avatar1 from "../assets/Ellipse29.png";
import avatar2 from "../assets/Ellipse156.png";
import avatar3 from "../assets/Ellipse157.png";

function ResponsiveSection() {
  return (
    <section className="relative bg-black text-white">
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="w-24 h-24 rounded-full bg-transparent bg-opacity-70 text-white flex flex-col items-center justify-center hover:bg-opacity-80 relative">
            <img src={playIcon} alt="Play" className="w-32 h-32" />
            <span className="absolute">Play</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 py-8">
        <div className="w-full lg:w-1/2 xl:w-2/5 mb-8 lg:mb-0">
          <img src={floatingImage} alt="Left" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="bg-gray-800 bg-opacity-90 p-8 md:p-16 rounded-2xl w-full lg:w-1/2 xl:w-2/5 mx-auto flex flex-col lg:flex-row lg:items-center mt-8 lg:mt-12">
          <div className="flex flex-col items-center space-y-4 lg:space-y-8">
            <img src={avatar1} alt="Avatar 1" className="w-16 h-16 rounded-full" />
            <img src={avatar2} alt="Avatar 2" className="w-16 h-16 rounded-full -ml-6" />
            <img src={avatar3} alt="Avatar 3" className="w-16 h-16 rounded-full" />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:ml-8 mt-8 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="text-left lg:max-w-lg">
              <p className="text-lg">
                I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of
                high-quality parts and accessories, combined with their competitive prices.
              </p>
              <div className="mt-4">
                <h3 className="text-2xl font-bold">Marvin McKinney</h3>
                <p className="text-gray-500">Web designer</p>
                <div className="flex space-x-4 mt-4 lg:mt-0">
                  <button className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">&lt;</button>
                  <button className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResponsiveSection;
