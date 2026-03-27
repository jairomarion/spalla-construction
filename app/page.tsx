export default function Home() {
  return (
    <div className="w-full">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Spalla<span className="text-green-600">.</span>
          </div>
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-green-600 transition">HOME</a></li>
            <li><a href="#about" className="hover:text-green-600 transition">ABOUT</a></li>
            <li><a href="#services" className="hover:text-green-600 transition">SERVICES</a></li>
            <li><a href="#projects" className="hover:text-green-600 transition">PROJECTS</a></li>
            <li><a href="#contact" className="hover:text-green-600 transition">CONTACT</a></li>
          </ul>
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex flex-col items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl animation-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animation-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            LEADERS IN QUALITY
            <span className="block text-green-500 mt-2">CONSTRUCTION AND INFRASTRUCTURE</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl font-light">
            We don't just build structures, <span className="text-green-400 font-semibold">We build confidence</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-green-500 text-green-400 hover:bg-green-600/10 font-semibold rounded-lg transition duration-300">
              Learn More
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-16 pt-12 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">2013</div>
              <div className="text-gray-400 text-sm mt-2">Year Established</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">40+</div>
              <div className="text-gray-400 text-sm mt-2">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">30</div>
              <div className="text-gray-400 text-sm mt-2">Contractors Appointed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">15</div>
              <div className="text-gray-400 text-sm mt-2">Awards Won</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </div>
  );
}
