import { IconType } from "react-icons";
import { FaStethoscope, FaHeartbeat, FaBaby, FaSyringe, FaUsers, FaProcedures, FaXRay } from "react-icons/fa";

export interface Service {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  details: string[];
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "outpatient",
    title: "General Outpatient Care",
    icon: FaStethoscope,
    description: "Comprehensive consultation and treatment for common ailments and chronic conditions.",
    details: [
      "Consultation and diagnosis",
      "Treatment of common ailments",
      "Health screening and check-ups",
      "Chronic disease management",
      "Minor procedures",
    ],
    featured: true,
  },
  {
    id: "surgery",
    title: "Major & Minor Surgery",
    icon: FaProcedures,
    description: "Surgical procedures performed by qualified specialists in a sterile environment.",
    details: [
      "Minor surgical procedures",
      "Major surgeries (by appointment)",
      "Post-operative care",
      "Circumcision",
      "Wound care and suturing",
    ],
    featured: true,
  },
  {
    id: "radiology",
    title: "Radiology & Imaging",
    icon: FaXRay,
    description: "Diagnostic imaging services for accurate diagnosis and treatment planning.",
    details: [
      "CT scan services",
      "Ultrasound imaging",
      "Radiological reports",
      "Specialist consultations",
    ],
    featured: true,
  },
  {
    id: "reproductive-health",
    title: "Reproductive Health Services",
    icon: FaHeartbeat,
    description: "Comprehensive reproductive health care including family planning and counseling.",
    details: [
      "Family planning counseling",
      "Contraceptive services",
      "STI screening and treatment",
      "Reproductive health education",
      "Pre-conception counseling",
    ],
    featured: true,
  },
  {
    id: "maternity",
    title: "Maternity Services",
    icon: FaBaby,
    description: "Complete maternity care from pregnancy through delivery and postnatal support.",
    details: [
      "Antenatal care (ANC)",
      "Delivery services",
      "Postnatal care",
      "Newborn care",
      "Maternal health education",
    ],
    featured: true,
  },
  {
    id: "vaccination",
    title: "Vaccination/Immunization",
    icon: FaSyringe,
    description: "Comprehensive immunization services for children and adults following EPI schedules.",
    details: [
      "Childhood immunizations (EPI schedule)",
      "Adult vaccinations",
      "Immunization records and tracking",
      "Vaccination counseling",
    ],
    featured: true,
  },
  {
    id: "community-health",
    title: "Community Health Initiatives",
    icon: FaUsers,
    description: "Preventative care programs and health education for the local community.",
    details: [
      "Health education programs",
      "Outreach services",
      "Preventative care campaigns",
      "Community health worker support",
      "Health awareness activities",
    ],
    featured: false,
  },
];

export const getFeaturedServices = () => SERVICES.filter((s) => s.featured);

export const getServiceById = (id: string) => SERVICES.find((s) => s.id === id);
