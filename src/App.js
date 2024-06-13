import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Services from "./components/Services";
import VideoSection from "./components/VideoSection";
import BlogUpdates from "./components/BlogUpdates";
import "./App.scss";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};
function App() {
  return (
    <div className="App text-white">
      <CustomCursor />
      <Header />
      <MainContent />
      <Services />
      <VideoSection />
      <BlogUpdates />
    </div>
  );
}

export default App;
