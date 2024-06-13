import React from "react";
import imgFull from "../assets/img-full.png";
import user1 from "../assets/Ellipse29.png";
import user2 from "../assets/Ellipse156.png";
import user3 from "../assets/Ellipse157.png";

function Testimonials() {
  return (
    <section className="testimonials d-flex jc-s-around py-20  text-white">
      <img className="left-img" src={imgFull} alt="" />
      <div className="clients d-flex al-center  gap-4 text-left">
        <div className="imgs d-flex fd-column jc-s-between gap-5">
          <img src={user1} alt="" />
          <img src={user2} alt="" />
          <img src={user3} alt="" />
        </div>
        <div className="details d-flex fd-column gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab nihil tempora officiis minus perferendis temporibus voluptatum officia
            enim! Quae quod corrupti harum velit, aut repudiandae officiis voluptate impedit quia in facilis?
          </p>
          <div>
            <h3>Marvin McKinney</h3>
            <p>Web desinger</p>
          </div>
          <div className="arrows d-flex gap-5">
            <span>"-"</span>
            <span>"-"</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
