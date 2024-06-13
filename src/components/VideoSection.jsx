import React from "react";

function VideoSection() {
  return (
    <section className="play-section py-20 relative  text-white flex items-center justify-center">
      <button className="play-button absolute w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-white text-black rounded-full flex items-center justify-center">
        Play
      </button>
    </section>
  );
}

export default VideoSection;
