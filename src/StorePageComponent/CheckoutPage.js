// Checkout.js
import { useState, useEffect } from "react";
import { useCart } from "./Cart/CartContex";

function EmptyCartComponent({ onNavigateToSection }) {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const fencingTips = [
    "Every fencing champion started with their first blade",
    "Great gear makes great fencers",
    "Your next touch begins with the right weapon",
    "Elite fencers trust professional equipment",
  ];

  const featuredCategories = [
    {
      name: "Protective Gear",
      icon: "/store/icons/knight.png",
      description: "Stay safe while you train",
      items: ["Masks", "Jackets", "Gloves"],
      section: "equipment",
    },
    {
      name: "Weapons", 
      icon: "/store/icons/sword.png",
      description: "Find your perfect weapon",
      items: ["Foils", "Épées", "Sabres"],
      section: "equipment",
    },
    {
      name: "Training Equipment",
      icon: "/store/icons/armour.png", 
      description: "Enhance your practice",
      items: ["Targets", "Mats", "Bags"],
      section: "equipment",
    },
  ];

  // Handle resize events for performance
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

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % fencingTips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigateToEquipment = () => {
    onNavigateToSection("equipment");
  };

  const handleNavigateToRepairs = () => {
    onNavigateToSection("repairs");
  };

  const handleCategoryClick = (category) => {
    if (category.section === "equipment") {
      handleNavigateToEquipment();
    } else {
      handleNavigateToRepairs();
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 relative contain-layout-paint ${
      isResizing ? 'no-animations' : ''
    }`}>
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100"></div>
      
      <div
        className={`container mx-auto px-4 md:px-6 py-8 md:py-16 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${isResizing ? 'transition-none' : ''}`}
      >
        {/* Main Empty Cart Section - mobile responsive */}
        <div className="text-center mb-12 md:mb-16">
          {/* Clean Cart Icon - mobile responsive */}
          <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-8">
            <div className="relative z-10 w-full h-full bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-lg">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 004 16h0a1 1 0 001 1v0a1 1 0 001-1v0V7"
                />
                <circle cx="9" cy="20" r="1" />
                <circle cx="20" cy="20" r="1" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-slate-800 px-4">
            Your Cart is Empty
          </h1>
          
          <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Every great fencer needs the right equipment. Start building your arsenal with quality gear that makes the difference.
          </p>

          {/* Clean Rotating Tips - mobile responsive */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 mb-6 md:mb-8 max-w-lg mx-auto border border-slate-200 shadow-sm mx-4 md:mx-auto">
            <div className="flex items-center justify-center mb-2 md:mb-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-500 rounded-full flex items-center justify-center mr-2 md:mr-3">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-amber-600 font-semibold text-xs md:text-sm uppercase tracking-wider">
                Pro Tip
              </span>
            </div>
            <p className="text-slate-700 italic transition-all duration-500 text-base md:text-lg">
              "{fencingTips[currentTip]}"
            </p>
          </div>
        </div>

        {/* Clean Categories Grid - mobile responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 px-4 md:px-0">
          {featuredCategories.map((category, index) => (
            <div
              key={category.name}
              className={`group relative bg-white rounded-lg md:rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] transition-all duration-700 ease-out cursor-pointer ${
                isResizing ? 'transition-none' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => handleCategoryClick(category)}
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-4 right-4 md:left-6 md:right-6 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Minimal hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-slate-50/0 group-hover:from-amber-50/20 group-hover:to-slate-50/10 transition-all duration-700 rounded-lg md:rounded-xl"></div>

              <div className="relative p-4 md:p-8">
                <div className="text-center">
                  <div className="text-4xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-10 h-10 md:w-12 md:h-12 mx-auto"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-3 group-hover:text-amber-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 mb-4 md:mb-6 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="bg-slate-100 text-slate-600 px-2 md:px-3 py-1 rounded-full text-xs font-medium border border-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subtle bottom accent */}
              <div className="h-0.5 bg-gradient-to-r from-amber-400/50 to-amber-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Clean Call to Action Section - mobile responsive */}
        <div className="text-center px-4 md:px-0">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-10 border border-slate-200 shadow-sm max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-800">
              Ready to Start Shopping?
            </h2>
            <p className="text-slate-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              From beginner-friendly gear to professional competition equipment, we have everything you need to excel in your fencing journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button
                onClick={handleNavigateToEquipment}
                className="bg-amber-500 text-white px-6 md:px-10 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  Browse Equipment
                </span>
              </button>
              
              <button
                onClick={handleNavigateToRepairs}
                className="bg-slate-100 text-slate-700 px-6 md:px-10 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Professional Repairs
              </button>
            </div>
          </div>

          {/* Clean Benefits Banner - mobile responsive */}
          <div className="mt-6 md:mt-8 bg-gradient-to-r from-amber-50 to-slate-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-amber-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span className="text-slate-700 font-medium text-sm">
                  Free shipping on orders over $100
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-amber-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-slate-700 font-medium text-sm">
                  Professional gear from trusted brands
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for no-animations */}
      <style jsx>{`
        .no-animations * {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
        }
      `}</style>
    </div>
  );
}

export default function CheckoutPage({ onNavigateToSection }) {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } =
    useCart();
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  // Handle resize events for performance
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

  const handleCustomerInfoChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentInfoChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      alert("Order placed successfully!");
      clearCart();
      setIsProcessing(false);
      // Redirect to success page or reset form
    }, 2000);
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return <EmptyCartComponent onNavigateToSection={onNavigateToSection} />;
  }

  return (
    <div className={`min-h-screen bg-primary-900 text-white contain-layout-paint ${
      isResizing ? 'no-animations' : ''
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">Checkout</h1>
          <p className="text-primary-200 text-sm md:text-base">
            Review your order and complete your purchase
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="bg-primary-800 rounded-lg md:rounded-xl p-4 md:p-6 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-accent-400">
                Order Summary
              </h2>

              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-primary-700 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm md:text-base line-clamp-2">{item.title}</h3>
                      <p className="text-primary-200 text-xs md:text-sm">
                        {item.category}
                      </p>
                      <p className="text-accent-400 font-bold text-sm md:text-base">{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 md:w-8 md:h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors touch-manipulation"
                      >
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <span className="w-6 md:w-8 text-center font-semibold text-sm md:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 md:w-8 md:h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors touch-manipulation"
                      >
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => removeFromCart(item)}
                        className="ml-2 text-red-400 hover:text-red-300 transition-colors touch-manipulation"
                      >
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="border-t border-primary-600 pt-3 md:pt-4 space-y-2">
                <div className="flex justify-between text-primary-200 text-sm md:text-base">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-primary-200 text-sm md:text-base">
                  <span>Shipping:</span>
                  <span>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-primary-200 text-sm md:text-base">
                  <span>Tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg md:text-xl font-bold text-accent-400 pt-2 border-t border-primary-600">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Customer Information */}
              <div className="bg-primary-800 rounded-lg md:rounded-xl p-4 md:p-6 shadow-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-accent-400">
                  Customer Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={customerInfo.firstName}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={customerInfo.lastName}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={customerInfo.email}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={handleCustomerInfoChange}
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base"
                  />
                </div>

                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={customerInfo.address}
                  onChange={handleCustomerInfoChange}
                  required
                  className="w-full p-3 mb-3 md:mb-4 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={customerInfo.city}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={customerInfo.postalCode}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={customerInfo.country}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base col-span-1 sm:col-span-2 lg:col-span-1"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-primary-800 rounded-lg md:rounded-xl p-4 md:p-6 shadow-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-accent-400">
                  Payment Information
                </h2>

                <input
                  type="text"
                  name="nameOnCard"
                  placeholder="Name on Card"
                  value={paymentInfo.nameOnCard}
                  onChange={handlePaymentInfoChange}
                  required
                  className="w-full p-3 mb-3 md:mb-4 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base"
                />

                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={paymentInfo.cardNumber}
                  onChange={handlePaymentInfoChange}
                  required
                  className="w-full p-3 mb-3 md:mb-4 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base"
                />

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={paymentInfo.expiryDate}
                    onChange={handlePaymentInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={paymentInfo.cvv}
                    onChange={handlePaymentInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg transition-all duration-300 touch-manipulation ${
                  isProcessing
                    ? "bg-primary-600 text-primary-300 cursor-not-allowed"
                    : "bg-accent-400 text-primary-900 hover:bg-accent-500 transform hover:scale-105"
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 md:h-5 md:w-5 text-primary-300"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Complete Order - $${total.toFixed(2)}`
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CSS for no-animations */}
      <style jsx>{`
        .no-animations * {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
