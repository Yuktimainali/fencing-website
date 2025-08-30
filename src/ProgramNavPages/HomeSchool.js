import { useState, useEffect} from "react";
import Navbar from "../HomePageComponent/Navbar";
import InfoBanner from "../HomePageComponent/InfoBanner";

function HomeschoolPEHeroSection() {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    let t;
    const onResize = () => {
      setIsResizing(true);
      clearTimeout(t);
      t = setTimeout(() => setIsResizing(false), 300);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const desktopImg = "/homeschoolPe/homeschoolbg.png";
  const mobileImg = "/homeschoolPe/homeschoolbg.png";

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isResizing ? "no-animations" : ""}`}>
      {/* BG Image & Overlay */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width:639px)" srcSet={mobileImg} />
          <img src={desktopImg} alt="Homeschool fencing training Texas Fencing Academy" className="w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/70 to-amber-50/10"></div>
      </div>

      {/* Fencing Motifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform -rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-amber-400 to-transparent transform rotate-45 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12 px-6 py-20 animate-fadeInDown">
        {/* Heading */}
        <div className="space-y-6">
          <div className="overflow-hidden">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extralight tracking-tight leading-none text-white drop-shadow-lg animate-fadeInDown">
              <span className="block opacity-0 animate-[slideUp_0.8s_ease-out_0.5s_forwards]">
                HOMESCHOOL PE IN
              </span>
              <span className="block text-amber-400 font-normal drop-shadow-lg opacity-0 animate-[slideUp_0.8s_ease-out_0.8s_forwards]">
                AUSTIN
              </span>
              <span className="block font-normal opacity-0 animate-[slideUp_0.8s_ease-out_1.1s_forwards]">
                EARN CREDIT THROUGH FENCING
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-4 opacity-0 animate-[fadeIn_0.8s_ease-out_1.5s_forwards]">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
            <div className="w-12 h-12 border-2 border-white/70 rotate-45 flex items-center justify-center bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
        </div>

        <div className="overflow-hidden">
          <h2 className="text-2xl lg:text-3xl font-light text-white tracking-[0.13em] drop-shadow-md opacity-0 animate-[slideUp_0.8s_ease-out_2s_forwards]">
            Accredited Off-Campus PE & Flexible Schedules – Ages 6–18
          </h2>
        </div>
        <div className="overflow-hidden">
          <p className="text-lg lg:text-xl text-white leading-relaxed font-light max-w-2xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_2.5s_forwards]">
            Accredited for homeschool families. Safe, structured fencing instruction. All equipment provided.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[slideUp_0.8s_ease-out_3s_forwards]">
          <a
            href="tel:512-555-0123"
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl shadow-lg
              hover:shadow-xl hover:scale-105 hover:from-amber-600 hover:to-amber-700 transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10">Book a Free Trial Class</span>
          </a>
          <a
            href="#info"
            onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#info");
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-transparent border-2 border-white/70 text-white font-semibold rounded-xl hover:border-amber-400 hover:bg-amber-400/10 hover:scale-105 hover:shadow-lg backdrop-blur-sm transition-all duration-500 text-lg min-w-[200px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Learn More</span>
          </a>
        </div>
      </div>

      {/* Animation CSS */}
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
        .animate-fadeInDown { animation: fadeInDown 0.8s ease forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
        .animate-slideUp { animation: slideUp 0.6s ease forwards; }
      `}</style>
    </section>
  );
}


function HomeschoolPEInfoSection() {
  // Simple array; no useMemo needed
  const slides = [
    { src: "/homeschoolPe/homeschoolpractice1.jpg", alt: "Homeschool students training in fencing 1" },
    { src: "/homeschoolPe/homeschoolpractice2.jpg", alt: "Homeschool students training in fencing 2" },
    // Add more:
    // { src: "/homeschoolPe/homeschoolpractice3.jpg", alt: "..." },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  return (
    <section
      id="info"
      className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden"
    >
      {/* Enhanced Background Effects with subtle animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-15 rounded-full animate-float"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-shimmer"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-shimmer-delayed"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header with enhanced animations */}
        <div className="text-center mb-16 animate-fadeInDown">
          <div className="flex items-center justify-center space-x-4 mb-8 group">
            <div className="w-16 h-px bg-amber-500 transition-all duration-700 group-hover:w-24 group-hover:bg-amber-600"></div>
            <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-gray-200/70 backdrop-blur-lg relative group-hover:border-amber-600 group-hover:scale-110 transition-all duration-500">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
              {/* Rotating ring effect */}
              <div className="absolute inset-0 w-12 h-12 border-2 border-amber-300/30 rounded-full animate-spin-slow"></div>
            </div>
            <div className="w-16 h-px bg-amber-500 transition-all duration-700 group-hover:w-24 group-hover:bg-amber-600"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4 tracking-tight hover:tracking-wide transition-all duration-500">
            Why Choose <span className="font-semibold text-amber-600 hover:text-amber-700 transition-colors duration-300">Homeschool PE</span> at TFA?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeInUp">
            Earn official PE credit while developing discipline, fitness, and character through the elegant art of fencing.
          </p>
        </div>

        {/* Main Content Grid with staggered animations */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Key Benefits with hover animations */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-amber-50 border border-amber-200/50 rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 hover:border-amber-300/70 transition-all duration-500 group animate-slideInLeft">
              <h3 className="text-2xl font-semibold text-amber-700 mb-6 flex items-center group-hover:text-amber-800 transition-colors duration-300">
                <svg className="w-6 h-6 text-amber-600 mr-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Officially Accredited Program
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Accepted by Austin-area ISDs and homeschool networks",
                  "Official documentation provided for transcript records",
                  "Meets Texas homeschool PE requirements",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0 hover:scale-150 transition-transform duration-300"></div>
                    <span className="hover:text-gray-800 transition-colors duration-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:-translate-y-2 hover:border-gray-200 transition-all duration-500 group animate-slideInLeft" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center group-hover:text-gray-900 transition-colors duration-300">
                <svg className="w-6 h-6 text-amber-600 mr-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Flexible Scheduling Options
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-amber-50 rounded-lg p-4 text-center border border-amber-100 hover:bg-amber-100 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default">
                  <div className="font-semibold text-amber-700 text-sm">Morning Sessions</div>
                  <div className="text-gray-600 text-xs">9:00 AM - 12:00 PM</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 text-center border border-amber-100 hover:bg-amber-100 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default">
                  <div className="font-semibold text-amber-700 text-sm">Afternoon Sessions</div>
                  <div className="text-gray-600 text-xs">1:00 PM - 4:00 PM</div>
                </div>
              </div>
              <p className="text-gray-600 text-center text-sm group-hover:text-gray-700 transition-colors duration-300">Weekly or semester enrollment available</p>
            </div>
          </div>

          {/* Right side - Enhanced Image with autoplay slideshow */}
          <div className="relative animate-slideInRight">
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-700"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="relative w-full h-96">
                {slides.map((s, i) => (
                  <img
                    key={s.src}
                    src={s.src}
                    alt={s.alt}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700
                    ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                    loading="lazy"
                  />
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-amber-400/10 to-transparent pointer-events-none group-hover:from-amber-400/20 transition-all duration-500" />

              {/* Animated floating badges */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg hover:shadow-xl hover:scale-110 hover:bg-white transition-all duration-300 cursor-default">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-800 hover:text-amber-600 transition-colors duration-300">Ages 6-18</div>
                  <div className="text-xs text-gray-600 font-medium">All Skill Levels</div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-amber-500/90 backdrop-blur-sm rounded-lg p-3 shadow-lg text-white hover:bg-amber-600 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-default">
                <div className="text-center">
                  <div className="text-sm font-bold">Equipment Provided</div>
                  <div className="text-xs font-medium">No Additional Costs</div>
                </div>
              </div>

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Benefits Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-gray-800 text-center mb-12 hover:tracking-wide transition-all duration-500">
            Why <span className="font-semibold text-amber-600 hover:text-amber-700 transition-colors duration-300">Fencing</span> for Homeschool PE?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                title: "Physical & Mental Development",
                description: "Combines cardiovascular fitness with strategic thinking and quick decision-making skills.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                ),
                title: "Character & Discipline",
                description: "Develops respect, sportsmanship, and self-confidence through structured Olympic sport training.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                ),
                title: "Expert Instruction",
                description: "Learn from certified coaches with national and Olympic experience in small group settings.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg hover:-translate-y-3 hover:border-amber-200 transition-all duration-500 group animate-fadeInUp cursor-default" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-amber-200 group-hover:to-amber-300 transition-all duration-300">
                  <svg className="w-6 h-6 text-amber-600 group-hover:text-amber-700 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Areas Served & Program Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 animate-slideInLeft">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center hover:text-amber-700 transition-colors duration-300">Serving Families Across</h3>
            <div className="grid grid-cols-2 gap-3">
              {["Austin", "Round Rock", "Pflugerville", "Cedar Park", "Leander", "Georgetown"].map((city, idx) => (
                <div key={idx} className="bg-amber-50 rounded-lg p-3 text-center border border-amber-200/50 hover:bg-amber-100 hover:border-amber-300 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default" style={{ animationDelay: `${idx * 50}ms` }}>
                  <span className="font-medium text-amber-700 text-sm hover:text-amber-800 transition-colors duration-200">{city}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-amber-50 border border-amber-200/50 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 hover:border-amber-300/70 transition-all duration-500 animate-slideInRight">
            <h3 className="text-2xl font-semibold text-amber-700 mb-6 text-center hover:text-amber-800 transition-colors duration-300">Program Essentials</h3>
            <div className="space-y-4">
              {[
                { label: "Age Range", value: "6-18 years" },
                { label: "Class Size", value: "Small Groups" },
                { label: "Equipment", value: "All Provided" },
                { label: "Enrollment", value: "Flexible Options" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-amber-200/50 hover:bg-amber-100/50 hover:px-2 hover:rounded transition-all duration-300 cursor-default" style={{ animationDelay: `${idx * 100}ms` }}>
                  <span className="font-medium text-gray-700 hover:text-gray-800 transition-colors duration-200">{item.label}</span>
                  <span className="text-amber-600 font-semibold hover:text-amber-700 hover:scale-105 transition-all duration-200">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fadeInUp">
          <div className="inline-flex items-center justify-center mb-6 group">
            <div className="w-8 h-px bg-amber-300 group-hover:w-12 transition-all duration-500"></div>
            <div className="mx-3 w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-150 group-hover:bg-amber-600 transition-all duration-300"></div>
            <div className="w-8 h-px bg-amber-300 group-hover:w-12 transition-all duration-500"></div>
          </div>
          <h3 className="text-3xl font-light text-gray-800 mb-6 hover:tracking-wide transition-all duration-500">
            Ready to <span className="font-semibold text-amber-600 hover:text-amber-700 transition-colors duration-300">Begin</span> Your PE Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
            Provide your homeschooler with accredited PE credit, expert instruction, and character development in one comprehensive program.
          </p>
          <a href="tel:512-555-0123" className="group relative px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:from-amber-600 hover:to-amber-700 transition-all duration-500 text-lg overflow-hidden inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Schedule Your Free Trial Class</span>
          </a>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style>{`
        @keyframes fadeInDown { 0% { opacity: 0; transform: translateY(-30px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { 0% { opacity: 0; transform: translateX(-50px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { 0% { opacity: 0; transform: translateX(50px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes shimmer { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.3; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-fadeInDown { animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-slideInLeft { animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-slideInRight { animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        .animate-shimmer-delayed { animation: shimmer 3s ease-in-out infinite 1.5s; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </section>
  );
}

export default function HomeschoolPELandingPage() {
  return (
    <main className="bg-gradient-to-br from-amber-50 via-white to-primary-100">
        <InfoBanner />
        <Navbar />
      <HomeschoolPEHeroSection />
      <HomeschoolPEInfoSection />
    </main>
  );
}
