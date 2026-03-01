// data/meritLists.ts
// Merit list data and configuration.
//
// meritListConfig — defines per-university how merit lists are accessed:
//   "portal"  → university has its own login portal, we redirect
//   "public"  → we have actual searchable merit list data
//
// meritEntries — mock merit list rows for public universities.
// TO MIGRATE TO API: replace getMeritEntries() with a fetch call.

export type MeritAccessType = "portal" | "public";

export type MeritListConfig = {
  slug: string;
  shortName: string;
  logo: string;
  accessType: MeritAccessType;
  // portal-only fields
  portalUrl?: string;
  portalMessage?: string;
  portalSteps?: string[];
  // public fields
  lastUpdated?: string;
  totalEntries?: number;
  lists?: MeritListMeta[];
};

export type MeritListMeta = {
  id: number;
  name: string; // e.g. "1st Merit List", "2nd Merit List"
  year: number;
  publishedDate: string;
  isLatest: boolean;
};

export type MeritEntry = {
  id: number;
  universitySlug: string;
  listId: number;
  listName: string;
  candidateName: string;
  rollNumber: string;
  fatherName: string;
  program: string;
  aggregate: number;
  rank: number;
  status: "selected" | "waiting" | "not-selected";
  year: number;
};

// ── PER-UNIVERSITY CONFIG ─────────────────────────────────────────────────
export const meritListConfigs: MeritListConfig[] = [
  {
    slug: "nust",
    shortName: "NUST",
    logo: "🏛️",
    accessType: "portal",
    portalUrl: "https://ugadmissions.nust.edu.pk",
    portalMessage:
      "NUST publishes merit lists exclusively through their admissions portal. You'll need your NUST Application ID and password to check your status.",
    portalSteps: [
      "Visit the NUST admissions portal",
      "Log in with your Application ID and password",
      "Go to 'Application Status' in your dashboard",
      "Your merit position and status will be displayed there",
    ],
  },
  {
    slug: "lums",
    shortName: "LUMS",
    logo: "🎓",
    accessType: "portal",
    portalUrl: "https://admission.lums.edu.pk",
    portalMessage:
      "LUMS notifies applicants directly via email and through their admissions portal. Merit lists are not published publicly.",
    portalSteps: [
      "Check your registered email for an offer letter",
      "Log into the LUMS applicant portal",
      "View your admission decision under 'Application Status'",
      "Contact admissions at admission@lums.edu.pk if you need help",
    ],
  },
  {
    slug: "iba-karachi",
    shortName: "IBA Karachi",
    logo: "📊",
    accessType: "portal",
    portalUrl: "https://admission.iba.edu.pk",
    portalMessage:
      "IBA Karachi publishes results through their online admissions portal and via email notification to applicants.",
    portalSteps: [
      "Visit the IBA admissions portal",
      "Log in with your application credentials",
      "Navigate to 'My Applications' to view your result",
      "IBA also sends result emails to registered addresses",
    ],
  },
  {
    slug: "pieas",
    shortName: "PIEAS",
    logo: "⚛️",
    accessType: "portal",
    portalUrl: "https://admission.pieas.edu.pk",
    portalMessage:
      "PIEAS publishes merit lists through their official admissions portal. Given the highly competitive nature, results are sent individually.",
    portalSteps: [
      "Go to the PIEAS admissions portal",
      "Enter your form number and CNIC",
      "View your test result and merit position",
      "Qualified candidates are contacted for further process",
    ],
  },
  {
    slug: "uet-lahore",
    shortName: "UET Lahore",
    logo: "⚙️",
    accessType: "public",
    lastUpdated: "2025-08-14",
    totalEntries: 1840,
    lists: [
      { id: 101, name: "1st Merit List", year: 2025, publishedDate: "2025-08-14", isLatest: true },
      { id: 102, name: "2nd Merit List", year: 2025, publishedDate: "2025-08-22", isLatest: false },
    ],
  },
  {
    slug: "fast-nuces",
    shortName: "FAST",
    logo: "💻",
    accessType: "public",
    lastUpdated: "2025-08-08",
    totalEntries: 960,
    lists: [
      { id: 201, name: "1st Merit List", year: 2025, publishedDate: "2025-08-08", isLatest: true },
    ],
  },
  {
    slug: "comsats",
    shortName: "COMSATS",
    logo: "🔬",
    accessType: "public",
    lastUpdated: "2025-08-11",
    totalEntries: 3200,
    lists: [
      { id: 301, name: "1st Merit List", year: 2025, publishedDate: "2025-08-11", isLatest: true },
      { id: 302, name: "2nd Merit List", year: 2025, publishedDate: "2025-08-19", isLatest: false },
      { id: 303, name: "3rd Merit List", year: 2025, publishedDate: "2025-08-26", isLatest: false },
    ],
  },
  {
    slug: "bahria-university",
    shortName: "Bahria",
    logo: "⚓",
    accessType: "public",
    lastUpdated: "2025-08-08",
    totalEntries: 2100,
    lists: [
      { id: 401, name: "1st Merit List", year: 2025, publishedDate: "2025-08-08", isLatest: true },
    ],
  },
  {
    slug: "gcu-lahore",
    shortName: "GCU Lahore",
    logo: "🏫",
    accessType: "public",
    lastUpdated: "2025-07-20",
    totalEntries: 1560,
    lists: [
      { id: 501, name: "1st Merit List", year: 2025, publishedDate: "2025-07-20", isLatest: true },
    ],
  },
  {
    slug: "itu",
    shortName: "ITU",
    logo: "🖥️",
    accessType: "public",
    lastUpdated: "2025-08-05",
    totalEntries: 380,
    lists: [
      { id: 601, name: "Merit List 2025", year: 2025, publishedDate: "2025-08-05", isLatest: true },
    ],
  },
];

// ── MOCK MERIT ENTRIES (public universities only) ─────────────────────────
// In production these come from your Django API / scraped data
const mockEntries: MeritEntry[] = [
  // UET Lahore
  { id: 1, universitySlug: "uet-lahore", listId: 101, listName: "1st Merit List", candidateName: "Muhammad Ahmed Khan", rollNumber: "2025-UET-0041", fatherName: "Tariq Khan", program: "Computer Science", aggregate: 87.8, rank: 12, status: "selected", year: 2025 },
  { id: 2, universitySlug: "uet-lahore", listId: 101, listName: "1st Merit List", candidateName: "Fatima Malik", rollNumber: "2025-UET-0089", fatherName: "Asif Malik", program: "Electrical Engineering", aggregate: 86.5, rank: 28, status: "selected", year: 2025 },
  { id: 3, universitySlug: "uet-lahore", listId: 101, listName: "1st Merit List", candidateName: "Ali Hassan Siddiqui", rollNumber: "2025-UET-0134", fatherName: "Hassan Siddiqui", program: "Computer Science", aggregate: 85.9, rank: 45, status: "selected", year: 2025 },
  { id: 4, universitySlug: "uet-lahore", listId: 101, listName: "1st Merit List", candidateName: "Zainab Qadir", rollNumber: "2025-UET-0201", fatherName: "Abdul Qadir", program: "Civil Engineering", aggregate: 84.2, rank: 67, status: "selected", year: 2025 },
  { id: 5, universitySlug: "uet-lahore", listId: 101, listName: "1st Merit List", candidateName: "Hamza Farooq", rollNumber: "2025-UET-0312", fatherName: "Farooq Ahmed", program: "Mechanical Engineering", aggregate: 83.7, rank: 98, status: "waiting", year: 2025 },
  { id: 6, universitySlug: "uet-lahore", listId: 101, listName: "1st Merit List", candidateName: "Ayesha Noor", rollNumber: "2025-UET-0445", fatherName: "Noor Muhammad", program: "Computer Science", aggregate: 82.1, rank: 134, status: "waiting", year: 2025 },
  { id: 7, universitySlug: "uet-lahore", listId: 101, listName: "1st Merit List", candidateName: "Usman Tariq", rollNumber: "2025-UET-0512", fatherName: "Tariq Mehmood", program: "Software Engineering", aggregate: 88.4, rank: 8, status: "selected", year: 2025 },
  { id: 8, universitySlug: "uet-lahore", listId: 101, listName: "1st Merit List", candidateName: "Sana Riaz", rollNumber: "2025-UET-0634", fatherName: "Riaz Ahmad", program: "Electrical Engineering", aggregate: 81.5, rank: 156, status: "not-selected", year: 2025 },

  // FAST
  { id: 9, universitySlug: "fast-nuces", listId: 201, listName: "1st Merit List", candidateName: "Bilal Sheikh", rollNumber: "2025-FAST-0021", fatherName: "Zafar Sheikh", program: "Computer Science", aggregate: 86.1, rank: 15, status: "selected", year: 2025 },
  { id: 10, universitySlug: "fast-nuces", listId: 201, listName: "1st Merit List", candidateName: "Hira Baig", rollNumber: "2025-FAST-0078", fatherName: "Kamran Baig", program: "Software Engineering", aggregate: 85.3, rank: 31, status: "selected", year: 2025 },
  { id: 11, universitySlug: "fast-nuces", listId: 201, listName: "1st Merit List", candidateName: "Saad Iqbal", rollNumber: "2025-FAST-0145", fatherName: "Iqbal Hussain", program: "Artificial Intelligence", aggregate: 84.7, rank: 22, status: "selected", year: 2025 },
  { id: 12, universitySlug: "fast-nuces", listId: 201, listName: "1st Merit List", candidateName: "Maham Yousuf", rollNumber: "2025-FAST-0267", fatherName: "Yousuf Khan", program: "Computer Science", aggregate: 83.2, rank: 89, status: "waiting", year: 2025 },

  // COMSATS
  { id: 13, universitySlug: "comsats", listId: 301, listName: "1st Merit List", candidateName: "Fahad Zaman", rollNumber: "2025-CUI-0056", fatherName: "Zaman Ali", program: "Computer Science", aggregate: 79.4, rank: 34, status: "selected", year: 2025 },
  { id: 14, universitySlug: "comsats", listId: 301, listName: "1st Merit List", candidateName: "Nimra Hassan", rollNumber: "2025-CUI-0112", fatherName: "Hassan Raza", program: "Electrical Engineering", aggregate: 77.8, rank: 67, status: "selected", year: 2025 },
  { id: 15, universitySlug: "comsats", listId: 301, listName: "1st Merit List", candidateName: "Talha Mirza", rollNumber: "2025-CUI-0289", fatherName: "Mirza Sajjad", program: "Business Administration", aggregate: 76.2, rank: 112, status: "waiting", year: 2025 },
  { id: 16, universitySlug: "comsats", listId: 301, listName: "1st Merit List", candidateName: "Rida Shahid", rollNumber: "2025-CUI-0341", fatherName: "Shahid Pervez", program: "Computer Science", aggregate: 78.9, rank: 45, status: "selected", year: 2025 },

  // Bahria
  { id: 17, universitySlug: "bahria-university", listId: 401, listName: "1st Merit List", candidateName: "Omar Khalid", rollNumber: "2025-BU-0033", fatherName: "Khalid Mahmood", program: "Computer Science", aggregate: 73.8, rank: 28, status: "selected", year: 2025 },
  { id: 18, universitySlug: "bahria-university", listId: 401, listName: "1st Merit List", candidateName: "Sadia Imran", rollNumber: "2025-BU-0091", fatherName: "Imran Bashir", program: "Business Administration", aggregate: 71.5, rank: 56, status: "selected", year: 2025 },
  { id: 19, universitySlug: "bahria-university", listId: 401, listName: "1st Merit List", candidateName: "Asad Mehmood", rollNumber: "2025-BU-0178", fatherName: "Mehmood Khan", program: "Electrical Engineering", aggregate: 72.1, rank: 44, status: "waiting", year: 2025 },

  // GCU
  { id: 20, universitySlug: "gcu-lahore", listId: 501, listName: "1st Merit List", candidateName: "Waleed Aslam", rollNumber: "2025-GCU-0044", fatherName: "Aslam Chaudhry", program: "Computer Science", aggregate: 81.2, rank: 19, status: "selected", year: 2025 },
  { id: 21, universitySlug: "gcu-lahore", listId: 501, listName: "1st Merit List", candidateName: "Amna Javed", rollNumber: "2025-GCU-0099", fatherName: "Javed Iqbal", program: "Mathematics", aggregate: 79.6, rank: 38, status: "selected", year: 2025 },

  // ITU
  { id: 22, universitySlug: "itu", listId: 601, listName: "Merit List 2025", candidateName: "Danyal Qureshi", rollNumber: "2025-ITU-0017", fatherName: "Qureshi Saab", program: "Computer Science", aggregate: 84.3, rank: 11, status: "selected", year: 2025 },
  { id: 23, universitySlug: "itu", listId: 601, listName: "Merit List 2025", candidateName: "Zara Hashmi", rollNumber: "2025-ITU-0042", fatherName: "Hashmi Sahib", program: "Data Science", aggregate: 83.7, rank: 14, status: "selected", year: 2025 },
];

// ── DATA ACCESS FUNCTIONS ─────────────────────────────────────────────────
// Replace these with API calls when Django backend is ready

export function getMeritConfig(slug: string): MeritListConfig | null {
  return meritListConfigs.find((c) => c.slug === slug) ?? null;
}

export function getMeritEntries(
  slug: string,
  query: string,
  listId?: number
): MeritEntry[] {
  // TODO (API): fetch(`/api/merit-lists/?university=${slug}&q=${query}&list=${listId}`)
  let results = mockEntries.filter((e) => e.universitySlug === slug);
  if (listId) results = results.filter((e) => e.listId === listId);
  if (query.trim()) {
    const q = query.toLowerCase().trim();
    results = results.filter(
      (e) =>
        e.candidateName.toLowerCase().includes(q) ||
        e.rollNumber.toLowerCase().includes(q) ||
        e.fatherName.toLowerCase().includes(q)
    );
  }
  return results;
}

export function getAllPublicUniversities(): MeritListConfig[] {
  return meritListConfigs.filter((c) => c.accessType === "public");
}

export const STATUS_CONFIG = {
  selected:     { label: "Selected",     color: "#34D399", bg: "rgba(52,211,153,0.1)",  border: "rgba(52,211,153,0.25)"  },
  waiting:      { label: "Waiting List", color: "#F59E0B", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)"  },
  "not-selected": { label: "Not Selected", color: "#F43F5E", bg: "rgba(244,63,94,0.1)",  border: "rgba(244,63,94,0.25)"  },
};
