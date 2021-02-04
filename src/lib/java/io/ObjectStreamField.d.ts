export default interface ObjectStreamField {
    compareTo(arg0: any): number;
    getName(): string;
    getOffset(): number;
    getType(): any;
    getTypeCode(): string;
    getTypeString(): string;
    isPrimitive(): boolean;
    isUnshared(): boolean;
}
export default class ObjectStreamField {
    static get $javaClass(): any;
    constructor(arg0: string, arg1: any);
    constructor(arg0: string, arg1: any, arg2: boolean);
}
