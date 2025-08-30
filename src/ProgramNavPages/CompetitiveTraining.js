import React, { useState, useMemo, useEffect, useCallback, memo } from "react";
import Navbar from "../HomePageComponent/Navbar";
import InfoBanner from "../HomePageComponent/InfoBanner";
import FooterSection from "../Sections/FooterSection";
import { sanityClient } from "../Sanity/sanityClient";
import { urlFor } from "../Sanity/imageBuilder";
import { COMPETITIVE_FENCING_HERO_QUERY } from "../Sanity/queries";
const competitiveEdgeFeatures = [
  {
    id: 1,
    title: "BlazePod + HAT Technology",
    description:
      "Exclusive patent-pending High Accuracy Trigger system for unparalleled precision in reaction time measurement. Only available at TFA.",
    icon: "/competitiveEdge/icons/Technology.png",
    details: [
      "Real-time dynamic training drills",
      "Ultra-precise reaction time tracking",
      "Advanced light-up pod system",
      "Patent-pending HAT technology",
    ],
  },
  {
    id: 2,
    title: "Pro Training Hub App",
    description:
      "Comprehensive mobile platform tracking your progress across 10+ fencing skills with detailed analytics and personalized insights.",
    icon: "/competitiveEdge/icons/MobileApplication.png",
    details: [
      "Individual skill rankings",
      "Daily activity tracking",
      "Performance trend analysis",
      "Cyborg Drills gamification",
    ],
  },
  {
    id: 3,
    title: "Personalized Training Plans",
    description:
      "Custom conditioning programs targeting your weakest skills and tournament-specific preparation aligned with your competition schedule.",
    icon: "/competitiveEdge/icons/Training.png",
    details: [
      "Weekly performance reviews",
      "Targeted weakness conditioning",
      "Tournament preparation plans",
      "Situational challenge training",
    ],
  },
];

const skillMetrics = [
  {
    skill: "Boulder",
    percentage: "59.7%",
    trend: "up",
    score: "1391",
    category: "strength",
  },
  {
    skill: "Bladework",
    percentage: "26.9%",
    trend: "up",
    score: "1447",
    category: "technique",
  },
  {
    skill: "Direction Change",
    percentage: "18.3%",
    trend: "up",
    score: "1093",
    category: "agility",
  },
  {
    skill: "2 Choice Reaction",
    percentage: "-31.9%",
    trend: "down",
    score: "686",
    category: "reaction",
  },
  {
    skill: "Foot Work",
    percentage: "24.9%",
    trend: "up",
    score: "1288",
    category: "footwork",
  },
  {
    skill: "Hand",
    percentage: "-6.0%",
    trend: "down",
    score: "759",
    category: "technique",
  },
];



function CompetitiveEdgeHeroSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    sanityClient.fetch(COMPETITIVE_FENCING_HERO_QUERY).then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let resizeTimer;
    function handleResize() {
      setIsResizing(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsResizing(false);
      }, 300);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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

  const runSecondary = () => {
    const a = data?.secondaryCta?.action;
    if (!a) return;
    if (a.startsWith('scroll:')) {
      document.getElementById(a.replace('scroll:', ''))?.scrollIntoView({ behavior: 'smooth' });
    } else if (a.startsWith('/')) {
      window.location.href = a;
    } else {
      window.open(a, '_self');
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-white text-xl animate-pulse">Loading...</p>
      </section>
    );
  }

  if (!data) {
    return (
      <section
        className={`relative min-h-screen flex items-center justify-center overflow-hidden px-6 ${
          isResizing ? "no-animations" : ""
        }`}
      >
        {/* Fallback background */}
        <div className="absolute inset-0">
          <img
            src="/competitiveEdge/CompetitiveFencingBg.png"
            alt="Competitive Fencing Training at Texas Fencing Academy"
            className="w-full h-full object-cover object-bottom animate-fade-in will-change-transform-opacity"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70"></div>
        </div>

        {/* Refined fencing motifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform rotate-12 animate-pulse"></div>
          <div className="absolute bottom-40 right-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform -rotate-12 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-amber-400 to-transparent transform rotate-45 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="overflow-hidden">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extralight tracking-tight leading-none animate-slide-up delay-[800ms] will-change-transform-opacity text-white drop-shadow-lg">
                <span className="block animate-slide-up delay-[1000ms] will-change-transform-opacity">
                  COMPETITIVE
                </span>
                <span className="block text-amber-400 font-normal animate-slide-up delay-[1400ms] will-change-transform-opacity drop-shadow-lg">
                  EDGE
                </span>
                <span className="block animate-slide-up delay-[1800ms] will-change-transform-opacity text-lg font-light tracking-[0.3em] text-amber-300">
                  POWERED BY BLAZEPOD + HAT
                </span>
              </h1>
            </div>

            <div className="flex items-center justify-center space-x-4 opacity-0 animate-[fadeIn_0.8s_ease-out_1.5s_forwards]">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="w-12 h-12 border-2 border-white/70 rotate-45 flex items-center justify-center hover:scale-110 hover:border-amber-400 transition-all duration-500 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm">
                <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>

          <div className="overflow-hidden">
            <h2 className="text-2xl lg:text-3xl font-light text-white tracking-[0.15em] drop-shadow-md opacity-0 animate-[fadeInUp_0.8s_ease-out_2s_forwards]">
              TRAIN SMARTER • FENCE FASTER • WIN MORE
            </h2>
          </div>

          <div className="overflow-hidden">
            <p className="text-lg lg:text-xl text-white leading-relaxed font-light max-w-3xl mx-auto drop-shadow-sm opacity-0 animate-[fadeIn_0.8s_ease-out_2.5s_forwards]">
              Elevate your performance with BlazePod's advanced reaction training
              technology, enhanced by our exclusive patent-pending High Accuracy
              Trigger (HAT) system. Real-time data, personalized insights, and
              tournament-specific preparation—only at Texas Fencing Academy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_3s_forwards]">
            <a
              href="https://texasfencingacademy.glide.page"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:from-amber-600 hover:to-amber-700 transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Join Competitive Edge</span>
            </a>

            <button
              onClick={() => scrollToSection("blazepod-technology")}
              className="group relative px-8 py-4 bg-transparent border-2 border-white/70 text-white font-semibold rounded-xl hover:border-amber-400 hover:bg-amber-400/10 hover:scale-105 hover:shadow-lg backdrop-blur-sm transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Explore Technology</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  const desktopImg = urlFor(data.background.asset).width(1920).format('webp').quality(80).url();
  const mobileImg = data.backgroundMobile?.asset
    ? urlFor(data.backgroundMobile.asset).width(768).format('webp').quality(75).url()
    : null;

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden px-6 ${
        isResizing ? "no-animations" : ""
      }`}
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        {mobileImg ? (
          <picture>
            <source media="(max-width:639px)" srcSet={mobileImg} />
            <img
              src={desktopImg}
              alt={data.background.alt || "Competitive Fencing Training at Texas Fencing Academy"}
              className="w-full h-full object-cover object-center animate-fade-in will-change-transform-opacity"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        ) : (
          <img
            src={desktopImg}
            alt={data.background.alt || "Competitive Fencing Training at Texas Fencing Academy"}
            className="w-full h-full object-cover object-center animate-fade-in will-change-transform-opacity"
            fetchPriority="high"
            decoding="async"
          />
        )}
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
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extralight tracking-tight leading-none animate-slide-up delay-[800ms] will-change-transform-opacity text-white drop-shadow-lg">
              <span className="block animate-slide-up delay-[1000ms] will-change-transform-opacity">
                {data.title.first}
              </span>
              <span className="block text-amber-400 font-normal animate-slide-up delay-[1400ms] will-change-transform-opacity drop-shadow-lg">
                {data.title.second}
              </span>
              <span className="block animate-slide-up delay-[1800ms] will-change-transform-opacity text-lg font-light tracking-[0.3em] text-amber-300">
                {data.title.third || "POWERED BY BLAZEPOD + HAT"}
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

        {data.tagline && (
          <div className="overflow-hidden">
            <h2 className="text-2xl lg:text-3xl font-light text-white tracking-[0.15em] drop-shadow-md opacity-0 animate-[fadeInUp_0.8s_ease-out_2s_forwards]">
              {data.tagline}
            </h2>
          </div>
        )}

        {data.description && (
          <div className="overflow-hidden">
            <p className="text-lg lg:text-xl text-white leading-relaxed font-light max-w-3xl mx-auto drop-shadow-sm opacity-0 animate-[fadeIn_0.8s_ease-out_2.5s_forwards]">
              {data.description}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_3s_forwards]">
          {data.primaryCta ? (
            data.primaryCta.url && data.primaryCta.url.startsWith('http') ? (
              // External link - use anchor tag
              <a
                href={data.primaryCta.url}
                target={data.primaryCta.newTab ? '_blank' : '_self'}
                rel={data.primaryCta.newTab ? 'noopener noreferrer' : ''}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:from-amber-600 hover:to-amber-700 transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">{data.primaryCta.text}</span>
              </a>
            ) : (
              // Internal scroll - use button with scroll functionality
              <button
                onClick={() => {
                  if (data.primaryCta.url && data.primaryCta.url.startsWith('#')) {
                    scrollToSection(data.primaryCta.url.replace('#', ''));
                  } else if (data.primaryCta.url && data.primaryCta.url.startsWith('scroll:')) {
                    scrollToSection(data.primaryCta.url.replace('scroll:', ''));
                  } else {
                    // Fallback to external link
                    window.open("https://texasfencingacademy.glide.page", "_blank");
                  }
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:from-amber-600 hover:to-amber-700 transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">{data.primaryCta.text}</span>
              </button>
            )
          ) : (
            // Fallback button
            <a
              href="https://texasfencingacademy.glide.page"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:from-amber-600 hover:to-amber-700 transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Join Competitive Edge</span>
            </a>
          )}

          {data.secondaryCta ? (
            <button
              onClick={runSecondary}
              className="group relative px-8 py-4 bg-transparent border-2 border-white/70 text-white font-semibold rounded-xl hover:border-amber-400 hover:bg-amber-400/10 hover:scale-105 hover:shadow-lg backdrop-blur-sm transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">{data.secondaryCta.text}</span>
            </button>
          ) : (
            <button
              onClick={() => scrollToSection("blazepod-technology")}
              className="group relative px-8 py-4 bg-transparent border-2 border-white/70 text-white font-semibold rounded-xl hover:border-amber-400 hover:bg-amber-400/10 hover:scale-105 hover:shadow-lg backdrop-blur-sm transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Explore Technology</span>
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .no-animations * {
          animation-duration: 0s !important;
          transition-duration: 0s !important;
        }
      `}</style>
    </section>
  );
}

function BlazePodTechnologySection() {
  return (
    <section
      id="blazepod-technology"
      className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden"
    >
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
            BlazePod +{" "}
            <span className="font-semibold text-amber-600">HAT Technology</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionary training technology that combines BlazePod's dynamic
            light system with our exclusive patent-pending High Accuracy Trigger
            for unprecedented precision in performance tracking.
          </p>
        </div>

        {/* Technology Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Features content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Texas Fencing Academy, we're taking performance training to
                the next level. Our BlazePod system enhanced with HAT technology
                offers unparalleled precision in tracking reaction time,
                agility, and focus—ensuring every training session is as
                effective as possible.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-amber-50 border border-amber-200/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-700 mb-4">
                  Exclusive HAT System Benefits:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Ultra-precise reaction time measurement (patent-pending)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Real-time dynamic drills that adapt to your skill level
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Personalized data-driven insights for targeted improvement
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Only available at Texas Fencing Academy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology image/visualization */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/competitiveEdge/BlazePodTraining.png"
                alt="BlazePod training with HAT technology"
                className="w-full h-80 lg:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent pointer-events-none" />

              {/* Floating tech badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0">
                <div className="text-center">
                  <div className="text-lg font-bold text-amber-600">HAT</div>
                  <div className="text-xs text-gray-600 font-medium">
                    Patent Pending
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompetitiveEdgeTextSection() {
  return (
    <section
      id="competitive-edge-text"
      className="relative py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden"
    >
      {/* Themed background motif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 rounded-full" />
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-15 rounded-full" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6 group">
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600" />
            <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-gray-200/70 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
            </div>
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-light text-gray-800 tracking-tight">
            Competitive <span className="font-semibold text-amber-600">Edge</span>
          </h2>
          <p className="mt-2 text-sm italic text-gray-600">Klingons! Train smarter. Fence faster.</p>
        </div>

        {/* Content with refined typography */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cyborg Drills */}
          <article className="prose prose-gray max-w-none prose-p:leading-relaxed prose-li:leading-relaxed prose-headings:mb-2">
            <h3 className="m-0 text-2xl font-extrabold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Cyborg Drills
            </h3>
            <p className="mt-4 text-gray-800">
              Short, repeatable blocks that sharpen timing, reaction, and footwork with crisp reps and immediate feedback—designed to make every minute count. 
            </p>
            <ul className="text-gray-800">
              <li><span className="font-semibold">Daily:</span> a quick skill tune‑up that fits busy schedules and keeps progress moving.</li>
              <li><span className="font-semibold">History:</span> a clear record of sessions and quality that reveals patterns at a glance.</li>
              <li><span className="font-semibold">Rank:</span> an ordered snapshot of skills so strengths and priorities are obvious.</li>
              <li><span className="font-semibold">Stats:</span> simple trends that show real gains—not just session noise.</li>
              <li><span className="font-semibold">Effort:</span> a feel for session load that balances work and recovery.</li>
              <li><span className="font-semibold">Standing:</span> a readiness view that blends results across drills and days.</li>
            </ul>
          </article>

          {/* Training Plan */}
          <article className="prose prose-gray max-w-none prose-p:leading-relaxed prose-li:leading-relaxed prose-headings:mb-2">
            <h3 className="m-0 text-2xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Training Plan
            </h3>
            <p className="mt-4 text-gray-800">
              The roadmap that sequences sessions over time so load progresses logically, recovery is protected, and peak form lands when it matters.
            </p>
            <ul className="text-gray-800">
              <li><span className="font-semibold">Day:</span> today’s purpose, drills, gear, and time—focused and actionable.</li>
              <li><span className="font-semibold">Week:</span> a microcycle that balances stress and recovery across days.</li>
              <li><span className="font-semibold">Blocks:</span> 2–6 week themes (strength, speed, tactics) that build toward targets.</li>
              <li><span className="font-semibold">Season:</span> phased planning—prepare, compete, transition—to time the peak.</li>
            </ul>
            <p className="mt-4 text-gray-800">
              Drills are the building blocks; the plan decides the sequence—what to do, when to do it, and how hard to go—so progress is steady without overload.
            </p>
          </article>
        </div>

        {/* Elegant divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
      </div>
    </section>
  );
}

const CardShell = ({ title, icon, children, accent = "bg-amber-500" }) => (
  <div className="h-full flex flex-col">
    <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl h-full">
      <div className={`${accent} rounded-2xl p-4 text-black h-full flex flex-col`}>
        <div className="flex items-center justify-between mb-4 shrink-0">
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
            <span className="text-sm">{icon}</span>
          </div>
        </div>
        <div className="flex-1 min-h-0">{children}</div>
      </div>
    </div>
  </div>
);

/* Your existing data (kept as-is, but we’ll guard its usage) */
const historyData = [
  { id: "1", date: "Aug 27", fencer: "Cole Beavers", activity: "3T half adv probe", result: "good" },
  { id: "2", date: "Aug 26", fencer: "Cole Beavers", activity: "raw retreat parry riposte", result: "ok" },
  { id: "3", date: "Aug 25", fencer: "Cole Beavers", activity: "wrk lunge adv lunge stop", result: "bad" },
  { id: "4", date: "Aug 24", fencer: "Cole Beavers", activity: "bepee touch remise 5T", result: "ok" },
];
const rankingRows = [
  { skill: "Foot Work",          score: 98, trend: "up"    }, // rank 1
  { skill: "Probe",              score: 98, trend: "up"    }, // rank 1
  { skill: "6 Choice Reaction",  score: 98, trend: "up"    }, // rank 1
  { skill: "Stutter",            score: 92, trend: "flat"  }, // rank 2
  { skill: "Power",              score: 92, trend: "down"  }, // rank 2
  { skill: "Stop Hit",           score: 92, trend: "up"    }, // rank 2
  { skill: "Hand",               score: 92, trend: "flat"  }, // rank 2
];

// Example day data (like the screenshot)
const dayPlan = {
  dateLabel: "SUNDAY",
  title: "Training - Day",
  athlete: "Nathan Li",
  subtitle: "Recovery Day:",
  description:
    "Enjoy the day but think about fencing.....",
  forList: ["speed", "strength upper"],
  customBlocks: [
    {
      name: "Blazepod target drill",
      steps: [
        "Blazepods set on target or wall, hit the target that lights up as fast as you can",
      ],
      gear: ["4/8 blazepods", "phone", "weapon", "mask", "glove"],
      timeMin: 10,
      repeats: 3,
    },
  ],
};

// Example week data (like the screenshot)
const weekPlan = {
  title: "Training - Week",
  athlete: "Cole Beavers",
  nextTournaments:
    "In 1 weeks is our next tournament: TFA Cup 1, TFA Cup 2, North Texas Roundup SYC/RJCC, Battle in Space City RYC/RJCC, Duel in Dallas Fall RYC, Austin Challenge SYC and RCC",
  trainingWeapon: ["Epee", "Saber"],
  weekNumber: 1,
  days: [
    { name: "Monday", focus: "Footwork, tempo, light conditioning" },
    { name: "Tuesday", focus: "Epee drills: probe, stop hit chains" },
    { name: "Wednesday", focus: "Saber timing + reaction 6-choice" },
    { name: "Thursday", focus: "Parry–riposte trees, recover drills" },
    { name: "Friday", focus: "Bouts, mental prep, taper" },
    { name: "Saturday", focus: "Tournament simulation / rest" },
    { name: "Sunday", focus: "Recovery, mobility" },
  ],
};

const badge = (r) =>
  r === "good" ? "bg-green-600" :
  r === "ok"   ? "bg-yellow-500" :
  r === "bad"  ? "bg-red-600" :
                 "bg-gray-300";

function ProTrainingHistoryCard() {
  const safeHistory = Array.isArray(historyData) ? historyData : [];
  const [active, setActive] = useState(0);

  // Precompute safe length to use in dependencies without risking undefined
  const historyCount = safeHistory.length;

  useEffect(() => {
    if (historyCount === 0) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % historyCount);
    }, 3000);
    return () => clearInterval(id);
  }, [historyCount]);

  return (
    <CardShell title="Cyborg Drills - History" icon="🕘">
      <ul className="relative space-y-3 overflow-auto pr-1 h-full">
        {safeHistory.map((h, i) => (
          <li key={h.id} className="relative flex items-start">
            <div className="flex flex-col items-center mr-3">
              <span className={`h-3 w-3 rounded-full ${badge(h.result)}`} />
              {i !== safeHistory.length - 1 && <span className="flex-1 w-px bg-gray-300 mt-1" />}
            </div>
            <div
              className={`flex-1 rounded-lg border p-3 bg-white/70 backdrop-blur
                          ${active === i ? "border-amber-500 ring-1 ring-amber-300 scale-[1.01] transition" : "border-gray-200"}`}
            >
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-600">{h.date}</div>
                <span className={`h-2.5 w-2.5 rounded-full ${badge(h.result)}`} />
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-medium text-sm">{h.fencer}</span>
              </div>
              <p className="text-sm text-gray-700 mt-1">{h.activity}</p>
            </div>
          </li>
        ))}
        {safeHistory.length === 0 && (
          <li className="text-sm text-gray-700">No history available.</li>
        )}
      </ul>
    </CardShell>
  );
}

function StatsCard({ skillMetrics = [], activeMetric = 0 }) {
  const safeMetrics = Array.isArray(skillMetrics) ? skillMetrics : [];
  return (
    <CardShell title="Cyborg Drills - Stats" icon="⚡">
      <div className="space-y-3 h-full pr-1">
        {safeMetrics.map((metric, index) => (
          <div
            key={metric.skill ?? index}
            className={`bg-black/10 rounded-lg p-3 transition-all duration-500
                        ${activeMetric === index ? "bg-black/20 scale-105" : ""}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">{metric.skill}</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${metric.trend === "up" ? "text-green-700" : "text-red-700"}`}>
                  {metric.percentage}
                </span>
                <span className="text-xs">{metric.trend === "up" ? "▲" : "▼"}</span>
                <span className="text-xs opacity-70">{metric.score}</span>
              </div>
            </div>
          </div>
        ))}
        {safeMetrics.length === 0 && (
          <div className="text-sm text-gray-700">No stats available.</div>
        )}
      </div>
    </CardShell>
  );
}
// Utilities
const rankBadge = (r) =>
  r === 1 ? "bg-amber-500 text-black" :
  r === 2 ? "bg-gray-800 text-white" :
  r === 3 ? "bg-gray-500 text-white" :
            "bg-black/20 text-gray-800";

// Stable rank computation with ties (1, 2, 2, 4…)
function computeRanks(rows, key = "score") {
  if (!Array.isArray(rows)) return [];
  const sorted = [...rows].sort((a, b) => (b[key] ?? 0) - (a[key] ?? 0));
  let lastScore = null;
  let lastRank = 0;
  return sorted.map((r, idx) => {
    const s = r[key] ?? 0;
    const rank = s === lastScore ? lastRank : idx + 1;
    lastScore = s;
    lastRank = rank;
    return { ...r, rank };
  });
}

// Sort helpers for header clicks
const sortFns = {
  skill: (a, b) => (a.skill || "").localeCompare(b.skill || ""),
  score: (a, b) => (b.score ?? 0) - (a.score ?? 0),
  rank: (a, b) => a.rank - b.rank
};

function RankingCard({ rows = [], defaultSort = "rank" }) {
  const safeRows = Array.isArray(rows) ? rows : [];
  const [sortKey, setSortKey] = React.useState(defaultSort);
  const [asc, setAsc] = React.useState(false);

  // Auto-highlight state
  const [activeRow, setActiveRow] = React.useState(0);

  const ranked = React.useMemo(() => computeRanks(safeRows, "score"), [safeRows]);
  const sorted = React.useMemo(() => {
    const base = [...ranked];
    base.sort(sortFns[sortKey] ?? sortFns.rank);
    if (asc) base.reverse();
    return base;
  }, [ranked, sortKey, asc]);

  // Reset activeRow when the sorted set changes
  React.useEffect(() => {
    setActiveRow(0);
  }, [sorted.length]);

  // Auto-advance highlight every 3s
  React.useEffect(() => {
    if (sorted.length === 0) return;
    const id = setInterval(() => {
      setActiveRow((p) => (p + 1) % sorted.length);
    }, 3000);
    return () => clearInterval(id);
  }, [sorted.length]);

  const SortButton = ({ col, label, width }) => (
    <button
      type="button"
      onClick={() => {
        setAsc((prev) => (sortKey === col ? !prev : false));
        setSortKey(col);
      }}
      className={`inline-flex items-center gap-1 font-semibold ${width ?? ""}`}
      aria-sort={sortKey === col ? (asc ? "ascending" : "descending") : "none"}
    >
      <span>{label}</span>
      <span className="text-xs opacity-70">
        {sortKey === col ? (asc ? "▲" : "▼") : "↕"}
      </span>
    </button>
  );

  return (
    <CardShell title="Cyborg Drills - Ranking" icon="🏅" accent="bg-amber-500">
      <div className="h-full overflow-hidden">
        <div className="rounded-2xl bg-white/70 backdrop-blur border border-gray-200 h-full">
          <div className=" max-h-[420px]">
            <table className="min-w-full text-sm">
              <thead className="sticky top-0 bg-white/90 backdrop-blur z-10">
                <tr className="text-left text-gray-700 border-b">
                  <th className="py-3 px-4 w-16">
                    <SortButton col="rank" label="Rank" width="w-full" />
                  </th>
                  <th className="py-3 px-4">
                    <SortButton col="skill" label="Skill" />
                  </th>
                  <th className="py-3 px-4 w-24 text-right">
                    <SortButton col="score" label="Score" />
                  </th>
                  <th className="py-3 px-4 w-20 text-right">Trend</th>
                </tr>
              </thead>
<tbody>
  {sorted.map((r, i) => {
    const isActive = i === activeRow;
    return (
      <tr
        key={`${r.skill}-${i}`}
        className={[
          "border-b last:border-b-0 transition-all duration-500",
          "hover:bg-black/5",
          // Active row: darker bg, lift, scale, and soft shadow
          isActive
            ? "bg-black/10 motion-safe:-translate-y-0.5 motion-safe:scale-[1.01] shadow-sm"
            : "",
        ].join(" ")}
        style={{
          // Prevent layout shift when translating/scale by keeping transform context
          transformOrigin: "center",
        }}
      >
        <td className="py-2.5 px-4">
          <span
            className={[
              "inline-flex items-center justify-center h-7 w-7 rounded-full text-xs font-bold",
              rankBadge(r.rank),
              isActive ? "ring-2 ring-amber-300/60 ring-offset-1" : "",
            ].join(" ")}
          >
            {r.rank}
          </span>
        </td>
        <td className="py-2.5 px-4">
          <span className={["font-medium", isActive ? "text-gray-900" : ""].join(" ")}>
            {r.skill}
          </span>
        </td>
        <td className="py-2.5 px-4 text-right tabular-nums">
          {r.score?.toFixed ? r.score.toFixed(0) : r.score}
        </td>
        <td className="py-2.5 px-4 text-right">
          <span
            className={
              r.trend === "up"
                ? "text-green-700"
                : r.trend === "down"
                ? "text-red-700"
                : "text-gray-600"
            }
            aria-label={r.trend === "up" ? "Up" : r.trend === "down" ? "Down" : "Flat"}
          >
            {r.trend === "up" ? "▲" : r.trend === "down" ? "▼" : "•"}
          </span>
        </td>
      </tr>
    );
  })}
  {sorted.length === 0 && (
    <tr>
      <td colSpan={4} className="py-6 px-4 text-gray-700">
        No rankings available.
      </td>
    </tr>
  )}
</tbody>

            </table>
          </div>
          <div className="px-4 py-2 text-xs text-gray-600 border-t">
            Click headers to sort • Ties receive the same rank; next rank is offset. [11][12]
          </div>
        </div>
      </div>
    </CardShell>
  );
}



/* Small chip and tiny icon helpers */
const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-black/10 px-2 py-0.5 text-[10px] font-medium text-gray-900">
    {children}
  </span>
);

/* Day panel — minimal typography, condensed spacing */
const TrainingDayPanel = memo(function TrainingDayPanel({ data }) {
  const d = data ?? {};
  return (
    <div className="space-y-2 text-[13px]">
      <div className="text-[10px] font-semibold text-blue-700 tracking-wide">{d.dateLabel}</div>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold">{d.title}</h3>
        <Chip>{d.athlete}</Chip>
      </div>

      <div className="flex justify-center">
        <img src="/assets/mark.png" alt="" className="h-12 opacity-90" />
      </div>

      <div className="font-semibold">{d.subtitle}</div>
      <p className="text-gray-800">{d.description}</p>

      {d.forList?.length ? (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold">For:</span>
          {d.forList.map((f, i) => <Chip key={i}>{f}</Chip>)}
        </div>
      ) : null}

      <div className="space-y-1">
        <div className="font-semibold">Custom Conditioning</div>
        {(d.customBlocks || []).map((b, i) => (
          <div key={i} className="rounded-lg border bg-white/70 p-2">
            <div className="text-[12px] font-semibold italic">{b.name}</div>
           {b.steps && <div className="text-[12px] text-gray-700 mt-0.5">{b.steps}</div>}
            <div className="text-[11px] text-gray-600 mt-1 flex items-center gap-2 flex-wrap">
              <Chip>🧰 {b.gear?.join(", ")}</Chip>
              <Chip>⏱ {b.timeMin} min</Chip>
              <Chip>🧾 {b.repeats}x</Chip>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

/* Week panel — compact list with select */
const TrainingWeekPanel = memo(function TrainingWeekPanel({ data }) {
  const d = data ?? {};
  const weapons = useMemo(() => d.trainingWeapon || [], [d.trainingWeapon]);
  const [weapon, setWeapon] = useState(weapons ?? "");
  useEffect(() => setWeapon(weapons ?? ""), [weapons]);

  return (
    <div className="space-y-2 text-[13px]">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold">{d.title}</h3>
        <Chip>Week {d.weekNumber}</Chip>
      </div>

      <div className="flex justify-center">
        <img src="/assets/mark.png" alt="" className="h-12 opacity-90" />
      </div>

      {d.nextTournaments && <p className="text-gray-800">{d.nextTournaments}</p>}
      <div className="text-[11px] text-gray-600">{d.athlete}</div>

      {weapons.length > 0 && (
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold uppercase text-gray-600">Weapon</span>
          <select
            className="border rounded-md px-2 py-1 bg-white text-[12px]"
            value={weapon}
            onChange={(e) => setWeapon(e.target.value)}
          >
            {weapons.map((w) => <option key={w} value={w}>{w}</option>)}
          </select>
        </div>
      )}

      <ul className="space-y-1">
        {(d.days || []).map((day) => (
          <li key={day.name} className="rounded-md border bg-white/70 p-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{day.name}</span>
              <Chip>{weapon || "All"}</Chip>
            </div>
            <div className="text-[12px] text-gray-800">{day.focus}</div>
          </li>
        ))}
      </ul>
    </div>
  );
});

const TrainingSwitcher = memo(function TrainingSwitcher({
  day,
  week,
  initial = "day",
  title = "Training Plan",
  maxHeight = "max-h-96" // ~20rem; tweak as needed
}) {
  const [view, setView] = useState(initial);
  const onChange = useCallback((v) => setView(v), []);
  const Day = useMemo(() => <TrainingDayPanel data={day} />, [day]);
  const Week = useMemo(() => <TrainingWeekPanel data={week} />, [week]);

  return (
    <CardShell title={title} icon="📅" accent="bg-amber-500 ">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[12px] text-gray-700">View</div>
        <div role="tablist" aria-label="Training view" className="inline-flex rounded-lg overflow-hidden border border-black/10">
          {["day","week"].map((id) => {
            const active = view === id;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={active}
                className={`px-3 py-1.5 text-[12px] font-medium transition ${active ? "bg-black/80 text-white" : "bg-white text-gray-800 hover:bg-black/5"}`}
                onClick={() => onChange(id)}
              >
                {id.toUpperCase() + id.slice(1)}
              </button>
            );
          })}
        </div>
      </div>

      {/* FIX: capped height + internal scroll */}
      <div className={`bg-white/70 backdrop-blur rounded-xl border p-3 h-full ${maxHeight} overflow-y-auto`}>
        {view === "day" ? Day : Week}
      </div>
    </CardShell>
  );
});
function AlternatingCardsSection({
  skillMetrics = [],
  rankingRows = [],
  day = dayPlan,
  week = weekPlan,
}) {
  const safeMetrics = Array.isArray(skillMetrics) ? skillMetrics : [];
  const [activeMetric, setActiveMetric] = React.useState(0);

  // Auto-cycle Stats highlights
  React.useEffect(() => {
    if (!safeMetrics.length) return;
    const id = setInterval(() => setActiveMetric((p) => (p + 1) % safeMetrics.length), 3000);
    return () => clearInterval(id);
  }, [safeMetrics.length]);

  const items = [
    {
      id: "stats",
      eyebrow: "Clarity at a glance",
      title: "Stats that drive action",
      blurb:
        "Signal over noise—trends, quality, and effort stitched together so the next move is obvious.",
      card: <StatsCard skillMetrics={safeMetrics} activeMetric={activeMetric} />,
    },
    {
      id: "history",
      eyebrow: "Progress you can trace",
      title: "History with meaning",
      blurb:
        "Every session in context to reveal patterns—what builds form, what drains it, where to adjust.",
      card: <ProTrainingHistoryCard />,
    },
    {
      id: "ranking",
      eyebrow: "Prioritize the win",
      title: "Ranked skills, clear focus",
      blurb:
        "Strengths and gaps, ordered—train what moves the needle this week, not just what feels good.",
      card: <RankingCard rows={rankingRows} />,
    },
    {
      id: "switcher",
      eyebrow: "From today to peak",
      title: "Day-to-week planning",
      blurb:
        "Stress and recovery sequenced so peak form lands on time, not by accident.",
      card: <TrainingSwitcher day={day} week={week} />,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
      {/* Background motif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 rounded-full" />
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-15 rounded-full" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>
      </div>

      {/* Section header */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-16 taos:opacity-0 taos:translate-y-4 duration-700">
        <div className="flex items-center justify-center space-x-4 mb-6 group">
          <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600" />
          <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-gray-200/70 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
          </div>
          <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600" />
        </div>
        <h2 className="text-4xl lg:text-5xl font-light text-gray-800 tracking-tight">
          Competitive <span className="font-semibold text-amber-600">Edge</span>
        </h2>
        <p className="mt-2 text-sm italic text-gray-600">
          Train smarter. Fence faster. Results that compound.
        </p>
      </div>

      {/* Alternating rows */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-16">
        {items.map((item, idx) => {
          const odd = idx % 2 === 0;
          const delay = 100 * (idx + 1);
          return (
            <div
              key={item.id}
              className="grid lg:grid-cols-12 gap-10 items-center"
            >
              {/* Detail side */}
              <div
                className={[
                  "lg:col-span-5",
                  odd ? "order-1" : "order-1 lg:order-2",
                  "taos:opacity-0 taos:translate-y-4",
                  `duration-700 delay-[${delay}ms]`,
                ].join(" ")}
              >
                <div className="prose prose-gray max-w-none md:prose-lg prose-p:leading-relaxed prose-headings:mb-2">
                  <p className="text-xs tracking-wide text-amber-700/90 font-semibold mb-1 uppercase">
                    {item.eyebrow}
                  </p>
                  <h3 className="m-0 text-2xl font-extrabold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-800">
                    {item.blurb}
                  </p>
                </div>
                <div className="mt-5 h-px w-40 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
              </div>

              {/* Card side */}
              <div
                className={[
                  "lg:col-span-7",
                  odd ? "order-2" : "order-2 lg:order-1",
                  "taos:opacity-0 taos:translate-y-4",
                  `duration-700 delay-[${delay + 150}ms]`,
                ].join(" ")}
              >
                <div className="relative group/card rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-md ring-1 ring-black/5 transition-all duration-500">
                  {/* Gradient edge accent */}
                  <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent opacity-80" />
                  {/* Hover lift + glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-50/0 via-amber-100/10 to-amber-50/0" />
                  <div className="motion-safe:group-hover/card:-translate-y-0.5 motion-safe:group-hover/card:scale-[1.01] transition-transform duration-300 will-change-transform">
                    {item.card}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PersonalizedTrainingSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-100 to-amber-200 opacity-30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-20 rounded-full"></div>
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
            Personalized{" "}
            <span className="font-semibold text-amber-600">Training Plans</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Custom conditioning programs targeting your weakest skills and
            tournament-specific preparation aligned with your competition
            schedule. Every focused rep gets you closer to the top.
          </p>
        </div>

        {/* Training Plan Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {competitiveEdgeFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-700 ease-out min-h-[320px] cursor-pointer overflow-hidden"
            >
              {/* Subtle top accent with animation */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50/0 via-amber-100/0 to-amber-50/0 group-hover:from-amber-50/20 group-hover:via-amber-100/30 group-hover:to-amber-50/20 transition-all duration-700 rounded-xl"></div>

              {/* Feature content with fade and scale animations */}
              <div className="group-hover:opacity-0 group-hover:scale-95 transition-all duration-500 ease-out">
                {/* Feature icon */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-3xl group-hover:scale-125 group-hover:rotate-12 group-hover:bg-gradient-to-br group-hover:from-amber-100 group-hover:to-amber-200 transition-all duration-500 ease-out">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-10 h-10 group-hover:animate-pulse object-contain"
                      />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Details overlay - appears on hover like a flipped card */}
              <div className="absolute inset-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center transform translate-y-4 group-hover:translate-y-0 ease-out">
                <h5 className="text-amber-700 font-semibold text-center mb-4 text-base group-hover:animate-pulse">
                  DETAILS
                </h5>
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="bg-amber-50 rounded-lg p-3 border border-amber-100 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out hover:bg-amber-100 hover:scale-102"
                      style={{ transitionDelay: `${detailIndex * 100}ms` }}
                    >
                      <div className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></div>
                        <span>{detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                  <span className="text-sm text-amber-600 font-medium group-hover:text-amber-700 group-hover:animate-pulse">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Training Plan */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-16 hover:shadow-2xl transition-all duration-700 group relative overflow-hidden">
          {/* Animated background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-amber-100/0 to-amber-50/0 group-hover:from-amber-50/20 group-hover:via-amber-100/10 group-hover:to-amber-50/20 transition-all duration-1000 rounded-2xl"></div>

          {/* Subtle animated border glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-200/50 transition-all duration-700"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              {/* Animated header with glow effect */}
              <div className="relative inline-block group/header">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors duration-500 group/header-hover:animate-pulse">
                  Sample Weekly Training Plan
                </h3>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>

              {/* Animated subtitle with slide effect */}
              <div className="relative overflow-hidden">
                <p className="text-gray-600 transform group-hover:translate-y-0 group-hover:text-amber-600 transition-all duration-500">
                  Saturday - Footwork & Conditioning
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-30"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Situational Challenges */}
              <div className="space-y-6 group/challenges">
                <div className="relative">
                  <h4 className="text-lg font-semibold text-amber-600 mb-4 group-hover:text-amber-700 transition-colors duration-300 relative">
                    Situational Challenges
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group/challenges-hover:w-full transition-all duration-500 ease-out"></div>
                  </h4>
                </div>

                <div className="space-y-3">
                  {[
                    "First to 3 points wins, loser does quick penalty",
                    "Start 2-4 down and try to come back",
                    "Score only on counter-attacks",
                  ].map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-amber-50 rounded-lg hover:bg-amber-100 hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-amber-200 group/item relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700"></div>

                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-amber-600 group-hover/item:scale-125 group-hover/item:animate-pulse transition-all duration-300"></div>
                      <span className="text-gray-700 group-hover/item:text-gray-800 group-hover/item:font-medium transition-all duration-300 relative z-10">
                        {challenge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Conditioning */}
              <div className="space-y-6 group/conditioning">
                <div className="relative">
                  <h4 className="text-lg font-semibold text-amber-600 mb-4 group-hover:text-amber-700 transition-colors duration-300 relative">
                    Custom Conditioning
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group/conditioning-hover:w-full transition-all duration-500 ease-out delay-200"></div>
                  </h4>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      exercise: "Blazepod Tripod Footwork",
                      details: "4 tripods + phone setup • 10 min • 3 times",
                    },
                    {
                      exercise: "Broadjumps",
                      details:
                        "3 explosive jumps • controlled execution • 5 min • 3 sets",
                    },
                    {
                      exercise: "Wrist Twists",
                      details:
                        "Tool work with extended arms • variable duration",
                    },
                  ].map((workout, index) => (
                    <div
                      key={index}
                      className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500 hover:bg-amber-100 hover:border-l-amber-600 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer group/workout relative overflow-hidden"
                      style={{ animationDelay: `${index * 150 + 300}ms` }}
                    >
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/0 via-amber-200/20 to-amber-100/0 transform scale-x-0 group-hover/workout:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></div>

                      {/* Animated left border expansion */}
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-600 transform scale-y-0 group-hover/workout:scale-y-100 transition-transform duration-400 origin-top"></div>

                      <div className="relative z-10">
                        <h5 className="font-medium text-gray-800 mb-1 group-hover/workout:text-amber-800 group-hover/workout:font-semibold transition-all duration-300">
                          {workout.exercise}
                        </h5>
                        <p className="text-sm text-gray-600 group-hover/workout:text-gray-700 transition-colors duration-300">
                          {workout.details}
                        </p>
                      </div>

                      {/* Floating accent dot */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover/workout:opacity-100 group-hover/workout:animate-pulse transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom decorative element */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <div
                  className="w-1 h-1 bg-amber-300 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-8 h-px bg-amber-300"></div>
            <div className="mx-3 w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
            <div className="w-8 h-px bg-amber-300"></div>
          </div>
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-amber-50 to-amber-50 border border-amber-200/50 rounded-lg p-6">
            <p className="text-gray-700 font-medium text-base mb-4">
              <span className="text-amber-700 font-semibold">
                Ready to unlock your competitive edge?
              </span>{" "}
              Join our elite training program and experience the future of
              fencing performance enhancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="https://texasfencingacademy.glide.page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 hover:scale-105 transition-all duration-500 shadow-lg"
              >
                <span>Join Competitive Edge</span>
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="tel:+1-512-496-9022"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 hover:scale-105 transition-all duration-500"
              >
                <span>Schedule Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CompetitiveEdgePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <InfoBanner />
      <Navbar />
      <CompetitiveEdgeHeroSection />
      <BlazePodTechnologySection />
      <AlternatingCardsSection skillMetrics={skillMetrics} rankingRows={rankingRows} />
      <PersonalizedTrainingSection />
      <FooterSection />
    </div>
  );
}
