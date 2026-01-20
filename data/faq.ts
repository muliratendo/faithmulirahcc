export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    category: "General",
    question: "What are your operating hours?",
    answer: "We are open 24/7. Emergency services are available at all times to provide the care you need.",
  },
  {
    id: "2",
    category: "General",
    question: "Where are you located?",
    answer: "We are located in Masooli, along Gayaza Road, near Kampala, Uganda. You can easily reach us from Kampala city center by taxi, boda boda, or private vehicle.",
  },
  {
    id: "3",
    category: "Services",
    question: "What services do you offer?",
    answer: "We offer General Outpatient Care, Reproductive Health Services, Maternity Services, Vaccination/Immunization, and Community Health Initiatives. As a Level III facility, we provide comprehensive primary healthcare services.",
  },
  {
    id: "4",
    category: "Services",
    question: "Do you offer maternity services?",
    answer: "Yes, we provide complete maternity care including antenatal care, delivery services, postnatal care, newborn care, and maternal health education.",
  },
  {
    id: "5",
    category: "Services",
    question: "Are vaccination services available?",
    answer: "Yes, we offer comprehensive immunization services for both children (following the EPI schedule) and adults. We also maintain immunization records and provide vaccination counseling.",
  },
  {
    id: "6",
    category: "Payment",
    question: "What payment methods do you accept?",
    answer: "We accept cash payments and mobile money (MTN Mobile Money and Airtel Money). Our goal is to provide affordable healthcare accessible to everyone in our community.",
  },
  {
    id: "7",
    category: "Payment",
    question: "How much do services cost?",
    answer: "Our fees are kept affordable to ensure accessible healthcare for the local community. Please contact us directly at +256 39 3224301 or visit our facility for specific pricing information on services.",
  },
  {
    id: "8",
    category: "Visits",
    question: "Do I need an appointment?",
    answer: "While we accept walk-in patients, we recommend calling ahead to ensure availability and reduce waiting time. You can reach us at +256 744176221.",
  },
  {
    id: "9",
    category: "Visits",
    question: "What should I bring for my visit?",
    answer: "Please bring any previous medical records, identification, current medications you're taking, and your immunization card (if applicable). For maternity services, bring your ANC card.",
  },
  {
    id: "10",
    category: "General",
    question: "Is this facility registered and licensed?",
    answer: "Yes, Faith Mulira Health Care Centre is a registered and licensed Level III health facility by Uganda's Ministry of Health. We adhere to all national health standards and regulations.",
  },
  {
    id: "11",
    category: "Services",
    question: "Do you provide emergency services?",
    answer: "Yes, we provide emergency medical services 24/7. For emergencies, please call +256 744176221 or visit our facility immediately. Our doors are open at all times.",
  },
  {
    id: "12",
    category: "General",
    question: "How can I contact you?",
    answer: "You can reach us by phone at +256 744176221, by email at info.faithmulirahcc@gmail.com, or via WhatsApp. You can also visit us in person at our facility on Masooli Road, Gayaza.",
  },
];

export const getFAQByCategory = (category: string) =>
  FAQ_ITEMS.filter((item) => item.category === category);

export const FAQ_CATEGORIES = Array.from(
  new Set(FAQ_ITEMS.map((item) => item.category))
);
