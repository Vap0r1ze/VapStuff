export default interface Version {
    compareTo(arg0: any): number;
    compareTo(other: Version): number;
    getBuild(): number;
    getMajor(): number;
    getMinor(): number;
    getVersion(): string;
    isAfter(other: Version): boolean;
    isAfterOrEq(other: Version): boolean;
    isBefore(other: Version): boolean;
    isBeforeOrEq(other: Version): boolean;
    isBetween(o1: Version, o2: Version): boolean;
}
export default class Version {
    static get $javaClass(): any;
    constructor(major: number, minor: number, build: number, $constructor_marker: any);
    static access$getCOMPARATOR$cp(): any;
    static getCOMPARATOR(): any;
    static of(major: number, minor: number, build: number): Version;
    static parse(version: string): Version;
}
