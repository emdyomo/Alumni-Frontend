"use client";

import { useState, useEffect } from "react";
import Page from "../page";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        !(event.target as HTMLElement).closest(".menu-container, .menu-toggle")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold text-white">Alumni Portal</h1>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden menu-toggle">
        <button onClick={() => setMenuOpen(true)}>
          <FaBars className="text-white text-2xl" />
        </button>
      </div>

      {/* Mobile Menu (Slide in from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-center justify-center space-y-6 menu-container`}
      >
        {/* Close Button */}
        <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5">
          <FaTimes className="text-white text-2xl" />
        </button>

        <a href="/Page" className="block px-6 py-3 hover:text-blue-400">Home</a>
        <a href="#" className="block px-6 py-3 hover:text-blue-400">Events</a>
        <a href="#" className="block px-6 py-3 hover:text-blue-400">Features</a>
        <a href="#" className="block px-6 py-3 hover:text-blue-400">Gallery</a>
        <a href="/login" className="block px-6 py-3 hover:text-blue-400">Login</a>
        <a href="/register" className="block px-6 py-3 hover:text-blue-400">Register</a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:space-x-6">
        <a href="/Page" className="text-white hover:text-blue-400">Home</a>
        <a href="#" className="text-white hover:text-blue-400">Events</a>
        <a href="#" className="text-white hover:text-blue-400">Features</a>
        <a href="#" className="text-white hover:text-blue-400">Gallery</a>
        <a href="/login" className="text-white px-4 py-2 rounded-lg hover:text-blue-400">Login</a>
        <a href="/register" className="text-white px-4 py-2 rounded-lg hover:text-blue-400">Register</a>
      </div>
    </nav>
  );
}
