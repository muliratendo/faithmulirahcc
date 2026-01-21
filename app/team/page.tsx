import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getMedicalStaff, getSupportStaff } from "@/data/team";

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

      {/* Leadership */}
      <Section background="white">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-primary text-center mb-12">Leadership</h2>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg shadow-xl overflow-hidden md:flex">
              <div className="md:w-1/3 flex items-center justify-center p-8">
                <Image
                  src="/images/team/tendomulira.webp"
                  alt="Dr. Mulira Tendo - Chief Medical Doctor"
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-3">
                  Chief Medical Doctor
                </span>
                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">Dr. Mulira Tendo</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Mulira Tendo leads our medical team with dedication and expertise, 
                  ensuring the highest standards of patient care across all departments.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Medical Staff */}
      <Section background="gray">
        <ScrollReveal width="100%">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-primary text-center mb-12">Medical Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {getMedicalStaff().map((member) => (
                <div key={member.id} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                  />
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Support Staff */}
      <Section background="white">
        <ScrollReveal width="100%">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-primary text-center mb-12">Support Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getSupportStaff().map((member) => (
                <div key={member.id} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                  />
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-secondary font-medium">{member.role}</p>
                </div>
              ))}
            </div>
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
