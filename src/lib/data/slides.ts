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
];

export const semesters = [...new Set(slides.map(s => s.semester))];
export const topics = [...new Set(slides.map(s => s.topic))] as SlideTopicKey[];
