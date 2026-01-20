import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { SERVICES } from "@/data/services";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Services | Faith Mulira Health Care Centre",
  description: "Comprehensive healthcare services including outpatient care, maternity services, reproductive health, vaccinations, and community health initiatives in Masooli, Uganda.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="hero" className="pt-8">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">Our Services</h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              Comprehensive healthcare services designed to meet the diverse needs of our community.
              From preventative care to specialized treatments, we're here to support your health journey.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Services Grid */}
      <Section background="white">
        <ScrollReveal width="100%">
          <div className="space-y-12">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex lg:gap-12 lg:items-center`}
              >
                {/* Icon & Title Side */}
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-lg shadow-md">
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                      <service.icon className="text-4xl text-primary" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-center text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                </div>

                {/* Details Side */}
                <div className="lg:w-2/3 mt-6 lg:mt-0">
                  <Card variant="default">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      What We Offer:
                    </h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-secondary text-xl mt-1">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <ScrollReveal width="100%">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Contact us today to learn more about our services or to schedule your visit.
              We're here to help you and your family stay healthy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-primary hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+256393224301"
                className="inline-block bg-secondary hover:bg-secondary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
