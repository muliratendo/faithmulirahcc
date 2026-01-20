import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import { CONTACT_INFO, OPERATING_HOURS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us | Faith Mulira Health Care Centre",
  description: `Get in touch with Faith Mulira Health Care Centre. Visit us in ${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.city} or call us at ${CONTACT_INFO.phone}. We're here to help.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="hero" className="pt-8">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">Contact Us</h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              We're here to answer your questions and provide the care you need.
              Reach out to us today!
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Contact Info & Map */}
      <Section background="white">
        <ScrollReveal width="100%">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-primary mb-8">Get In Touch</h2>

              {/* Address */}
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                      Our Location
                    </h3>
                    <p className="text-gray-700 mb-2">{CONTACT_INFO.address.full}</p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT_INFO.address.googleMapsQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-700 font-medium text-sm"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-xl text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                      Call Us
                    </h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-primary hover:text-primary-700 font-medium text-lg mb-2 block"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <p className="text-sm text-gray-600">24/7 Emergency Services Available</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-xl text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-primary hover:text-primary-700 font-medium"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-xl text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                      WhatsApp
                    </h3>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-700 font-medium"
                    >
                      Chat with us on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-primary mb-8">Find Us</h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe
                  title="Faith Mulira Health Care Centre Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7155663765175!2d32.58865587494297!3d0.4192422730373929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db1f67755417b%3A0x205c8f9e371914e!2sFaith%20Mulira%20Health%20Care%20Centre%2C%20Masooli!5e0!3m2!1sen!2sug!4v1716300000000!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Directions:</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>From Kampala City Centre:</strong> Take Gayaza Road heading north.
                  Continue for approximately 15km until you reach Masooli.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>By Public Transport:</strong> Take a taxi or boda boda along Gayaza Road
                  to Masooli. Our facility is easily accessible from the main road.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Emergency Info */}
      <Section background="primary">
        <ScrollReveal width="100%">
          <div className="bg-accent text-white p-8 md:p-12 rounded-lg shadow-xl max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Emergency? Call Us Now!
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              For medical emergencies, please call us immediately or visit our facility.
              We provide 24/7 emergency services.
            </p>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
