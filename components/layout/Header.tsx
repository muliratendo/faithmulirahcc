"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPhone, FaBars, FaTimes, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { NAV_LINKS, CONTACT_INFO, SITE_NAME } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Grouped menus for Tablet/Laptop view
  const groupedLinks = {
    "About & Contact": [
      { href: "/about", label: "About Us" },
      { href: "/team", label: "Our Team" },
      { href: "/contact", label: "Contact" },
    ],
    "Care Services": [
      { href: "/services", label: "Services" },
      { href: "/facilities", label: "Facilities" },
      { href: "/patient-info", label: "Patient Info" },
    ],
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar - Emergency Contact */}
      <div className="bg-secondary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <FaPhone className="text-xs" />
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:underline">
              Emergency: {CONTACT_INFO.phone}
            </a>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hidden sm:flex"
          >
            <FaWhatsapp />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Hidden Name on Mobile (< md) */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/logo.jpg"
                alt="Faith Mulira Health Care Centre Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            {/* Show Text only on md+ screens */}
            <div className="hidden md:block">
              <h1 className="text-lg font-heading font-bold text-secondary leading-tight">
                {SITE_NAME}
              </h1>
              <p className="text-xs text-gray-600">Level III Health Facility</p>
            </div>
          </Link>

          {/* Desktop Navigation (> xl) - Classic Full List */}
          <ul className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Tablet/Laptop Navigation (md to xl) - Grouped Dropdowns */}
          <ul className="hidden md:flex xl:hidden items-center gap-6">
            <li 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
               <button 
                onClick={() => toggleDropdown('about')}
                className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium focus:outline-none"
               >
                 About & Contact <FaChevronDown className="text-xs" />
               </button>
               <AnimatePresence>
                 {activeDropdown === 'about' && (
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 10 }}
                     className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 min-w-[180px] flex flex-col gap-2 border border-gray-100"
                   >
                     {groupedLinks["About & Contact"].map((link) => (
                       <Link
                         key={link.href}
                         href={link.href}
                         className="text-gray-600 hover:text-primary transition-colors"
                       >
                         {link.label}
                       </Link>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>
            </li>

            <li 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
               <button 
                onClick={() => toggleDropdown('services')}
                className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium focus:outline-none"
               >
                 Care Services <FaChevronDown className="text-xs" />
               </button>
               <AnimatePresence>
                 {activeDropdown === 'services' && (
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 10 }}
                     className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 min-w-[180px] flex flex-col gap-2 border border-gray-100"
                   >
                     {groupedLinks["Care Services"].map((link) => (
                       <Link
                         key={link.href}
                         href={link.href}
                         className="text-gray-600 hover:text-primary transition-colors"
                       >
                         {link.label}
                       </Link>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>
            </li>
          </ul>

          {/* CTA Button - Tablet+ */}
          <Link
            href="/contact"
            className="hidden md:block bg-primary hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Get Directions
          </Link>

          {/* Mobile Menu Button (< md) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <ul className="container mx-auto px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className="block text-gray-700 hover:text-primary font-medium text-lg transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="/contact"
                  onClick={toggleMenu}
                  className="block w-full text-center bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Get Directions
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
