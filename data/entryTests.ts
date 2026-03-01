// data/entryTests.ts
// All major Pakistani university entry tests in one place.
// TO MIGRATE TO API: replace getEntryTests() with a fetch call.

export type TestStatus = "registration-open" | "registration-closed" | "upcoming" | "completed";

export type SyllabusSection = {
  subject: string;
  topics: string[];
  weightage: number; // percentage
};

export type EntryTest = {
  id: number;
  slug: string;
  name: string;
  fullName: string;
  conductedBy: string;
  category: "engineering" | "medical" | "cs" | "business" | "general";
  accent: string;
  icon: string;
  description: string;
  frequency: string; // "Annual" | "Twice a year" etc
  duration: number; // minutes
  totalMarks: number;
  passingMarks: number | null;
  negativeMarking: boolean;
  mediumOfInstruction: string;
  status: TestStatus;
  year: number;
  // Dates
  registrationStart: string | null;
  registrationEnd: string | null;
  testDate: string | null;
  resultDate: string | null;
  // Links
  officialWebsite: string;
  registrationUrl: string;
  syllabusUrl: string | null;
  samplePaperUrl: string | null;
  // Accepting universities
  acceptedBy: {
    slug: string;
    name: string;
    logo: string;
  }[];
  // Syllabus
  syllabus: SyllabusSection[];
  // Tips
  preparationTips: string[];
};

export const entryTests: EntryTest[] = [
  {
    id: 1,
    slug: "mdcat",
    name: "MDCAT",
    fullName: "Medical & Dental College Admission Test",
    conductedBy: "Pakistan Medical Commission (PMC)",
    category: "medical",
    accent: "#F43F5E",
    icon: "🏥",
    description:
      "The mandatory entry test for admission to all public and private medical and dental colleges in Pakistan. Required for MBBS and BDS programs nationwide.",
    frequency: "Annual",
    duration: 210,
    totalMarks: 200,
    passingMarks: 65,
    negativeMarking: true,
    mediumOfInstruction: "English",
    status: "registration-open",
    year: 2025,
    registrationStart: "2025-07-01",
    registrationEnd: "2025-07-31",
    testDate: "2025-09-14",
    resultDate: "2025-10-01",
    officialWebsite: "https://www.pmc.gov.pk",
    registrationUrl: "https://www.pmc.gov.pk/mdcat",
    syllabusUrl: "https://www.pmc.gov.pk/mdcat-syllabus",
    samplePaperUrl: "https://www.pmc.gov.pk/mdcat-sample",
    acceptedBy: [
      { slug: "bahria-university", name: "Bahria University", logo: "⚓" },
    ],
    syllabus: [
      { subject: "Biology", topics: ["Cell Biology", "Genetics", "Physiology", "Ecology", "Biochemistry"], weightage: 40 },
      { subject: "Chemistry", topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Biochemistry"], weightage: 30 },
      { subject: "Physics", topics: ["Mechanics", "Waves", "Thermodynamics", "Optics", "Modern Physics"], weightage: 20 },
      { subject: "English", topics: ["Comprehension", "Vocabulary", "Grammar", "Sentence Correction"], weightage: 10 },
    ],
    preparationTips: [
      "Focus heavily on Biology — it carries 40% weightage",
      "PMC releases official past papers — solve all of them",
      "MDCAT has negative marking — avoid random guessing",
      "Register early as seats in test centers fill up fast",
    ],
  },
  {
    id: 2,
    slug: "ecat",
    name: "ECAT",
    fullName: "Engineering College Admission Test",
    conductedBy: "University of Engineering & Technology (UET)",
    category: "engineering",
    accent: "#F59E0B",
    icon: "⚙️",
    description:
      "Conducted by UET Lahore, ECAT is required for admission to engineering programs at UET and many other public engineering universities in Punjab.",
    frequency: "Annual",
    duration: 120,
    totalMarks: 400,
    passingMarks: null,
    negativeMarking: false,
    mediumOfInstruction: "English",
    status: "upcoming",
    year: 2025,
    registrationStart: "2025-06-15",
    registrationEnd: "2025-07-15",
    testDate: "2025-08-03",
    resultDate: "2025-08-10",
    officialWebsite: "https://admission.uet.edu.pk",
    registrationUrl: "https://admission.uet.edu.pk/ecat",
    syllabusUrl: null,
    samplePaperUrl: null,
    acceptedBy: [
      { slug: "uet-lahore", name: "UET Lahore", logo: "⚙️" },
      { slug: "gcu-lahore", name: "GCU Lahore", logo: "🏫" },
    ],
    syllabus: [
      { subject: "Mathematics", topics: ["Calculus", "Algebra", "Trigonometry", "Coordinate Geometry", "Statistics"], weightage: 40 },
      { subject: "Physics", topics: ["Mechanics", "Electricity", "Magnetism", "Waves", "Modern Physics"], weightage: 30 },
      { subject: "Chemistry", topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"], weightage: 20 },
      { subject: "English", topics: ["Grammar", "Comprehension", "Vocabulary"], weightage: 10 },
    ],
    preparationTips: [
      "ECAT has no negative marking — attempt all questions",
      "Mathematics carries the highest weightage, master it first",
      "UET past papers are the best preparation resource",
      "Time management is critical — 120 minutes for 100 questions",
    ],
  },
  {
    id: 3,
    slug: "net",
    name: "NET",
    fullName: "NUST Entry Test",
    conductedBy: "National University of Sciences & Technology",
    category: "engineering",
    accent: "#34D399",
    icon: "🏛️",
    description:
      "NUST's own highly competitive entry test conducted multiple times a year. Required for all undergraduate programs at NUST across all its schools.",
    frequency: "3 times a year (NET-1, NET-2, NET-3)",
    duration: 180,
    totalMarks: 100,
    passingMarks: null,
    negativeMarking: true,
    mediumOfInstruction: "English",
    status: "registration-closed",
    year: 2025,
    registrationStart: "2025-05-01",
    registrationEnd: "2025-06-10",
    testDate: "2025-06-28",
    resultDate: "2025-07-05",
    officialWebsite: "https://nust.edu.pk",
    registrationUrl: "https://ugadmissions.nust.edu.pk",
    syllabusUrl: "https://nust.edu.pk/net-syllabus",
    samplePaperUrl: null,
    acceptedBy: [
      { slug: "nust", name: "NUST", logo: "🏛️" },
    ],
    syllabus: [
      { subject: "Mathematics", topics: ["Calculus", "Algebra", "Vectors", "Probability", "Statistics"], weightage: 35 },
      { subject: "Physics", topics: ["Mechanics", "Oscillations", "Thermodynamics", "Electromagnetism", "Modern Physics"], weightage: 30 },
      { subject: "Chemistry", topics: ["Physical Chemistry", "Inorganic Chemistry", "Organic Chemistry"], weightage: 20 },
      { subject: "Intelligence", topics: ["Logical Reasoning", "Analytical Skills", "Spatial Reasoning"], weightage: 15 },
    ],
    preparationTips: [
      "The Intelligence section is unique to NET — practice IQ-style questions",
      "NET has negative marking — calculated risk-taking is key",
      "You can appear in NET-1, NET-2, and NET-3; best score counts",
      "NUST weighs NET score at 75% and FSc/A-Levels at 25%",
    ],
  },
  {
    id: 4,
    slug: "nu-test",
    name: "NU Entry Test",
    fullName: "FAST-NUCES Admission Test",
    conductedBy: "FAST National University (NUCES)",
    category: "cs",
    accent: "#818CF8",
    icon: "💻",
    description:
      "FAST's own entry test conducted simultaneously across all 5 campuses. Primarily CS-focused with heavy emphasis on Mathematics and logical reasoning.",
    frequency: "Annual (one sitting)",
    duration: 120,
    totalMarks: 100,
    passingMarks: null,
    negativeMarking: false,
    mediumOfInstruction: "English",
    status: "completed",
    year: 2025,
    registrationStart: "2025-05-20",
    registrationEnd: "2025-06-25",
    testDate: "2025-07-13",
    resultDate: "2025-07-20",
    officialWebsite: "https://nu.edu.pk",
    registrationUrl: "https://admission.nu.edu.pk",
    syllabusUrl: null,
    samplePaperUrl: null,
    acceptedBy: [
      { slug: "fast-nuces", name: "FAST NUCES", logo: "💻" },
    ],
    syllabus: [
      { subject: "Mathematics", topics: ["Algebra", "Calculus", "Trigonometry", "Number Theory", "Probability"], weightage: 50 },
      { subject: "Physics / CS Concepts", topics: ["Basic Physics", "Logical Reasoning", "Basic Programming Concepts"], weightage: 30 },
      { subject: "English", topics: ["Grammar", "Comprehension", "Vocabulary", "Essay Writing"], weightage: 20 },
    ],
    preparationTips: [
      "Mathematics is 50% of the paper — it determines your result",
      "FAST only holds the test once a year — don't miss it",
      "NU past papers are available on the official site",
      "Computer Science applicants should brush up on logical reasoning",
    ],
  },
  {
    id: 5,
    slug: "lcat",
    name: "LCAT / SAT",
    fullName: "LUMS Common Admission Test",
    conductedBy: "Lahore University of Management Sciences",
    category: "business",
    accent: "#06B6D4",
    icon: "🎓",
    description:
      "LUMS accepts either their own LCAT or an international SAT score for undergraduate admissions. Strong emphasis on analytical and verbal reasoning.",
    frequency: "Annual",
    duration: 150,
    totalMarks: 100,
    passingMarks: null,
    negativeMarking: false,
    mediumOfInstruction: "English",
    status: "upcoming",
    year: 2025,
    registrationStart: "2025-07-01",
    registrationEnd: "2025-08-10",
    testDate: "2025-08-20",
    resultDate: "2025-09-01",
    officialWebsite: "https://admission.lums.edu.pk",
    registrationUrl: "https://admission.lums.edu.pk/lcat",
    syllabusUrl: null,
    samplePaperUrl: null,
    acceptedBy: [
      { slug: "lums", name: "LUMS", logo: "🎓" },
    ],
    syllabus: [
      { subject: "Quantitative Reasoning", topics: ["Data Interpretation", "Problem Solving", "Number Properties", "Algebra"], weightage: 40 },
      { subject: "Verbal Reasoning", topics: ["Critical Reasoning", "Reading Comprehension", "Sentence Correction"], weightage: 35 },
      { subject: "Analytical Writing", topics: ["Argument Analysis", "Issue Essay", "Logical Structure"], weightage: 25 },
    ],
    preparationTips: [
      "LUMS also accepts SAT (1200+ recommended) instead of LCAT",
      "Verbal reasoning is harder than most Pakistani tests — read extensively",
      "LUMS values academic record heavily alongside test scores",
      "The National Outreach Programme (NOP) has separate criteria",
    ],
  },
  {
    id: 6,
    slug: "nts-nat",
    name: "NTS NAT",
    fullName: "National Aptitude Test",
    conductedBy: "National Testing Service (NTS)",
    category: "general",
    accent: "#F59E0B",
    icon: "📋",
    description:
      "NTS conducts the National Aptitude Test accepted by hundreds of public universities and government institutions across Pakistan for various programs.",
    frequency: "Multiple times a year",
    duration: 120,
    totalMarks: 100,
    passingMarks: 50,
    negativeMarking: false,
    mediumOfInstruction: "English & Urdu",
    status: "registration-open",
    year: 2025,
    registrationStart: "2025-07-15",
    registrationEnd: "2025-08-05",
    testDate: "2025-08-24",
    resultDate: "2025-09-01",
    officialWebsite: "https://www.nts.org.pk",
    registrationUrl: "https://www.nts.org.pk/nat",
    syllabusUrl: "https://www.nts.org.pk/nat-syllabus",
    samplePaperUrl: "https://www.nts.org.pk/nat-sample",
    acceptedBy: [
      { slug: "comsats", name: "COMSATS", logo: "🔬" },
      { slug: "bahria-university", name: "Bahria", logo: "⚓" },
      { slug: "gcu-lahore", name: "GCU Lahore", logo: "🏫" },
    ],
    syllabus: [
      { subject: "Quantitative", topics: ["Arithmetic", "Algebra", "Geometry", "Data Analysis"], weightage: 30 },
      { subject: "Verbal", topics: ["Vocabulary", "Grammar", "Comprehension", "Analogies"], weightage: 30 },
      { subject: "Analytical", topics: ["Logical Reasoning", "Critical Thinking", "Pattern Recognition"], weightage: 25 },
      { subject: "Subject-Specific", topics: ["Depends on NAT category (NAT-IE, NAT-IM, NAT-ICS)"], weightage: 15 },
    ],
    preparationTips: [
      "NTS offers NAT in multiple categories — choose the right one for your field",
      "NTS score is valid for 1 year — plan your test timing accordingly",
      "Official NTS guide books are widely available in bookstores",
      "Focus on Quantitative and Verbal — they carry equal weight",
    ],
  },
];

// ── HELPERS ───────────────────────────────────────────────────
export const STATUS_CONFIG: Record<TestStatus, {
  label: string; color: string; bg: string; border: string; dot: string;
}> = {
  "registration-open":   { label: "Registration Open",   color: "#34D399", bg: "rgba(52,211,153,0.1)",  border: "rgba(52,211,153,0.25)",  dot: "#34D399" },
  "registration-closed": { label: "Registration Closed", color: "#F59E0B", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.25)",  dot: "#F59E0B" },
  "upcoming":            { label: "Test Upcoming",        color: "#818CF8", bg: "rgba(129,140,248,0.1)", border: "rgba(129,140,248,0.25)", dot: "#818CF8" },
  "completed":           { label: "Completed",           color: "#475569", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)",  dot: "#475569" },
};

export const CATEGORY_CONFIG: Record<EntryTest["category"], {
  label: string; color: string; bg: string; border: string;
}> = {
  medical:     { label: "Medical",     color: "#F43F5E", bg: "rgba(244,63,94,0.1)",   border: "rgba(244,63,94,0.25)"   },
  engineering: { label: "Engineering", color: "#F59E0B", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.25)"  },
  cs:          { label: "CS / Tech",   color: "#818CF8", bg: "rgba(129,140,248,0.1)", border: "rgba(129,140,248,0.25)" },
  business:    { label: "Business",    color: "#06B6D4", bg: "rgba(6,182,212,0.1)",   border: "rgba(6,182,212,0.25)"   },
  general:     { label: "General",     color: "#94A3B8", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.12)" },
};

export function formatTestDate(dateStr: string | null): string {
  if (!dateStr) return "TBA";
  return new Date(dateStr).toLocaleDateString("en-PK", {
    day: "numeric", month: "short", year: "numeric",
  });
}

export function getDaysUntil(dateStr: string | null): number | null {
  if (!dateStr) return null;
  const diff = new Date(dateStr).getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
