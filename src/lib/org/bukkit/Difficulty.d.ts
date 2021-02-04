export default interface Difficulty {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    getValue(): number;
    name(): string;
    ordinal(): number;
}
export default class Difficulty {
    static get $javaClass(): any;
    static get EASY(): Difficulty;
    static get HARD(): Difficulty;
    static get NORMAL(): Difficulty;
    static get PEACEFUL(): Difficulty;
}
