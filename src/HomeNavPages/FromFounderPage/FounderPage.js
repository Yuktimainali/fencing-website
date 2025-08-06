import { useEffect, useState } from "react";
import founderpageimg1 from "../../assets/founderpageimg1.jpg";
import founderpageimg2 from "../../assets/founderpageimg2.jpg";
import founderpagebg from "../../assets/founderpagebg.mp4";
import Navbar from "../../HomePageComponent/Navbar";
import InfoBanner from "../../HomePageComponent/InfoBanner";

function HeroFounderSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={founderpagebg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Video Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/50 to-gray-900/60"></div>
            </div>

            {/* Refined fencing motifs */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-40 left-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform rotate-12 animate-fade-in delay-[3000ms]"></div>
                <div className="absolute bottom-40 right-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform -rotate-12 animate-fade-in delay-[3500ms]"></div>
                <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-amber-400 to-transparent transform rotate-45 animate-fade-in delay-[4000ms]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
                {/* Main heading */}
                <div className="space-y-6">
                    <div className="overflow-hidden">
                        <h1 className="text-6xl lg:text-7xl font-extralight tracking-tight leading-none animate-slide-up delay-[800ms] text-white drop-shadow-lg">
                            <span className="block animate-slide-up delay-[1000ms]">
                                FROM OUR
                            </span>
                            <span className="block text-amber-400 font-normal animate-slide-up delay-[1400ms] drop-shadow-lg">
                                FOUNDERS
                            </span>
                        </h1>
                    </div>

                    {/* Elegant centered divider */}
                    <div className="flex items-center justify-center space-x-4 animate-fade-in delay-[2200ms]">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400 animate-slide-right delay-[2800ms]"></div>
                        <div className="w-12 h-12 border-2 border-white/70 rotate-45 flex items-center justify-center animate-fade-in delay-[2400ms] hover:scale-110 hover:border-amber-400 transition-all duration-500 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm">
                            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-[2600ms]"></div>
                        </div>
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400 animate-slide-left delay-[2800ms]"></div>
                    </div>
                </div>

                {/* Excellence tagline */}
                <div className="overflow-hidden">
                    <h2 className="text-2xl lg:text-3xl font-light text-white tracking-[0.15em] animate-slide-up delay-[3000ms] drop-shadow-md">
                        VINCENT BRADFORD & RAY PARKER
                    </h2>
                </div>

                {/* Description */}
                <div className="overflow-hidden">
                    <p className="text-lg lg:text-xl text-white leading-relaxed font-light max-w-3xl mx-auto animate-fade-in delay-[3400ms] drop-shadow-sm">
                        Meet the visionaries behind Texas Fencing Academy and discover their passion
                        for developing the next generation of fencers through excellence and dedication.
                    </p>
                </div>
            </div>
        </section>
    );
}

function FoundersProfileSection() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-gray-50 via-gray-100 to-slate-200 overflow-hidden">
            {/* Subtle background patterns */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-slate-200 to-gray-300 opacity-20 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-200 to-slate-300 opacity-15 rounded-full"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                    <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center space-x-4 mb-8 group">
                        <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
                        <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-white/70 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500">
                            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
                    </div>

                    <h2 className="text-5xl font-light text-gray-800 mb-6 tracking-tight">
                        Meet Our <span className="font-semibold text-amber-600 hover:scale-105 transition-transform duration-300 inline-block">Founders</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                        The vision and expertise behind Texas Fencing Academy's success
                    </p>
                </div>

                {/* Details grid matching summer camp card layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Vincent Bradford Card */}
                    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-200 p-8 text-center transform hover:scale-105 transition-all duration-500 group">
                        <div className="mb-6">
                            <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src={founderpageimg1}
                                    alt="Vincent Bradford"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-amber-600 font-semibold text-xl mb-6 tracking-wider border-b border-amber-200 pb-2">
                            VINCENT BRADFORD
                        </h3>
                        <div className="space-y-2">
                            <p className="text-lg font-semibold text-gray-800">Co-Founder</p>
                            <p className="text-gray-600 leading-relaxed">
                                Master fencer and instructor with decades of experience in competitive fencing and coaching excellence.
                            </p>
                        </div>
                    </div>

                    {/* Ray Parker Card */}
                    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-200 p-8 text-center transform hover:scale-105 transition-all duration-500 group">
                        <div className="mb-6">
                            <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src={founderpageimg2}
                                    alt="Ray Parker"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-amber-600 font-semibold text-xl mb-6 tracking-wider border-b border-amber-200 pb-2">
                            RAY PARKER
                        </h3>
                        <div className="space-y-2">
                            <p className="text-lg font-semibold text-gray-800">Co-Founder</p>
                            <p className="text-gray-600 leading-relaxed">
                                Renowned fencing expert dedicated to fostering athletic excellence and personal growth through the art of fencing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Info Section matching summer camp style */}

            </div>
        </section>
    );
}

function FounderVideoSection() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
            {/* Background patterns matching summer camp groups section */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-15 rounded-full"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                    <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center space-x-4 mb-8 group">
                        <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
                        <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-gray-200/70 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500">
                            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
                    </div>
                    <h2 className="text-5xl font-light text-gray-800 mb-6 tracking-tight">
                        Our <span className="font-semibold text-amber-600 hover:scale-105 transition-transform duration-300 inline-block">Story</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                        Watch Vincent Bradford and Ray Parker share their journey and vision for Texas Fencing Academy
                    </p>
                </div>

                {/* Video container with yellow shadow and corners */}
                <div className="relative max-w-4xl mx-auto mb-16">
                    {/* Small concentric circles at top-left and bottom-right */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        {/* Top-left concentric rings */}
                        <div className="absolute -top-8 -left-8">
                            <div className="w-10 h-10 border-2 border-amber-300/50 rounded-full animate-pulse-slow"></div>
                            <div className="w-16 h-16 border-2 border-amber-200/30 rounded-full absolute left-[-12px] top-[-12px] animate-pulse-slower"></div>
                        </div>
                        {/* Bottom-right concentric rings */}
                        <div className="absolute -bottom-8 -right-8">
                            <div className="w-12 h-12 border-2 border-amber-400/40 rounded-full animate-pulse-slow"></div>
                            <div className="w-20 h-20 border-2 border-amber-300/20 rounded-full absolute left-[-16px] top-[-16px] animate-pulse-slower"></div>
                        </div>
                    </div>
                    <div
                        className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 z-10"
                        style={{
                            boxShadow: '0 0 36px 0 rgba(251,191,36,0.20)',
                        }}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/jtGpEoTHXgE?start=7"
                            title="From our founders Vincent Bradford and Ray Parker"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                        {/* Decorative corner borders */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-amber-400/70 rounded-tl-lg pointer-events-none"></div>
                        <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-amber-400/70 rounded-tr-lg pointer-events-none"></div>
                        <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-amber-400/70 rounded-bl-lg pointer-events-none"></div>
                        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-amber-400/70 rounded-br-lg pointer-events-none"></div>
                    </div>
                </div>



            </div>
        </section>
    );
}



function InformationLinksSection() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-15 rounded-full"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                    <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Section header */}
                <div className="flex items-center justify-center space-x-4 mb-8 group">
                    <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
                    <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-gray-200/70 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500">
                        <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
                </div>
                {/* End of section header */}

                <div className="overflow-hidden">
                    <h2 className="text-5xl font-light text-gray-800 mb-6 tracking-tight animate-slide-up delay-[1000ms]">
                        For More <span className="font-semibold text-amber-600">Information</span>
                    </h2>
                </div>

                <div className="overflow-hidden">
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-16 animate-fade-in delay-[1400ms]">
                        Access important resources and academy information
                    </p>
                </div>

                {/* Links grid matching summer camp button style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Policies Card */}
                    <a
                        href="https://texasfencingacademy.org/?page_id=251"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-200 p-8 text-center transform hover:scale-105 transition-all duration-500 group"
                    >
                        <div className="mb-6">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-amber-600 font-semibold text-xl mb-6 tracking-wider border-b border-amber-200 pb-2">
                            POLICIES
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Academy guidelines & procedures
                        </p>
                    </a>

                    {/* Fencing Links Card */}
                    <a
                        href="https://texasfencingacademy.org/?page_id=274"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-200 p-8 text-center transform hover:scale-105 transition-all duration-500 group"
                    >
                        <div className="mb-6">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-amber-600 font-semibold text-xl mb-6 tracking-wider border-b border-amber-200 pb-2">
                            FENCING LINKS
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Useful fencing resources
                        </p>
                    </a>

                    {/* Opt-out Preferences Card */}
                    <a
                        href="https://texasfencingacademy.org/?page_id=1197"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-200 p-8 text-center transform hover:scale-105 transition-all duration-500 group"
                    >
                        <div className="mb-6">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-amber-600 font-semibold text-xl mb-6 tracking-wider border-b border-amber-200 pb-2">
                            OPT-OUT
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Communication preferences
                        </p>
                    </a>
                </div>
            </div>{/* Close of relative z-10 max-w-7xl mx-auto px-6 text-center */}
        </section>
    );
}


export default function FounderPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isResizing, setIsResizing] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
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
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={`bg-gradient-to-b from-slate-50 to-white min-h-screen overflow-hidden contain-layout-paint ${isResizing ? "no-animations" : ""
            } ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <InfoBanner />
            <Navbar />
            <HeroFounderSection />
            <FoundersProfileSection />
            <FounderVideoSection />
            <InformationLinksSection />
        </div>
    );
}
