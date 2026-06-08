export interface CampInstructor {
  id?: string;
  name: string;
  role?: string;
  photoUrl?: string;
  achievements: string[];
}

export interface CampSubject {
  id: string;
  label: string;
  symbol: string;
  topics: string[];
}

export interface CampDetail {
  label: string;
  value: string;
}

export const campInstructors: CampInstructor[] = [
  {
    name: 'Sohum Uttamchandani',
    photoUrl: '/staff/sohum_uttamchandani.png',
    achievements: [
      '3x USA(J)MO Qualifier',
      'AIME, AMC12, AMC10, AMC8 Perfect Scorer',
      'Caltech Math Meet 1st Place Individual',
      'Berkeley Math Tournament 1st Place Discrete, 3rd Place Algebra',
      'Stanford Math Tournament 7th Place Calculus',
    ],
  },
  {
    name: 'Justin Kim',
    photoUrl: '/staff/justin_kim.jpeg',
    achievements: [
      'MathCounts National Champion',
      '2x MathCounts National CDR Qualifier',
      '2x USAJMO Qualifier',
      '1x USAJMO Honorable Mention',
      'AMC12, AMC10, AMC8 Perfect Scorer',
    ],
  },
  {
    name: 'Tianlin Liu',
    photoUrl: '/staff/tianlin_liu.png',
    achievements: [
      '4x AIME Qualifier',
      'AMC 12/10/8 Honor Roll & Distinguished Honor Roll',
      'Math Prize for Girls Honorable Mention',
      'MPFG Olympiad Gold Medalist',
      'BMT Geometry Top 10',
      'SMT Honorable Mention',
    ],
  },
  {
    name: 'Benjamin Zhang',
    photoUrl: '/staff/benjamin_zhang.jpg',
    achievements: [
      'USAJMO Honarable Mention',
      '4x AIME Qualifer'
    ],
  },
  {
    name: 'Nitin Reddy Vaka',
    achievements: [
      "USAJMO Qualifier",
      "4x AIME Qualifier"
    ],
  },
  {
    name: 'Tanish Kolhe',
    achievements: [
      '4x AIME Qualifier',
      '3x BMT Distinguished Honorable Mention',
      'AMC8 Perfect Score'
    ],
  },
  {
    name: 'Brian Lu',
    achievements: [
      '2x AIME Qualifier',
      'AMC10 Distinguished Honor Roll'
    ],
  },
  {
    name: 'Abhigyan Singh',
    photoUrl: '/staff/abhigyan_singh.jpeg',
    achievements: [
    ],
  },

  {
    name: 'Steven Xia',
    photoUrl: "staff/steven_xia.png",
    achievements: [
    ],
  },
  {
    name: 'Benjamin Oh',
    achievements: [
    ],
  },
  {
    name: 'Catherine Jian',
    achievements: [
    ],
  },
  {
    name: 'Mason Shu',
    achievements: [
    ],
  },
];

export const campCurriculum: CampSubject[] = [
  {
    id: 'alg',
    label: 'Algebra',
    symbol: '\\sum',
    topics: [
      'Algebra Manipulations',
      'Number Sense',
      'Word Problems',
      'Sequences and Series',
      'Quadratics and Vietas Formulas',
    ],
  },
  {
    id: 'combo',
    label: 'Combinatorics',
    symbol: '\\binom{n}{k}',
    topics: [
      'Permutations and Combinations',
      'Casework',
      'Assorted Counting Techniques',
      'Probability Applications',
      'Expected Value',
    ],
  },
  {
    id: 'geo',
    label: 'Geometry',
    symbol: '△',
    topics: [
      'Angle Chasing',
      'Special Triangles',
      'Similarity and Congruence',
      'Area Techniques',
      'Coordinates and 3D',
    ],
  },
  {
    id: 'nt',
    label: 'Number Theory',
    symbol: '\\mathbb{N}',
    topics: [
      'Divisibility',
      'Prime Factorization',
      'GCD and LCM',
      'Base Systems',
      'Modular Arithmetic',
    ],
  },
];

export const campDetails: CampDetail[] = [
  { label: 'Dates', value: 'August 3-7, 2026' },
  { label: 'Hours', value: '9:00 AM to 5:00 PM' },
  { label: 'Location', value: 'Rocklin Science Center at Lynbrook' },
  { label: 'Cost', value: '$400' },
];

export const CAMP_EMAIL = 'lynbrookmath@gmail.com';
export const CAMP_SIGNUP_URL = 'https://bit.ly/lmhsmathcamp';
