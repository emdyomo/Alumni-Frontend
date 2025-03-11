"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import img from "@/assets/img.jpg";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaUsers, FaBriefcase, FaRegCalendarCheck, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const images = [
    "/img.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
  ];
  function AnimatedCounter({ value }: { value: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1000;
      const stepTime = Math.abs(Math.floor(duration / value));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === value) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }, [value]);

    return <span className="text-4xl md:text-5xl font-bold">{count}+</span>;
  }

  return (
    <main className="min-h-screen bg-gray-600">
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
          <a href="/home" className="block md:inline px-4 py-2 text-white hover:text-blue-400">Home</a>
          <a href="/events" className="block md:inline px-4 py-2 text-white hover:text-blue-400">Events</a>
          <a href="/about" className="block md:inline px-4 py-2 text-white hover:text-blue-400">About</a>
          <a href="/features" className="block md:inline px-4 py-2 text-white hover:text-blue-400">Features</a>
          <a href="/gallery" className="block md:inline px-4 py-2 text-white hover:text-blue-400">Gallery</a>
          <a href="/login" className="block md:inline bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login</a>
          <a href="/register" className="block md:inline bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen py-16 md:py-32 bg-cover bg-center bg-no-repeat bg-opacity" style={{ backgroundImage: "url('/img.jpg')" }}>
        <div className="absolute inset-0 bg-grey-900 bg-opacity-0"></div>
        <motion.div className="relative z-10 text-blue-800 px-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Alumni</h2>
          <p className="text-lg mb-6">Stay connected, join events, and grow your network.</p>
          <motion.a href="/register" className="bg-blue-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-200" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
            Join Now
          </motion.a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-23 px-6 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ icon: FaUsers, title: "Networking", text: "Connect with alumni and expand your network." },
            { icon: FaBriefcase, title: "Job Board", text: "Access exclusive job opportunities." },
            { icon: FaRegCalendarCheck, title: "Events", text: "Stay informed about alumni gatherings." }
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div key={i} className="bg-white p-6 rounded-lg shadow-lg border transition-transform transform hover:scale-105" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.2 }}>
              <Icon className="text-blue-600 text-5xl mb-3 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
              <p className="text-gray-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-200 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Community Stats</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ value: 1000, label: "Alumni Members" }, { value: 120, label: "Job Postings" }, { value: 30, label: "Events Held" }].map(({ value, label }, i) => (
            <motion.div key={i} className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.2 }}>
              <AnimatedCounter value={value} />
              <p className="text-lg">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
          {/*Gallery*/}
          <section className="py-16 px-6 bg-gray-100 text-center">
                <h3 className="text-3xl font-semibold mb-6 text-gray-800">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((src, index) => (
                    <div key={index} className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
                      <Image 
                        src={src} 
                        alt={`Gallery image ${index + 1}`} 
                        layout="fill" 
                        objectFit="cover"
                        className="hover:opacity-80 transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
      {/* Footer */}
      <footer className="text-center py-8 bg-gray-900 text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">About Us</h4>
            <p className="text-gray-400">The Alumni Portal helps you stay connected, find jobs, and join events.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <p><a href="/home" className="hover:text-blue-400">Home</a></p>
            <p><a href="/home" className="hover:text-blue-400">Gallery</a></p>
            <p><a href="/home" className="hover:text-blue-400">Events</a></p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4">
             <a href="#"><FaLinkedin size={24} /></a> 
             <a href="#"><FaFacebook size={24} /></a>
             <a href="#"><FaTwitter size={24} /></a>
             <a href="#"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <p className="mt-6">© 2025 Alumni Portal. All rights reserved.</p>
      </footer>
    </main>
  );
}
