import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import homepageImg from '../assets/homepageimg.jpeg'

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Gallery images from the original site
  const galleryImages = [
    {
      src: "https://texasfencingacademy.org/wp-content/uploads/2023/09/IMG_2510-400x284.jpeg",
      alt: "Fencing training session"
    },
    {
      src: "https://texasfencingacademy.org/wp-content/uploads/2023/09/IMG_5800-400x284.jpg",
      alt: "Advanced fencing techniques"
    },
    {
      src: "https://texasfencingacademy.org/wp-content/uploads/2023/09/IMG_5817-400x284.jpg",
      alt: "Competitive fencing"
    },
    {
      src: "https://texasfencingacademy.org/wp-content/uploads/2023/09/IMG_5390-400x284.jpg",
      alt: "Young fencers in training"
    }
  ];

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Refined Info Banner */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">Next New Fencer Orientation</span>
              <span className="text-sm font-bold text-white">August 9th, 2025</span>
              <a 
                href="https://texasfencingacademy.glide.page/dl/17171d" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-4 px-4 py-1.5 bg-yellow-500 text-slate-900 text-sm font-semibold rounded-md hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Navbar />

      {/* Hero Section - Professional & Clean */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://texasfencingacademy.org/wp-content/uploads/2024/03/IMG_4246-scaled.jpeg"
            alt="Texas Fencing Academy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                TEXAS
                <span className="block text-yellow-400">FENCING</span>
                <span className="block">ACADEMY</span>
              </h1>
              <div className="w-24 h-1 bg-yellow-400"></div>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-light text-gray-200">
              WE MAKE CHAMPIONS
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://texasfencingacademy.org/?page_id=881"
                className="inline-flex items-center px-8 py-3 bg-yellow-500 text-slate-900 font-semibold rounded-sm hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
              >
                View Programs
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </a>
              <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-slate-900 transition-all duration-300">
                Watch Video
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right Content - App Registration */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Register for Classes
            </h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <a href="https://texasfencingacademy.glide.page/dl/17171d" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://texasfencingacademy.org/wp-content/uploads/2025/05/TFA-Pro-v2-w-Title-e1746199466506-300x276.jpg"
                    alt="TFA Pro App"
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="text-center">
                <img 
                  src="https://texasfencingacademy.org/wp-content/uploads/2025/05/TFA-Pro-v2-qrcode_v3.jpg"
                  alt="QR Code"
                  className="w-full h-32 object-contain"
                />
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-slate-600 font-medium mb-4">
                Click on the TFA Pro v2 app or scan the QR code to register for classes
              </p>
              <a 
                href="https://texasfencingacademy.glide.page/dl/17171d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full px-6 py-3 bg-slate-900 text-white font-semibold rounded-sm hover:bg-slate-800 transition-colors duration-300"
              >
                Access TFA Pro App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Clean & Professional */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                WE MAKE CHAMPIONS
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Fencing is not "sword fighting." A fencing match looks nothing like a Zorro movie. 
                There is tension and excitement in every bout, but no swashbuckling.
              </p>
              
              <p>
                Fencing demands that the athlete direct and control his—or her—aggression. 
                Of course, every sport is not for everyone and fencing is no exception. Some take to it; some don't. 
                Those who stay with it, however, truly love it. There is no such thing as an indifferent fencer.
              </p>
              
              <p>
                While not a team sport like soccer or basketball, fencing is learned through regular practice 
                and there is a strong camaraderie among TFA members.
              </p>
              
              <p>
                When the club attends tournaments, coaches and students support each other as part of the TFA team. 
                Ultimately, of course, each match is won or lost by the individual fencer, which is probably why 
                fencing draws those committed to competing at their "personal best."
              </p>
              
              <p>
                Fencing is suitable for girls as well as boys. Because size and strength are less important 
                than speed and agility, girls often find it a particularly rewarding activity.
              </p>
            </div>
            
            <div className="pt-6">
              <p className="text-lg text-slate-600 mb-6">
                Come explore our website and begin a journey of a lifetime!
              </p>
              <a 
                href="https://texasfencingacademy.org/?page_id=881"
                className="inline-flex items-center px-8 py-3 bg-slate-900 text-white font-semibold rounded-sm hover:bg-slate-800 transition-colors duration-300"
              >
                View Our Programs
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Video */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <video 
              controls 
              className="w-full h-auto"
              poster="https://texasfencingacademy.org/wp-content/uploads/2024/03/IMG_4246-scaled.jpeg"
            >
              <source src="https://texasfencingacademy.org/wp-content/uploads/2020/04/tfaIntro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Gallery Section - Minimalist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Experience Excellence
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our fencers in action and witness the dedication that creates champions
            </p>
          </div>
          
          {/* Featured Image Carousel */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
            
            {/* Image Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentImageIndex === index ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setCurrentImageIndex(index)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Preview - Clean Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Follow Our Journey
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12">
            Stay updated with our latest achievements and training sessions
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "https://texasfencingacademy.org/wp-content/uploads/sb-instagram-feed-images/485574051_18081344617649037_3098594252448222902_nfull.webp",
              "https://texasfencingacademy.org/wp-content/uploads/sb-instagram-feed-images/475917250_1698369104392349_7096611107598555493_nfull.webp",
              "https://texasfencingacademy.org/wp-content/uploads/sb-instagram-feed-images/469200454_1125883978873953_6958522408281752383_nfull.webp",
              "https://texasfencingacademy.org/wp-content/uploads/sb-instagram-feed-images/463184375_564240439374419_4975049813026034539_nfull.webp"
            ].map((src, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={src}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <a 
              href="https://www.instagram.com/texasfencingacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-slate-900 text-white font-semibold rounded-sm hover:bg-slate-800 transition-colors duration-300"
            >
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @texasfencingacademy
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
