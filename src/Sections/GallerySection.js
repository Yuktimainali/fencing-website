// sections/GallerySection.js
export default function GallerySection({ galleryImages, currentImageIndex, setCurrentImageIndex }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Enhanced Background elements with animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-accent-50 to-transparent rounded-full transform translate-x-32 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-r from-primary-50 to-transparent rounded-full transform -translate-x-32 animate-pulse-slow delay-1000"></div>
        
        {/* Subtle geometric lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent"></div>
          <div className="absolute top-1/3 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-accent-300 to-transparent transform rotate-12"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-primary-300 to-transparent transform -rotate-12"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent-500 animate-slide-up"></div>
            <div className="relative">
              <span className="text-sm font-semibold text-accent-600 tracking-[0.3em] relative z-10">GALLERY</span>
              <div className="absolute inset-0 bg-accent-50 rounded-full scale-150 opacity-50 animate-pulse-slow"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent-500 animate-slide-up"></div>
          </div>
          
          <h2 className="text-display font-light text-primary-900 mb-6 animate-slide-up">
            Excellence in 
            <span className="font-semibold text-accent-600 inline-block hover:scale-105 transition-transform duration-300"> Motion</span>
          </h2>
          
          <p className="text-xl text-primary-600 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in">
            Witness the precision, dedication, and artistry that defines 
            our championship-caliber training environment
          </p>
        </div>

        {/* Enhanced Featured Carousel */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <div className="relative group">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent-100/50 via-transparent to-primary-100/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-elegant bg-gradient-to-br from-primary-100 to-accent-50">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              
              {/* Enhanced overlay with better gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <p className="text-white text-lg font-light mb-2">
                      {galleryImages[currentImageIndex].alt}
                    </p>
                    <div className="flex items-center space-x-2 text-accent-300">
                      <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">TEXAS FENCING ACADEMY</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setCurrentImageIndex(currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Enhanced Navigation dots */}
          <div className="flex justify-center mt-10 space-x-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative transition-all duration-500 ${
                  currentImageIndex === index
                    ? "w-12 h-3"
                    : "w-3 h-3 hover:w-6"
                }`}
              >
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  currentImageIndex === index
                    ? "bg-accent-500 shadow-glow"
                    : "bg-primary-300 hover:bg-primary-400"
                }`}></div>
                {currentImageIndex === index && (
                  <div className="absolute inset-0 bg-accent-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Thumbnail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => setCurrentImageIndex(index)}
            >
              {/* Card container with enhanced styling */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 p-1 transition-all duration-500 group-hover:p-0">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-md group-hover:shadow-elegant transition-all duration-500">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  
                  {/* Enhanced hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                        <p className="text-white text-sm font-light mb-2 line-clamp-2">
                          {image.alt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-accent-300">
                            <div className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium">VIEW FULL SIZE</span>
                          </div>
                          <svg className="w-4 h-4 text-white transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Active indicator */}
                  {currentImageIndex === index && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-accent-400 rounded-full animate-pulse shadow-glow"></div>
                  )}
                </div>
              </div>

              {/* Enhanced selection indicator */}
              <div className={`absolute -inset-1 rounded-2xl transition-all duration-500 ${
                currentImageIndex === index
                  ? "bg-gradient-to-r from-accent-400 to-accent-600 opacity-100"
                  : "bg-gradient-to-r from-primary-200 to-accent-200 opacity-0 group-hover:opacity-50"
              }`} style={{ zIndex: -1 }}></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border border-primary-200/50">
            <div className="flex items-center space-x-2 text-primary-600">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">EXPLORE MORE</span>
            </div>
            <a
              href="https://www.instagram.com/texasfencingacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-6 py-2 bg-primary-900 text-white text-sm font-semibold rounded-full hover:bg-primary-800 transition-all duration-300 hover:shadow-lg"
            >
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="group-hover:text-accent-400 transition-colors duration-300">
                FOLLOW US
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
