import type { Attackable } from "./Attackable.js";

export interface Creature {
  attack(target: Attackable): void;
}