import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { FaHospital, FaMicroscope, FaBed, FaPrescriptionBottleAlt, FaWheelchair } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Facilities & Equipment | Faith Mulira Health Care Centre",
  description: "Modern medical facilities and equipment at our Level III health facility in Gayaza, Uganda. Learn about our patient care areas and medical capabilities.",
};

const facilities = [
  {
    icon: FaHospital,
    title: "Consultation Rooms",
    description: "Private, well-equipped consultation rooms for patient examinations and discussions with healthcare providers.",
    features: [
      "Private examination areas",
      "Modern medical equipment",
      "Comfortable environment",
      "Patient privacy ensured",
    ],
  },
  {
    icon: FaBed,
    title: "Maternity Ward",
    description: "Dedicated maternity facilities for safe deliveries and postnatal care.",
    features: [
      "Delivery rooms",
      "Postnatal recovery area",
      "Newborn care facilities",
      "24/7 midwife availability",
    ],
  },
  {
    icon: FaMicroscope,
    title: "Laboratory Services",
    description: "On-site laboratory capabilities for diagnostic testing and health screening.",
    features: [
      "Blood testing",
      "Urinalysis",
      "Pregnancy tests",
      "STI screening",
    ],
  },
  {
    icon: FaPrescriptionBottleAlt,
    title: "Pharmacy",
    description: "Well-stocked pharmacy with essential medications and supplies.",
    features: [
      "Essential medications",
      "Family planning supplies",
      "Maternal health products",
      "Affordable pricing",
    ],
  },
  {
    icon: FaWheelchair,
    title: "Accessibility",
    description: "Facilities designed to accommodate patients with diverse needs.",
    features: [
      "Ground floor access",
      "Wheelchair accessible",
      "Patient waiting areas",
      "Clean restroom facilities",
    ],
  },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="hero" className="pt-8">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">Our Facilities & Equipment</h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              Modern medical facilities meeting Level III health centre standards,
              designed to provide quality care in a comfortable, accessible environment.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Level III Standards */}
      <Section background="white">
        <ScrollReveal width="100%">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-primary mb-4">Level III Health Facility Standards</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a registered Level III health facility, we maintain standards set by Uganda's
              Ministry of Health. Our facilities are regularly inspected and equipped to provide
              comprehensive primary healthcare services including outpatient care, maternal and
              child health services, immunization, and basic laboratory services.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <facility.icon className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {facility.description}
                    </p>
                    <ul className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-secondary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* Medical Equipment */}
      <Section background="gray">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-primary text-center mb-12">Medical Equipment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Examination tables and instruments",
                "Blood pressure monitors",
                "Thermometers and diagnostic tools",
                "Delivery equipment and supplies",
                "Laboratory testing equipment",
                "Sterilization equipment",
                "Medical refrigeration for vaccines",
                "Emergency medical supplies",
                "Patient monitoring devices",
              ].map((equipment, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-xl">●</span>
                    <p className="text-gray-700">{equipment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Patient Comfort */}
      <Section background="white">
        <ScrollReveal width="100%">
          <div className="bg-primary text-white p-8 md:p-12 rounded-lg shadow-xl max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Your Comfort Matters
            </h3>
            <p className="text-lg leading-relaxed">
              We maintain clean, well-organized facilities to ensure your comfort and safety.
              Our team regularly sanitizes all areas and equipment to maintain the highest
              standards of hygiene and infection control.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Visit Us */}
      <Section background="gray">
        <ScrollReveal width="100%">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Come See Our Facilities
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We welcome you to visit our facility and see our modern, well-maintained
              healthcare environment for yourself.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Directions
            </a>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
