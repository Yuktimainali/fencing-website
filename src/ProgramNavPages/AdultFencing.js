import { useState, useEffect } from 'react'
import Navbar from '../HomePageComponent/Navbar'
import { Info } from 'lucide-react'
import InfoBanner from '../HomePageComponent/InfoBanner'

const adultFencingProducts = [
  {
    id: 1,
    title: "Adult Open Fencing Only (Monthly)",
    description: "Access to open fencing sessions for experienced adult fencers. Perfect for maintaining skills and competitive practice.",
    price: "$95.00",
    image: "adultFencing/OpenFencing.jpg",
    href: "https://texasfencingacademy.org/?page_id=881",
    recurring: true
  },
  {
    id: 2,
    title: "Full Subscription (Monthly)",
    description: "Complete access to all adult classes, open fencing, and coaching. Our most comprehensive adult program.",
    price: "$195.00",
    image: "adultFencing/FullSubscription.jpg",
    href: "https://texasfencingacademy.org/?page_id=881",
    recurring: true
  },
  {
    id: 3,
    title: "1st Month Introduction",
    description: "Perfect introduction package for new adult fencers. Includes equipment rental and beginner-friendly instruction.",
    price: "$85.00",
    image: "adultFencing/FirstMonth.jpg",
    href: "https://texasfencingacademy.org/?page_id=881"
  },
  {
    id: 4,
    title: "Adult Team Membership",
    description: "Join our competitive adult fencing team. Includes training, team events, and tournament support.",
    price: "Contact for Pricing",
    image: "adultFencing/TeamMembership.jpg",
    href: "https://texasfencingacademy.org/?page_id=881"
  },
  {
    id: 5,
    title: "Fitness Class Annual Membership",
    description: "Year-long access to our fencing-inspired fitness classes. Build strength, agility, and endurance.",
    price: "$295.00",
    image: "adultFencing/FitnessClass.jpg",
    href: "https://texasfencingacademy.org/?page_id=881"
  },
  {
    id: 6,
    title: "Private Lessons Package",
    description: "One-on-one coaching sessions tailored to your specific goals and skill level. Flexible scheduling available.",
    price: "Contact for Pricing",
    image: "adultFencing/PrivateLessons.jpg",
    href: "https://texasfencingacademy.org/?page_id=881"
  }
]

function AdultFencingHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="adultFencing/AdultFencingBg.jpg"
          alt="Adult Fencing at Texas Fencing Academy"
          className="w-full h-full object-cover object-center animate-fade-in will-change-transform-opacity"
          fetchPriority="high"
          decoding="async"
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70"></div>
      </div>

      {/* Refined fencing motifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform -rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-amber-400 to-transparent transform rotate-45 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        {/* Main heading */}
        <div className="space-y-6">
          <div className="overflow-hidden">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extralight tracking-tight leading-none animate-slide-up delay-[800ms] will-change-transform-opacity text-white drop-shadow-lg">
              <span className="block animate-slide-up delay-[1000ms] will-change-transform-opacity">
                ADULT
              </span>
              <span className="block text-amber-400 font-normal animate-slide-up delay-[1400ms] will-change-transform-opacity drop-shadow-lg">
                FENCING
              </span>
              <span className="block animate-slide-up delay-[1800ms] will-change-transform-opacity">
                TEXAS FENCING ACADEMY
              </span>
            </h1>
          </div>

          {/* Elegant centered divider */}
          <div className="flex items-center justify-center space-x-4 opacity-0 animate-[fadeIn_0.8s_ease-out_1.5s_forwards]">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
            <div className="w-12 h-12 border-2 border-white/70 rotate-45 flex items-center justify-center hover:scale-110 hover:border-amber-400 transition-all duration-500 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
        </div>

        {/* Excellence tagline */}
        <div className="overflow-hidden">
          <h2 className="text-2xl lg:text-3xl font-light text-white tracking-[0.15em] drop-shadow-md opacity-0 animate-[fadeInUp_0.8s_ease-out_2s_forwards]">
            PRECISION, STRATEGY & EXCELLENCE
          </h2>
        </div>

        {/* Description */}
        <div className="overflow-hidden">
          <p className="text-lg lg:text-xl text-white leading-relaxed font-light max-w-3xl mx-auto drop-shadow-sm opacity-0 animate-[fadeIn_0.8s_ease-out_2.5s_forwards]">
            Master the art of modern fencing with our comprehensive adult programs. 
            From beginners discovering the sport to experienced fencers honing competitive 
            skills, we provide expert instruction in a supportive community environment.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_3s_forwards]">
          {/* Join Program Button */}
          <a
            href="https://texasfencingacademy.org/?page_id=881"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:from-amber-600 hover:to-amber-700 transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">Join Adult Program</span>
          </a>

          {/* View Programs Button */}
          <button
            onClick={() => document.getElementById('adult-programs')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-transparent border-2 border-white/70 text-white font-semibold rounded-xl hover:border-amber-400 hover:bg-amber-400/10 hover:scale-105 hover:shadow-lg backdrop-blur-sm transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">View Adult Programs</span>
          </button>
        </div>
      </div>
    </section>
  )
}

function AdultFencingInfoSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-15 rounded-full"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8 group">
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
            <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-gray-200/70 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            </div>
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4 tracking-tight">
            Precision, <span className="font-semibold text-amber-600">Strategy</span> & Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our adult fencing programs welcome everyone from curious beginners to competitive athletes. 
            Experience the mental chess match and physical precision that makes fencing the ultimate 
            thinking person's sport.
          </p>
        </div>

        {/* Info and image grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Info content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're looking to try something new, get fit in an engaging way, or pursue 
                competitive fencing, our programs are designed to meet you where you are and take 
                you where you want to go.
              </p>
              
              <div className="bg-gradient-to-r from-amber-50 to-amber-50 border border-amber-200/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-700 mb-4">What Sets Us Apart:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert instruction in both Epee and Saber disciplines</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Flexible scheduling for busy adult lifestyles</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Supportive community of like-minded adults</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Equipment provided for beginners</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tournament preparation and competitive opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://texasfencingacademy.org/?page_id=881"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">Start Your Journey</span>
              </a>
              
              <button
                onClick={() => document.getElementById('adult-programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-600 font-semibold rounded-xl hover:bg-amber-50 hover:scale-105 transition-all duration-500 text-center"
              >
                Explore Membership Options
              </button>
            </div>
          </div>

          {/* Action image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="adultFencing/AdultFencers.jpg"
                alt="Adult fencers in training"
                className="w-full h-80 lg:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent pointer-events-none" />
              
              {/* Floating stats badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">18+</div>
                  <div className="text-xs text-gray-600 font-medium">Adult Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AdultProgramsSection() {
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => { 
    setLoaded(true) 
  }, [])

  return (
    <section id="adult-programs" className="relative py-24 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-100 to-amber-200 opacity-30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-20 rounded-full"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8 group">
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
            <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-white/70 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            </div>
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4 tracking-tight">
            Adult Program <span className="font-semibold text-amber-600">Options</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
            Flexible membership and training options designed for adult schedules and goals
          </p>
          
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-amber-50 to-amber-50 border border-amber-200/50 rounded-lg p-4">
            <p className="text-gray-700 text-base">
              <strong>New to fencing?</strong> Start with our 1st Month Introduction package, 
              then choose the membership that fits your goals and schedule.
            </p>
          </div>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adultFencingProducts.map((program, index) => (
            <a
              key={program.id}
              href={program.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden 
                hover:shadow-2xl hover:scale-105 hover:border-amber-200 transition-all duration-700 
                flex flex-col opacity-0 translate-y-8
                ${loaded ? "opacity-100 translate-y-0" : ""}
              `}
              style={{
                animationFillMode: "forwards",
                animationDuration: "700ms",
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Image section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Recurring badge */}
                {program.recurring && (
                  <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Monthly
                  </div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* External link icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg 
                    className="w-4 h-4 text-amber-600"
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Content section */}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  {program.description}
                </p>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-amber-600">
                    {program.price}
                  </span>
                  <div className="flex items-center space-x-2 text-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-8 h-px bg-amber-300"></div>
            <div className="mx-3 w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
            <div className="w-8 h-px bg-amber-300"></div>
          </div>
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-amber-50 to-amber-50 border border-amber-200/50 rounded-lg p-6">
            <p className="text-gray-700 font-medium text-base mb-4">
              <span className="text-amber-700 font-semibold">Ready to begin your fencing journey?</span>{" "}
              Join our welcoming adult fencing community and discover the perfect blend of 
              mental strategy and physical precision.
            </p>
            <a
              href="https://texasfencingacademy.org/?page_id=881"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>Get Started Today</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AdultFencingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <InfoBanner/>
    <Navbar/>
      <AdultFencingHeroSection />
      <AdultFencingInfoSection />
      <AdultProgramsSection />
    </div>
  )
}
