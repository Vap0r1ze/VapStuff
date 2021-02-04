export default interface Timestamp {
    after(arg0: Timestamp): boolean;
    after(arg0: any): boolean;
    before(arg0: Timestamp): boolean;
    before(arg0: any): boolean;
    clone(): any;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    compareTo(arg0: Timestamp): number;
    getDate(): number;
    getDay(): number;
    getHours(): number;
    getMinutes(): number;
    getMonth(): number;
    getNanos(): number;
    getSeconds(): number;
    getTime(): number;
    getTimezoneOffset(): number;
    getYear(): number;
    setDate(arg0: number): void;
    setHours(arg0: number): void;
    setMinutes(arg0: number): void;
    setMonth(arg0: number): void;
    setNanos(arg0: number): void;
    setSeconds(arg0: number): void;
    setTime(arg0: number): void;
    setYear(arg0: number): void;
    toGMTString(): string;
    toInstant(): any;
    toLocalDateTime(): any;
    toLocaleString(): string;
}
export default class Timestamp {
    static get $javaClass(): any;
    constructor(arg0: number);
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    static from(arg0: any): Timestamp;
    static from(arg0: any): any;
    static parse(arg0: string): number;
    static valueOf(arg0: string): Timestamp;
    static valueOf(arg0: any): Timestamp;
}
