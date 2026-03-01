// data/universityDetails.ts
// Extended data for individual university profile pages.
// The base University type lives in universities.ts.
// This file adds programs, merit history, deadlines, and facilities.
//
// HOW TO EXPAND:
// - Add more programs to the programs array for any university
// - Add more years to meritHistory for richer charts
// - When switching to API: replace getUniversityDetails() with a fetch call
//   e.g. const data = await fetch(`/api/universities/${slug}`)
//        return data.json()

export type Program = {
  id: number;
  name: string;
  degree: "BS" | "BE" | "BBA" | "MBBS" | "BCS" | "BSc" | "BA" | "BCom";
  department: string;
  duration: number; // years
  seats: number;
  closingMerit: number | null; // last year closing merit %
  annualFee: number; // PKR
  acceptsFsc: boolean;
  acceptsALevels: boolean;
  acceptsDAE: boolean;
  entryTest: string | null; // e.g. "NET", "MDCAT", "ECAT"
};

export type MeritHistory = {
  year: number;
  cs: number | null;
  engineering: number | null;
  medical: number | null;
  business: number | null;
};

export type Deadline = {
  id: number;
  title: string;
  date: string; // ISO date string
  type: "application" | "test" | "result" | "fee" | "other";
  description: string;
  isPast: boolean;
};

export type Facility = {
  icon: string;
  label: string;
};

export type UniversityDetails = {
  slug: string;
  programs: Program[];
  meritHistory: MeritHistory[];
  deadlines: Deadline[];
  facilities: Facility[];
  campuses: string[];
  notableAlumni: string[];
  scholarships: string[];
  contactEmail: string;
  contactPhone: string;
  address: string;
};

// ─── DETAIL DATA ──────────────────────────────────────────────
const details: UniversityDetails[] = [
  {
    slug: "nust",
    campuses: ["H-12 Islamabad (Main)", "PNEC Karachi", "MCS Rawalpindi", "NUST Business School"],
    contactEmail: "admissions@nust.edu.pk",
    contactPhone: "+92-51-9085-1234",
    address: "Sector H-12, Islamabad, Pakistan",
    notableAlumni: ["Various top engineers and scientists"],
    scholarships: ["Need-based financial aid", "Merit scholarships", "Sports scholarships", "NUST Excellence Award"],
    facilities: [
      { icon: "🏠", label: "Hostel" },
      { icon: "📚", label: "Library" },
      { icon: "🔬", label: "Research Labs" },
      { icon: "🏃", label: "Sports Complex" },
      { icon: "🍽️", label: "Cafeteria" },
      { icon: "🚌", label: "Transport" },
      { icon: "🏥", label: "Medical Center" },
      { icon: "💻", label: "Computer Labs" },
    ],
    meritHistory: [
      { year: 2022, cs: 88.4, engineering: 86.9, medical: null, business: 85.2 },
      { year: 2023, cs: 89.7, engineering: 88.1, medical: null, business: 86.8 },
      { year: 2024, cs: 90.5, engineering: 88.9, medical: null, business: 87.5 },
      { year: 2025, cs: 91.2, engineering: 89.5, medical: null, business: 88.0 },
    ],
    deadlines: [
      { id: 1, title: "NET Registration Opens", date: "2025-06-01", type: "test", description: "Online registration for NUST Entry Test begins", isPast: true },
      { id: 2, title: "NET-1 Test Date", date: "2025-06-28", type: "test", description: "First sitting of NUST Entry Test", isPast: true },
      { id: 3, title: "NET-2 Test Date", date: "2025-07-19", type: "test", description: "Second sitting of NUST Entry Test", isPast: true },
      { id: 4, title: "Online Application Deadline", date: "2025-08-10", type: "application", description: "Last date to submit online application form", isPast: false },
      { id: 5, title: "1st Merit List", date: "2025-08-20", type: "result", description: "First merit list announcement", isPast: false },
      { id: 6, title: "Fee Submission Deadline", date: "2025-08-27", type: "fee", description: "Last date to submit fee for confirmed seats", isPast: false },
      { id: 7, title: "2nd Merit List", date: "2025-09-03", type: "result", description: "Second merit list for remaining seats", isPast: false },
    ],
    programs: [
      { id: 1, name: "Computer Science", degree: "BS", department: "School of Electrical Engineering & Computer Science", duration: 4, seats: 200, closingMerit: 91.2, annualFee: 220000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "NET" },
      { id: 2, name: "Software Engineering", degree: "BS", department: "School of Electrical Engineering & Computer Science", duration: 4, seats: 100, closingMerit: 90.8, annualFee: 220000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "NET" },
      { id: 3, name: "Electrical Engineering", degree: "BE", department: "School of Electrical Engineering & Computer Science", duration: 4, seats: 150, closingMerit: 89.5, annualFee: 240000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: true, entryTest: "NET" },
      { id: 4, name: "Mechanical Engineering", degree: "BE", department: "School of Mechanical & Manufacturing Engineering", duration: 4, seats: 120, closingMerit: 88.7, annualFee: 240000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: true, entryTest: "NET" },
      { id: 5, name: "Civil Engineering", degree: "BE", department: "School of Civil & Environmental Engineering", duration: 4, seats: 100, closingMerit: 87.9, annualFee: 230000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: true, entryTest: "NET" },
      { id: 6, name: "Business Administration", degree: "BBA", department: "NUST Business School", duration: 4, seats: 80, closingMerit: 88.0, annualFee: 420000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "NET" },
      { id: 7, name: "Artificial Intelligence", degree: "BS", department: "School of Electrical Engineering & Computer Science", duration: 4, seats: 60, closingMerit: 91.8, annualFee: 220000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "NET" },
    ],
  },
  {
    slug: "lums",
    campuses: ["DHA Lahore (Main Campus)"],
    contactEmail: "admission@lums.edu.pk",
    contactPhone: "+92-42-3560-8000",
    address: "DHA, Lahore Cantt, Lahore 54792, Pakistan",
    notableAlumni: ["Prominent business leaders and entrepreneurs"],
    scholarships: ["National Outreach Programme (NOP)", "Merit scholarships", "Need-based grants", "Sports scholarships"],
    facilities: [
      { icon: "🏠", label: "Hostel" },
      { icon: "📚", label: "Library" },
      { icon: "🔬", label: "Research Labs" },
      { icon: "🏃", label: "Sports Facilities" },
      { icon: "🍽️", label: "Dining" },
      { icon: "🎭", label: "Auditorium" },
      { icon: "🏥", label: "Health Center" },
      { icon: "💻", label: "Computer Labs" },
    ],
    meritHistory: [
      { year: 2022, cs: 85.2, engineering: null, medical: null, business: 83.1 },
      { year: 2023, cs: 86.8, engineering: null, medical: null, business: 84.5 },
      { year: 2024, cs: 87.4, engineering: null, medical: null, business: 85.3 },
      { year: 2025, cs: 88.5, engineering: null, medical: null, business: 86.2 },
    ],
    deadlines: [
      { id: 1, title: "Application Portal Opens", date: "2025-07-01", type: "application", description: "Online applications open for Fall 2025", isPast: true },
      { id: 2, title: "Application Deadline", date: "2025-08-15", type: "application", description: "Last date to submit complete application", isPast: false },
      { id: 3, title: "SAT/LCAT Test Window", date: "2025-08-20", type: "test", description: "LUMS Common Admission Test window opens", isPast: false },
      { id: 4, title: "Merit List Announcement", date: "2025-09-10", type: "result", description: "First merit list released", isPast: false },
      { id: 5, title: "Fee Submission", date: "2025-09-18", type: "fee", description: "Deadline to pay admission fee", isPast: false },
    ],
    programs: [
      { id: 1, name: "Computer Science", degree: "BS", department: "Syed Babar Ali School of Science & Engineering", duration: 4, seats: 60, closingMerit: 88.5, annualFee: 1050000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "SAT/LCAT" },
      { id: 2, name: "Business Administration", degree: "BBA", department: "Suleman Dawood School of Business", duration: 4, seats: 100, closingMerit: 86.2, annualFee: 1200000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "SAT/LCAT" },
      { id: 3, name: "Economics", degree: "BSc", department: "Mushtaq Ahmad Gurmani School of Humanities & Social Sciences", duration: 4, seats: 50, closingMerit: 85.5, annualFee: 950000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "SAT/LCAT" },
      { id: 4, name: "Law (LLB)", degree: "BA", department: "Shaikh Ahmad Hassan School of Law", duration: 5, seats: 40, closingMerit: 84.8, annualFee: 1100000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "SAT/LCAT" },
      { id: 5, name: "Mathematics", degree: "BSc", department: "Syed Babar Ali School of Science & Engineering", duration: 4, seats: 30, closingMerit: 87.0, annualFee: 950000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "SAT/LCAT" },
    ],
  },
  {
    slug: "fast-nuces",
    campuses: ["Lahore", "Islamabad", "Karachi", "Peshawar", "Chiniot-Faisalabad"],
    contactEmail: "admission@nu.edu.pk",
    contactPhone: "+92-42-111-128-128",
    address: "A.K. Brohi Road, H-11/4, Islamabad",
    notableAlumni: ["Leading software engineers and tech entrepreneurs"],
    scholarships: ["Merit scholarships", "Need-based aid", "HEC scholarships", "Alumni scholarships"],
    facilities: [
      { icon: "💻", label: "Computer Labs" },
      { icon: "📚", label: "Library" },
      { icon: "🔬", label: "Research Labs" },
      { icon: "🍽️", label: "Cafeteria" },
      { icon: "🏃", label: "Sports Area" },
    ],
    meritHistory: [
      { year: 2022, cs: 82.1, engineering: 79.8, medical: null, business: null },
      { year: 2023, cs: 83.5, engineering: 81.2, medical: null, business: null },
      { year: 2024, cs: 84.6, engineering: 82.5, medical: null, business: null },
      { year: 2025, cs: 85.4, engineering: 83.2, medical: null, business: null },
    ],
    deadlines: [
      { id: 1, title: "NU Entry Test Registration", date: "2025-06-15", type: "test", description: "Register for FAST's own entry test", isPast: true },
      { id: 2, title: "Entry Test Date", date: "2025-07-13", type: "test", description: "FAST Entry Test conducted nationwide", isPast: true },
      { id: 3, title: "Application Deadline", date: "2025-07-28", type: "application", description: "Last date for online applications", isPast: true },
      { id: 4, title: "Merit List", date: "2025-08-08", type: "result", description: "Merit list announcement on website", isPast: false },
      { id: 5, title: "Fee Submission", date: "2025-08-15", type: "fee", description: "Fee deadline for admitted students", isPast: false },
    ],
    programs: [
      { id: 1, name: "Computer Science", degree: "BS", department: "Department of Computer Science", duration: 4, seats: 300, closingMerit: 85.4, annualFee: 280000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "NU Entry Test" },
      { id: 2, name: "Software Engineering", degree: "BS", department: "Department of Computer Science", duration: 4, seats: 120, closingMerit: 84.8, annualFee: 280000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "NU Entry Test" },
      { id: 3, name: "Electrical Engineering", degree: "BE", department: "Department of Electrical Engineering", duration: 4, seats: 100, closingMerit: 83.2, annualFee: 300000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: true, entryTest: "NU Entry Test" },
      { id: 4, name: "Artificial Intelligence", degree: "BS", department: "Department of Computer Science", duration: 4, seats: 60, closingMerit: 86.1, annualFee: 280000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "NU Entry Test" },
      { id: 5, name: "Data Science", degree: "BS", department: "Department of Computer Science", duration: 4, seats: 60, closingMerit: 84.2, annualFee: 280000, acceptsFsc: true, acceptsALevels: true, acceptsDAE: false, entryTest: "NU Entry Test" },
    ],
  },
];

// ─── DATA ACCESS FUNCTIONS ─────────────────────────────────────
// These are the functions your page calls.
// When switching to API: replace the body of getUniversityDetails()
// with a fetch/axios call to your Django endpoint.
// The return type stays the same — your page component won't need changes.

export function getUniversityDetails(slug: string): UniversityDetails | null {
  // TODO (API migration): Replace with:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/universities/${slug}/details/`)
  // if (!res.ok) return null
  // return res.json()
  return details.find((d) => d.slug === slug) ?? null;
}

export function formatDeadlineDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getDaysUntil(dateStr: string): number {
  const today = new Date();
  const target = new Date(dateStr);
  const diff = target.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function formatPKR(amount: number): string {
  if (amount === 0) return "Free";
  if (amount >= 100000) return `PKR ${(amount / 100000).toFixed(1)}L`;
  return `PKR ${(amount / 1000).toFixed(0)}K`;
}
