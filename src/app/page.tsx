"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBriefcase, FaCalendarAlt, FaNetworkWired, FaRegCalendarCheck, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Home() {
  // Animated Counter Function
  const AnimatedCounter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [value]);

    return <span className="text-5xl font-bold">{count}+</span>;
  };

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Alumni Portal</h1>
        <div className="flex space-x-4">
          <a href="/home" className="text-blue-700 hover:text-blue-600">Home</a>
          <a href="/login" className="text-blue-700 hover:text-blue-600">Login</a>
          <a href="/about" className="text-blue-700 hover:text-blue-600">About</a>
          <a href="/features" className="text-blue-700 hover:text-blue-600">Features</a>
          <a href="/contacts" className="text-blue-700 hover:text-blue-600">Contacts</a>
          <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Register</a>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section 
        className="relative flex flex-col items-center justify-center text-center py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

        {/* Content */}
        <motion.div 
          className="relative z-10 text-white px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Connect with Alumni</h2>
          <p className="text-lg mb-6">Stay connected, join events, and grow your network.</p>
          <motion.a 
            href="/register" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Join Now
          </motion.a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white text-center">
        <motion.h3 className="text-3xl font-semibold mb-6 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          Our Features
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <FaNetworkWired className="text-blue-600 text-5xl mb-3 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Networking</h4>
            <p className="text-gray-600">Connect with alumni and expand your professional network.</p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <FaBriefcase className="text-blue-600 text-5xl mb-3 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Job Board</h4>
            <p className="text-gray-600">Access exclusive job opportunities from our alumni network.</p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <FaRegCalendarCheck className="text-blue-600 text-5xl mb-3 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Events</h4>
            <p className="text-gray-600">Stay informed about upcoming alumni gatherings and conferences.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (Now Below Features Section) */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <motion.h3
          className="text-4xl font-semibold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Alumni Community Stats
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-12 px-8">
          {/* Stat 1 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedCounter value={1000} />
            <p className="text-lg">Alumni Members</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedCounter value={120} />
            <p className="text-lg">Job Postings</p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatedCounter value={30} />
            <p className="text-lg">Events Held</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}

      <footer className="text-center py-6 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">About Us</h4>
            <p className="text-gray-400">
              The Alumni Portal helps former students stay connected, find job opportunities, 
              and participate in exclusive alumni events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/home" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/features" className="hover:text-blue-400">Features</a></li>
              <li><a href="/contacts" className="hover:text-blue-400">Contacts</a></li>
            </ul>
          </div>


          {/*Social media */}
         <div> <h4 className="text-xl font-semibold text-white mb-4">Connect With Us</h4>
           <div className="flex space-x-4">
              <a href="#"className="text-gray-400 hover:text-blue-400"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><FaLinkedin size={24} /></a>
            </div>
          </div>

        </div>
          <div><p>© 2025 Alumni Portal. All rights reserved.</p></div>
        
      </footer>
    </main>
  );
}
