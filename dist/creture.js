export class Creature {
    name;
    hp;
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    attack() {
        this.hp -= 5;
        console.log("HPが5ポイント減少しました。");
    }
}
//# sourceMappingURL=creture.js.map