"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section 
                className="relative flex flex-col items-center justify-center text-center min-h-screen py-16 md:py-32 bg-cover bg-center bg-no-repeat"
                style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
                <motion.div 
                    className="relative z-10 text-white px-6" // Changed to white for better contrast
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl rounded-lg font-bold mb-4">Connect with Alumni</h2>
                    <p className="text-lg mb-6">Stay connected, join events, and grow your network.</p>
                    <motion.a 
                        href="/register" 
                        className="bg-blue-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-200" 
                        initial={{ scale: 0.9 }} 
                        animate={{ scale: 1 }} 
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        Join Now
                    </motion.a>
                </motion.div>
            </section>
        </main>
    );
}