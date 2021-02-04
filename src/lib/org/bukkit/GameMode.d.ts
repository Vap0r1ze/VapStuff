export default interface GameMode {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    getValue(): number;
    name(): string;
    ordinal(): number;
}
export default class GameMode {
    static get $javaClass(): any;
    static get ADVENTURE(): GameMode;
    static get CREATIVE(): GameMode;
    static get SPECTATOR(): GameMode;
    static get SURVIVAL(): GameMode;
}
