import type { Creature } from "../../interfaces/Creature.ts";
import { BaseActor } from "../BaseActer.js";
import type { Attackable } from "../../interfaces/Attackable.js";

/** モンスタークラス: run() を持つ。Creature を実装 */
export class Monster extends BaseActor implements Creature {
  constructor(name: string) {
    super(name,50,5);
  }
  attack(target: Attackable): void {
    const dmg = 4;
    console.log(`${this.name} の攻撃！`);
    target.takeDamage(dmg);
  }

  run(): void {
    console.log(`${this.name} は逃げ出した！`);
  }
}