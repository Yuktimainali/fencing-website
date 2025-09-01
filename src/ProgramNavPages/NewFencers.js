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
function IntroInformationSection() {
  // Static data (can be moved to props later)
  const sectionData = {
    sectionTitle: "Elevate Skill, Build Character",
    sectionTitleHighlight: "Elevate",
    headerDescription:
      "Discover a training environment where discipline meets joy. Programs crafted to grow fundamentals, confidence, and a lasting love for movement.",
    mainDescription:
      "From first-timers to aspirants, coaching focuses on clear progressions, safe practice, and supportive community. Learn technique the right way while developing grit, focus, and sportsmanship.",
    featureTitle: "What’s Inside:",
    features: [
      "Cohesive curriculum across age groups",
      "Positive coaching and mentorship",
      "Safety-first approach with quality gear",
      "Clear goals and feedback loops",
    ],
    mainCtaText: "Explore Programs",
    mainCtaUrl: "https://texasfencingacademy.glide.page",
    secondaryCtaText: "See Schedules",
    secondaryCtaTargetId: "programs",
    actionImage: {
      src: "/fencingIntroduction/fencingIntroduction.jpg",
      alt: "Athletes training in session",
    },
    statsBadge: {
      stat: "100+",
      label: "Students Trained",
    },
  };

  const renderTitle = () => {
    const t = sectionData.sectionTitle || "Elevate Skill, Build Character";
    const h = sectionData.sectionTitleHighlight || "";
    if (!h || !t.includes(h)) return t;
    const parts = t.split(h);
    return (
      <>
        {parts}
        <span className="font-semibold text-amber-600">{h}</span>
        {parts[12]}
      </>
    );
  };

  const processedActionImage = {
    src: sectionData.actionImage.src,
    alt: sectionData.actionImage.alt,
  };

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
            {renderTitle()}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {sectionData.headerDescription}
          </p>
        </div>

        {/* Info and image grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Info content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {sectionData.mainDescription}
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-amber-50 border border-amber-200/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-700 mb-4">
                  {sectionData.featureTitle}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {sectionData.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={sectionData.mainCtaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">{sectionData.mainCtaText}</span>
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById(sectionData.secondaryCtaTargetId)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-600 font-semibold rounded-xl hover:bg-amber-50 hover:scale-105 transition-all duration-500 text-center"
              >
                {sectionData.secondaryCtaText}
              </button>
            </div>
          </div>

          {/* Action image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={processedActionImage.src}
                alt={processedActionImage.alt}
                className="w-full h-80 lg:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent pointer-events-none" />
              {/* Floating stats badge (optional) */}
              {sectionData.statsBadge && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">
                      {sectionData.statsBadge.stat}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {sectionData.statsBadge.label}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Optional anchor for secondary CTA */}
        <div id={sectionData.secondaryCtaTargetId} />
      </div>
    </section>
  );
}
function NewFencersIntroInformationSection() {

  const benefits = [
    {
      iconSrc: "https://cdn.sanity.io/images/24fe96nu/production/b8916497cc507519ea7f42ed618b97523ed43667-512x512.png?w=40&h=40",
      alt: "Fencing Introduction Icon",
      title: "Complete Access",
      description: "Full access to all Épée and Saber classes in the first month to explore both weapons.",
    },
    {
      iconSrc: "/program/icons/Progress.png",
      alt: "Learning Progress Icon",
      title: "Beginner Friendly",
      description: "Patient, fundamentals-first instruction designed specifically for newcomers.",
    },
    {
      iconSrc: "/program/icons/OpenFencing.png",
      alt: "Community Icon",
      title: "Welcoming Community",
      description: "Supportive peers and coaches in a safe, positive environment.",
    },
  ];

  const logistics = [
    { label: "Duration", value: "45 mins" },
    { label: "Weapons", value: "Épée & Saber" },
    { label: "Class Times", value: "Various" },
    { label: "Equipment", value: "Provided" },
  ];

  const whatToExpect = [
    { title: "Equipment Introduction", description: "All safety gear is provided while learning how to wear and use it." },
    { title: "Basic Techniques", description: "Master ready stance, movement, and essential actions for both weapons." },
    { title: "Safe Learning Environment", description: "Train in a controlled space with experienced coaches guiding every step." },
  ];

  return (
    <section id="intro-class-info" className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
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
        <div className="text-center mb-16 motion-safe:animate-[fadeInDown_0.8s_ease_forwards]">
          <div className="flex items-center justify-center space-x-4 mb-8 group">
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
            <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-gray-200/70 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500">
              <div className="w-3 h-3 bg-amber-500 rounded-full motion-safe:animate-pulse"></div>
            </div>
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4 tracking-tight">
            New Fencer <span className="font-semibold text-amber-600">Introduction</span> Program
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Complete introduction to fencing with access to both Épée and Saber beginner classes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {benefits.map(({ iconSrc, alt, title, description }, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1.5"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-105">
                <img src={iconSrc} alt={alt} className="w-10 h-10 sm:w-14 sm:h-14 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
            </div>
          ))}
        </div>

        {/* Two-column: What to Expect + Program Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* What to Expect */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition hover:-translate-y-[3px]">
            <div className="p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6 lg:mb-8 flex items-center gap-3">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                What to Expect
              </h3>
              <div className="space-y-6 lg:space-y-8">
                {whatToExpect.map(({ title, description }, idx) => (
                  <div key={idx} className="flex items-start gap-4 lg:gap-6">
                    <span className="mt-1.5 lg:mt-2 block w-3.5 h-3.5 bg-amber-500 rounded-full shrink-0"></span>
                    <div>
                      <h4 className="font-medium text-gray-800 text-base lg:text-lg">{title}</h4>
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition hover:-translate-y-[3px]">
            <div className="p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6 lg:mb-8 flex items-center gap-3">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Program Details
              </h3>
              <div className="space-y-4 lg:space-y-6">
                {logistics.map(({ label, value }, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between py-3 border-b border-gray-100 rounded hover:bg-amber-50 transition-colors ${
                      idx === logistics.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <span className="font-medium text-gray-700">{label}</span>
                    <span className="text-amber-700 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 lg:mt-8 p-4 lg:p-5 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  <strong>Perfect Start:</strong> Designed specifically for newcomers—no prior experience required.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-8 h-px bg-amber-300"></div>
            <div className="mx-3 w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
            <div className="w-8 h-px bg-amber-300"></div>
          </div>
          <h3 className="text-3xl font-light text-gray-800 mb-6">
            Ready to <span className="font-semibold text-amber-600">Begin</span> Your Fencing Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your fencing adventure with complete access to all our beginner classes.
          </p>
          <a
            href="https://texasfencingacademy.glide.page"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 sm:px-12 py-3.5 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            <span>Register for Introduction Program</span>
            <svg className="w-4 h-4 opacity-90" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>

      {/* Keyframes with motion-safe defaults */}
      <style>{`
        @keyframes fadeInDown { 0% { opacity: 0; transform: translateY(-20px) } 100% { opacity: 1; transform: translateY(0) } }
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
      <IntroInformationSection/>
      <NewFencersIntroInformationSection />
      <FooterSection />
    </>
  );
}

export default NewFencersIntroPage;
