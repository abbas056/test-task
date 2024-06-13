import React from "react";
import rectabgle from "../assets/Rectangle-10.png";

function MainContent() {
  return (
    <main className="main-section text-left d-flex fd-column al-start jc-start py-20  text-white">
      <div>
        <h1 className="text-3xl md:text-8xl font-bold mb-4">WE ARE</h1>
        <h2 className="text-3xl md:text-8xl mb-4 font-londrina">WEB DESIGN</h2>
        <h2 className="text-3xl md:text-8xl mb-4">AGENCY</h2>
      </div>
      <div className="my-8 p-rel">
        <img src={rectabgle} alt="Creative Design" className="mx-auto rounded-lg shadow-lg" />
        <button className="p-abs mt-4 bg-yellow-500 px-6 py-2 rounded-full hover:bg-yellow-600">Explore More</button>
      </div>
    </main>
  );
}

export default MainContent;
