import type { Attackable } from "../../interfaces/Attackable.js";
import { Job } from "./Job.js";

export class Swordsman extends Job {
  attack(target: Attackable): void {
    // 剣士は安定した近接ダメージ
    const dmg = 8;
    console.log(`🗡️ ${this.name}（剣士）の斬撃！`);
    target.takeDamage(dmg);
  }
}