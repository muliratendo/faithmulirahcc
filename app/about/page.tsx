import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { MISSION, VISION, VALUES } from "@/lib/constants";
import { FaCheckCircle } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Faith Mulira Health Care Centre",
  description: "Learn about Faith Mulira Health Care Centre's mission, vision, and commitment to providing affordable, quality healthcare to the Masooli community since 2009.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="hero" className="pt-8">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">About Us</h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              Faith Mulira Health Care Centre has been serving the Gayaza and Masooli communities
              since 2009, providing affordable, quality healthcare with compassion and dignity.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Our Story */}
      <Section background="white">
        <ScrollReveal width="100%">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Faith Mulira Health Care Centre was founded in 2009 by <strong>Faith Mulira</strong>,
                  a visionary Ugandan healthcare advocate who recognized the critical
                  need for accessible medical services in the Masooli area.
                </p>
                <p className="leading-relaxed mb-4">
                  In 2009, New Vision recognized the establishment of our facility as a significant
                  development in community healthcare, highlighting our commitment to serving the local
                  population with professional medical care.
                </p>
                <p className="leading-relaxed">
                  Today, we stand as a registered <strong>Level III health facility</strong> by Uganda's
                  Ministry of Health, providing comprehensive healthcare services to thousands of patients
                  each year while maintaining our founding vision of affordability and quality.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Key Milestones
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <span><strong>2009:</strong> Founded by Faith Mulira</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <span><strong>2009:</strong> Recognition by New Vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Present:</strong> Registered Level III facility</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Founder Profile */}
      <Section background="gray">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto">
             <div className="bg-white rounded-lg shadow-xl overflow-hidden md:flex">
              <div className="md:w-1/3 bg-primary-100 flex items-center justify-center p-8">
                <Image
                  src="/faithmulira.jpg"
                  alt="Faith Mulira - Founder"
                  width={160}
                  height={160}
                  className="w-60 h-60 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <span className="inline-block bg-accent text-white text-sm px-3 py-1 rounded-full mb-3">
                  Founder
                </span>
                <h2 className="text-3xl font-heading font-bold text-primary mb-2">Faith Mulira</h2>
                <h4 className="text-lg text-gray-600 font-bold mb-4">Visionary Healthcare Advocate</h4>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Faith Mulira dedicated her life to improving the health and well-being of her community. 
                  Recognizing the lack of accessible healthcare in Masooli, she established this centre 
                  with a vision to provide dignified, affordable medical care to all. Her legacy lives on 
                  through the thousands of patients served annually.
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <h5 className="font-bold text-gray-900 mb-2">Bibliography & Recognition</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                     <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Featured in <em>New Vision</em> (2009) for contribution to community health.</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <span className="text-secondary">•</span>
                      <span>Community Leadership Award recipient.</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <span className="text-secondary">•</span>
                      <span>Pioneer in Masooli healthcare infrastructure.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Mission & Vision */}
      <Section background="primary">
        <ScrollReveal width="100%">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {MISSION}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {VISION}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Core Values */}
      <Section background="white">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-primary text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VALUES.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900">
                      {value}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Community Commitment */}
      <Section background="gray">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary mb-6">Our Commitment to the Community</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a central, affordable resource for local residents, we are deeply committed to the
              health and well-being of the Gayaza and Masooli communities. Our focus extends beyond
              treatment to include preventative care, health education, and community outreach
              programs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that quality healthcare should be accessible to everyone, regardless of
              their economic circumstances. This principle guides every decision we make and every
              service we provide.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Accreditation */}
      <Section background="primary">
        <ScrollReveal width="100%">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Licensed & Accredited
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Faith Mulira Health Care Centre is a <strong>registered and licensed Level III health
              facility</strong> by Uganda's Ministry of Health. We adhere to all national health
              standards and regulations, ensuring that our patients receive care that meets the
              highest professional and ethical standards.
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
