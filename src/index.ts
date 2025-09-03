import { Swordsman } from "./classes/jobs/Swordsman.js";
import { Magician } from "./classes/jobs/Magician.js";
import { Goblin } from "./classes/monsters/Goblin.js";

const hero = new Swordsman("剣士タロウ");
const mage = new Magician("魔術師ハナコ");
const goblin = new Goblin("ゴブリンA");

hero.attack(goblin);
mage.attack(goblin);
goblin.attack(hero);
