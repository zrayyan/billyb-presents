'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="BillyB Presents"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+14076842921" className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-all duration-300">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(407) 684-2921</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex space-x-8 py-4">
            <li>
              <Link href="/" className="relative text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 group py-2 px-3 rounded-lg hover:bg-primary-50">
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link href="#services" className="relative text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 group py-2 px-3 rounded-lg hover:bg-primary-50">
                SERVICES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link href="#contact" className="relative text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 group py-2 px-3 rounded-lg hover:bg-primary-50">
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="py-4 space-y-2">
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium py-3 px-4 rounded-lg">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium py-3 px-4 rounded-lg">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium py-3 px-4 rounded-lg">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}