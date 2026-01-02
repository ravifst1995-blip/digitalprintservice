import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ChevronDown
} from 'lucide-react';

const navLinks = [
  { name: "Home", page: "Home" },
  { name: "About Us", page: "About" },
  { name: "Our Services", page: "Services" },
  { name: "Contact Us", page: "Contact" },
  { name: "PrivacyPolicy", page: "PrivacyPolicy" }
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  /* ===============================
     Route-based BODY class
  =============================== */
  useEffect(() => {
    // Clear old classes
    document.body.className = '';

    const path =
      location.pathname === '/'
        ? 'home'
        : location.pathname.replace('/', '').replace(/\//g, '-');

    document.body.classList.add(`page-${path}`);

    return () => {
      document.body.className = '';
    };
  }, [location.pathname]);

  /* ===============================
     Scroll Header Effect
  =============================== */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="headerTop bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between text-sm">
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:Info@Digitalmarketingking.in" className="flex items-center gap-2 hover:text-orange-100">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Info@digitalprintservice.org</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Facebook className="w-4 h-4" />
              <Twitter className="w-4 h-4" />
              <Linkedin className="w-4 h-4" />
              <Instagram className="w-4 h-4" />
              <Youtube className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-bold text-slate-900">DIGITAL PRINT</span>
              <span className="text-2xl md:text-3xl font-bold text-orange-500 italic ml-1">SERVICE</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.page)}
                  className={`text-sm font-semibold hover:text-orange-600 ${
                    currentPageName === link.page ? 'text-orange-600' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full px-6 uppercase font-semibold">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.page)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-semibold text-slate-700 hover:text-orange-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
          © 2025 DIGITAL PRINT SERVICE . All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
