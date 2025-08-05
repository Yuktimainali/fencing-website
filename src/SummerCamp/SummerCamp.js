// import { useEffect, useState } from 'react';

// export default function SummerCampPage() {
//   const [isResizing, setIsResizing] = useState(false);

//   useEffect(() => {
//     let resizeTimer;
//     function handleResize() {
//       setIsResizing(true);
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         setIsResizing(false);
//       }, 300);
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Scroll to registration handler
//   const scrollToRegistration = () => {
//     const registrationSection = document.querySelector('#registration-section');
//     if (registrationSection) {
//       registrationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <div className={`bg-primary-900 text-white min-h-screen overflow-hidden contain-layout-paint ${
//       isResizing ? 'no-animations' : ''
//     }`}>
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
//         {/* Subtle geometric background patterns */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-20 right-20 w-96 h-96 border border-accent-400/30 rounded-full animate-pulse-slow delay-1000 will-change-transform-opacity"></div>
//           <div className="absolute bottom-32 left-32 w-64 h-64 border border-white/20 rounded-full animate-pulse-slow delay-1500 will-change-transform-opacity"></div>
//           <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-accent-400/20 rounded-full animate-pulse-slow delay-2000 will-change-transform-opacity"></div>
//         </div>

//         {/* Subtle fencing motifs */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-40 left-1/4 w-px h-40 bg-gradient-to-b from-accent-400 to-transparent transform rotate-12 animate-fade-in delay-[3000ms] will-change-transform-opacity"></div>
//           <div className="absolute bottom-40 right-1/4 w-px h-40 bg-gradient-to-b from-accent-400 to-transparent transform -rotate-12 animate-fade-in delay-[3500ms] will-change-transform-opacity"></div>
//           <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-white/30 to-transparent transform rotate-45 animate-fade-in delay-[4000ms] will-change-transform-opacity"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left Column - Main Content */}
//             <div className="text-left space-y-12">
//               {/* Main heading */}
//               <div className="space-y-6">
//                 <div className="overflow-hidden">
//                   <h1 className="text-6xl lg:text-7xl font-extralight tracking-tight leading-none animate-slide-up delay-[800ms] will-change-transform-opacity">
//                     <span className="block animate-slide-up delay-[1000ms] will-change-transform-opacity">
//                       SUMMER
//                     </span>
//                     <span className="block text-accent-400 font-normal animate-slide-up delay-[1400ms] will-change-transform-opacity">
//                       FENCING
//                     </span>
//                     <span className="block animate-slide-up delay-[1800ms] will-change-transform-opacity">
//                       CAMP
//                     </span>
//                   </h1>
//                 </div>

//                 {/* Elegant left-aligned divider */}
//                 <div className="flex items-center space-x-4 animate-fade-in delay-[2200ms] will-change-transform-opacity">
//                   <div className="w-12 h-12 border-2 border-accent-400/50 rotate-45 flex items-center justify-center animate-fade-in delay-[2400ms] hover:scale-110 transition-transform duration-500 will-change-transform-opacity">
//                     <div className="w-3 h-3 bg-accent-400 rounded-full animate-pulse delay-[2600ms] will-change-transform-opacity"></div>
//                   </div>
//                   <div className="w-32 h-px bg-gradient-to-r from-accent-400 to-transparent animate-slide-right delay-[2800ms] will-change-transform-opacity"></div>
//                 </div>
//               </div>

//               {/* Excellence tagline */}
//               <div className="overflow-hidden">
//                 <h2 className="text-2xl lg:text-3xl font-light text-primary-200 tracking-[0.15em] animate-slide-up delay-[3000ms] will-change-transform-opacity">
//                   TWO WEEKS OF EXCELLENCE
//                 </h2>
//               </div>

//               {/* Camp dates - horizontal layout */}
//               <div className="space-y-6 animate-fade-in delay-[3400ms] will-change-transform-opacity">
//                 <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
//                   <div className="animate-slide-up delay-[3600ms] will-change-transform-opacity">
//                     <h3 className="text-accent-400 font-semibold text-lg tracking-wider mb-2">SUMMER CAMP I</h3>
//                     <p className="text-primary-300 font-light text-xl">June 2-6, 2025</p>
//                   </div>
//                   <div className="animate-slide-up delay-[3800ms] will-change-transform-opacity">
//                     <h3 className="text-accent-400 font-semibold text-lg tracking-wider mb-2">SUMMER CAMP II</h3>
//                     <p className="text-primary-300 font-light text-xl">June 9-13, 2025</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Description */}
//               <div className="overflow-hidden">
//                 <p className="text-lg lg:text-xl text-primary-300 leading-relaxed font-light max-w-2xl animate-fade-in delay-[4000ms] will-change-transform-opacity">
//                   Master the fundamentals of fencing through expert instruction, teamwork,
//                   and engaging activities designed for young athletes ages 6-15.
//                 </p>
//               </div>

//               {/* Call-to-action button */}
//               <div className="pt-4">
//                 <div className="animate-slide-up delay-[4400ms] will-change-transform-opacity">
//                   <button
//                     onClick={scrollToRegistration}
//                     className="
//                       group relative inline-block px-12 py-4
//                       bg-gradient-to-r from-accent-500 to-accent-600
//                       text-primary-900 font-semibold text-lg
//                       rounded-lg shadow-md
//                       overflow-hidden
//                       transition
//                       duration-500 ease-in-out
//                       hover:shadow-glow hover:scale-105 hover:brightness-110
//                       focus:outline-none focus:ring-4 focus:ring-accent-400/70
//                       will-change-transform
//                     "
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                     <span className="relative z-10 flex items-center justify-center">
//                       REGISTER NOW
//                       <img
//                         src="/sword.png"
//                         alt="Fencing icon"
//                         className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform duration-500"
//                         fetchPriority="low"
//                         decoding="async"
//                       />
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Visual Element */}
//             <div className="relative animate-fade-in delay-[2000ms] will-change-transform-opacity">
//               {/* Stats Cards */}
//               <div className="space-y-6">
//                 {/* Ages Card */}
//                 <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-16 h-16 bg-accent-400/20 rounded-full flex items-center justify-center">
//                       <svg className="w-8 h-8 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="text-accent-400 font-semibold text-xl tracking-wider">AGES 6-15</h3>
//                       <p className="text-primary-200 font-light">All skill levels welcome</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Features Card */}
//                 <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
//                   <h4 className="text-accent-400 font-semibold text-lg mb-4 tracking-wider">CAMP HIGHLIGHTS</h4>
//                   <ul className="space-y-3 text-primary-200 font-light">
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
//                       Expert fencing instruction
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
//                       Star Trek themed groups
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
//                       Epee & Saber introduction
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
//                       All equipment provided
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Pricing Card */}
//                 <div className="bg-gradient-to-br from-accent-500/20 to-accent-600/20 backdrop-blur-sm border border-accent-400/30 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
//                   <h4 className="text-accent-400 font-semibold text-lg mb-4 tracking-wider">PRICING</h4>
//                   <div className="space-y-2 text-primary-200 font-light">
//                     <div className="flex justify-between items-center">
//                       <span>Camp Fee</span>
//                       <span className="text-accent-400 font-semibold text-xl">$375</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span>Extended Stay</span>
//                       <span className="text-accent-400 font-semibold text-xl">$125</span>
//                     </div>
//                     <div className="pt-2 border-t border-white/20">
//                       <span className="text-sm text-primary-300">2nd family member: $50 discount</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating accent elements */}
//               <div className="absolute -top-8 -right-8 w-24 h-24 border-2 border-accent-400/30 rounded-full animate-pulse-slow delay-[5000ms] will-change-transform-opacity"></div>
//               <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse-slow delay-[5500ms] will-change-transform-opacity"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Camp Details Section */}
//       <section className="relative py-24 bg-gradient-to-b from-primary-900 to-primary-800">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Section header */}
//           <div className="text-center mb-20">
//             <div className="overflow-hidden">
//               <h2 className="text-4xl font-extralight tracking-tight text-white animate-slide-up delay-[1000ms] will-change-transform-opacity">
//                 CAMP <span className="text-accent-400 font-normal">DETAILS</span>
//               </h2>
//             </div>
//             <div className="overflow-hidden">
//               <p className="text-primary-200 font-light text-lg mt-6 animate-fade-in delay-[1400ms] will-change-transform-opacity">
//                 Everything you need to know about our summer program
//               </p>
//             </div>
//           </div>

//           {/* Details grid */}
//           <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
//             <div className="text-center animate-slide-up delay-[1800ms] will-change-transform-opacity">
//               <div className="mb-6">
//                 <div className="w-16 h-16 mx-auto border-2 border-accent-400/50 rounded-full flex items-center justify-center">
//                   <svg className="w-8 h-8 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//               <h3 className="text-accent-400 font-semibold text-xl mb-4 tracking-wider">SCHEDULE</h3>
//               <ul className="space-y-3 text-primary-200 font-light">
//                 <li>8:30 AM Drop Off</li>
//                 <li>2:00-2:30 PM Pick Up</li>
//                 <li>2:30-5:30 PM Extended Stay</li>
//               </ul>
//             </div>

//             <div className="text-center animate-slide-up delay-[2000ms] will-change-transform-opacity">
//               <div className="mb-6">
//                 <div className="w-16 h-16 mx-auto border-2 border-accent-400/50 rounded-full flex items-center justify-center">
//                   <svg className="w-8 h-8 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//               </div>
//               <h3 className="text-accent-400 font-semibold text-xl mb-4 tracking-wider">AGES</h3>
//               <p className="text-primary-200 font-light text-2xl">6-15 Years</p>
//             </div>

//             <div className="text-center animate-slide-up delay-[2200ms] will-change-transform-opacity">
//               <div className="mb-6">
//                 <div className="w-16 h-16 mx-auto border-2 border-accent-400/50 rounded-full flex items-center justify-center">
//                   <svg className="w-8 h-8 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
//                   </svg>
//                 </div>
//               </div>
//               <h3 className="text-accent-400 font-semibold text-xl mb-4 tracking-wider">PRICING</h3>
//               <ul className="space-y-3 text-primary-200 font-light">
//                 <li>$375 Camp Fee</li>
//                 <li>$125 Extended Stay</li>
//                 <li className="text-sm text-primary-300">2nd family member: $50 discount</li>
//               </ul>
//             </div>

//             <div className="text-center animate-slide-up delay-[2400ms] will-change-transform-opacity">
//               <div className="mb-6">
//                 <div className="w-16 h-16 mx-auto border-2 border-accent-400/50 rounded-full flex items-center justify-center">
//                   <svg className="w-8 h-8 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//               <h3 className="text-accent-400 font-semibold text-xl mb-4 tracking-wider">EQUIPMENT</h3>
//               <p className="text-primary-200 font-light leading-relaxed">
//                 All fencing gear provided. Wear athletic clothing and closed-toe shoes.
//                 Bring water bottle and lunch.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Star Trek Groups Section */}
//       <section className="relative py-24 bg-gradient-to-br from-primary-800 to-primary-900">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-20">
//             <div className="overflow-hidden">
//               <h2 className="text-4xl font-extralight tracking-tight text-white animate-slide-up delay-[1000ms] will-change-transform-opacity">
//                 JOIN YOUR <span className="text-accent-400 font-normal">STAR TREK</span> HOUSE
//               </h2>
//             </div>
//             <div className="overflow-hidden">
//               <p className="text-primary-200 font-light text-lg mt-6 max-w-3xl mx-auto animate-fade-in delay-[1400ms] will-change-transform-opacity">
//                 Campers are organized into themed groups with similar ages and experience levels.
//                 Each house rotates through different activities with dedicated counselors.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { name: 'KLINGONS', color: 'from-red-500 to-red-600' },
//               { name: 'BORG', color: 'from-green-500 to-green-600' },
//               { name: 'ROMULANS', color: 'from-blue-500 to-blue-600' },
//               { name: 'FERENGI', color: 'from-purple-500 to-purple-600' }
//             ].map((group, index) => (
//               <div
//                 key={group.name}
//                 className={`
//                   relative p-8 rounded-lg shadow-xl cursor-pointer
//                   bg-gradient-to-br ${group.color}
//                   transform hover:scale-105 transition-all duration-500
//                   animate-slide-up delay-[${1800 + index * 200}ms] will-change-transform-opacity
//                   group
//                 `}
//               >
//                 <div className="text-center text-white relative z-10">
//                   <div className="w-12 h-12 mx-auto mb-4 border-2 border-white/50 rounded-full flex items-center justify-center group-hover:border-white transition-colors duration-300">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-semibold tracking-wider mb-2">{group.name}</h3>
//                   <p className="text-white/80 font-light">House {index + 1}</p>
//                 </div>
//                 <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Registration Section */}
//       <section
//         id="registration-section"
//         className="relative py-24 bg-primary-900"
//       >
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <div className="overflow-hidden">
//             <h2 className="text-4xl font-extralight tracking-tight text-white animate-slide-up delay-[1000ms] will-change-transform-opacity">
//               READY TO <span className="text-accent-400 font-normal">BEGIN</span>?
//             </h2>
//           </div>
//           <div className="overflow-hidden">
//             <p className="text-primary-200 max-w-2xl mx-auto text-lg font-light mt-6 mb-12 animate-fade-in delay-[1400ms] will-change-transform-opacity">
//               Register now through the TFA Team App or use our secure payment options below
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <div className="animate-slide-up delay-[1800ms] will-change-transform-opacity">
//               <button
//                 onClick={() => window.open('https://texasfencingacademy.glide.page/dl/17171d', '_blank')}
//                 className="
//                   group relative inline-block px-12 py-4
//                   bg-gradient-to-r from-accent-500 to-accent-600
//                   text-primary-900 font-semibold text-lg
//                   rounded-lg shadow-md
//                   overflow-hidden
//                   transition
//                   duration-500 ease-in-out
//                   hover:shadow-glow hover:scale-105 hover:brightness-110
//                   focus:outline-none focus:ring-4 focus:ring-accent-400/70
//                   will-change-transform
//                 "
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <span className="relative z-10">CAMP I - JUNE 2-6</span>
//               </button>
//             </div>

//             <div className="animate-slide-up delay-[2000ms] will-change-transform-opacity">
//               <button
//                 onClick={() => window.open('https://texasfencingacademy.glide.page/dl/17171d', '_blank')}
//                 className="
//                   group relative inline-block px-12 py-4
//                   bg-gradient-to-r from-accent-500 to-accent-600
//                   text-primary-900 font-semibold text-lg
//                   rounded-lg shadow-md
//                   overflow-hidden
//                   transition
//                   duration-500 ease-in-out
//                   hover:shadow-glow hover:scale-105 hover:brightness-110
//                   focus:outline-none focus:ring-4 focus:ring-accent-400/70
//                   will-change-transform
//                 "
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <span className="relative z-10">CAMP II - JUNE 9-13</span>
//               </button>
//             </div>

//             <div className="animate-slide-up delay-[2200ms] will-change-transform-opacity">
//               <button
//                 onClick={() => window.open('https://texasfencingacademy.glide.page/dl/17171d', '_blank')}
//                 className="
//                   group px-12 py-4 border-2 border-white/30
//                   text-white font-semibold text-lg
//                   rounded-lg backdrop-blur-sm
//                   shadow-sm
//                   transition
//                   duration-500 ease-in-out
//                   hover:bg-white/20 hover:border-white hover:scale-105 hover:brightness-110
//                   focus:outline-none focus:ring-4 focus:ring-white/40
//                   will-change-transform
//                 "
//               >
//                 EXTENDED STAY ADD-ON
//               </button>
//             </div>
//           </div>

//           <div className="mt-12 animate-fade-in delay-[2600ms] will-change-transform-opacity">
//             <p className="text-accent-400 font-semibold tracking-wider">
//               DOWNLOAD THE TFA TEAM APP TO REGISTER
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="relative py-24 bg-gradient-to-t from-primary-900 to-primary-800">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-20">
//             <div className="overflow-hidden">
//               <h2 className="text-4xl font-extralight tracking-tight text-white animate-slide-up delay-[1000ms] will-change-transform-opacity">
//                 CAMP <span className="text-accent-400 font-normal">MEMORIES</span>
//               </h2>
//             </div>
//             <div className="overflow-hidden">
//               <p className="text-primary-200 font-light text-lg mt-6 animate-fade-in delay-[1400ms] will-change-transform-opacity">
//                 Experience the excitement and camaraderie from our previous camps
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[...Array(8)].map((_, index) => (
//               <div
//                 key={index}
//                 className={`
//                   relative overflow-hidden rounded-lg shadow-xl cursor-pointer
//                   transform hover:scale-105 transition-transform duration-500
//                   animate-slide-up delay-[${1800 + index * 100}ms] will-change-transform-opacity
//                   group
//                 `}
//               >
//                 <img
//                   src={`https://via.placeholder.com/400x400/1f2937/f59e0b?text=Camp+Photo+${index + 1}`}
//                   alt={`Camp Photo ${index + 1}`}
//                   className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//                   decoding="async"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// public\FencingVideo.mp4
import { useEffect, useState } from "react";
// function HeroSummerCamp({ scrollToRegistration }) {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-slate-200 overflow-hidden px-6">
//       {/* Enhanced background patterns with silver/metallic touches */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-slate-200 to-gray-300 opacity-40 rounded-full animate-pulse-slow delay-1000"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-200 to-slate-300 opacity-30 rounded-full animate-pulse-slow delay-1500"></div>
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
//           <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
//         </div>
//         <div className="absolute top-32 right-32 w-4 h-4 border border-amber-300 rounded-full animate-pulse-slow delay-700"></div>
//         <div className="absolute bottom-40 left-40 w-6 h-6 border border-gray-400 rounded-full animate-pulse-slow delay-1500"></div>
//       </div>

//       {/* Refined fencing motifs */}
//       <div className="absolute inset-0 opacity-15">
//         <div className="absolute top-40 left-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform rotate-12 animate-fade-in delay-[3000ms] will-change-transform-opacity"></div>
//         <div className="absolute bottom-40 right-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform -rotate-12 animate-fade-in delay-[3500ms] will-change-transform-opacity"></div>
//         <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-gray-400 to-transparent transform rotate-45 animate-fade-in delay-[4000ms] will-change-transform-opacity"></div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
//         {/* Main heading */}
//         <div className="space-y-6">
//           <div className="overflow-hidden">
//             <h1 className="text-6xl lg:text-7xl font-extralight tracking-tight leading-none animate-slide-up delay-[800ms] will-change-transform-opacity text-gray-800">
//               <span className="block animate-slide-up delay-[1000ms] will-change-transform-opacity">
//                 SUMMER
//               </span>
//               <span className="block text-amber-600 font-normal animate-slide-up delay-[1400ms] will-change-transform-opacity">
//                 FENCING
//               </span>
//               <span className="block animate-slide-up delay-[1800ms] will-change-transform-opacity">
//                 CAMP
//               </span>
//             </h1>
//           </div>

//           {/* Elegant centered divider with silver accent */}
//           <div className="flex items-center justify-center space-x-4 animate-fade-in delay-[2200ms] will-change-transform-opacity">
//             <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500 animate-slide-right delay-[2800ms] will-change-transform-opacity"></div>
//             <div className="w-12 h-12 border-2 border-gray-400 rotate-45 flex items-center justify-center animate-fade-in delay-[2400ms] hover:scale-110 hover:border-amber-500 transition-all duration-500 will-change-transform-opacity bg-gradient-to-br from-gray-100 to-gray-200">
//               <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse delay-[2600ms] will-change-transform-opacity"></div>
//             </div>
//             <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500 animate-slide-left delay-[2800ms] will-change-transform-opacity"></div>
//           </div>
//         </div>

//         {/* Excellence tagline */}
//         <div className="overflow-hidden">
//           <h2 className="text-2xl lg:text-3xl font-light text-gray-700 tracking-[0.15em] animate-slide-up delay-[3000ms] will-change-transform-opacity">
//             TWO WEEKS OF EXCELLENCE
//           </h2>
//         </div>

//         {/* Camp dates - horizontal layout */}
//         <div className="space-y-6 animate-fade-in delay-[3400ms] will-change-transform-opacity">
//           <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center">
//             <div className="animate-slide-up delay-[3600ms] will-change-transform-opacity">
//               <h3 className="text-amber-600 font-semibold text-lg tracking-wider mb-2">
//                 SUMMER CAMP I
//               </h3>
//               <p className="text-gray-700 font-light text-xl">
//                 June 2-6, 2025
//               </p>
//             </div>
//             <div className="animate-slide-up delay-[3800ms] will-change-transform-opacity">
//               <h3 className="text-amber-600 font-semibold text-lg tracking-wider mb-2">
//                 SUMMER CAMP II
//               </h3>
//               <p className="text-gray-700 font-light text-xl">
//                 June 9-13, 2025
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="overflow-hidden">
//           <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto animate-fade-in delay-[4000ms] will-change-transform-opacity">
//             Master the fundamentals of fencing through expert instruction,
//             teamwork, and engaging activities designed for young athletes
//             ages 6-15.
//           </p>
//         </div>

//         {/* Call-to-action button */}
//         <div className="pt-4">
//           <div className="animate-slide-up delay-[4400ms] will-change-transform-opacity">
//             <button
//               onClick={scrollToRegistration}
//               className="
//                 group relative inline-block px-12 py-4 
//                 bg-gradient-to-r from-amber-500 to-amber-600 
//                 text-gray-900 font-semibold text-lg 
//                 rounded-lg shadow-lg
//                 overflow-hidden 
//                 transition 
//                 duration-500 ease-in-out
//                 hover:shadow-amber-500/25 hover:scale-105 hover:brightness-110
//                 focus:outline-none focus:ring-4 focus:ring-amber-400/70
//                 will-change-transform
//                 border border-amber-400/30
//               "
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <span className="relative z-10 flex items-center justify-center">
//                 REGISTER NOW
//                 <img
//                   src="/sword.png"
//                   alt="Fencing icon"
//                   className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform duration-500"
//                   fetchPriority="low"
//                   decoding="async"
//                 />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
function HeroSummerCamp({ scrollToRegistration }) {
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
          <source src="/summerCamp/FencingVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/50 to-gray-900/60"></div>
      </div>

      {/* Refined fencing motifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform rotate-12 animate-fade-in delay-[3000ms] will-change-transform-opacity"></div>
        <div className="absolute bottom-40 right-1/4 w-px h-40 bg-gradient-to-b from-amber-500 to-transparent transform -rotate-12 animate-fade-in delay-[3500ms] will-change-transform-opacity"></div>
        <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-amber-400 to-transparent transform rotate-45 animate-fade-in delay-[4000ms] will-change-transform-opacity"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        {/* Main heading - Updated colors for better contrast on video */}
        <div className="space-y-6">
          <div className="overflow-hidden">
            <h1 className="text-6xl lg:text-7xl font-extralight tracking-tight leading-none animate-slide-up delay-[800ms] will-change-transform-opacity text-white drop-shadow-lg">
              <span className="block animate-slide-up delay-[1000ms] will-change-transform-opacity">
                SUMMER
              </span>
              <span className="block text-amber-400 font-normal animate-slide-up delay-[1400ms] will-change-transform-opacity drop-shadow-lg">
                FENCING
              </span>
              <span className="block animate-slide-up delay-[1800ms] will-change-transform-opacity">
                CAMP
              </span>
            </h1>
          </div>

          {/* Elegant centered divider with silver accent */}
          <div className="flex items-center justify-center space-x-4 animate-fade-in delay-[2200ms] will-change-transform-opacity">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400 animate-slide-right delay-[2800ms] will-change-transform-opacity"></div>
            <div className="w-12 h-12 border-2 border-white/70 rotate-45 flex items-center justify-center animate-fade-in delay-[2400ms] hover:scale-110 hover:border-amber-400 transition-all duration-500 will-change-transform-opacity bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-[2600ms] will-change-transform-opacity"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400 animate-slide-left delay-[2800ms] will-change-transform-opacity"></div>
          </div>
        </div>

        {/* Excellence tagline */}
        <div className="overflow-hidden">
          <h2 className="text-2xl lg:text-3xl font-light text-white tracking-[0.15em] animate-slide-up delay-[3000ms] will-change-transform-opacity drop-shadow-md">
            TWO WEEKS OF EXCELLENCE
          </h2>
        </div>

        {/* Camp dates - horizontal layout */}
        <div className="space-y-6 animate-fade-in delay-[3400ms] will-change-transform-opacity">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center">
            <div className="animate-slide-up delay-[3600ms] will-change-transform-opacity">
              <h3 className="text-amber-400 font-semibold text-lg tracking-wider mb-2 drop-shadow-md">
                SUMMER CAMP I
              </h3>
              <p className="text-white font-light text-xl drop-shadow-sm">
                June 2-6, 2025
              </p>
            </div>
            <div className="animate-slide-up delay-[3800ms] will-change-transform-opacity">
              <h3 className="text-amber-400 font-semibold text-lg tracking-wider mb-2 drop-shadow-md">
                SUMMER CAMP II
              </h3>
              <p className="text-white font-light text-xl drop-shadow-sm">
                June 9-13, 2025
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="overflow-hidden">
          <p className="text-lg lg:text-xl text-white leading-relaxed font-light max-w-3xl mx-auto animate-fade-in delay-[4000ms] will-change-transform-opacity drop-shadow-sm">
            Master the fundamentals of fencing through expert instruction,
            teamwork, and engaging activities designed for young athletes
            ages 6-15.
          </p>
        </div>

        {/* Call-to-action button */}
        <div className="pt-4">
          <div className="animate-slide-up delay-[4400ms] will-change-transform-opacity">
            <button
              onClick={scrollToRegistration}
              className="
                group relative inline-block px-12 py-4 
                bg-gradient-to-r from-amber-500 to-amber-600 
                text-gray-900 font-semibold text-lg 
                rounded-lg shadow-xl
                overflow-hidden 
                transition 
                duration-500 ease-in-out
                hover:shadow-amber-500/50 hover:scale-105 hover:brightness-110
                focus:outline-none focus:ring-4 focus:ring-amber-400/70
                will-change-transform
                border border-amber-400/50
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center justify-center">
                REGISTER NOW
                <img
                  src="/sword.png"
                  alt="Fencing icon"
                  className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform duration-500 filter brightness-0"
                  fetchPriority="low"
                  decoding="async"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CampDetailSection() {
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
            Camp <span className="font-semibold text-amber-600 hover:scale-105 transition-transform duration-300 inline-block">Details</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Everything you need to know about our premium summer program
          </p>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Schedule Card */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-200 p-8 text-center transform hover:scale-105 transition-all duration-500 group">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-amber-600 font-semibold text-xl mb-6 tracking-wider border-b border-amber-200 pb-2">
              SCHEDULE
            </h3>
            <div className="space-y-4">
              {[
                { time: "8:30 AM", desc: "Drop Off" },
                { time: "2:00-2:30 PM", desc: "Pick Up" },
                { time: "2:30-5:30 PM", desc: "Extended Stay" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700 font-medium">{item.time}</span>
                  <span className="text-gray-600 font-light">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ages Card */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-200 p-8 text-center transform hover:scale-105 transition-all duration-500 group">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
            </div>
            <h3 className="text-amber-600 font-semibold text-xl mb-6 tracking-wider border-b border-amber-200 pb-2">
              AGES
            </h3>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-gray-800">6-15</p>
              <p className="text-gray-600 font-light">Years Old</p>
              <p className="text-sm text-gray-500 mt-4">All skill levels welcome</p>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 backdrop-blur-2xl rounded-2xl shadow-xl border border-amber-200 p-8 text-center transform hover:scale-105 transition-all duration-500">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center shadow-inner">
                <svg className="w-10 h-10 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
            </div>
            <h3 className="text-amber-600 font-semibold text-xl mb-6 tracking-wider border-b border-amber-300 pb-2">
              PRICING
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Camp Fee</span>
                <span className="text-amber-600 font-bold text-2xl">$375</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Extended Stay</span>
                <span className="text-amber-600 font-bold text-2xl">$125</span>
              </div>
              <div className="pt-4 border-t border-amber-300">
                <p className="text-xs text-gray-600">2nd family member: $50 discount</p>
              </div>
            </div>
          </div>

          {/* Equipment Card */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-200 p-8 text-center transform hover:scale-105 transition-all duration-500 group">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-amber-600 font-semibold text-xl mb-6 tracking-wider border-b border-amber-200 pb-2">
              EQUIPMENT
            </h3>
            <div className="space-y-3 text-left">
              {[
                "All fencing gear provided",
                "Wear athletic clothing",
                "Closed-toe shoes required",
                "Bring water bottle & lunch"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-2xl rounded-2xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">What Makes Our Camp Special?</h4>
            <p className="text-gray-600 leading-relaxed">
              Our experienced instructors provide personalized attention in a fun, themed environment. 
              Campers will explore both epee and saber techniques while building confidence, 
              discipline, and lasting friendships in our state-of-the-art facility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function GroupSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
      {/* Subtle background patterns in silver tones */}
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
            Join Your{" "}
            <span className="font-semibold text-amber-600 hover:scale-105 transition-transform duration-300 inline-block">
              Star Trek
            </span>{" "}
            House
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Campers are organized into themed groups with similar ages and experience levels. 
            Each house rotates through different activities with dedicated counselors.
          </p>
        </div>

        {/* Houses Grid - Uniform Silver Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "KLINGONS", description: "Warriors of Honor" },
            { name: "BORG", description: "Collective Excellence" },
            { name: "ROMULANS", description: "Strategic Minds" },
            { name: "FERENGI", description: "Cunning Traders" }
          ].map((group, index) => (
            <div key={group.name} className="group relative overflow-hidden">
              {/* Uniform Silver Card */}
              <div className="relative p-8 rounded-2xl shadow-lg cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-2xl border-2 border-gray-300 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:border-amber-300">
                
                {/* House Icon - Silver with Amber Accent */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg border-2 border-amber-400 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                {/* House Details */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 tracking-wider">
                    {group.name}
                  </h3>
                  <p className="text-amber-600 font-semibold text-sm mb-3 tracking-wide">
                    HOUSE {index + 1}
                  </p>
                  <p className="text-gray-600 font-light text-sm">
                    {group.description}
                  </p>
                </div>

                {/* Silver Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-20">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-400 to-gray-500"></div>
                </div>
                <div className="absolute bottom-4 left-4 w-6 h-6 opacity-20">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-400 to-gray-500"></div>
                </div>

                {/* Subtle Silver Hover Overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-gray-300 to-gray-400"></div>
              </div>

              {/* Floating accent element */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-amber-300 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500 bg-gradient-to-br from-gray-200/50 to-gray-300/50"></div>
            </div>
          ))}
        </div>

        {/* Additional Info - Silver Theme */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-2xl rounded-2xl shadow-lg border border-gray-300 p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">House Activities</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className="font-semibold text-amber-600 mb-2">Team Building</h5>
                <p className="text-gray-600 text-sm">Collaborative exercises that strengthen bonds within each house.</p>
              </div>
              <div>
                <h5 className="font-semibold text-amber-600 mb-2">Skill Rotations</h5>
                <p className="text-gray-600 text-sm">Houses rotate through different fencing stations throughout the day.</p>
              </div>
              <div>
                <h5 className="font-semibold text-amber-600 mb-2">Friendly Competition</h5>
                <p className="text-gray-600 text-sm">Inter-house competitions foster healthy rivalry and motivation.</p>
              </div>
              <div>
                <h5 className="font-semibold text-amber-600 mb-2">Mentorship</h5>
                <p className="text-gray-600 text-sm">Experienced campers help guide newcomers within their house.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function RegistrationSection(){
    return(
        <section id="registration-section" className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
            {/* Subtle background patterns in silver tones */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-15 rounded-full"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                    <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Section header with decorative elements */}
                <div className="flex items-center justify-center space-x-4 mb-8 group">
                    <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
                    <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-gray-200/70 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500">
                        <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
                </div>

                <div className="overflow-hidden">
                    <h2 className="text-5xl font-light text-gray-800 mb-6 tracking-tight animate-slide-up delay-[1000ms] will-change-transform-opacity">
                        READY TO <span className="font-semibold text-amber-600 hover:scale-105 transition-transform duration-300 inline-block">BEGIN</span>?
                    </h2>
                </div>
                
                <div className="overflow-hidden">
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-16 animate-fade-in delay-[1400ms] will-change-transform-opacity">
                        Register now through the TFA Team App or use our secure payment options below
                    </p>
                </div>
                {/* Clear instruction for clicking */}
                <div className="mb-8 animate-fade-in delay-[1700ms] will-change-transform-opacity">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center animate-pulse">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                        </div>
                        <p className="text-gray-700 font-semibold text-lg">
                            Click a camp button below to register instantly
                        </p>
                    </div>
                </div>

                {/* Enhanced Registration Buttons with clear clickability */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                    <div className="animate-slide-up delay-[1800ms] will-change-transform-opacity">
                        <button
                            onClick={() =>
                                window.open(
                                    "https://texasfencingacademy.glide.page/dl/17171d",
                                    "_blank"
                                )
                            }
                            className="
                                group relative inline-flex items-center justify-center px-12 py-4 
                                bg-gradient-to-r from-amber-500 to-amber-600 
                                text-gray-900 font-semibold text-lg 
                                rounded-2xl shadow-lg
                                overflow-hidden 
                                transition 
                                duration-500 ease-in-out
                                hover:shadow-xl hover:scale-105 hover:brightness-110
                                focus:outline-none focus:ring-4 focus:ring-amber-400/70
                                will-change-transform
                                cursor-pointer
                                animate-pulse hover:animate-none
                            "
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 mr-3">CAMP I - JUNE 2-6</span>
                            <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>

                    <div className="animate-slide-up delay-[2000ms] will-change-transform-opacity">
                        <button
                            onClick={() =>
                                window.open(
                                    "https://texasfencingacademy.glide.page/dl/17171d",
                                    "_blank"
                                )
                            }
                            className="
                                group relative inline-flex items-center justify-center px-12 py-4 
                                bg-gradient-to-r from-amber-500 to-amber-600 
                                text-gray-900 font-semibold text-lg 
                                rounded-2xl shadow-lg
                                overflow-hidden 
                                transition 
                                duration-500 ease-in-out
                                hover:shadow-xl hover:scale-105 hover:brightness-110
                                focus:outline-none focus:ring-4 focus:ring-amber-400/70
                                will-change-transform
                                cursor-pointer
                                animate-pulse hover:animate-none
                            "
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 mr-3">CAMP II - JUNE 9-13</span>
                            <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>

                    <div className="animate-slide-up delay-[2200ms] will-change-transform-opacity">
                        <button
                            onClick={() =>
                                window.open(
                                    "https://texasfencingacademy.glide.page/dl/17171d",
                                    "_blank"
                                )
                            }
                            className="
                                group inline-flex items-center justify-center px-12 py-4 
                                bg-gradient-to-br from-gray-100 to-gray-200 
                                border-2 border-gray-300 
                                text-gray-700 font-semibold text-lg 
                                rounded-2xl shadow-lg backdrop-blur-2xl
                                transition 
                                duration-500 ease-in-out
                                hover:bg-gradient-to-br hover:from-gray-200 hover:to-gray-300 
                                hover:border-amber-400 hover:scale-105 hover:shadow-xl
                                focus:outline-none focus:ring-4 focus:ring-gray-300/40
                                will-change-transform
                                cursor-pointer
                            "
                        >
                            <span className="mr-3">EXTENDED STAY ADD-ON</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}



const campImages = [
  '/summerCamp/CampImage1.jpg',
  '/summerCamp/CampImage2.jpg',
  '/summerCamp/CampImage3.jpg',
  '/summerCamp/CampImage4.jpg',
  '/summerCamp/CampImage5.jpg',
  '/summerCamp/CampImage6.jpg',
  '/summerCamp/CampImage7.jpg',
];

function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % campImages.length);
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? campImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % campImages.length);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
      {/* Background patterns matching other sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-400 opacity-15 rounded-full"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header with decorative elements */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-8 group">
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
            <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg bg-gray-200/70 backdrop-blur-lg relative group-hover:border-amber-600 transition-all duration-500">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            </div>
            <div className="w-16 h-px bg-amber-500 transition-colors duration-500 group-hover:bg-amber-600"></div>
          </div>

          <div className="overflow-hidden">
            <h2 className="text-5xl font-light text-gray-800 mb-6 tracking-tight animate-slide-up delay-[1000ms] will-change-transform-opacity">
              CAMP <span className="font-semibold text-amber-600 hover:scale-105 transition-transform duration-300 inline-block">MEMORIES</span>
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in delay-[1400ms] will-change-transform-opacity">
              Experience the excitement and camaraderie from our previous camps
            </p>
          </div>
        </div>

        {/* Enhanced Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white to-gray-100 border-2 border-amber-200/50 animate-fade-in delay-[1800ms] will-change-transform-opacity"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Image Display */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <img
                src={campImages[currentIndex]}
                alt={`Camp Memory ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform hover:scale-105"
                decoding="async"
                loading="lazy"
              />
              
              {/* Beautiful gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-amber-500/10 pointer-events-none"></div>
              
              {/* Image counter */}
              <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-semibold">
                {currentIndex + 1} / {campImages.length}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-400/50"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-400/50"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {campImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400/50
                  ${index === currentIndex 
                    ? 'bg-amber-500 shadow-lg scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }
                `}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Preview Strip */}
          <div className="hidden md:flex justify-center space-x-4 mt-8 overflow-x-auto pb-4">
            {campImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400/50
                  ${index === currentIndex 
                    ? 'ring-4 ring-amber-500 scale-110 shadow-xl' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                  }
                `}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-amber-400/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default function SummerCampPage() {
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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to registration handler
  const scrollToRegistration = () => {
    const registrationSection = document.querySelector("#registration-section");
    if (registrationSection) {
      registrationSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`bg-gradient-to-b from-slate-50 to-white min-h-screen overflow-hidden contain-layout-paint ${
        isResizing ? "no-animations" : ""
      }`}
    >
      {/* Hero Section */}
      <HeroSummerCamp scrollToRegistration={scrollToRegistration} />


      {/* Camp Details Section */}
      <CampDetailSection/>

      {/* Star Trek Groups Section */}
      <GroupSection/>

      {/* Registration Section */}
      <RegistrationSection/>

      {/* Gallery Section */}
      <GallerySection/>
    </div>
  );
}
