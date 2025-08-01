import React, { useState, useEffect, useRef } from "react";
import homepageLogo from "../assets/homepagelogo.PNG";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    {
      text: "Summer Camps 2025",
      href: "#summer-camps",
      icon: "🏕️"
    },
    {
      text: "Home",
      href: "#home",
      icon: "🏠",
      dropdown: [
        { text: "From Founder", href: "#founder", icon: "👨‍💼" },
        { text: "Coaches", href: "#coaches", icon: "🤺" },
        { text: "Our Philosophy", href: "#philosophy", icon: "💭" },
        { text: "Facilities", href: "#facilities", icon: "🏢" },
        { text: "Calendar", href: "#calendar", icon: "📅" },
        { text: "Contact", href: "#contact", icon: "📞" },
        { text: "Registration", href: "#registration", icon: "📝" }
      ]
    },
    {
      text: "Programs",
      href: "#programs",
      icon: "⚔️",
      dropdown: [
        { text: "Program Overview", href: "#program-overview", icon: "📋" },
        { text: "Orientation/Beginner", href: "#orientation", icon: "🎯" },
        { text: "Minnows 6-9 Yrs", href: "#minnows", icon: "🐟" },
        { text: "Team Fencing", href: "#team-fencing", icon: "👥" },
        { text: "Private Lessons", href: "#private-lessons", icon: "👨‍🏫" }
      ]
    },
    {
      text: "Parents",
      href: "#parents",
      icon: "👨‍👩‍👧‍👦",
      dropdown: [
        { text: "Safety", href: "#safety", icon: "🛡️" },
        { text: "Parents Role", href: "#parents-role", icon: "👪" },
        { text: "College Advantage", href: "#college-advantage", icon: "🎓" },
        { text: "Kids About Fencing", href: "#kids-fencing", icon: "👶" }
      ]
    },
    {
      text: "Store",
      href: "#store",
      icon: "🛒",
      dropdown: [
        { text: "Youth Fencing", href: "#youth-fencing", icon: "👦" },
        { text: "Adult Fencing", href: "#adult-fencing", icon: "👨" },
        { text: "Lessons – Calendar", href: "#lessons-calendar", icon: "📚" },
        { text: "Equipment", href: "#equipment", icon: "⚔️" },
        { text: "Repairs", href: "#repairs", icon: "🔧" },
        { text: "Tournament Fees", href: "#tournament-fees", icon: "🏆" },
        { text: "Special Events", href: "#special-events", icon: "🎉" },
        { text: "Donations", href: "#donations", icon: "💝" }
      ]
    }
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
    <nav className="sticky top-0 bg-white w-full z-[1000] shadow-lg border-b-2 border-blue-100">
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
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600 hover:scale-105 transform ${
                      activeIndex === index 
                        ? "bg-blue-500 text-white shadow-md" 
                        : "text-gray-700 hover:shadow-sm"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.text}</span>
                    {item.dropdown && (
                      <svg 
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          openDropdown === index ? 'rotate-180' : ''
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
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownItem.text}
                            href={dropdownItem.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group/item"
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

          {/* Search Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
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
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
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
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    activeIndex === index 
                      ? "bg-blue-500 text-white" 
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="flex-1 text-left">{item.text}</span>
                  {item.dropdown && (
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.dropdown && openDropdown === index && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.text}
                        href={dropdownItem.href}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200"
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
            <div className="px-4 py-3 border-t border-gray-100 mt-4">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

