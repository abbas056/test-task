import React, { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header p-4 flex justify-between items-center  text-white">
      <div className="logo d-flex al-center jc-center gap-2 text-2xl font-bold">
        <img src={logo} alt="" />
        <span>ConsalPro</span>
      </div>
      <nav className="nav hidden md:flex space-x-4">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#pages" className="hover:underline">
          Pages +
        </a>
        <a href="#services" className="hover:underline">
          Services +
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#blogs" className="hover:underline">
          Blogs +
        </a>
      </nav>
      <div className="menu-button md:hidden">
        <button onClick={toggleMenu} className="text-xl">
          &#9776;
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu absolute top-16 left-0 w-full  text-white flex flex-col items-center space-y-4 md:hidden">
          <a href="#home" className="hover:underline" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" className="hover:underline" onClick={toggleMenu}>
            About +
          </a>
          <a href="#pages" className="hover:underline" onClick={toggleMenu}>
            Pages
          </a>
          <a href="#services" className="hover:underline" onClick={toggleMenu}>
            Services +
          </a>
          <a href="#projects" className="hover:underline" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#blogs" className="hover:underline" onClick={toggleMenu}>
            Blogs
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
