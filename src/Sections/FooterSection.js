// import React, { useState } from 'react';

// export default function FooterSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // submission logic here
//   };

//   // Your social media links unchanged
//   const socialLinks = [
//     {
//       href: "https://www.instagram.com/texasfencingacademy/",
//       icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
//     },
//     {
//       href: "https://www.facebook.com/texasfencingacademy",
//       icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
//     },
//     {
//       href: "https://twitter.com/texasfencing",
//       icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
//     }
//   ];

//   return (
//     <footer className="py-12 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
//       {/* Background effects - mobile optimized */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-amber-600/5 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-amber-500/3 to-transparent rounded-full blur-2xl"></div>
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
//           <div className="absolute top-1/2 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent transform rotate-15"></div>
//           <div className="absolute bottom-1/3 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent transform -rotate-15"></div>
//         </div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Mobile-optimized Header */}
//         <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
//           <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8">
//             <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-amber-400 to-amber-600 animate-pulse rounded"></div>
//             <span className="text-xs font-bold text-amber-400 tracking-[0.2em] sm:tracking-[0.3em] uppercase select-none">
//               Join the Duel
//             </span>
//             <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-amber-400 to-amber-600 animate-pulse rounded"></div>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white mb-4 tracking-wide drop-shadow-lg px-4">
//             Master the Art of Fencing
//           </h2>
//           <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed tracking-wide px-4">
//             Contact us to begin your journey with expert coaching, state-of-the-art training, and spirited competition.
//           </p>
//         </div>

//         {/* Mobile-optimized Main Content Grid */}
//         <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
//           {/* Contact Form - Mobile first approach */}
//           <div className="lg:col-span-2 order-2 lg:order-1">
//             <div className="bg-slate-800/50 backdrop-blur-md rounded-xl sm:rounded-2xl border border-slate-700/50 p-6 sm:p-8 lg:p-10">
//               <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Questions? We got answers</h3>
//               <p className="text-slate-400 mb-6 sm:mb-10 text-sm sm:text-base">
//                 Have questions about our fencing programs or want to book a trial lesson? Send us a message below.
//               </p>

//               <form onSubmit={handleSubmit} noValidate className="space-y-6 sm:space-y-8">
//                 {/* Name and Email - Stack on mobile */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                   <div className="relative">
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       autoComplete="name"
//                       placeholder=" "
//                       className="peer w-full px-4 py-3 sm:py-4 bg-slate-900/60 border border-slate-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition duration-300 text-sm sm:text-base"
//                     />
//                     <label
//                       htmlFor="name"
//                       className="absolute left-4 top-3 sm:top-4 text-slate-400 text-xs sm:text-sm bg-slate-900/60 px-1 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 sm:peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-amber-400 peer-focus:bg-slate-900/80"
//                     >
//                       Full Name *
//                     </label>
//                   </div>

//                   <div className="relative">
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       autoComplete="email"
//                       placeholder=" "
//                       className="peer w-full px-4 py-3 sm:py-4 bg-slate-900/60 border border-slate-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition duration-300 text-sm sm:text-base"
//                     />
//                     <label
//                       htmlFor="email"
//                       className="absolute left-4 top-3 sm:top-4 text-slate-400 text-xs sm:text-sm bg-slate-900/60 px-1 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 sm:peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-amber-400 peer-focus:bg-slate-900/80"
//                     >
//                       Email Address *
//                     </label>
//                   </div>
//                 </div>

//                 {/* Phone and Subject - Stack on mobile */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                   <div className="relative">
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       autoComplete="tel"
//                       placeholder=" "
//                       className="peer w-full px-4 py-3 sm:py-4 bg-slate-900/60 border border-slate-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition duration-300 text-sm sm:text-base"
//                     />
//                     <label
//                       htmlFor="phone"
//                       className="absolute left-4 top-3 sm:top-4 text-slate-400 text-xs sm:text-sm bg-slate-900/60 px-1 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 sm:peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-amber-400 peer-focus:bg-slate-900/80"
//                     >
//                       Phone Number
//                     </label>
//                   </div>

//                   <div className="relative">
//                     <select
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleInputChange}
//                       required
//                       className="peer w-full px-4 py-3 sm:py-4 bg-slate-900/60 border border-slate-700 rounded-lg text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition duration-300 text-sm sm:text-base"
//                     >
//                       <option value="" disabled hidden></option>
//                       <option value="trial-lesson">Trial Lesson</option>
//                       <option value="programs">Program Information</option>
//                       <option value="competitive">Competitive Training</option>
//                       <option value="private-lessons">Private Lessons</option>
//                       <option value="camps">Summer Camps</option>
//                       <option value="other">Other</option>
//                     </select>
//                     <label
//                       htmlFor="subject"
//                       className="absolute left-4 top-3 sm:top-4 text-slate-400 text-xs sm:text-sm bg-slate-900/60 px-1 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 sm:peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-amber-400 peer-focus:bg-slate-900/80"
//                     >
//                       Subject *
//                     </label>
//                     {/* Custom dropdown arrow */}
//                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                       <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div className="relative">
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     rows={4}
//                     placeholder=" "
//                     className="peer w-full px-4 py-3 sm:py-4 bg-slate-900/60 border border-slate-700 rounded-lg text-white placeholder-transparent resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition duration-300 text-sm sm:text-base"
//                   ></textarea>
//                   <label
//                     htmlFor="message"
//                     className="absolute left-4 top-3 sm:top-4 text-slate-400 text-xs sm:text-sm bg-slate-900/60 px-1 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 sm:peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-amber-400 peer-focus:bg-slate-900/80"
//                   >
//                     Message *
//                   </label>
//                 </div>

//                 {/* Submit Button - Full width on mobile */}
//                 <button
//                   type="submit"
//                   className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3 bg-gradient-to-r from-amber-500 to-amber-600 font-semibold rounded-lg text-slate-900 shadow-md hover:shadow-amber-400/50 hover:brightness-105 transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-amber-400 text-sm sm:text-base"
//                   aria-label="Send Message"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Contact Info and Socials - Show first on mobile */}
//           <div className="space-y-4 sm:space-y-6 text-white order-1 lg:order-2">
//             {/* Academy Location */}
//             <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-700/30 p-4 sm:p-6">
//               <div className="flex items-center space-x-3 mb-3 sm:mb-4">
//                 <div className="w-6 sm:w-8 h-6 sm:h-8 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <svg className="w-3 sm:w-4 h-3 sm:h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-white font-semibold text-sm sm:text-base">Academy Location</h3>
//               </div>
//               <div className="text-slate-300 text-sm space-y-1">
//                 <p className="font-medium">Texas Fencing Academy</p>
//                 <p>
//                   8227 North Lamar
//                   <br />
//                   Austin, TX 78753
//                 </p>
//                 <p className="text-slate-400 text-xs pt-2">Mon-Sat • Classes from 4:00 PM</p>
//               </div>
//             </div>

//             {/* Contact Details */}
//             <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-700/30 p-4 sm:p-6">
//               <div className="flex items-center space-x-3 mb-3 sm:mb-4">
//                 <div className="w-6 sm:w-8 h-6 sm:h-8 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <svg className="w-3 sm:w-4 h-3 sm:h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-white font-semibold text-sm sm:text-base">Get In Touch</h3>
//               </div>
//               <div className="space-y-3 text-sm">
//                 <a href="tel:+15124969022" className="flex items-center text-slate-300 hover:text-amber-400 transition-colors duration-300">
//                   <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
//                   <span className="break-all">(512) 496-9022</span>
//                 </a>
//                 <a
//                   href="mailto:ray@texasfencingacademy.org"
//                   className="flex items-center text-slate-300 hover:text-amber-400 transition-colors duration-300"
//                 >
//                   <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
//                   <span className="break-all">ray@texasfencingacademy.org</span>
//                 </a>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-700/30 p-4 sm:p-6">
//               <div className="flex items-center space-x-3 mb-3 sm:mb-4">
//                 <div className="w-6 sm:w-8 h-6 sm:h-8 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <svg className="w-3 sm:w-4 h-3 sm:h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-3.22l-1.88 1.88a.75.75 0 01-1.06 0L7.22 15H5a2 2 0 01-2-2V5zm5.99-.5a.5.5 0 00-.99 0v.875a1.5 1.5 0 009.001 0V4.5a.5.5 0 00-.99 0v.875a.5.5 0 01-.99 0V4.5z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-white font-semibold text-sm sm:text-base">Follow Us</h3>
//               </div>
//               <div className="flex space-x-3">
//                 {socialLinks.map(({ href, icon }, index) => (
//                   <a
//                     key={index}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:bg-amber-600/20 hover:text-amber-400 transition-all duration-300"
//                     aria-label={`Link to social media ${index + 1}`}
//                   >
//                     <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d={icon} />
//                     </svg>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer bar bottom - Mobile optimized */}
//         <div className="border-t border-slate-700/50 pt-6 sm:pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
//             {/* Logo and Brand */}
//             <div className="flex items-center space-x-3">
//               <div className="w-6 sm:w-8 h-6 sm:h-8 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <img
//                   src="/images/TFALogo.jpeg"
//                   alt="Texas Fencing Academy"
//                   className="w-4 sm:w-6 h-4 sm:h-6 object-contain"
//                   onError={(e) => {
//                     e.target.style.display = 'none';
//                     e.target.nextElementSibling.style.display = 'block';
//                   }}
//                 />
//                 <div className="w-4 sm:w-6 h-4 sm:h-6 flex items-center justify-center hidden">
//                   <svg className="w-3 sm:w-4 h-3 sm:h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2L13.09 8.26L19 7L17.91 13.26L22 15L16.91 17.74L17 24L12 19L7 24L7.09 17.74L2 15L6.09 13.26L5 7L10.91 8.26L12 2Z" />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <span className="text-white font-semibold text-sm sm:text-base">Texas Fencing Academy</span>
//                 <p className="text-slate-400 text-xs">Excellence since 1989</p>
//               </div>
//             </div>

//             {/* Quick Links - Stack on very small screens */}
//             <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
//               {['About', 'Programs', 'Gallery', 'Contact'].map((link) => (
//                 <a
//                   key={link}
//                   href={`#${link.toLowerCase()}`}
//                   className="text-slate-400 hover:text-amber-400 transition-colors duration-300"
//                 >
//                   {link}
//                 </a>
//               ))}
//             </nav>

//             {/* Copyright */}
//             <div className="text-slate-500 text-sm">© 2025 Texas Fencing Academy</div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React, { useState } from 'react';

export default function FooterSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const generateMailto = (subject = 'Inquiry') => {
    return `mailto:ray@texasfencingacademy.org?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16 relative">
          
          {/* Left Column - Contact */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-light text-white mb-2 sm:mb-3">
                Ready to begin?
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Join Austin's premier fencing academy. Contact us to schedule your complimentary trial lesson and discover the art of fencing.
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-3 sm:space-y-4">
              <a
                href="tel:+15124969022"
                className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-200"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-amber-600/20 transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-white text-sm sm:text-base">(512) 496-9022</div>
                  <div className="text-xs sm:text-sm text-slate-500">Speak with us directly</div>
                </div>
              </a>

              <a
                href={generateMailto('Trial Lesson Request')}
                className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-200"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-amber-600/20 transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white text-sm sm:text-base break-all">ray@texasfencingacademy.org</div>
                  <div className="text-xs sm:text-sm text-slate-500">Send us a message</div>
                </div>
                <button
                  onClick={() => copyToClipboard('ray@texasfencingacademy.org')}
                  className="text-slate-500 hover:text-amber-400 transition-colors p-1 flex-shrink-0"
                  title="Copy email"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </a>
            </div>

            {/* Academy Hours */}
            <div>
              <h3 className="font-medium text-white mb-3 sm:mb-4 text-sm sm:text-base">Academy Hours</h3>
              <div className="space-y-2 text-slate-400 text-sm sm:text-base">
                <div className="flex justify-between items-center">
                  <span>Monday - Saturday</span>
                  <span className="text-amber-400 font-medium">Check Schedule</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="text-slate-500">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2">
              <a
                href="https://texasfencingacademy.glide.page"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-sm font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg"
              >
                Book Trial Lesson
              </a>
            </div>
          </div>

          {/* Vertical Divider - Only visible on lg+ screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700/50 to-transparent"></div>

          {/* Right Column - Info */}
          <div className="space-y-6 sm:space-y-8 lg:pl-8">
            
            {/* Location */}
            <div>
              <h3 className="font-medium text-white mb-3 sm:mb-4 text-sm sm:text-base">Visit Us</h3>
              <div className="space-y-1 sm:space-y-2 text-slate-400 text-sm sm:text-base">
                <p className="font-medium text-slate-300">Texas Fencing Academy</p>
                <p>8227 North Lamar</p>
                <p>Austin, TX 78753</p>
              </div>
              <a
                href="https://maps.google.com/?q=8227+North+Lamar,+Austin,+TX+78753"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs sm:text-sm text-slate-300 hover:text-amber-400 mt-2 sm:mt-3 transition-colors duration-200"
              >
                Get directions
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="font-medium text-white mb-3 sm:mb-4 text-sm sm:text-base">Why Choose Us</h3>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
                <p>• Free trial lessons for new students</p>
                <p>• All fencing equipment provided</p>
                <p>• Expert instruction since 1989</p>
                <p>• Competitive team opportunities</p>
                <p>• Welcoming to all skill levels</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-medium text-white mb-3 sm:mb-4 text-sm sm:text-base">Connect With Us</h3>
              <div className="flex justify-start space-x-3 sm:space-x-4">
                <a
                  href="https://www.instagram.com/texasfencingacademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600/20 transition-colors duration-200 group"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-amber-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/texasfencingacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600/20 transition-colors duration-200 group"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-amber-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/texasfencing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600/20 transition-colors duration-200 group"
                  aria-label="Follow us on Twitter"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-amber-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center justify-center sm:justify-start space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 text-xs sm:text-sm font-bold">TFA</span>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-medium text-white text-sm sm:text-base">Texas Fencing Academy</div>
              <div className="text-xs sm:text-sm text-slate-500">Excellence since 1989</div>
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="/founder" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">About TFA</a>
            <a href="/program" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Programs</a>
            <a href="/store" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Store</a>
          </nav>
          
          <div className="text-xs sm:text-sm text-slate-500 text-center sm:text-right">
            © 2025 Texas Fencing Academy
          </div>
        </div>
      </div>

      {/* Copy Feedback */}
      {copied && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-amber-400 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm shadow-lg border border-slate-700 z-50">
          Copied to clipboard ✓
        </div>
      )}
    </footer>
  );
}

