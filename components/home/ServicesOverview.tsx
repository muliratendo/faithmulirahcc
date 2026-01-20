"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { SERVICES } from "@/data/services";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesOverview() {
  return (
    <Section id="services" background="white">
      <ScrollReveal width="100%">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-primary font-heading mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive healthcare services tailored to meet the needs of our community.
            From preventative care to maternity services, we're here for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} width="100%" delay={index * 0.1}>
              <Card variant="service">
                <div className="flex flex-col h-full">
                  <div className="text-center mb-6">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                      <service.icon className="text-3xl text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  </div>

                  {/* Key Points */}
                  <ul className="text-left text-sm text-gray-700 space-y-2 mb-6 flex-grow">
                    {service.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="text-center mt-auto">
                    <Link
                      href={`/services#${service.id}`}
                      className="text-primary hover:text-primary-700 font-medium inline-flex items-center transition-colors"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="outline" size="large">
              View All Services
            </Button>
          </Link>
        </div>
      </ScrollReveal>
    </Section>
  );
}
