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
      <div
        className="relative w-full h-screen md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "100vh" }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="w-1/2 md:w-24 h-auto md:h-24 rounded-full bg-transparent bg-opacity-70 text-white flex flex-col items-center justify-center hover:bg-opacity-80 relative">
            <img src={playIcon} alt="Play" className="w-2/3 md:w-full h-auto md:h-full" />
            <span className="absolute">Play</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-8">
        <div className=" z-10 flex justify-center">
          <img src={floatingImage} alt="Floating" className="w-4/5 md:w-4/5 rounded-lg shadow-lg" />
        </div>
        <div className="z-10 bg-gray-700 text-white p-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8  rounded-2xl">
          <div className="flex flex-col items-center space-y-4 gap-10">
            <img src={avatar1} alt="Avatar" className="w-16 h-16 rounded-full" />
            <img src={avatar2} alt="Avatar" className="-ml-20 w-16 h-16 rounded-full" />
            <img src={avatar3} alt="Avatar" className="w-16 h-16 rounded-full" />
          </div>
          <div className="flex flex-col space-y-4 text-left">
            <p className="text-lg max-w-lg">
              I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of
              high-quality parts and accessories, combined with their competitive prices.
            </p>
            <div>
              <h3 className="text-2xl">Marvin McKinney</h3>
              <p className="text-gray-500">Web designer</p>
            </div>
            <div className="flex space-x-4">
              <button className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">&lt;</button>
              <button className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResponsiveSection;
