// Checkout.js
import { useState, useEffect } from "react";
import { useCart } from "./Cart/CartContex";

function EmptyCartComponent({ onNavigateToSection }) {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const fencingTips = [
  "Every fencing champion started with their first blade",
  "Great gear makes great fencers",
  "Your next touch begins with the right weapon",
  "Elite fencers trust professional equipment",
];


  const featuredCategories = [
    {
      name: "Protective Gear",
      icon: "/store/icons/knight.png", // Example icon path
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
    <div className="min-h-screen bg-slate-50 text-slate-800 relative">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100"></div>
      
      <div
        className={`container mx-auto px-4 py-16 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Main Empty Cart Section */}
        <div className="text-center mb-16">
          {/* Clean Cart Icon */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="relative z-10 w-full h-full bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-lg">
              <svg
                className="w-16 h-16 text-amber-500"
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

          <h1 className="text-5xl font-bold mb-4 text-slate-800">
            Your Cart is Empty
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every great fencer needs the right equipment. Start building your arsenal with quality gear that makes the difference.
          </p>

          {/* Clean Rotating Tips */}
          <div className="bg-white rounded-xl p-6 mb-8 max-w-lg mx-auto border border-slate-200 shadow-sm">
            <div className="flex items-center justify-center mb-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-white"
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
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Pro Tip
              </span>
            </div>
            <p className="text-slate-700 italic transition-all duration-500 text-lg">
              "{fencingTips[currentTip]}"
            </p>
          </div>
        </div>

        {/* Clean Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredCategories.map((category, index) => (
            <div
              key={category.name}
              className="group relative bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] transition-all duration-700 ease-out cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => handleCategoryClick(category)}
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Minimal hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-slate-50/0 group-hover:from-amber-50/20 group-hover:to-slate-50/10 transition-all duration-700 rounded-xl"></div>

              <div className="relative p-8">
                <div className="text-center">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img
                        src={category.icon}
                        alt={category.name}
                        className="w-12 h-12 mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium border border-slate-200"
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

        {/* Clean Call to Action Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-sm max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Ready to Start Shopping?
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              From beginner-friendly gear to professional competition equipment, we have everything you need to excel in your fencing journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleNavigateToEquipment}
                className="bg-amber-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform"
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
                className="bg-slate-100 text-slate-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Professional Repairs
              </button>
            </div>
          </div>

          {/* Clean Benefits Banner */}
          <div className="mt-8 bg-gradient-to-r from-amber-50 to-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-amber-500 mr-2"
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
                  className="w-6 h-6 text-amber-500 mr-2"
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
    <div className="min-h-screen bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-accent-400 mb-2">Checkout</h1>
          <p className="text-primary-200">
            Review your order and complete your purchase
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="bg-primary-800 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-accent-400">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 bg-primary-700 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-primary-200 text-sm">
                        {item.category}
                      </p>
                      <p className="text-accent-400 font-bold">{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
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
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
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
                        className="ml-4 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
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
              <div className="border-t border-primary-600 pt-4 space-y-2">
                <div className="flex justify-between text-primary-200">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-primary-200">
                  <span>Shipping:</span>
                  <span>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-primary-200">
                  <span>Tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-accent-400 pt-2 border-t border-primary-600">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="bg-primary-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-accent-400">
                  Customer Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={customerInfo.firstName}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={customerInfo.lastName}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={customerInfo.email}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={handleCustomerInfoChange}
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                  />
                </div>

                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={customerInfo.address}
                  onChange={handleCustomerInfoChange}
                  required
                  className="w-full p-3 mb-4 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                />

                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={customerInfo.city}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={customerInfo.postalCode}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={customerInfo.country}
                    onChange={handleCustomerInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-primary-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-accent-400">
                  Payment Information
                </h2>

                <input
                  type="text"
                  name="nameOnCard"
                  placeholder="Name on Card"
                  value={paymentInfo.nameOnCard}
                  onChange={handlePaymentInfoChange}
                  required
                  className="w-full p-3 mb-4 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                />

                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={paymentInfo.cardNumber}
                  onChange={handlePaymentInfoChange}
                  required
                  className="w-full p-3 mb-4 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={paymentInfo.expiryDate}
                    onChange={handlePaymentInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={paymentInfo.cvv}
                    onChange={handlePaymentInfoChange}
                    required
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-accent-400 transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isProcessing
                    ? "bg-primary-600 text-primary-300 cursor-not-allowed"
                    : "bg-accent-400 text-primary-900 hover:bg-accent-500 transform hover:scale-105"
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-300"
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
    </div>
  );
}
