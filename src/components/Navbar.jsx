import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent text-white backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="text-2xl font-bold">WedStore</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-semibold text-white">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="#faq" className="hover:text-gray-300">
            FAQ
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4 text-white font-semibold">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}