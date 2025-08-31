import { Swordsman } from "./classes/jobs/Swordsman.js";
import { Magician } from "./classes/jobs/Magician.js";
import { Goblin } from "./classes/monsters/Goblin.js";

const hero = new Swordsman("剣士タロウ", 30);
const mage = new Magician("魔術師ハナコ", 25);
const goblin = new Goblin("ゴブリンA", 20);

hero.attack(goblin);
mage.attack(goblin);
goblin.attack(hero);
