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
  // --- Original Slides ---
  {
    id: 'spring-2026-05',
    title: 'Last Meeting',
    date: '2026-05-19',
    semester: 'Spring 2026',
    topic: 'General',
    description: 'Thank you to everyone who participated in the club events and meetings this year.',
    googleSlidesId: '1ND1bA593EpKOoWf4I5r8vt0Z7_7HMsPkArErJfUSB38',
  },
  {
    id: 'spring-1434-05',
    title: 'Losing the Game',
    date: '1434-05-08',
    semester: 'Spring 1434',
    topic: 'Member Lecture',
    description: 'For testing purposes.',
    googleSlidesId: '1MtNYI9UU4Q_7B-wzcp0ctGxmhSzV3P5_Yf-urvtt-8c',
    textContent: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
`,
  },
  {
    id: 'spring-6767-05',
    title: 'Test',
    date: '2025-01-01',
    semester: 'Spring 2025',
    topic: 'Contest Prep',
    description: 'Thank you to everyone who participated in the club events and meetings this year.',
    textContent: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
`,
  },
  // --- Newly Imported Slides ---
  {
    id: '20260519-end-of-year',
    title: 'End of Year',
    date: '2026-05-11',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1ND1bA593EpKOoWf4I5r8vt0Z7_7HMsPkArErJfUSB38',
  },
  {
    id: '20260331-states',
    title: 'States',
    date: '2026-03-31',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '12c8CXw8Fnigm5inFFMSt_sWPPXIaSbZaQOmIUL6DRcM',
  },
  {
    id: '20260428-probability-and-quantum-theory',
    title: 'Probability and Quantum Theory',
    date: '2026-04-27',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1ov8PnDZZfXlnfNpRJJH5N0uyjgtRoWr0_c3ymvfq918',
  },
  {
    id: '20260113-astrophysics-x-math-spherical-trig',
    title: 'Astrophysics X Math: Spherical Trig',
    date: '2026-04-24',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1d2N3C8TOM2xz1QVIZe4nMd63YtYpwiNITO64VVHcUtY',
  },
  {
    id: '20260210-aime-recap',
    title: 'AIME Recap',
    date: '2026-02-10',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1Y-GrLztJyhvk_KW54uRC9fLmdwYDuxMBlyPoGufQ80c',
  },
  {
    id: '20260421-factoring',
    title: 'Factoring',
    date: '2026-04-20',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1CY0ZCTNU6TJ1CUk1XNYVySAqgoSR08Px_zVNJPY5zc4',
  },
  {
    id: '20260407-voting-systems',
    title: 'Voting Systems',
    date: '2026-04-06',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1MtNYI9UU4Q_7B-wzcp0ctGxmhSzV3P5_Yf-urvtt-8c',
  },
  {
    id: '20260303-lmao-introduction',
    title: 'LMAO Introduction',
    date: '2026-03-01',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1NAgS5txi4Q5gfcD6hZhMnyWleGhgR3e2PddoGoRRMZE',
  },
  {
    id: '20260317-beating-the-casino',
    title: 'Beating the Casino',
    date: '2026-03-31',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1KMa6vdxHoUua_v5imr2hqbahD-ed2LJpd0JTKc3VHVA',
  },
  {
    id: '20260310-invariants',
    title: 'Invariants',
    date: '2026-03-09',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1i_hbKIYQx8wDoa6AWPF6vkojcj5HphkRSLbK_tOr3PI',
  },
  {
    id: '20260203-solving-math-with-physics',
    title: 'Solving Math With Physics',
    date: '2026-02-02',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '16nzs853iOe5JpbjqmDUCdZLPKQso9HMo7F5FuQduk-c',
  },
  {
    id: '20260127-jeopardy',
    title: 'Jeopardy',
    date: '2026-01-26',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '14PFOqu0bDwp7LzrUdzJTn3X9BvBDoUujsvtftdChths',
  },
  {
    id: '20260120-aime-prep',
    title: 'AIME "Prep"',
    date: '2026-01-19',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1jm5hcG5s4bd34Vob6G7qxorawrtOBGKx-4ezIfK4zis',
  },
  {
    id: '20260106-clock',
    title: 'Clock',
    date: '2026-01-05',
    semester: 'Spring 2026',
    topic: 'General',
    description: '',
    googleSlidesId: '1TF2RkH8bg8VYX8yf-o1zkppBmBgo87ZwIhlwH5_0_XI',
  },
  {
    id: '20251201-fakesolving',
    title: 'Fakesolving',
    date: '2025-12-01',
    semester: 'Fall 2025',
    topic: 'General',
    description: '',
    googleSlidesId: '18rDaLmbTLtsjbQG4oCDUypF4g4OOyc78HrpfGKD3FMU',
  },
  {
    id: '20251104-amc-nt',
    title: 'AMC NT',
    date: '2025-11-04',
    semester: 'Fall 2025',
    topic: 'General',
    description: '',
    googleSlidesId: '1FOtuWdN_mjlQeN4jYEWtBJRJmedhFqX0h0pdoiD13Sg',
  },
  {
    id: '20251028-amc-geo-prep',
    title: 'AMC Geo Prep',
    date: '2025-10-27',
    semester: 'Fall 2025',
    topic: 'General',
    description: '',
    googleSlidesId: '1tTsldFi4NmOBlnp7Kgd63Lp2W8Lu52WLz-VapBhldIg',
  },
  {
    id: '20251021-burnside-s-lemma',
    title: 'Burnside\'s Lemma',
    date: '2025-10-20',
    semester: 'Fall 2025',
    topic: 'General',
    description: '',
    googleSlidesId: '1KvOJIM3fOAGitWMPSVjvdyHjA6YTlvbiPUZXUXgjVNk',
  },
  {
    id: '20251014-for-the-win',
    title: 'For the Win!',
    date: '2025-10-13',
    semester: 'Fall 2025',
    topic: 'General',
    description: '',
    googleSlidesId: '1_CQgdmnSsTBG8hrMDW3Hj7s9xRqmONxynpPaOfVSl7s',
  },
  {
    id: '20250923-hilbert-s-hotel',
    title: 'Hilbert\'s Hotel',
    date: '2025-09-22',
    semester: 'Fall 2025',
    topic: 'General',
    description: '',
    googleSlidesId: '1SKCGrAGRMk3ZEYZ4xDFwRminFho5OIglYYr_EjZvRfM',
  }
];

export const semesters = [...new Set(slides.map(s => s.semester))];
export const topics = [...new Set(slides.map(s => s.topic))] as SlideTopicKey[];