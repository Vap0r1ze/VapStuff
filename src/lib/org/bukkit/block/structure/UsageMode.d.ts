export default interface UsageMode {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class UsageMode {
    static get $javaClass(): any;
    static get CORNER(): UsageMode;
    static get DATA(): UsageMode;
    static get LOAD(): UsageMode;
    static get SAVE(): UsageMode;
}
