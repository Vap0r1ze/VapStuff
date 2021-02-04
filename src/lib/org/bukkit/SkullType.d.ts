export default interface SkullType {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class SkullType {
    static get $javaClass(): any;
    static get CREEPER(): SkullType;
    static get DRAGON(): SkullType;
    static get PLAYER(): SkullType;
    static get SKELETON(): SkullType;
    static get WITHER(): SkullType;
    static get ZOMBIE(): SkullType;
}
