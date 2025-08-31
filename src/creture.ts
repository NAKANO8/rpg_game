export class Creature {
  private name: string;
  private hp: number;

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public attack(): void {
    this.hp -= 5;
    console.log("HPが5ポイント減少しました。");
  }
}