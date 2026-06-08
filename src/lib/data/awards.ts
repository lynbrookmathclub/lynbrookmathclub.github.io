export interface CompetitionResult {
  id: string;
  competition: string;
  year: number;
  placement?: string;
  summary: string;
  highlights: string[];
  category: 'tournament' | 'program';
}

export const results: CompetitionResult[] = [
  {
    id: 'bmt-2026',
    competition: 'Berkeley Math Tournament',
    year: 2026,
    placement: '3rd Place Overall',
    category: 'tournament',
    summary: 'Lynbrook sent 6 teams to BMT 2025 and came away with strong team and individual finishes across multiple subjects.',
    highlights: [
      'Team awards: 2nd Place in Guts and 3rd Place Overall',
      'General: Sophia Fan 10th; DHM for Derek Hu, Mason Shu, Kevin Zhu, Kartik Gudapati; HM for Wenbo Xi, Wenyuan Xi, Astin Zhou, Alber Wu, Ashmit Arasada, Vishwesh Chinthukumar',
      'Algebra: Sohum Uttamchandani 3rd; DHM for Nitin Reddy Vaka, Ryan Wang, Benjamin Zhang, Abhigyan Singh, Tianlin Liu, Henry Wang, Yunfei Xia; HM for Evan Gai, Vincent Qin, Sungrok Kim, Zhaitong Wang, Jasmine Lien, Yutong Qiu',
      'Calculus: DHM for Ryan Wang; HM for Vincent Qin and Evan Liu',
      'Discrete: Sohum Uttamchandani 1st; DHM for Nitin Reddy Vaka and Ben Oh; HM for Benjamin Zhang and Zhaitong Wang',
      'Geometry: Ben Oh 8th; DHM for Tianlin Liu, Henry Wang, Tanish Kolhe, Yunfei Xia; HM for Yutong Qiu and Evan Liu',
    ],
  },
  {
    id: 'smt-2026',
    competition: 'Stanford Math Tournament',
    year: 2026,
    placement: '7th Place (Watergirl)',
    category: 'tournament',
    summary: 'Lynbrook sent 2 teams to SMT 2026 and earned multiple overall and subject awards.',
    highlights: [
      'Watergirl: 7th overall, Power DHM, Team DHM, Guts 10th',
      'Fireboy: Overall DHM, Power HM, Team DHM, Guts 8th',
      'Algebra: DHM for Sohil Rathi, Abhigyan Singh, Benjamin Oh, Benjamin Zhang, Nitin Reddy Vaka; HM for Tianlin Liu, Ishaan Mittal, Ryan Wang',
      'Discrete: DHM for Sohil Rathi and Benjamin Zhang; HM for Matthew Yuan',
      'Calculus: Sohum Uttamchandani 7th; HM for Matthew Yuan and Ryan Wang',
      'Geometry: Abhigyan Singh 6th; DHM for Ishaan Mittal and Sohum Uttamchandani; HM for Tianlin Liu and Steven Xia',
    ],
  },
  {
    id: 'smt-online-2026',
    competition: 'Stanford Math Tournament (Online)',
    year: 2026,
    category: 'tournament',
    summary: 'Lynbrook sent 3 teams to SMT Online 2026 and picked up strong team results across all three rosters.',
    highlights: [
      'Charmander: Power DHM, Team DHM, Guts DHM',
      'Bulbasaur: Power DHM, Team HM, Guts HM',
      'Squirtle: Power DHM, Team DHM, Guts DHM',
      'General: Alber Wu 10th; DHM for Roy Kim; HM for Ashmit Arasada',
      'Calculus: HM for Geonwoo Kim',
      'Algebra: DHM for Tommy Wang; HM for Wesley Shen',
    ],
  },
  {
    id: 'mathcounts-2026',
    competition: 'MATHCOUNTS (Miller Middle School)',
    year: 2026,
    placement: '2nd Place Nationals',
    category: 'program',
    summary: 'Through our tutoring program, Miller Middle School achieved a complete sweep of the pipeline from chapter to nationals.',
    highlights: [
      '1st Place at Chapter',
      '1st Place at States',
      '2nd Place at Nationals',
      'Thanks to everyone who wrote TSTs, taught, and graded during the season',
    ],
  }
];
