import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          SecuraX
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/training" className="hover:text-blue-400 transition">Training</a>
          <a href="/quiz" className="hover:text-blue-400 transition">Quiz</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/graph" className="hover:text-blue-400 transition">Live Graph</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" 
            viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 text-center">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/training" className="hover:text-blue-400 transition">Training</a>
          <a href="/quiz" className="hover:text-blue-400 transition">Quiz</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/graph" className="hover:text-blue-400 transition">Live Graph</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
