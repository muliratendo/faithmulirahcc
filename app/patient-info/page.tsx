import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/data/faq";
import { FaInfoCircle, FaDollarSign, FaClipboardList } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Patient Information | Faith Mulira Health Care Centre",
  description: "Important information for patients including what to bring, payment methods, frequently asked questions, and appointment procedures.",
};

export default function PatientInfoPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="hero" className="pt-8">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">Patient Information</h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              Everything you need to know before your visit to ensure a smooth, efficient
              healthcare experience.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Before Your Visit */}
      <Section background="white">
        <ScrollReveal width="100%">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* What to Bring */}
            <div className="bg-primary-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <FaClipboardList className="text-xl text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                What to Bring
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Valid identification (ID, Passport)</li>
                <li>• Previous medical records (if any)</li>
                <li>• Current medications list</li>
                <li>• Immunization card (for vaccinations)</li>
                <li>• ANC card (for maternity services)</li>
                <li>• Insurance information (if applicable)</li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div className="bg-secondary-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <FaDollarSign className="text-xl text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                Payment Methods
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cash (UGX)</li>
                <li>• MTN Mobile Money</li>
                <li>• Airtel Money</li>
                <li>• Affordable pricing</li>
                <li>• Transparent fee structure</li>
                <li>• No hidden charges</li>
              </ul>
            </div>

            {/* Appointment Info */}
            <div className="bg-accent-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <FaInfoCircle className="text-xl text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                Appointments
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Walk-ins welcome</li>
                <li>• Call ahead to reduce wait time</li>
                <li>• Phone: +256 744176221</li>
                <li>• Registration at reception</li>
                <li>• First-come, first-served basis</li>
                <li>• Emergency cases prioritized</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* FAQ Section */}
      <Section background="gray">
        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>

            {FAQ_CATEGORIES.map((category) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  {category}
                </h3>
                <div className="space-y-6">
                  {FAQ_ITEMS.filter((faq) => faq.category === category).map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h4 className="text-lg font-heading font-bold text-primary mb-3">
                        Q: {faq.question}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>A:</strong> {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* Patient Rights */}
      <Section background="primary">
        <ScrollReveal width="100%">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">
              Your Rights as a Patient
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Right to respectful, compassionate care
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Right to privacy and confidentiality
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Right to informed consent
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Right to refuse treatment
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Right to know your diagnosis and treatment plan
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Right to access your medical records
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Right to complain and have grievances addressed
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Right to affordable, quality healthcare
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Still Have Questions */}
      <Section background="white">
        <ScrollReveal width="100%">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We're here to help! Contact us and we'll be happy to answer any questions
              you may have about our services, procedures, or policies.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
