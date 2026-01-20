"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FaPhone, FaMapMarkerAlt, FaArrowDown, FaAward, FaBriefcase, FaUsers } from "react-icons/fa";
import { SITE_NAME, SITE_TAGLINE, CONTACT_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-secondary-800 via-secondary-700 to-secondary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Mobile-Only Animated Branding */}
          <div className="md:hidden mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl font-heading font-bold text-white mb-2 leading-tight">
                {SITE_NAME}
              </h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="h-1 bg-primary mx-auto mb-4"
              />
            </motion.div>
          </div>

          <ScrollReveal width="100%">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                Registered Level III Health Facility
              </span>
            </div>

            {/* Main Heading (Desktop/Tablet) */}
            <h1 className="hidden md:block text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              {SITE_NAME}
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-primary-100 font-medium">
              {SITE_TAGLINE}
            </p>

            <p className="text-lg md:text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
              Providing affordable, accessible healthcare to the Masooli community since 2009.
              Professional medical services with compassion and care.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/services">
                <Button variant="primary" size="large" className="w-full sm:w-auto">
                  View Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="large"
                  className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-secondary"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Get Directions
                </Button>
              </Link>
              <a href={`tel:${CONTACT_INFO.phone}`}>
                <Button
                  variant="primary"
                  size="large"
                  className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700"
                >
                  <FaPhone className="mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </ScrollReveal>

          {/* Key Info */}
          <ScrollReveal width="100%" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="text-primary-300 text-3xl mb-3 flex justify-center">
                  <FaAward />
                </div>
                <p className="text-3xl font-bold mb-1">15+</p>
                <p className="text-sm text-primary-100">Years Serving</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="text-primary-300 text-3xl mb-3 flex justify-center">
                  <FaBriefcase />
                </div>
                <p className="text-3xl font-bold mb-1">5</p>
                <p className="text-sm text-primary-100">Core Services</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="text-primary-300 text-3xl mb-3 flex justify-center">
                  <FaUsers />
                </div>
                <p className="text-3xl font-bold mb-1">24/7</p>
                <p className="text-sm text-primary-100">Emergency Care</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Scroll Indicator */}
          <div className="mt-12 animate-bounce">
            <FaArrowDown className="mx-auto text-2xl text-primary-100" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
