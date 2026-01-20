import Section from "@/components/ui/Section";
import { FaAward, FaDollarSign, FaHeart, FaShieldAlt } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: FaAward,
    title: "Level III Accreditation",
    description:
      "Registered and licensed by Uganda's Ministry of Health, ensuring quality standards and professional care.",
  },
  {
    icon: FaDollarSign,
    title: "Affordable Care",
    description:
      "Committed to making quality healthcare accessible to everyone in our community with transparent, affordable pricing.",
  },
  {
    icon: FaHeart,
    title: "Community-Centered",
    description:
      "Proudly serving the Gayaza and Masooli communities since 2009 with compassionate, patient-centered care.",
  },
  {
    icon: FaShieldAlt,
    title: "Comprehensive Services",
    description:
      "From preventative care to maternity services, we provide holistic healthcare for the entire family.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" background="gradient">
      <ScrollReveal width="100%">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-primary font-heading mb-4">Why Choose Us</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            More than just a health facility, we are your partners in health and well-being.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={index} width="100%" delay={index * 0.1}>
              <div
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="text-2xl text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mission Statement */}
        <ScrollReveal width="100%" delay={0.4}>
          <div className="mt-12 bg-primary text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-primary-50 leading-relaxed">
              To provide affordable, quality healthcare to the local community, with a focus on
              holistic well-being. We believe everyone deserves access to professional medical
              care delivered with compassion and respect.
            </p>
          </div>
        </ScrollReveal>
      </ScrollReveal>
    </Section>
  );
}
