export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string[];
  bio: string;
  image: string;
  isFounder?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "faith-mulira",
    name: "Faith Mulira",
    role: "Founder",
    qualifications: ["Healthcare Visionary", "Community Leader"],
    bio: "Faith Mulira founded this health centre with a vision to provide affordable, quality healthcare to the Gayaza community. Based in the US, Faith recognized the need for accessible medical services in the area and established this Level III facility to serve the local population.",
    image: "/images/team/faith-mulira.jpg",
    isFounder: true,
  },
  {
    id: "medical-officer",
    name: "Dr. [Name To Be Updated]",
    role: "Medical Officer",
    qualifications: ["MBChB", "Level III Health Centre Certification"],
    bio: "Our dedicated Medical Officer brings years of experience in community healthcare, committed to providing compassionate and comprehensive medical services to all patients.",
    image: "/images/team/medical-officer.jpg",
  },
  {
    id: "nurse-midwife",
    name: "[Name To Be Updated]",
    role: "Senior Nurse/Midwife",
    qualifications: ["Registered Nurse", "Certified Midwife"],
    bio: "With extensive experience in maternal and child health, our Senior Nurse provides expert care for expectant mothers and newborns, ensuring safe deliveries and healthy outcomes.",
    image: "/images/team/nurse.jpg",
  },
  {
    id: "clinical-officer",
    name: "[Name To Be Updated]",
    role: "Clinical Officer",
    qualifications: ["Diploma in Clinical Medicine"],
    bio: "Our Clinical Officer provides primary healthcare services, health education, and preventative care to patients of all ages in our community.",
    image: "/images/team/clinical-officer.jpg",
  },
];
