"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaUsers, FaBriefcase, FaRegCalendarCheck, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center relative">
        <h1 className="text-xl md:text-2xl font-bold text-white">Alumni Portal</h1>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
            

          </button>
        </div>
        {/* Desktop Menu */}
        <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:flex md:space-x-4 transition-all ${menuOpen ? "block" : "hidden"}`}>
          <a href="#" className="block md:inline px-4 py-2 text-white hover:text-blue-400">Home</a>
          <a href="#" className="block md:inline px-4 py-2 text-white hover:text-blue-400">Events</a>
          <a href="#" className="block md:inline px-4 py-2 text-white hover:text-blue-400">Features</a>
          <a href="#" className="block md:inline px-4 py-2 text-white hover:text-blue-400">Gallery</a>
          <a href="/login" className="block md:inline bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login</a>
          <a href="/register" className="block md:inline bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Register</a>
        </div>
      </nav>

    </main>
  );
}
