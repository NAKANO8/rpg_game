import type { Attackable } from "../../interfaces/Attackable.js";
import { Job } from "./Job.js";

export class Magician extends Job {
  attack(target: Attackable): void {
    // 魔術師は高火力だがMP等は今回は省略
    const dmg = 10;
    console.log(`✨ ${this.name}（魔術師）のファイア！`);
    target.takeDamage(dmg);
  }
}