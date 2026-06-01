export interface Officer {
  id: string;
  name: string;
  role: string;
  grade?: number;
  bio?: string;
  photoUrl?: string;
  email?: string;
}

export interface PastOfficer {
  name: string;
  role: string;
  gradYear: number;
}

export const currentOfficers: Officer[] = [
  { id: 'president-1', name: 'Sohum Uttamchandani', role: 'President' },
  { id: 'president-2', name: 'Abhigyan Singh', role: 'President' },
  { id: 'vp-1', name: 'Tianlin Liu', role: 'Vice President' },
  { id: 'vp-2', name: 'Tanish Kolhe', role: 'Vice President' },
  { id: 'treasurer', name: 'Nitin Vaka', role: 'Treasurer' },
  { id: 'secretary-1', name: 'Steven Xia', role: 'Secretary & Operations' },
  { id: 'secretary-2', name: 'Benjamin Oh', role: 'Secretary & Operations' },
  { id: 'pr', name: 'Catherine Jian', role: 'Public Relations Officer' },
  { id: 'tech', name: 'Mason Shu', role: 'Tech Officer' },
  { id: 'counsel', name: 'Benjamin Zhang', role: 'Counsel & Mentor' },
];

export const pastOfficers: PastOfficer[] = [
  { name: 'Alice', role: 'President', gradYear: 2026 },
  { name: 'Bob', role: 'Vice President', gradYear: 2026 },
  { name: 'Carl', role: 'Secretary', gradYear: 2026 },
  { name: 'David', role: 'Treasurer', gradYear: 2026 },
];

export function groupByGradYear(officers: PastOfficer[]): Map<number, PastOfficer[]> {
  const map = new Map<number, PastOfficer[]>();
  for (const o of officers) {
    if (!map.has(o.gradYear)) map.set(o.gradYear, []);
    map.get(o.gradYear)!.push(o);
  }
  return new Map([...map.entries()].sort((a, b) => b[0] - a[0]));
}
