"use client";
import { useState, useEffect } from "react";
import Topbar from "./Topbar";
import Nav from "./Nav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out bg-royal-gold
          ${isScrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"}
        `}
      >
        <Topbar />
      </div>
      <div className="bg-white">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
