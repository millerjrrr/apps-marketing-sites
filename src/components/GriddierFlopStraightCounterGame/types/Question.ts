import type { CardIndex } from "./CardIndex";

export type Question = {
  id: number;
  cards: [CardIndex, CardIndex, CardIndex, CardIndex, CardIndex];
  correctAnswer: 0 | 1 | 2 | 3 | 4 | 5;
};
