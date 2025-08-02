// sections/HeroSection.js
// sections/HeroSection.js - Modern minimalist hero
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary-900">
      <div className="absolute inset-0">
        <img
          src="/images/TFAcademy.jpeg"
          alt="Texas Fencing Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/70"></div>
        
        {/* Geometric patterns using custom classes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-accent-400/20 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="text-white space-y-12">
          <div className="space-y-8">
            <h1 className="text-hero font-extralight tracking-tight leading-none">
              TEXAS
              <span className="block text-accent-400 font-normal">FENCING</span>
              ACADEMY
            </h1>
            
            {/* Elegant divider */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent-400"></div>
              <div className="w-8 h-8 border border-accent-400/50 rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent-400"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-light text-primary-200 tracking-[0.2em]">
              WHERE PRECISION MEETS PASSION
            </h2>
            
            <p className="text-lg lg:text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed font-light">
              Master the art of fencing through disciplined training, expert instruction, 
              and unwavering dedication to excellence in our state-of-the-art facility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <a
              href="https://texasfencingacademy.org/?page_id=881"
              className="group relative px-12 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 font-semibold text-lg rounded-sm overflow-hidden transition-all duration-300 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                EXPLORE PROGRAMS
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
            
            <button className="group px-12 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-sm backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300">
              <span className="flex items-center">
                WATCH OUR STORY
                <svg className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
