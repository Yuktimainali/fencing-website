import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import RegistrationSection from '../Sections/RegistrationSection';
import HeroSection from '../Sections/HeroSection';
import AboutSection from '../Sections/AboutSection';
import GallerySection from '../Sections/GallerySection';
import SocialMediaSection from '../Sections/SocialMediaSection';
import FooterSection from '../Sections/FooterSection';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Elegant Info Banner with sword motif
function InfoBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle sword blade pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent transform -skew-x-12"></div>
        <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent transform skew-x-12"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center text-center">
          <div className="flex items-center space-x-4">
            {/* Elegant pulse indicator */}
            <div className="relative">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="absolute inset-0 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75"></div>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-sm font-light text-slate-300 tracking-wide">
                NEXT NEW FENCER ORIENTATION
              </span>
              <div className="h-4 w-px bg-amber-400/50"></div>
              <span className="text-sm font-semibold text-white tracking-wider">
                AUGUST 9TH, 2025
              </span>
            </div>
            
            <a
              href="https://texasfencingacademy.glide.page/dl/17171d"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-sm font-semibold rounded-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              SECURE YOUR SPOT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: "/images/FencingAcademy.jpg",
      alt: "Precision in Motion - Training Excellence",
    },
    {
      src: "/images/FencingPartnership.jpeg",
      alt: "Advanced Technique Mastery",
    },
    {
      src: "/images/TrainingClass.jpg",
      alt: "Championship Competitive Spirit",
    },
    {
      src: "/images/YoungTalents.jpg",
      alt: "Future Champions in Training",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <InfoBanner />
      <Navbar />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <RegistrationSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <GallerySection 
          galleryImages={galleryImages}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <SocialMediaSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <FooterSection />
      </motion.div>
    </div>
  );
}

