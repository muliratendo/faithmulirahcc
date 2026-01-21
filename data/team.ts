export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  category: "medical" | "support";
}

export const TEAM_MEMBERS: TeamMember[] = [
  // Medical Staff
  {
    id: "antonius-ferret",
    name: "Antonius Ferret",
    role: "Doctor",
    image: "/images/team/antonius-ferret-doctor.webp",
    category: "medical",
  },
  {
    id: "usman-yousaf",
    name: "Usman Yousaf",
    role: "Doctor",
    image: "/images/team/usman-yousaf-doctor.webp",
    category: "medical",
  },
  {
    id: "dawid-tkocz",
    name: "Dawid Tkocz",
    role: "Radiologist",
    image: "/images/team/dawid-tkocz-radiologist.webp",
    category: "medical",
  },
  {
    id: "ekaterina-cotton",
    name: "Ekaterina Cotton",
    role: "Radiologist",
    image: "/images/team/ekaterina-cotton-radiologist.webp",
    category: "medical",
  },
  {
    id: "bruno-rodrigues",
    name: "Bruno Rodrigues",
    role: "Nurse",
    image: "/images/team/bruno-rodrigues-nurse.webp",
    category: "medical",
  },
  {
    id: "ocho-artex",
    name: "Ocho Artex",
    role: "Nurse",
    image: "/images/team/ocho-artex-nurse.webp",
    category: "medical",
  },
  {
    id: "artur-tumasjan",
    name: "Artur Tumasjan",
    role: "Surgery Room Nurse",
    image: "/images/team/artur-tumasjan-sugeryroomnurse.webp",
    category: "medical",
  },
  {
    id: "ani-kolleshi",
    name: "Ani Kolleshi",
    role: "Lab Specialist",
    image: "/images/team/ani-kolleshi-Lab-Specialist.webp",
    category: "medical",
  },
  {
    id: "sandro-tavares",
    name: "Sandro Tavares",
    role: "Pharmacist",
    image: "/images/team/sandro-tavares-pharmacist.webp",
    category: "medical",
  },
  // Support Staff
  {
    id: "cherry-fauntleroy",
    name: "Cherry Fauntleroy",
    role: "Receptionist",
    image: "/images/team/cherry-fauntleroy-receptionist.webp",
    category: "support",
  },
  {
    id: "sora-shimazaki",
    name: "Sora Shimazaki",
    role: "Secretary",
    image: "/images/team/sora-shimazaki-secretary.webp",
    category: "support",
  },
];

export const getMedicalStaff = () => TEAM_MEMBERS.filter((m) => m.category === "medical");
export const getSupportStaff = () => TEAM_MEMBERS.filter((m) => m.category === "support");
