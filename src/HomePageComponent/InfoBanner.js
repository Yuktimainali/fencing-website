import { useEffect, useState } from "react";
// InfoBanner.js
function InfoBanner() {
    const orientationDate = process.env.REACT_APP_FENCING_CLASS_ORIENTATION_DATE;
    
    return (
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Subtle sword blade pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent transform skew-x-12"></div>
        </div>
  
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center space-x-4">
              {/* Elegant pulse indicator */}
              <div className="relative">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <div className="absolute inset-0 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75"></div>
              </div>
  
              <div className="flex items-center space-x-6">
                <span className="text-sm font-light text-slate-300 tracking-wide">
                  NEXT NEW FENCER ORIENTATION
                </span>
                <div className="h-4 w-px bg-amber-400/50"></div>
                <span className="text-sm font-semibold text-white tracking-wider">
                  {orientationDate}
                </span>
              </div>
  
              <a
                href="https://texasfencingacademy.glide.page/dl/17171d"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-sm font-semibold rounded-md hover:from-amber-400 hover:to-amber-500 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                SECURE YOUR SPOT
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default InfoBanner;
  