import React, { useState, useEffect, useRef } from "react";
import homepageLogo from "../assets/homepagelogo.PNG";
import { FencingSilhouetteIcon } from './icons/FencingSilhouetteIcon';

// Medal icon for tournament/store section
const MedalIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="16" r="4" />
    <path d="M12 12V4M8 8l4 4 4-4" />
  </svg>
);

const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={2} />
    <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const CloseIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => { 
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus(); 
    }
  }, [showSearch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => { 
      document.removeEventListener("mousedown", handleClickOutside); 
    };
  }, []);

  const navItems = [
    {
      text: "Summer Camps 2025",
      href: "#summer-camps",
      icon: <FencingSilhouetteIcon />,
    },
    {
      text: "Home",
      href: "#home",
      icon: <FencingSilhouetteIcon />,
      dropdown: [
        { text: "From Founder", href: "#founder", icon: <FencingSilhouetteIcon /> },
        { text: "Coaches", href: "#coaches", icon: <FencingSilhouetteIcon /> },
        { text: "Our Philosophy", href: "#philosophy", icon: <FencingSilhouetteIcon /> },
        { text: "Facilities", href: "#facilities", icon: <FencingSilhouetteIcon /> },
        { text: "Calendar", href: "#calendar", icon: <MedalIcon /> },
        { text: "Contact", href: "#contact", icon: <FencingSilhouetteIcon /> },
        { text: "Registration", href: "#registration", icon: <FencingSilhouetteIcon /> },
      ],
    },
    {
      text: "Programs",
      href: "#programs",
      icon: <FencingSilhouetteIcon />,
      dropdown: [
        { text: "Program Overview", href: "#program-overview", icon: <FencingSilhouetteIcon /> },
        { text: "Orientation/Beginner", href: "#orientation", icon: <FencingSilhouetteIcon /> },
        { text: "Minnows 6-9 Yrs", href: "#minnows", icon: <FencingSilhouetteIcon /> },
        { text: "Team Fencing", href: "#team-fencing", icon: <FencingSilhouetteIcon /> },
        { text: "Private Lessons", href: "#private-lessons", icon: <FencingSilhouetteIcon /> },
      ],
    },
    {
      text: "Parents",
      href: "#parents",
      icon: <FencingSilhouetteIcon />,
      dropdown: [
        { text: "Safety", href: "#safety", icon: <FencingSilhouetteIcon /> },
        { text: "Parents Role", href: "#parents-role", icon: <FencingSilhouetteIcon /> },
        { text: "College Advantage", href: "#college-advantage", icon: <MedalIcon /> },
        { text: "Kids About Fencing", href: "#kids-fencing", icon: <FencingSilhouetteIcon /> },
      ],
    },
    {
      text: "Store",
      href: "#store",
      icon: <MedalIcon />,
      dropdown: [
        { text: "Youth Fencing", href: "#youth-fencing", icon: <FencingSilhouetteIcon /> },
        { text: "Adult Fencing", href: "#adult-fencing", icon: <FencingSilhouetteIcon /> },
        { text: "Lessons – Calendar", href: "#lessons-calendar", icon: <MedalIcon /> },
        { text: "Equipment", href: "#equipment", icon: <FencingSilhouetteIcon /> },
        { text: "Repairs", href: "#repairs", icon: <FencingSilhouetteIcon /> },
        { text: "Tournament Fees", href: "#tournament-fees", icon: <MedalIcon /> },
        { text: "Special Events", href: "#special-events", icon: <MedalIcon /> },
        { text: "Donations", href: "#donations", icon: <MedalIcon /> },
      ],
    },
  ];

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleMenuItemClick = (index) => { 
    setActiveIndex(index); 
    setOpenDropdown(null); 
    setIsMobileMenuOpen(false); 
  };

  return (
    <nav className="sticky top-0 bg-white w-full z-[1000] shadow-lg border-b-2 border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={homepageLogo}
              alt="Texas Fencing Academy Logo"
              className="h-12 w-40 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block" ref={dropdownRef}>
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <div key={item.text} className="relative group">
                  <button
                    onClick={() => { 
                      if (item.dropdown) {
                        handleDropdownToggle(index); 
                      } else {
                        handleMenuItemClick(index); 
                      }
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 transform ${
                      activeIndex === index 
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-lg" 
                        : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.text}</span>
                    {item.dropdown && (
                      <svg 
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-5 duration-300">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.text}
                            href={dropdownItem.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 group/item"
                            onClick={() => handleMenuItemClick(index)}
                          >
                            <span className="text-base group-hover/item:scale-110 transition-transform duration-200">
                              {dropdownItem.icon}
                            </span>
                            <span className="font-medium">{dropdownItem.text}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Search Icon & Animated Field */}
          <div className="hidden md:flex items-center relative" style={{ minWidth: 56 }}>
            <div className="relative flex items-center">
              <div
                className="flex items-center border border-gray-300 px-3 py-[7px] rounded-lg shadow bg-white overflow-hidden transition-[width,opacity] duration-300 ease-in-out"
                style={{
                  width: showSearch ? 220 : 0,
                  opacity: showSearch ? 1 : 0,
                  whiteSpace: "nowrap"
                }}
              >
                <SearchIcon className="text-gray-400 w-5 h-5 mr-2 flex-shrink-0" />
                {showSearch && (
                  <input
                    ref={searchInputRef}
                    className="border-none outline-none bg-transparent flex-1 text-gray-700 placeholder-gray-400"
                    placeholder="Search ..."
                    autoFocus
                    style={{ minWidth: 80 }}
                  />
                )}
                <button
                  type="button"
                  onClick={() => setShowSearch(false)}
                  className="flex items-center justify-center ml-2 rounded-full hover:text-amber-600 transition-colors"
                  aria-label="Close search"
                  style={{ height: 28, width: 28 }}
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>

              {!showSearch && (
                <button
                  className="p-2 rounded-lg text-gray-500 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200 absolute right-0"
                  onClick={() => setShowSearch(true)}
                  aria-label="Open search"
                  style={{ transform: "translateX(0)" }}
                >
                  <SearchIcon className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-amber-200 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={item.text}>
                <button
                  onClick={() => { 
                    if (item.dropdown) {
                      handleDropdownToggle(index); 
                    } else {
                      handleMenuItemClick(index); 
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:scale-105 ${
                    activeIndex === index 
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-lg" 
                      : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="flex-1 text-left">{item.text}</span>
                  {item.dropdown && (
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {item.dropdown && openDropdown === index && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.text}
                        href={dropdownItem.href}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-all duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-base">{dropdownItem.icon}</span>
                        <span>{dropdownItem.text}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Search */}
            <div className="px-4 py-3 border-t border-amber-200 mt-4">
              {showSearch ? (
                <div className="flex items-center border border-gray-300 px-3 py-[7px] rounded-lg shadow bg-white relative" style={{ width: "100%" }}>
                  <SearchIcon className="text-gray-400 w-5 h-5 mr-2" />
                  <input
                    ref={searchInputRef}
                    className="border-none outline-none bg-transparent flex-1 text-gray-700 placeholder-gray-400"
                    placeholder="Search ..."
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowSearch(false)}
                    className="flex items-center justify-center ml-2 rounded-full hover:text-amber-600 transition-colors"
                    aria-label="Close search"
                    style={{ height: 28, width: 28 }}
                  >
                    <CloseIcon className="w-6 h-6" />
                  </button>
                </div>
              ) : (
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-all duration-200"
                  onClick={() => setShowSearch(true)}
                >
                  <SearchIcon className="w-5 h-5" />
                  <span>Search</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
