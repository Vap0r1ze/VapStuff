export default interface Damageable {
    clone(): Damageable;
    clone(): any;
    getDamage(): number;
    hasDamage(): boolean;
    setDamage(arg0: number): void;
}
export default class Damageable {
    static get $javaClass(): any;
}
