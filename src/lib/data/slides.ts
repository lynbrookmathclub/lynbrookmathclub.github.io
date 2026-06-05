export type SlideTopicKey =
  | 'Combinatorics'
  | 'Algebra'
  | 'Geometry'
  | 'Number Theory'
  | 'Contest Prep'
  | 'General'
  | 'Member Lecture'
  | 'Competition Recap';

export interface Slide {
  id: string;
  title: string;
  date: string;           // YYYY-MM-DD
  semester: string;
  topic: SlideTopicKey;
  presenter?: string;
  description: string;
  googleSlidesId?: string;
  textContent?: string;
}

export const TOPIC_COLORS: Record<SlideTopicKey, { bg: string; text: string }> = {
  'Combinatorics': { bg: '#1b3a6b', text: '#a8c8ff' },
  'Algebra': { bg: '#2d1b4e', text: '#c8aaff' },
  'Geometry': { bg: '#1b3d2a', text: '#a8ffc8' },
  'Number Theory': { bg: '#3d2210', text: '#ffd0a8' },
  'Contest Prep': { bg: '#1b2a5c', text: '#a8baff' },
  'General': { bg: '#2a2a35', text: '#c8c8d8' },
  'Member Lecture': { bg: '#1b3a35', text: '#a8ffe0' },
  'Competition Recap': { bg: '#3a2a10', text: '#ffe0a8' },
};

export const slides: Slide[] = [
  {
    id: '20240910-first-meeting-estimathon',
    title: 'First Meeting + Estimathon',
    date: '2024-09-10',
    semester: 'Fall 2024',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1bztCaWV4pXC3cbSZ3MDPA1OyWLoWq1yjaVKhUGjw8b4'
  },
  {
    id: '20240917-doomsday',
    title: 'Doomsday',
    date: '2024-09-17',
    semester: 'Fall 2024',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1CrH-KAW7PYHl-uf9JyRF2LoRjeUUUzFo-PGxXEwiRic'
  },
  {
    id: '20240924-arml-relay',
    title: 'ARML Relay',
    date: '2024-09-24',
    semester: 'Fall 2024',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1_sACwHVsxIhHei2nyxzN_e9x63PyKkmULMNN85hqVpA'
  },
  {
    id: '20241008-combinatorial-identities',
    title: 'Combinatorial Identities',
    date: '2024-10-08',
    semester: 'Fall 2024',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1Td_Ygnt_QoO7BN-bJzE5NZVh2QXRGJ9KkE1DrlIRULM'
  },
  {
    id: '20241015-nt',
    title: 'NT',
    date: '2024-10-15',
    semester: 'Fall 2024',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1vR3-BW46yuneBCbAUwwammGrSB66XimYTk3GdH5BNCs'
  },
  {
    id: '20241022-circles',
    title: 'Circles',
    date: '2024-10-22',
    semester: 'Fall 2024',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1R7uRNixRigMBG8kMlyjAkfslRc1_MNEq65XNgsgLj1k'
  },
  {
    id: '20241105-ftw',
    title: 'FTW',
    date: '2024-11-05',
    semester: 'Fall 2024',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1re1YhgpuMixfLXCiIeJMiRV1gmmWjRh-cg73yKTMzas'
  },
  {
    id: '20241119-amc-review',
    title: 'AMC Review',
    date: '2024-11-19',
    semester: 'Fall 2024',
    topic: 'Contest Prep',
    description: '',
    googleSlidesId: '1EFDl9EZ3Nbd6R7EWOpHnRH3yfJl6VnAeMPl8nJnPwgQ'
  },

  {
    id: '20250114',
    title: 'General Meeting',
    date: '2025-01-14',
    semester: 'Spring 2025',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1oyHjGxvtDMqQdraJiSnhkoIXhN0k2AFU5XY-5CDc5aM'
  },
  {
    id: '20250121',
    title: 'General Meeting',
    date: '2025-01-21',
    semester: 'Spring 2025',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1Sv3nmqiU-_xOvd-gDiUikpFj9Elq496JdC0Pa3RLLNo'
  },
  {
    id: '20250408-inequalities',
    title: 'Inequalities',
    date: '2025-04-08',
    semester: 'Spring 2025',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1p5NOD62s0F8bnip6hiNMOn9fYzKyyCUPD6n8Av3-sJU'
  },
  {
    id: '20250520-last-meeting',
    title: 'LAST MEETING',
    date: '2025-05-20',
    semester: 'Spring 2025',
    topic: 'General',
    description: '',
    googleSlidesId: '15j3tFCo-uTuEPNSPDvUBK_loq8x4N1dD0Pt7KcnvlUw'
  },
  {
    id: '20250923-hilbert-s-hotel',
    title: 'Hilbert\'s Hotel',
    date: '2025-09-23',
    semester: 'Fall 2025',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1SKCGrAGRMk3ZEYZ4xDFwRminFho5OIglYYr_EjZvRfM',
  },
  {
    id: '20251014-for-the-win',
    title: 'For the Win!',
    date: '2025-10-14',
    semester: 'Fall 2025',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1_CQgdmnSsTBG8hrMDW3Hj7s9xRqmONxynpPaOfVSl7s',
  },
  {
    id: '20251021-burnside-s-lemma',
    title: 'Burnside\'s Lemma',
    date: '2025-10-21',
    semester: 'Fall 2025',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1KvOJIM3fOAGitWMPSVjvdyHjA6YTlvbiPUZXUXgjVNk',
  },
  {
    id: '20251028-amc-geo-prep',
    title: 'AMC Geo Prep',
    date: '2025-10-28',
    semester: 'Fall 2025',
    topic: 'Contest Prep',
    description: '',
    googleSlidesId: '1tTsldFi4NmOBlnp7Kgd63Lp2W8Lu52WLz-VapBhldIg',
  },
  {
    id: '20251104-amc-nt',
    title: 'AMC NT',
    date: '2025-11-04',
    semester: 'Fall 2025',
    topic: 'Contest Prep',
    description: '',
    googleSlidesId: '1FOtuWdN_mjlQeN4jYEWtBJRJmedhFqX0h0pdoiD13Sg',
  },
  {
    id: '20251201-fakesolving',
    title: 'Fakesolving',
    date: '2025-12-01',
    semester: 'Fall 2025',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '18rDaLmbTLtsjbQG4oCDUypF4g4OOyc78HrpfGKD3FMU',
  },
  {
    id: '20260106-clock',
    title: 'Clock',
    date: '2026-01-06',
    semester: 'Spring 2026',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1TF2RkH8bg8VYX8yf-o1zkppBmBgo87ZwIhlwH5_0_XI',
  },
  {
    id: '20260113-astrophysics-x-math-spherical-trig',
    title: 'Astrophysics X Math: Spherical Trig',
    date: '2026-01-13',
    semester: 'Spring 2026',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1d2N3C8TOM2xz1QVIZe4nMd63YtYpwiNITO64VVHcUtY',
  },
  {
    id: '20260120-aime-prep',
    title: 'AIME "Prep"',
    date: '2026-01-20',
    semester: 'Spring 2026',
    topic: 'Contest Prep',
    description: '',
    googleSlidesId: '1jm5hcG5s4bd34Vob6G7qxorawrtOBGKx-4ezIfK4zis',
  },
  {
    id: '20260127-jeopardy',
    title: 'Jeopardy',
    date: '2026-01-27',
    semester: 'Spring 2026',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '14PFOqu0bDwp7LzrUdzJTn3X9BvBDoUujsvtftdChths',
  },
  {
    id: '20260203-solving-math-with-physics',
    title: 'Solving Math With Physics',
    date: '2026-02-03',
    semester: 'Spring 2026',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '16nzs853iOe5JpbjqmDUCdZLPKQso9HMo7F5FuQduk-c',
  },
  {
    id: '20260210-aime-recap',
    title: 'AIME Recap',
    date: '2026-02-10',
    semester: 'Spring 2026',
    topic: 'Contest Prep',
    description: '',
    googleSlidesId: '1Y-GrLztJyhvk_KW54uRC9fLmdwYDuxMBlyPoGufQ80c',
  },
  {
    id: '20260303-lmao-introduction',
    title: 'LMAO Introduction',
    date: '2026-03-03',
    semester: 'Spring 2026',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1NAgS5txi4Q5gfcD6hZhMnyWleGhgR3e2PddoGoRRMZE',
  },
  {
    id: '20260310-invariants',
    title: 'Invariants',
    date: '2026-03-10',
    semester: 'Spring 2026',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1i_hbKIYQx8wDoa6AWPF6vkojcj5HphkRSLbK_tOr3PI',
  },
  {
    id: '20260317-beating-the-casino',
    title: 'Beating the Casino',
    date: '2026-03-17',
    semester: 'Spring 2026',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1KMa6vdxHoUua_v5imr2hqbahD-ed2LJpd0JTKc3VHVA',
  },
  {
    id: '20260331-states',
    title: 'States',
    date: '2026-03-31',
    semester: 'Spring 2026',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '12c8CXw8Fnigm5inFFMSt_sWPPXIaSbZaQOmIUL6DRcM',
  },
  {
    id: '20260407-voting-systems',
    title: 'Voting Systems',
    date: '2026-04-07',
    semester: 'Spring 2026',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1MtNYI9UU4Q_7B-wzcp0ctGxmhSzV3P5_Yf-urvtt-8c',
  },
  {
    id: '20260421-factoring',
    title: 'Factoring',
    date: '2026-04-21',
    semester: 'Spring 2026',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1CY0ZCTNU6TJ1CUk1XNYVySAqgoSR08Px_zVNJPY5zc4',
  },
  {
    id: '20260428-probability-and-quantum-theory',
    title: 'Probability and Quantum Theory',
    date: '2026-04-28',
    semester: 'Spring 2026',
    topic: 'Member Lecture',
    description: '',
    googleSlidesId: '1ov8PnDZZfXlnfNpRJJH5N0uyjgtRoWr0_c3ymvfq918',
  },
  {
    id: '20260519-end-of-year',
    title: 'End of Year',
    date: '2026-05-19',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1ND1bA593EpKOoWf4I5r8vt0Z7_7HMsPkArErJfUSB38',
  }
];

export const semesters = [...new Set(slides.map(s => s.semester))];
export const topics = [...new Set(slides.map(s => s.topic))] as SlideTopicKey[];