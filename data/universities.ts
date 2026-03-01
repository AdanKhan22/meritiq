
// Mock data — replace with real API calls when Django backend is ready

export type University = {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  city: string;
  province: string;
  type: "public" | "private";
  sector: string;
  established: number;
  logo: string; // emoji placeholder until real logos are added
  description: string;
  programs: number;
  students: number;
  ranking: number | null;
  featured: boolean;
  admissionOpen: boolean;
  lastMeritUpdate: string;
  tags: string[];
  closingMerit: {
    cs: number | null;
    engineering: number | null;
    medical: number | null;
    business: number | null;
  };
  annualFee: {
    min: number;
    max: number;
  };
  hasHostel: boolean;
  acceptsALevels: boolean;
  website: string;
  applyUrl: string;
};

export const universities: University[] = [
  {
    id: 1,
    slug: "nust",
    name: "National University of Sciences & Technology",
    shortName: "NUST",
    city: "Islamabad",
    province: "Federal",
    type: "public",
    sector: "Engineering & Technology",
    established: 1991,
    logo: "🏛️",
    description:
      "Pakistan's top-ranked engineering and technology university, home to 9 schools and colleges across multiple campuses.",
    programs: 120,
    students: 18000,
    ranking: 1,
    featured: true,
    admissionOpen: true,
    lastMeritUpdate: "2025-08-12",
    tags: ["Engineering", "CS", "Business", "Sciences"],
    closingMerit: { cs: 91.2, engineering: 89.5, medical: null, business: 88.0 },
    annualFee: { min: 180000, max: 420000 },
    hasHostel: true,
    acceptsALevels: true,
    website: "https://nust.edu.pk",
    applyUrl: "https://ugadmissions.nust.edu.pk",
  },
  {
    id: 2,
    slug: "lums",
    name: "Lahore University of Management Sciences",
    shortName: "LUMS",
    city: "Lahore",
    province: "Punjab",
    type: "private",
    sector: "Business & Social Sciences",
    established: 1984,
    logo: "🎓",
    description:
      "Pakistan's premier private university known for business, law, and social sciences. One of Asia's top universities.",
    programs: 45,
    students: 5500,
    ranking: 2,
    featured: true,
    admissionOpen: true,
    lastMeritUpdate: "2025-08-10",
    tags: ["Business", "Law", "CS", "Social Sciences"],
    closingMerit: { cs: 88.5, engineering: null, medical: null, business: 86.2 },
    annualFee: { min: 850000, max: 1200000 },
    hasHostel: true,
    acceptsALevels: true,
    website: "https://lums.edu.pk",
    applyUrl: "https://admission.lums.edu.pk",
  },
  {
    id: 3,
    slug: "fast-nuces",
    name: "FAST National University of Computer & Emerging Sciences",
    shortName: "FAST",
    city: "Lahore",
    province: "Punjab",
    type: "private",
    sector: "Computer Sciences",
    established: 2000,
    logo: "💻",
    description:
      "Pakistan's leading CS-focused university with campuses in 5 major cities. Known for producing top software engineers.",
    programs: 32,
    students: 12000,
    ranking: 3,
    featured: true,
    admissionOpen: false,
    lastMeritUpdate: "2025-07-28",
    tags: ["CS", "Engineering", "AI", "Data Science"],
    closingMerit: { cs: 85.4, engineering: 83.2, medical: null, business: null },
    annualFee: { min: 220000, max: 380000 },
    hasHostel: false,
    acceptsALevels: true,
    website: "https://nu.edu.pk",
    applyUrl: "https://admission.nu.edu.pk",
  },
  {
    id: 4,
    slug: "uet-lahore",
    name: "University of Engineering & Technology",
    shortName: "UET Lahore",
    city: "Lahore",
    province: "Punjab",
    type: "public",
    sector: "Engineering",
    established: 1921,
    logo: "⚙️",
    description:
      "One of Pakistan's oldest and most respected engineering universities. Consistently producing top civil, mechanical and electrical engineers.",
    programs: 48,
    students: 14000,
    ranking: 4,
    featured: true,
    admissionOpen: true,
    lastMeritUpdate: "2025-08-14",
    tags: ["Engineering", "Architecture", "Sciences"],
    closingMerit: { cs: 87.1, engineering: 86.3, medical: null, business: null },
    annualFee: { min: 45000, max: 120000 },
    hasHostel: true,
    acceptsALevels: false,
    website: "https://uet.edu.pk",
    applyUrl: "https://admission.uet.edu.pk",
  },
  {
    id: 5,
    slug: "iba-karachi",
    name: "Institute of Business Administration",
    shortName: "IBA Karachi",
    city: "Karachi",
    province: "Sindh",
    type: "public",
    sector: "Business & Management",
    established: 1955,
    logo: "📊",
    description:
      "Pakistan's oldest business school and one of the most selective universities. Known for producing top business leaders and entrepreneurs.",
    programs: 22,
    students: 4200,
    ranking: 5,
    featured: true,
    admissionOpen: true,
    lastMeritUpdate: "2025-08-09",
    tags: ["Business", "CS", "Economics", "Finance"],
    closingMerit: { cs: 84.8, engineering: null, medical: null, business: 83.5 },
    annualFee: { min: 120000, max: 280000 },
    hasHostel: true,
    acceptsALevels: true,
    website: "https://iba.edu.pk",
    applyUrl: "https://admission.iba.edu.pk",
  },
  {
    id: 6,
    slug: "comsats",
    name: "COMSATS University Islamabad",
    shortName: "COMSATS",
    city: "Islamabad",
    province: "Federal",
    type: "public",
    sector: "Sciences & Technology",
    established: 1998,
    logo: "🔬",
    description:
      "A multi-campus public university with strong programs in computer science, engineering, and natural sciences across Pakistan.",
    programs: 95,
    students: 35000,
    ranking: 6,
    featured: false,
    admissionOpen: true,
    lastMeritUpdate: "2025-08-11",
    tags: ["CS", "Engineering", "Sciences", "Business"],
    closingMerit: { cs: 78.2, engineering: 76.5, medical: null, business: 75.0 },
    annualFee: { min: 85000, max: 180000 },
    hasHostel: true,
    acceptsALevels: true,
    website: "https://comsats.edu.pk",
    applyUrl: "https://admission.comsats.edu.pk",
  },
  {
    id: 7,
    slug: "bahria-university",
    name: "Bahria University",
    shortName: "Bahria",
    city: "Islamabad",
    province: "Federal",
    type: "private",
    sector: "Multi-Disciplinary",
    established: 2000,
    logo: "⚓",
    description:
      "A well-established private university with campuses in Islamabad, Karachi, and Lahore offering diverse undergraduate and graduate programs.",
    programs: 68,
    students: 22000,
    ranking: 7,
    featured: false,
    admissionOpen: true,
    lastMeritUpdate: "2025-08-08",
    tags: ["Engineering", "CS", "Business", "Medicine"],
    closingMerit: { cs: 72.5, engineering: 71.0, medical: 82.0, business: 70.5 },
    annualFee: { min: 180000, max: 380000 },
    hasHostel: true,
    acceptsALevels: true,
    website: "https://bahria.edu.pk",
    applyUrl: "https://admission.bahria.edu.pk",
  },
  {
    id: 8,
    slug: "gcu-lahore",
    name: "Government College University",
    shortName: "GCU Lahore",
    city: "Lahore",
    province: "Punjab",
    type: "public",
    sector: "Arts & Sciences",
    established: 1864,
    logo: "🏫",
    description:
      "One of Pakistan's oldest and most historic universities, known for its strong humanities, sciences, and liberal arts programs.",
    programs: 55,
    students: 11000,
    ranking: 8,
    featured: false,
    admissionOpen: false,
    lastMeritUpdate: "2025-07-20",
    tags: ["Sciences", "Arts", "Commerce", "Languages"],
    closingMerit: { cs: 80.1, engineering: null, medical: null, business: 78.4 },
    annualFee: { min: 25000, max: 75000 },
    hasHostel: true,
    acceptsALevels: false,
    website: "https://gcu.edu.pk",
    applyUrl: "https://admission.gcu.edu.pk",
  },
  {
    id: 9,
    slug: "itu",
    name: "Information Technology University",
    shortName: "ITU",
    city: "Lahore",
    province: "Punjab",
    type: "public",
    sector: "Computer Sciences",
    established: 2012,
    logo: "🖥️",
    description:
      "Punjab's dedicated IT university focused exclusively on technology, data science, and innovation. Small cohorts, high quality.",
    programs: 15,
    students: 2800,
    ranking: 9,
    featured: false,
    admissionOpen: true,
    lastMeritUpdate: "2025-08-05",
    tags: ["CS", "Data Science", "AI", "Cybersecurity"],
    closingMerit: { cs: 83.6, engineering: null, medical: null, business: null },
    annualFee: { min: 95000, max: 160000 },
    hasHostel: false,
    acceptsALevels: true,
    website: "https://itu.edu.pk",
    applyUrl: "https://admission.itu.edu.pk",
  },
  {
    id: 10,
    slug: "pieas",
    name: "Pakistan Institute of Engineering & Applied Sciences",
    shortName: "PIEAS",
    city: "Islamabad",
    province: "Federal",
    type: "public",
    sector: "Engineering & Sciences",
    established: 1967,
    logo: "⚛️",
    description:
      "Pakistan's most selective engineering university with near-100% job placement. Fully funded education for all admitted students.",
    programs: 18,
    students: 1200,
    ranking: 10,
    featured: true,
    admissionOpen: false,
    lastMeritUpdate: "2025-07-15",
    tags: ["Engineering", "Nuclear", "Sciences", "Fully Funded"],
    closingMerit: { cs: null, engineering: 92.4, medical: null, business: null },
    annualFee: { min: 0, max: 0 },
    hasHostel: true,
    acceptsALevels: false,
    website: "https://pieas.edu.pk",
    applyUrl: "https://admission.pieas.edu.pk",
  },
];

// Helper to get unique cities from data
export const cities = [...new Set(universities.map((u) => u.city))].sort();

// Helper to get unique tags
export const allTags = [...new Set(universities.flatMap((u) => u.tags))].sort();

export const formatFee = (min: number, max: number): string => {
  if (min === 0 && max === 0) return "Fully Funded";
  const fmt = (n: number) =>
    n >= 100000 ? `${(n / 100000).toFixed(0)}L` : `${(n / 1000).toFixed(0)}K`;
  return `PKR ${fmt(min)} – ${fmt(max)}/yr`;
};