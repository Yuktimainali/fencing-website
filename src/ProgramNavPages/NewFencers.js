import InfoBanner from "../HomePageComponent/InfoBanner";
import Navbar from "../HomePageComponent/Navbar";
import FooterSection from "../Sections/FooterSection";
import { useEffect, useState } from "react";

function NewFencersIntroHeroSection() {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    let resizeTimer;
    function handleResize() {
      setIsResizing(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsResizing(false);
      }, 300);
    }
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden px-6 ${
      isResizing ? 'no-animations' : ''
    }`}>
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="/program/BgImage.jpg"
          alt="New Fencer Introduction Classes"
          className="w-full h-full object-cover animate-fade-in"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70" />
      </div>

      {/* Refined fencing motifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform -rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-amber-400 to-transparent transform rotate-45 animate-pulse"></div>
      </div>

      {/* Text & CTAs */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <div className="overflow-hidden">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extralight tracking-tight leading-none text-white drop-shadow-lg animate-fade-in">
              <span className="block opacity-0 animate-[slideUp_0.8s_ease-out_0.5s_forwards]">
                NEW FENCERS
              </span>
              <span className="block text-amber-400 font-normal drop-shadow-lg opacity-0 animate-[slideUp_0.8s_ease-out_0.8s_forwards]">
                INTRODUCTION CLASS
              </span>
              <span className="block opacity-0 animate-[slideUp_0.8s_ease-out_1.1s_forwards]">
                TEXAS FENCING ACADEMY
              </span>
            </h1>
          </div>

          <div className="flex items-center justify-center space-x-4 opacity-0 animate-[fadeIn_0.8s_ease-out_1.5s_forwards]">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400" />
            <div className="w-12 h-12 border-2 border-white/70 rotate-45 flex items-center justify-center hover:scale-110 hover:border-amber-400 transition-all duration-500 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        <div className="overflow-hidden">
          <h2 className="text-2xl lg:text-3xl font-light text-white tracking-[0.15em] drop-shadow-md opacity-0 animate-[slideUp_0.8s_ease-out_2s_forwards]">
            YOUR FIRST MONTH IN FENCING
          </h2>
        </div>

        <div className="overflow-hidden">
          <p className="text-lg lg:text-xl text-white leading-relaxed font-light max-w-3xl mx-auto drop-shadow-sm opacity-0 animate-[fadeIn_0.8s_ease-out_2.5s_forwards]">
            Begin your fencing journey with comprehensive access to all our Épée and Saber classes. 
            Discover the joy of fencing with expert instruction in a welcoming environment.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[slideUp_0.8s_ease-out_3s_forwards]">
          <button
            onClick={() => window.open("https://texasfencingacademy.glide.page", "_blank")}
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:from-amber-600 hover:to-amber-700 transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">Register Now</span>
          </button>

          <button
            onClick={() => scrollToSection("intro-class-info")}
            className="group relative px-8 py-4 bg-transparent border-2 border-white/70 text-white font-semibold rounded-xl hover:border-amber-400 hover:bg-amber-400/10 hover:scale-105 hover:shadow-lg backdrop-blur-sm transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-animations * {
          animation-duration: 0s !important;
          transition-duration: 0s !important;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

function NewFencersIntroInformationSection() {
  const handleBookingClick = () => {
    window.open("https://texasfencingacademy.glide.page", "_blank");
  };

  const benefits = [
    {
      iconSrc: "https://cdn.sanity.io/images/24fe96nu/production/b8916497cc507519ea7f42ed618b97523ed43667-512x512.png?w=40&h=40",
      alt: "Fencing Introduction Icon",
      title: "Complete Access",
      description:
        "Full access to all our Épée and Saber classes during your first month to explore both weapons.",
    },
    {
      iconSrc: "/program/icons/Progress.png",
      alt: "Learning Progress Icon",
      title: "Beginner Friendly",
      description:
        "Start from the basics with patient instruction designed specifically for newcomers to fencing.",
    },
    {
      iconSrc: "/program/icons/OpenFencing.png",
      alt: "Community Icon",
      title: "Welcoming Community",
      description:
        "Join a supportive community of fencers and discover the joy of this elegant sport in a friendly environment.",
    },
  ];

  const classDetails = [
    {
      title: "Épée Classes",
      description:
        "Learn the fundamentals of épée, including basic attacks, defensive moves, and proper technique.",
    },
    {
      title: "Saber Classes",
      description:
        "Explore saber fencing with its dynamic movements and right-of-way rules in an engaging format.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Attend classes at various times throughout the week to find what works best for your schedule.",
    },
  ];

  const logistics = [
    { label: "Duration", value: "45 mins" },
    { label: "Weapons", value: "Épée & Saber" },
    { label: "Class Times", value: "Various" },
    { label: "Equipment", value: "Provided" },
  ];

  const whatToExpect = [
    {
      title: "Equipment Introduction",
      description:
        "Learn about fencing equipment and safety gear. All equipment is provided for your first month.",
    },
    {
      title: "Basic Techniques",
      description:
        "Master fundamental positions, footwork, and basic attacks in both épée and saber.",
    },
    {
      title: "Safe Learning Environment",
      description:
        "Practice in a controlled, safe environment with experienced instructors guiding every step.",
    },
  ];

  return (
    <section
      id="intro-class-info"
      className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-gray-300 to-gray-400 opacity-15"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <div className="flex items-center justify-center space-x-4 mb-8 group">
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
            <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-gray-200/70 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            </div>
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4 tracking-tight">
            New Fencer{" "}
            <span className="font-semibold text-amber-600">Introduction</span>{" "}
            Program
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your complete introduction to the art of fencing with full access to both weapons
          </p>
        </div>

        {/* Intro Class Card - Featured */}
        <div className="mb-16 flex justify-center">
          <div className="group relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-700 ease-out cursor-pointer overflow-hidden max-w-lg w-full"
               onClick={handleBookingClick}>
            <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50/0 via-amber-100/0 to-amber-50/0 group-hover:from-amber-50/20 group-hover:via-amber-100/30 group-hover:to-amber-50/20 transition-all duration-700 rounded-xl"></div>
            
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce">
              <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                <svg className="w-3 h-3 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </div>
            </div>

            <div className="group-hover:opacity-0 group-hover:scale-95 transition-all duration-500 ease-out">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center text-xl mb-3 border border-amber-200/50 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-gradient-to-br group-hover:from-amber-100 group-hover:to-amber-200 transition-all duration-500 ease-out">
                  <img alt="FENCING INTRODUCTION 1ST MONTH" className="w-10 h-10 group-hover:animate-pulse object-contain" src="https://cdn.sanity.io/images/24fe96nu/production/b8916497cc507519ea7f42ed618b97523ed43667-512x512.png?w=40&h=40" />
                </div>
                <h4 className="text-amber-700 font-semibold text-base mb-3 tracking-wide group-hover:text-amber-800 transition-colors duration-300">
                  FENCING INTRODUCTION 1ST MONTH
                </h4>
              </div>
              <p className="text-gray-600 text-base leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
                Includes access to all our Épée and Saber classes for you to discover the joy of fencing.
              </p>
            </div>

            <div className="absolute inset-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center transform translate-y-4 group-hover:translate-y-0 ease-out">
              <h5 className="text-amber-700 font-semibold text-center mb-2 text-base group-hover:animate-pulse">
                PROGRAM DETAILS
              </h5>
              <div className="space-y-1">
                <div className="bg-amber-50 rounded-lg p-2 border border-amber-100 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out hover:bg-amber-100 hover:scale-102">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-800 text-xs">Access to all classes</span>
                    <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded group-hover:bg-amber-300 transition-colors duration-300">Both Weapons</span>
                  </div>
                  <p className="text-gray-600 text-xs font-medium">Various Times Available</p>
                </div>
              </div>
              <div className="mt-2 text-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                <span className="text-sm text-amber-600 font-medium group-hover:text-amber-700 group-hover:animate-pulse">
                  Click to Register →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map(({ iconSrc, alt, title, description }, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center
                 transform transition-transform duration-500 ease-in-out hover:shadow-xl hover:-translate-y-3 hover:scale-105 cursor-pointer animate-slideUp"
              style={{
                animationDelay: `${idx * 150}ms`,
                willChange: "transform",
              }}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={iconSrc}
                  alt={alt}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* What to Expect / Class Details two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* What to Expect */}
          <div className="bg-white rounded-xl border border-gray-200 shadow transition-transform duration-500 ease-in-out hover:scale-[1.025] hover:-translate-y-[6px] hover:shadow-lg cursor-default">
            <div className="p-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                What to Expect
              </h3>
              <div className="space-y-8">
                {whatToExpect.map(({ title, description }, idx) => (
                  <div key={idx} className="flex items-start gap-6">
                    <span className="mt-2 block w-4 h-4 bg-amber-500 rounded-full shrink-0"></span>
                    <div>
                      <h4 className="font-medium text-gray-800 text-lg">{title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-white rounded-xl border border-gray-200 shadow transition-transform duration-500 ease-in-out hover:scale-[1.025] hover:-translate-y-[6px] hover:shadow-lg cursor-default">
            <div className="p-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Program Details
              </h3>
              <div className="space-y-6">
                {logistics.map(({ label, value }, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between py-3 border-b border-gray-100 rounded hover:bg-amber-50 transition-colors cursor-default ${
                      idx === logistics.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <span className="font-medium text-gray-700">{label}</span>
                    <span className="text-amber-600 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-amber-50 rounded-lg border border-amber-200 transition-colors hover:bg-amber-100 cursor-default">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Perfect Start:</strong> This program is designed specifically for newcomers to experience fencing with no prior experience required.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Class Types */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-50 border border-amber-200/50 rounded-lg p-8 mt-12 mb-16 animate-fadeIn delay-900">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Class Access Included</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your introduction program includes access to all beginner-friendly classes in both weapons. 
              Explore different class times and find what works best for your schedule.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {classDetails.map(({ title, description }, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default transform hover:-translate-y-1 hover:scale-[1.03]"
                >
                  <h4 className="font-semibold text-amber-700 mb-2">{title}</h4>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fadeIn delay-1000">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-8 h-px bg-amber-300"></div>
            <div className="mx-3 w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
            <div className="w-8 h-px bg-amber-300"></div>
          </div>
          <h3 className="text-3xl font-light text-gray-800 mb-6">
            Ready to{" "}
            <span className="font-semibold text-amber-600">Begin</span>{" "}
            Your Fencing Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your fencing adventure with complete access to all our beginner classes. 
            Discover the elegance and excitement of this timeless sport.
          </p>
          <button
            onClick={handleBookingClick}
            className="group relative px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl shadow-lg
                       hover:shadow-xl hover:scale-105 hover:from-amber-600 hover:to-amber-700 transition-all duration-500 text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">Register for Introduction Program</span>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease forwards;
        }

        /* Delay helpers */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
}

function NewFencersIntroPage() {
  return (
    <>
      <InfoBanner />
      <Navbar />
      {/* Hero Section */}
      <NewFencersIntroHeroSection />
      {/* New Fencers Introduction Information Section */}
      <NewFencersIntroInformationSection />
      <FooterSection />
    </>
  );
}

export default NewFencersIntroPage;
