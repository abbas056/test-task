import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function BlogUpdates() {
  return (
    <section className="py-20  text-white">
      <h2 className="text-4xl d-flex fd-column al-center jc-center text-center mb-12">
        <span style={{ color: "yellow", fontSize: "1rem" }}>BLOG & NEWS</span>{" "}
        <span className="font-bold">
          Our Latest News & Blog Get <br />
          Every Updates
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="text-left">
          <p className="mt-2" style={{ color: "#B0B0B0" }}>
            February 22th 2024
          </p>
          <h3 className="text-2xl font-bold mt-4">Will you be attending Affiliate Summit Europe?</h3>
          <img src={img3} alt="Blog 1" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="text-left">
          <p className="mt-2" style={{ color: "#B0B0B0" }}>
            February 22th 2024
          </p>
          <h3 className="text-2xl font-bold mt-4">Will you be attending Affiliate Summit Europe?</h3>
          <p style={{ color: "#B0B0B0" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae natus, modi deserunt perferendis in quibusdam, eum eius veniam
            voluptatibus minus quaerat. Sunt inventore et reiciendis ipsam rerum cupiditate in voluptas.
          </p>
          <img src={img2} alt="Blog 2" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="text-left">
          <p className="mt-2" style={{ color: "#B0B0B0" }}>
            February 22th 2024
          </p>
          <h3 className="text-2xl font-bold mt-4">Will you be attending Affiliate Summit Europe?</h3>
          <img src={img1} alt="Blog 3" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default BlogUpdates;
