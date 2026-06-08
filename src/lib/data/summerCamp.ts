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
    achievements: [
      '1434 (TBC)'
    ],
  },
  {
    name: 'Justin Kim',
    achievements: [
      '1434 (TBC)'
    ],
  },
  {
    name: 'Brian Lu',
    achievements: [
      '1434 (TBC)'
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
