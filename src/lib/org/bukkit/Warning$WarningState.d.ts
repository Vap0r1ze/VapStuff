import Warning from './Warning.js';
export default interface Warning$WarningState {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
    printFor(warning: Warning): boolean;
}
export default class Warning$WarningState {
    static get $javaClass(): any;
    static get DEFAULT(): Warning$WarningState;
    static get OFF(): Warning$WarningState;
    static get ON(): Warning$WarningState;
}
