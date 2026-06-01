export type ActivityType = 'competition' | 'tournament' | 'tutoring' | 'internal';

export interface ActivityVisual {
  label: string;
  alt: string;
  src?: string;
  tone: string;
}

export interface Activity {
  id: string;
  name: string;
  shortName: string;
  type: ActivityType;
  description: string;
  website?: string;
  pageHref?: string;
  nextDate?: string;
  visual: ActivityVisual;
}

export const activities: Activity[] = [
  {
    id: 'amc',
    name: 'American Mathematics Competition',
    shortName: 'AMC 10/12',
    type: 'competition',
    description: 'The gateway to AIME and the USA(J)MO. Each test is a 25-question, 75-minute multiple choice exam taken by over 300,000 students nationwide.',
    website: 'https://maa.org/amc',
    nextDate: 'November 2026',
    visual: {
      label: 'AMC 10/12',
      alt: 'AMC 10/12 logo',
      src: '/maa.svg',
      tone: '#1b2a5c',
    },
  },
  {
    id: 'aime',
    name: 'American Invitational Mathematics Examination',
    shortName: 'AIME',
    type: 'competition',
    description: 'A 15-question, 3-hour competition for the top AMC scorers each year. Contestants that perform well on the AMC 10/12 and AIME can qualify for the USA(J)MO.',
    website: 'https://maa.org/maa-invitational-competitions/',
    nextDate: 'February 2027',
    visual: {
      label: 'AIME',
      alt: 'AIME logo',
      src: '/maa.svg',
      tone: '#1b2a5c',
    },
  },
  {
    id: 'bmt',
    name: 'Berkeley Math Tournament',
    shortName: 'BMT',
    type: 'tournament',
    description: 'An annual college-run tournament hosted by UC Berkeley\'s math community, with individual and team rounds across multiple subjects.',
    website: 'https://bmt.berkeley.edu',
    nextDate: 'Fall 2026',
    visual: {
      label: 'BMT',
      alt: 'BMT logo',
      src: '/bmt.svg',
      tone: '#ffffff',
    },
  },
  {
    id: 'smt',
    name: 'Stanford Math Tournament',
    shortName: 'SMT',
    type: 'tournament',
    description: 'SMT is Stanford\'s prestigious invitational tournament featuring individual subject tests, a team round, and an exciting guts round.',
    website: 'https://sumo.stanford.edu/smt',
    nextDate: 'February 2027',
    visual: {
      label: 'SMT 2026',
      alt: 'Stanfard Math Tournament',
      src: '/smt.png',
      tone: '#981c1d',
    },
  },
  {
    id: 'lmo',
    name: 'Lynbrook Math Open',
    shortName: 'LMO',
    type: 'tournament',
    description: 'Our very own student-run tournament, open to middle and high school students of FUHSD, comprising an individual and team round, hosted at Lynbrook.',
    website: 'https://lhslmo.vercel.app',
    pageHref: '/lmo',
    nextDate: 'Spring 2027',
    visual: {
      label: 'LMO 2026',
      alt: 'LMO tournament day photo',
      src: '/lmo.svg',
      tone: '#ffffff',
    },
  },
  {
    id: 'summer-camp',
    name: 'Math Honor Society Summer Camp',
    shortName: 'Summer Camp',
    type: 'internal',
    description: 'A week-long math camp for middle schoolers, hosted at Lynbrook High School. AMC 8 and MATHCOUNTS-level content is taught.',
    pageHref: '/summer-camp',
    nextDate: 'August 3–7, 2026',
    visual: {
      label: 'Summer Camp',
      alt: 'Math Honor Society Summer Camp',
      src: '/media/summer-camp-2026.jpg',
      tone: '#0f1a3d',
    },
  },
];
