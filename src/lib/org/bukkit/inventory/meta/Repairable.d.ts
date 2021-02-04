export default interface Repairable {
    clone(): Repairable;
    clone(): any;
    getRepairCost(): number;
    hasRepairCost(): boolean;
    setRepairCost(arg0: number): void;
}
export default class Repairable {
    static get $javaClass(): any;
}
