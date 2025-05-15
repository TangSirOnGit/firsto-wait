'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">
              Firsto.co
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Features
            </Link>
            {/* <Link href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors">
              How It Works
            </Link> */}
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Pricing
            </Link>
            <Link href="#waitlist" className="btn-primary">
              Join Waitlist
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              href="#features"
              className="block text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            {/* <Link
              href="#how-it-works"
              className="block text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link> */}
            <Link
              href="#pricing"
              className="block text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#waitlist"
              className="inline-block btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
