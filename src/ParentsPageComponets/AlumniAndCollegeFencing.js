import React, { useState, useEffect } from 'react';
import Navbar from '../HomePageComponent/Navbar';
import InfoBanner from '../HomePageComponent/InfoBanner';

function TexasFencingAcademySection() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('academy-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="academy-section"
      className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden"
    >
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-15 rounded-full"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-900/30 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
        {/* Additional subtle decorative elements */}
        <div className="absolute top-1/2 left-10 w-1 h-20 bg-gradient-to-b from-transparent via-slate-900/10 to-transparent transform -rotate-12"></div>
        <div className="absolute top-1/4 right-10 w-1 h-16 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent transform rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className={`flex items-center justify-center space-x-4 mb-8 group transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="w-20 h-px bg-amber-500 transition-all duration-700 group-hover:bg-amber-600 group-hover:w-24"></div>
            <div className="w-14 h-14 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-xl bg-gray-200/80 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse group-hover:bg-amber-600"></div>
              <div className="absolute inset-0 rounded-full border border-slate-900/10 group-hover:border-slate-900/20 transition-all duration-500"></div>
            </div>
            <div className="w-20 h-px bg-amber-500 transition-all duration-700 group-hover:bg-amber-600 group-hover:w-24"></div>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Texas{" "}
            <span className="font-semibold text-amber-600 inline-block hover:scale-105 transition-transform duration-300">Fencing Academy</span>
          </h2>
          <p className={`text-lg text-slate-900/70 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Excellence in fencing education, training champions for over three decades with a commitment to developing both athletic prowess and character.
          </p>
        </div>

        {/* Enhanced Academy Story */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Enhanced Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-700 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-slate-900 hover:text-amber-600 transition-colors duration-300">
                Building Champions Since{" "}
                <span className="font-semibold text-amber-600">1990</span>
              </h3>
              <p className="text-lg text-slate-900/80 leading-relaxed">
                Texas Fencing Academy has been shaping the landscape of competitive fencing for over 30 years. What began as a small club has evolved into one of the premier fencing institutions in the region, consistently producing athletes who compete at the highest collegiate levels.
              </p>

              <div className="bg-gradient-to-r from-amber-50/80 to-amber-100/60 border-2 border-amber-200/50 rounded-2xl p-8 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-amber-300/60 transition-all duration-500 group">
                <h4 className="text-xl font-semibold text-amber-700 mb-6 flex items-center group-hover:text-amber-600 transition-colors duration-300">
                  <div className="w-6 h-6 bg-slate-900/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-slate-900/20 transition-all duration-300">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  Our Legacy of Excellence:
                </h4>
                <ul className="space-y-4 text-slate-900/80">
                  <li className="flex items-start space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover/item:text-slate-900 transition-colors duration-300">Over three decades of championship-level training</span>
                  </li>
                  <li className="flex items-start space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover/item:text-slate-900 transition-colors duration-300">Multiple All-American athletes developed</span>
                  </li>
                  <li className="flex items-start space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover/item:text-slate-900 transition-colors duration-300">NCAA competitors across premier universities</span>
                  </li>
                  <li className="flex items-start space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover/item:text-slate-900 transition-colors duration-300">Comprehensive programs for all skill levels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enhanced Academy image */}
          <div className={`relative transition-all duration-1000 delay-900 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="/parentsComponent/Gallery/tfacademy.jpg"
                alt="Texas Fencing Academy training"
                className="w-full h-80 lg:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-400/30 via-transparent to-slate-900/10 pointer-events-none" />
              
              {/* Enhanced overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-400/5 to-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Enhanced floating badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0 border border-slate-900/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-1">30+</div>
                  <div className="text-xs text-slate-900/70 font-medium tracking-wide">Years of Excellence</div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Philosophy & Approach */}
        <div className={`text-center bg-gradient-to-r from-white/80 via-white/95 to-white/80 border-2 border-slate-900/10 rounded-3xl p-16 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1100ms' }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-6 mb-10 group-hover:space-x-8 transition-all duration-500">
              <div className="w-16 h-px bg-amber-400 group-hover:w-20 group-hover:bg-amber-500 transition-all duration-500"></div>
              <div className="w-4 h-4 bg-amber-500 rounded-full group-hover:scale-125 group-hover:bg-amber-600 transition-all duration-500 shadow-sm"></div>
              <div className="w-16 h-px bg-amber-400 group-hover:w-20 group-hover:bg-amber-500 transition-all duration-500"></div>
            </div>
            <h3 className="text-4xl font-light text-slate-900 mb-8 group-hover:text-amber-600 transition-colors duration-500">
              Where Tradition Meets{" "}
              <span className="font-semibold text-amber-600 group-hover:text-slate-900 transition-colors duration-500">Innovation</span>
            </h3>
            <p className="text-xl text-slate-900/80 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
              We've watched countless faces come and go over the years, each leaving their mark on our legacy. 
              Our pride lies not just in the prestigious universities our members attend, but in the character, 
              discipline, and excellence they carry with them long after they leave our academy.
            </p>
            
            {/* Additional decorative element */}
            <div className="mt-10 inline-flex items-center space-x-4 px-8 py-3 bg-slate-900/5 border border-slate-900/15 rounded-full group-hover:bg-slate-900/10 group-hover:border-slate-900/25 transition-all duration-300">
              <span className="text-sm font-bold tracking-wider text-slate-900/70 group-hover:text-slate-900 transition-colors duration-300">FORGING CHAMPIONS SINCE 1990</span>
              <div className="w-6 h-px bg-slate-900/40 group-hover:w-8 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CollegeFencingExcellenceSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('college-excellence');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const allAmericans = [
    { name: "Melissa Parker", school: "Temple University", achievement: "3x All American" },
    { name: "Jonathon Parker", school: "Duke", achievement: "All American" },
    { name: "Allegra Parker", school: "University of North Carolina", achievement: "All American" }
  ];

  const collegiateAthletes = [
    { name: "Tim French", school: "Air Force Academy" },
    { name: "Peter French", school: "Air Force Academy" },
    { name: "Noah Zucker", school: "Columbia" },
    { name: "Sasha Zucker", school: "Stanford" },
    { name: "Riley Parker", school: "Stevens Institute of Technology" },
    { name: "Olymp", school: "Tufts" },
    { name: "Alumni", school: "Wesleyan College" },
    { name: "Ethan Dubois", school: "Austin College" },
    { name: "Kevin Nadeau", school: "University of North Carolina" },
    { name: "Katie Williamson", school: "University of North Carolina" },
    { name: "Marcus Chen", school: "MIT" },
    { name: "Sarah Johnson", school: "Harvard" }
  ];

  return (
    <section 
      id="college-excellence"
      className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden"
    >
      {/* Background elements matching the academy section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-15 rounded-full"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-900/30 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
        <div className="absolute top-1/2 left-10 w-1 h-20 bg-gradient-to-b from-transparent via-slate-900/10 to-transparent transform -rotate-12"></div>
        <div className="absolute top-1/4 right-10 w-1 h-16 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent transform rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header matching academy style */}
        <div className="text-center mb-20">
          <div className={`flex items-center justify-center space-x-4 mb-8 group transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="w-20 h-px bg-amber-500 transition-all duration-700 group-hover:bg-amber-600 group-hover:w-24"></div>
            <div className="w-14 h-14 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-xl bg-gray-200/80 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse group-hover:bg-amber-600"></div>
              <div className="absolute inset-0 rounded-full border border-slate-900/10 group-hover:border-slate-900/20 transition-all duration-500"></div>
            </div>
            <div className="w-20 h-px bg-amber-500 transition-all duration-700 group-hover:bg-amber-600 group-hover:w-24"></div>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Fencing &{" "}
            <span className="font-semibold text-amber-600 inline-block hover:scale-105 transition-transform duration-300">College Excellence</span>
          </h2>
          <p className={`text-lg text-slate-900/70 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our legacy extends across America's most prestigious universities, where our athletes continue to excel at the highest levels of collegiate competition.
          </p>
        </div>

        {/* All-Americans showcase */}
        <div className="mb-20">
          <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="w-16 h-px bg-amber-400"></div>
              <div className="w-4 h-4 bg-amber-500 rounded-full shadow-sm"></div>
              <div className="w-16 h-px bg-amber-400"></div>
            </div>
            <h3 className="text-3xl font-light text-slate-900 mb-4 hover:text-amber-600 transition-colors duration-300">
              All-American{" "}
              <span className="font-semibold text-amber-600">Champions</span>
            </h3>
            <p className="text-lg text-slate-900/70 max-w-2xl mx-auto">
              The pinnacle of collegiate fencing achievement
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {allAmericans.map((athlete, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-r from-white/80 via-white/95 to-white/80 border-2 border-slate-900/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden ${
                  inView 
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${800 + index * 200}ms`
                }}
                onMouseEnter={() => setHoveredCard(`aa-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Top decorative element */}
                <div className="flex items-center justify-center space-x-3 mb-6 group-hover:space-x-4 transition-all duration-500">
                  <div className="w-8 h-px bg-amber-400 group-hover:w-10 group-hover:bg-amber-500 transition-all duration-500"></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-125 transition-all duration-500"></div>
                  <div className="w-8 h-px bg-amber-400 group-hover:w-10 group-hover:bg-amber-500 transition-all duration-500"></div>
                </div>
                
                <div className="text-center relative">
                  {/* Avatar matching the academy style */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center text-xl font-bold text-amber-700 border-2 border-amber-400/60 group-hover:border-amber-500 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      {athlete.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {/* Achievement star */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">★</span>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-light text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {athlete.name}
                  </h4>
                  <p className="text-amber-600 font-semibold mb-4 text-lg group-hover:text-amber-500 transition-colors duration-300">
                    {athlete.school}
                  </p>
                  
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-slate-900/5 border border-slate-900/15 rounded-full group-hover:bg-slate-900/10 group-hover:border-slate-900/25 transition-all duration-300">
                    <span className="text-sm font-bold text-slate-900/80 group-hover:text-slate-900">
                      {athlete.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collegiate Athletes Grid */}
        <div className="mb-20">
          <div className={`text-center mb-16 transition-all duration-1000 delay-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="w-16 h-px bg-slate-900/30"></div>
              <div className="w-4 h-4 bg-slate-900/40 rounded-full shadow-sm"></div>
              <div className="w-16 h-px bg-slate-900/30"></div>
            </div>
            <h3 className="text-3xl font-light text-slate-900 mb-4 hover:text-amber-600 transition-colors duration-300">
              Collegiate{" "}
              <span className="font-semibold text-amber-600">Excellence</span>
            </h3>
            <p className="text-lg text-slate-900/70 max-w-2xl mx-auto">
              Competing across America's premier academic institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {collegiateAthletes.map((athlete, index) => (
              <div
                key={index}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-900/10 hover:border-amber-400/40 hover:bg-white/95 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden ${
                  inView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${1200 + index * 50}ms`
                }}
                onMouseEnter={() => setHoveredCard(`athlete-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="text-center relative z-10">
                  {/* Professional avatar */}
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="w-full h-full bg-slate-900/8 border-2 border-slate-900/15 rounded-full flex items-center justify-center text-sm font-bold text-slate-900/80 group-hover:bg-amber-50 group-hover:border-amber-400/40 group-hover:text-amber-700 transition-all duration-300 group-hover:scale-110 shadow-sm">
                      {athlete.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {/* Status indicator */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"></div>
                  </div>
                  
                  <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {athlete.name}
                  </h4>
                  <p className="text-amber-600 font-medium text-sm leading-relaxed group-hover:text-amber-500 transition-colors duration-300">
                    {athlete.school}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-4 mx-auto">
                  <div className="w-8 h-px bg-slate-900/20 mx-auto group-hover:w-12 group-hover:bg-amber-400/70 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Statement matching academy section */}
        <div className={`text-center bg-gradient-to-r from-white/80 via-white/95 to-white/80 border-2 border-slate-900/10 rounded-3xl p-16 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1500ms' }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-6 mb-10 group-hover:space-x-8 transition-all duration-500">
              <div className="w-16 h-px bg-amber-400 group-hover:w-20 group-hover:bg-amber-500 transition-all duration-500"></div>
              <div className="w-4 h-4 bg-amber-500 rounded-full group-hover:scale-125 group-hover:bg-amber-600 transition-all duration-500 shadow-sm"></div>
              <div className="w-16 h-px bg-amber-400 group-hover:w-20 group-hover:bg-amber-500 transition-all duration-500"></div>
            </div>
            <h3 className="text-4xl font-light text-slate-900 mb-8 group-hover:text-amber-600 transition-colors duration-500">
              Where Champions Are{" "}
              <span className="font-semibold text-amber-600 group-hover:text-slate-900 transition-colors duration-500">Forged</span>
            </h3>
            <p className="text-xl text-slate-900/80 leading-relaxed group-hover:text-slate-900 transition-colors duration-300 mb-10">
              Each achievement represents years of dedication, expert coaching, and the pursuit of excellence. 
              Our athletes don't just compete—they excel, carrying forward a legacy of championship-level performance 
              across the nation's most demanding academic and athletic environments.
            </p>
            
            <div className="inline-flex items-center space-x-4 px-8 py-3 bg-slate-900/5 border border-slate-900/15 rounded-full group-hover:bg-slate-900/10 group-hover:border-slate-900/25 transition-all duration-300">
              <span className="text-sm font-bold tracking-wider text-slate-900/70 group-hover:text-slate-900 transition-colors duration-300">EXCELLENCE SINCE 1990</span>
              <div className="w-6 h-px bg-slate-900/40 group-hover:w-8 transition-all duration-300"></div>
              <span className="text-sm font-bold tracking-wider text-slate-900/70 group-hover:text-slate-900 transition-colors duration-300">CHAMPIONS CONTINUE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




function AcademyAndAlumniPage() {
  return (
    <>  
    <InfoBanner/>
        <Navbar />
      <TexasFencingAcademySection />
      <CollegeFencingExcellenceSection />
    </>
  );
}

export default AcademyAndAlumniPage;
