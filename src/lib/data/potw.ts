export type Difficulty = 'AMC 8' | 'AMC 10' | 'AMC 12' | 'AIME' | 'Olympiad';

export interface Problem {
  id: string;
  weekOf: string;
  difficulty?: Difficulty;
  source?: string;
  statement: string;
  hint?: string;
  solution: string;
  active: boolean;
}

export const problems: Problem[] = [
  {
    id: 'potw-2026-05-25',
    weekOf: 'Week of May 12, 2026',
    statement:
      `Let $\\zeta(s)$ denote the meromorphic continuation of $\\sum_{n=1}^\\infty n^{-s}$ to $\\mathbb{C}$. Prove that $\\exists S \\subset\\left\\{z\\in\\mathbb{C}\\mid\\Re(z) = \\frac12\\right\\}$ such that $\\zeta(s) = 0$ if and only if $$s\\in\\left\\{n\\mid n\\in\\mathbb{Z}_{<0}\\wedge n\\text{ is even}\\right\\}\\cup S.$$`,
    hint:
      `Recall that the use of Hankel and keyhole contours give $\\zeta(s)=2^s\\pi^{s-1}\\sin\\left(\\frac{\\pi s}2\\right)\\Gamma(1-s)\\zeta(1-s)$.`,
    solution:
      `Due to the complexity of the problem, to avoid any pedantry, the proof is left as an exercise to the reader.`,
    active: true,
  }
];

export function getActiveProblem(): Problem {
  return problems.find(p => p.active) ?? problems[0];
}
