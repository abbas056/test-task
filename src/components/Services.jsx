import React from "react";
import round from "../assets/round.png";
import rightUp1 from "../assets/right-up1.png";
import rightUp from "../assets/right-up.png";

function Services() {
  return (
    <section className="bg-black w-full md:w-4/5 mx-auto py-20 text-white rounded-2xl mb-14">
      <h2 className="text-3xl md:text-4xl flex flex-col items-center justify-center text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span>
            Unique <strong>Ideas</strong>
          </span>
          <img className="w-10 md:w-16 lg:w-40" src={round} alt="" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <img className="w-8 md:w-12 lg:w-20 rounded-lg shadow-lg" src={rightUp1} alt="" />
          <span>
            <strong>For Your</strong> Business
          </span>
        </div>
      </h2>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-8 mx-auto">
        <div className="rounded-l-xl text-left flex border border-gray-400 border-opacity-70 p-4 md:p-8 flex-col justify-between gap-10">
          <h3 className="text-xl md:text-2xl mb-4">Web Design & Development</h3>
          <div className="bottom flex items-center justify-between">
            <img className="w-6 md:w-10" src={rightUp} alt="" />
            <span className="text-3xl md:text-4xl text-gray-500 font-londrina">01</span>
          </div>
        </div>
        <div className="text-left flex border border-gray-400 border-opacity-70 p-4 md:p-8 flex-col justify-between gap-10">
          <h3 className="text-xl md:text-2xl mb-4">
            Advertising and <br /> Marketing Campaigns
          </h3>
          <p className="text-sm md:text-base">
            Effective marketing strategies to boost your brand. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="bottom flex items-center justify-between">
            <img className="w-6 md:w-12" src={rightUp1} alt="" />
            <span className="text-3xl md:text-4xl text-yellow-500">02</span>
          </div>
        </div>
        <div className="text-left flex border border-gray-400 border-opacity-70 p-4 md:p-8 flex-col justify-between gap-10">
          <h3 className="text-xl md:text-2xl mb-4">
            Creative Consulting <br /> and Development
          </h3>
          <div className="bottom flex items-center justify-between">
            <img className="w-6 md:w-10" src={rightUp} alt="" />
            <span className="text-3xl md:text-4xl text-gray-500 font-londrina">03</span>
          </div>
        </div>
        <div className="rounded-r-xl text-left flex border border-gray-400 border-opacity-70 p-4 md:p-8 flex-col justify-between gap-10">
          <h3 className="text-xl md:text-2xl mb-4">
            Branding and <br /> Identity Design
          </h3>
          <div className="bottom flex items-center justify-between">
            <img className="w-6 md:w-10" src={rightUp} alt="" />
            <span className="text-3xl md:text-4xl text-gray-500 font-londrina">04</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
