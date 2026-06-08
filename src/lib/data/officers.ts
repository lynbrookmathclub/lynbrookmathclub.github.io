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

export function formatGradYearRange(gradYear: number): string {
  return `${gradYear - 1}-${gradYear}`;
}

export const currentOfficers: Officer[] = [
  { id: 'president-1', name: 'Sohum Uttamchandani', role: 'President' },
  { id: 'president-2', name: 'Abhigyan Singh', role: 'President' },
  { id: 'vp-1', name: 'Tianlin Liu', role: 'Vice President' },
  { id: 'vp-2', name: 'Tanish Kolhe', role: 'Vice President' },
  { id: 'treasurer', name: 'Nitin Reddy Vaka', role: 'Treasurer' },
  { id: 'secretary-1', name: 'Steven Xia', role: 'Secretary & Operations' },
  { id: 'secretary-2', name: 'Benjamin Oh', role: 'Secretary & Operations' },
  { id: 'pr', name: 'Catherine Jian', role: 'Public Relations Officer' },
  { id: 'tech', name: 'Mason Shu', role: 'Tech Officer' },
  { id: 'counsel', name: 'Benjamin Zhang', role: 'Counsel & Mentor' },
];

export const pastOfficers: PastOfficer[] = [
  { name: 'Benjamin Zhang', role: 'President', gradYear: 2026 },
  { name: 'Mia Liu', role: 'President', gradYear: 2026 },
  { name: 'Sohum Uttamchandani', role: 'Vice President', gradYear: 2026 },
  { name: 'Abhigyan Singh', role: 'Vice President', gradYear: 2026 },
  { name: 'Tianlin Liu', role: 'Treasurer', gradYear: 2026 },
  { name: 'Steven Xia', role: 'Secretary', gradYear: 2026 },
  { name: 'Brian Xue', role: 'President', gradYear: 2025 },
  { name: 'Daniel Kim', role: 'President', gradYear: 2025 },
  { name: 'Mia Liu', role: 'Vice President', gradYear: 2025 },
  { name: 'Sanya Badhe', role: 'Vice President', gradYear: 2025 },
  { name: 'Sohum Uttamchandani', role: 'Treasurer', gradYear: 2025 },
  { name: 'Benjamin Zhang', role: 'Secretary', gradYear: 2025 },
  { name: 'Ryan Bansal', role: 'Public Relations Officer', gradYear: 2025 },
  { name: 'Neel Kolhe', role: 'President', gradYear: 2024 },
  { name: 'Brian Xue', role: 'Vice President', gradYear: 2024 },
  { name: 'Daniel Kim', role: 'Vice President', gradYear: 2024 },
  { name: 'Sanya Badhe', role: 'Treasurer', gradYear: 2024 },
  { name: 'Mia Liu', role: 'Secretary', gradYear: 2024 },
];

export function groupByGradYear(officers: PastOfficer[]): Map<number, PastOfficer[]> {
  const map = new Map<number, PastOfficer[]>();
  for (const o of officers) {
    if (!map.has(o.gradYear)) map.set(o.gradYear, []);
    map.get(o.gradYear)!.push(o);
  }
  return new Map([...map.entries()].sort((a, b) => b[0] - a[0]));
}
