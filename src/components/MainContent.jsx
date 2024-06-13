import React from "react";
import rectabgle from "../assets/Rectangle-10.png";
import vector1 from "../assets/Vector1.png";
import ellipse153 from "../assets/Ellipse-153.png";
import Signature from "../assets/Signature.png";
import SuperToroid from "../assets/SuperToroid-Black-Matte.png";
import Dummy1 from "../assets/Dawn.png"; // Replace with the actual image paths
import Dummy2 from "../assets/Spiral1.png";
import Dummy3 from "../assets/Vector.png";
import Dummy4 from "../assets/Ornament-19.png";

function MainContent() {
  return (
    <main className="w-full flex flex-col py-10 px-4 md:px-8 text-white relative">
      {/* Floating Images */}
      <img src={Dummy1} alt="Dummy1" className="absolute top-24 left-20 w-40 h-40" />
      <img src={Dummy2} alt="Dummy2" className="absolute top-48 right-80 w-32 h-32" />
      {/* <img src={Dummy3} alt="Dummy3" className="absolute bottom-0 right-0 w-24 h-24" /> */}
      <img src={Dummy4} alt="Dummy4" className="absolute bottom-96 right-1/4 w-24 h-24" />

      <div className="w-full flex flex-col md:flex-row py-10 text-white space-y-8 md:space-y-0 md:space-x-8">
        <div className="relative w-full md:w-1/6 flex flex-col justify-end items-start mb-4">
          <h1 className="text-gray-500 font-sans tracking-wide">Induction</h1>
          <h1 className="text-2xl border-b-2 border-gray-500">
            <strong>Creative</strong> Design
          </h1>
        </div>
        <div className="w-full md:w-3/4 flex flex-col justify-end items-start mb-4">
          <div className="flex flex-row md:flex-row items-center gap-4 md:gap-10">
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-0">WE ARE</h1>
            <img className="w-16 md:w-28" src={SuperToroid} alt="SuperToroid" />
          </div>
          <h2 className="text-3xl md:text-6xl lg:text-8xl mb-4 font-londrina">WEB DESIGN</h2>
          <h2 className="text-3xl md:text-6xl lg:text-8xl mb-4 tracking-wide">AGENCY</h2>
          <div className="w-full md:w-3/6 flex flex-col items-start justify-end relative">
            <img src={rectabgle} alt="Creative Design" className="flex w-full rounded-lg shadow-lg" />
            <button className="absolute -right-0 flex flex-col w-20 h-20 bg-yellow-500 px-6 py-2 rounded-full hover:bg-yellow-600 text-black font-bold leading-none text-sm">
              <img className="w-5" src={vector1} alt="" />
              <span>
                Explore <br />
                More
              </span>
            </button>
          </div>
        </div>
        <p className="w-full md:w-2/5 text-base text-gray-500 mb-4 text-left flex items-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea sint officia, et facilis aliquid? amet consectetur adipisicing elit.
          Reiciendis ea sint officia, et facilis aliquid
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-8 space-y-4 md:space-y-0">
        <div className="flex gap-5">
          <span className="w-8 h-8 flex justify-center items-center p-2 font-bold">-</span>
          <span className="bg-yellow-600 w-8 h-8 flex justify-center items-center p-2 font-bold">-</span>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="flex justify-between items-center gap-2">
            <img src={ellipse153} alt="" />
            <div className="text-left">
              <h2 className="text-2xl">Eleanor Pena</h2>
              <p className="text-sm">Eleanor Pena </p>
            </div>
          </div>
          <img src={Signature} alt="" />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
