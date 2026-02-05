'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>

      {/* Fallback Image */}
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          {/* Spinning Logo */}
          <motion.div
            className="mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-32 h-32 bg-primary-600 border-4 border-white rounded-full flex items-center justify-center mx-auto shadow-lg">
              <span className="text-4xl font-bold text-white">BB</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            BillyB Presents
            <span className="block text-3xl md:text-5xl font-light mt-4">Unforgettable Events</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            End-to-end event solutions from talent booking to custom art walls. Create experiences that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition duration-300 shadow-lg">
              Explore Services
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition duration-300 shadow-lg">
              Get Started
            </a>
            <a href="https://eventbrite.com" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 shadow-lg transform hover:scale-110">
              Tickets
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}