export default interface CoderResult {
    isError(): boolean;
    isMalformed(): boolean;
    isOverflow(): boolean;
    isUnderflow(): boolean;
    isUnmappable(): boolean;
    length(): number;
    throwException(): void;
}
export default class CoderResult {
    static get $javaClass(): any;
    static get OVERFLOW(): CoderResult;
    static get UNDERFLOW(): CoderResult;
    static malformedForLength(arg0: number): CoderResult;
    static unmappableForLength(arg0: number): CoderResult;
}
