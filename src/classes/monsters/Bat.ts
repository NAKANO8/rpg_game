import { Monster } from "./Monster.js"
import type { Attackable } from "../../interfaces/Attackable.js";

export class Bat extends Monster {
  attack(target: Attackable): void {
    const dmg = 3;
    console.log(`🦇 ${this.name}（こうもり）の超音波！`);
    target.takeDamage(dmg);
  }
}