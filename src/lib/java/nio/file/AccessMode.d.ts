export default interface AccessMode {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class AccessMode {
    static get $javaClass(): any;
    static get EXECUTE(): AccessMode;
    static get READ(): AccessMode;
    static get WRITE(): AccessMode;
}
