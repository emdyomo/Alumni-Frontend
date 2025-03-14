"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Gallery() {
    const images = [
        "/img.jpg",
        "/img.jpg",
        "/img.jpg",
        "/img.jpg",
        "/img.jpg",
        "/img.jpg",
        "/img.jpg",
        "/img.jpg",
    ];

    return (
        <main>
            {/* Gallery Section */}
            <section className="py-16 px-6 bg-gray-100 text-center">
                <h3 className="text-3xl font-semibold mb-6 text-gray-800">Gallery</h3>
                <div className="w-full max-w-5xl mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        className="rounded-lg shadow-lg"
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-96"> {/* Increased height */}
                                    <Image 
                                        src={src} 
                                        alt={`Gallery image ${index + 1}`} 
                                        layout="fill" 
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    );
}
