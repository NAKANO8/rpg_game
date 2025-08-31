export interface Attackable {
  readonly name: string;
  isAlive(): boolean;
  takeDamage(amount: number): void;
}