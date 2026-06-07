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
    name: 'Justin Kim',
    achievements: [
      '1434 (TBC)'
    ],
  },
  {
    name: 'Sohum Uttamchandani',
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
      'Factoring techniques',
      '1434',
      '67',
    ],
  },
  {
    id: 'combo',
    label: 'Combinatorics',
    symbol: '\\binom{n}{k}',
    topics: [
      'idk',
      '1434',
      '67',
    ],
  },
  {
    id: 'nt',
    label: 'Number Theory',
    symbol: '\\mathbb{N}',
    topics: [
      'Factoring techniques',
      '1434',
      '67',
    ],
  },
  {
    id: 'geo',
    label: 'Geometry',
    symbol: '△',
    topics: [
      '14341434',
      '1434',
      '67',
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
