import Section from "@/components/ui/Section";
import { CONTACT_INFO } from "@/lib/constants";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LocationPreview() {
  return (
    <Section id="visit-us" background="white">
      <ScrollReveal width="100%">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map/Image Side */}
          <div className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
            <iframe
              title="Faith Mulira Health Care Centre Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7155663765175!2d32.58865587494297!3d0.4192422730373929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db1f67755417b%3A0x205c8f9e371914e!2sFaith%20Mulira%20Health%20Care%20Centre%2C%20Masooli!5e1!3m2!1sen!2sug!4v1716300000000!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-primary font-heading mb-4">Visit Us</h2>
            <p className="text-lg text-gray-700">
              Conveniently located in Masooli along the Gayaza Road. We are visibly signposted and
              easy to access for all community members.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600">{CONTACT_INFO.address.full}</p>
                  <p className="text-sm text-primary font-medium mt-1">
                    Plus Code: {CONTACT_INFO.address.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <FaClock className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Operating Hours</h3>
                  <p className="text-gray-600">Open 24/7 for all services</p>
                  <p className="text-sm text-red-600 font-bold mt-1">
                    Emergency Care Available 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <FaPhone className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Contact</h3>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                  <p className="text-gray-600">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT_INFO.address.googleMapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="primary" className="w-full justify-center">
                  Get Directions
                </Button>
              </a>
              <Link href="/contact" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full justify-center hover:bg-gray-50 bg-white"
                >
                  Contact Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
