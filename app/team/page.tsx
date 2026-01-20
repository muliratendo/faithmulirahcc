import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/data/team";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Team | Faith Mulira Health Care Centre",
  description: "Meet the dedicated healthcare professionals at Faith Mulira Health Care Centre, committed to providing compassionate, quality care to our community.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="hero" className="pt-8">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">Our Team</h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              Meet the compassionate professionals dedicated to your health and well-being.
              Our team combines medical expertise with genuine care for every patient.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Team Grid */}
      <Section background="white">
        <ScrollReveal width="100%">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Profile Image Placeholder */}
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {member.isFounder && (
                    <span className="inline-block bg-accent text-white text-sm px-3 py-1 rounded-full mb-3">
                      Founder
                    </span>
                  )}
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>

                  {/* Qualifications */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-700 mb-2">Qualifications:</h4>
                    <ul className="space-y-1">
                      {member.qualifications.map((qual, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          • {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* Join Our Team CTA */}
      <Section background="gray">
        <ScrollReveal width="100%">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Patient-Centered Care
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team is committed to treating every patient with dignity, respect, and compassion.
              We take the time to listen to your concerns and work with you to achieve the best
              possible health outcomes.
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
