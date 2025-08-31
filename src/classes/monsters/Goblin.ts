import type { Attackable } from "../../interfaces/Attackable.js";
import { Monster } from "./Monster.js"

/** --- モンスターの派生 --- */
export class Goblin extends Monster {
  attack(target: Attackable): void {
    const dmg = 6;
    console.log(`👺 ${this.name}（ゴブリン）の棍棒攻撃！`);
    target.takeDamage(dmg);
  }
}