import type { DecipherGCM } from "crypto";
import type { Attackable } from "../interfaces/Attackable.js";

export abstract class BaseActor implements Attackable {
  protected _name: string;
  protected _hp: number;
  protected _dmg: number;

  constructor(name: string, hp: number, dmg: number) {
    this._name = name;
    this._hp = hp;
    this._dmg = dmg;
  }

  get name(): string {
    return this._name;
  }

  get hp(): number {
    return this._hp;
  }

  isAlive(): boolean {
    return this._hp > 0;
  }

  takeDamage(amount: number): void {
    const prev = this._hp;
    this._hp = Math.max(0, this._hp - amount);
    console.log(
      `${this.name} は ${amount} ダメージを受けた！（${prev} → ${this._hp} HP）`
    );
    if (!this.isAlive()) {
      console.log(`${this.name} は倒れた…`);
    }
  }
}