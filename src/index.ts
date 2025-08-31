import { Creature } from "./creture.js";

const slime = new Creature("スライム", 100);

console.log(slime.getName()); // スライム
slime.attack();               // HPが5ポイント減少しました。
console.log(slime.getName()); // スライム
