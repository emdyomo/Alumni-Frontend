"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaUsers, FaBriefcase, FaRegCalendarCheck, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Stats() {
    const [menuOpen, setMenuOpen] = useState(false);
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
    <main>
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
    </main>
  );
}
