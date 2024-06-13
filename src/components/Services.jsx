import React from "react";
import round from "../assets/round.png";
import ellipse from "../assets/Ellipse.png";
import rightUp1 from "../assets/right-up1.png";
import rightUp from "../assets/right-up.png";

function Services() {
  return (
    <section className="services py-20  text-white">
      <h2 className="text-4xl d-flex fd-column al-center jc-center text-center mb-12">
        <div className="d-flex  al-center jc-center gap-2">
          <span>
            Unique <strong>Ideas</strong>
          </span>
          <img src={round} alt="" />
        </div>
        <div className="d-flex  al-center jc-center gap-2">
          <img className="w-max rounded-lg shadow-lg" src={rightUp1} alt="" />
          <span>
            <strong>For Your</strong> Business
          </span>
        </div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8">
        <div className="text-left d-flex fd-column jc-s-between">
          <h3 className="text-2xl  mb-4">Web Design & Development</h3>
          <div className="bottom d-flex jc-s-between al-center">
            <img src={rightUp} alt="" />
            <span className="text-2xl">01</span>
          </div>
        </div>
        <div className="text-left d-flex fd-column jc-s-between">
          <h3 className="text-2xl  mb-4">
            Advertising and <br /> Marketing Campaigns
          </h3>
          <p>Effective marketing strategies to boost your brand. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className="bottom d-flex jc-s-between al-center">
            <img src={rightUp1} alt="" />
            <span className="text-2xl c-yellow">02</span>
          </div>
        </div>
        <div className="text-left d-flex fd-column jc-s-between">
          <h3 className="text-2xl  mb-4">
            Creative Consulting <br /> and Development
          </h3>

          <div className="bottom d-flex jc-s-between al-center">
            <img src={rightUp} alt="" />
            <span className="text-2xl">03</span>
          </div>
        </div>
        <div className="text-left d-flex fd-column jc-s-between">
          <h3 className="text-2xl  mb-4">
            Branding and <br /> Identity Design
          </h3>

          <div className="bottom d-flex jc-s-between al-center">
            <img src={rightUp} alt="" />
            <span className="text-2xl">04</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
