import type { Attackable } from "../../interfaces/Attackable.js";
import type { Creature } from "../../interfaces/Creature.ts";
import { BaseActor } from "../BaseActer.js";

/** 職業クラス: hp, name, sit() を持つ。Creature を実装 */
export class Job extends BaseActor implements Creature {
  // デフォルト攻撃（派生クラスでオーバーライド想定）
  attack(target: Attackable): void {
    const dmg = 5;
    console.log(`${this.name} の攻撃！`);
    target.takeDamage(dmg);
  }

  // 休む（座る）ことでHP回復
  sit(): void {
    const heal = 5;
    const prev = this._hp;
    this._hp += heal;
    console.log(`${this.name} は座って体力回復！（${prev} → ${this._hp} HP）`);
  }
}