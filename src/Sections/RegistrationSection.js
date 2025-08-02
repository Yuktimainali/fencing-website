export default function RegistrationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Elegant background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400/5 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-900/5 rounded-full"></div>

        {/* Subtle geometric lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Refined Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-px bg-amber-500"></div>
            <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-amber-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L9.5 8.5H0l7.75 5.5L4.5 24 12 18.5 19.5 24l-3.25-10L24 8.5h-9.5L12 0z" />
              </svg>
            </div>
            <div className="w-16 h-px bg-amber-500"></div>
          </div>

          <h2 className="text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Begin Your{" "}
            <span className="font-semibold text-amber-600">Journey</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Join an elite community where precision meets passion, and every
            lesson shapes the champion within you.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="relative">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Content */}
              <div className="lg:col-span-3 p-12 lg:p-16">
                <div className="space-y-10">
                  {/* Platform Showcase */}
<div className="flex items-start space-x-8">
  <div className="flex-shrink-0">
    <img
      src="/images/TFALogo.jpeg"
      alt="TFA Pro Platform"
      className="w-32 h-32 object-contain" // Just size and object-fit
      onError={(e) => {
        console.log("Image failed to load:", e.target.src);
        e.target.style.display = "none";
        e.target.nextElementSibling.style.display = "block";
      }}
    />
    {/* Minimal fallback */}
    <div
      className="w-32 h-32 flex items-center justify-center hidden"
      style={{ display: "none" }}
    >
      <svg
        className="w-16 h-16 text-primary-900"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L13.09 8.26L19 7L17.91 13.26L22 15L16.91 17.74L17 24L12 19L7 24L7.09 17.74L2 15L6.09 13.26L5 7L10.91 8.26L12 2Z" />
      </svg>
    </div>
  </div>
  <div className="flex-1">
    <h3 className="text-2xl font-semibold text-primary-900 mb-3">
      TFA Pro Experience
    </h3>
    <p className="text-primary-600 leading-relaxed">
      Revolutionary platform combining seamless registration,
      personalized training insights, and direct access to
      world-class instruction.
    </p>
  </div>
</div>



                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        color: "emerald",
                        title: "Instant Enrollment",
                        desc: "Begin within minutes",
                      },
                      {
                        color: "blue",
                        title: "Progress Tracking",
                        desc: "Monitor development",
                      },
                      {
                        color: "purple",
                        title: "Expert Coaching",
                        desc: "Championship instruction",
                      },
                      {
                        color: "amber",
                        title: "Flexible Scheduling",
                        desc: "Train your way",
                      },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="group p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <div
                            className={`w-3 h-3 bg-${feature.color}-400 rounded-full group-hover:scale-125 transition-transform duration-300`}
                          ></div>
                          <span className="font-semibold text-slate-900">
                            {feature.title}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 ml-6">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                    {[
                      { number: "500+", label: "Active Members" },
                      { number: "15+", label: "Expert Coaches" },
                      { number: "35+", label: "Years Legacy" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-light text-slate-900 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-slate-600 font-light tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-12 lg:p-16 text-white">
                <div className="text-center mb-10">
                  <h4 className="text-xl font-semibold mb-3">
                    Quick Access Portal
                  </h4>
                  <p className="text-slate-300 text-sm font-light">
                    Scan or tap to enter the TFA universe
                  </p>
                </div>

                {/* QR Code */}
                <div className="relative mb-10">
                  <div className="bg-white rounded-xl p-8 shadow-2xl">
                    <img
                      src="https://texasfencingacademy.org/wp-content/uploads/2025/05/TFA-Pro-v2-qrcode_v3.jpg"
                      alt="TFA Pro QR Code"
                      className="w-32 h-32 object-contain mx-auto"
                    />
                  </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-6">
                  <a
                    href="https://texasfencingacademy.glide.page/dl/17171d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 flex items-center justify-center"
                  >
                    <span className="flex items-center">
                      START YOUR JOURNEY
                      <svg
                        className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>

                  <p className="text-center text-xs text-slate-400 leading-relaxed">
                    No app download required • Instant access to our community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-20">
          <blockquote className="text-slate-600 italic text-lg max-w-2xl mx-auto mb-4">
            "Excellence isn't a destination, it's a way of traveling. Begin your
            journey with purpose and precision."
          </blockquote>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-px bg-amber-500"></div>
            <span className="text-sm text-slate-500 font-light tracking-wider">
              TEXAS FENCING ACADEMY
            </span>
            <div className="w-12 h-px bg-amber-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
