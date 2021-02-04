export default interface FileTime {
    compareTo(arg0: any): number;
    compareTo(arg0: FileTime): number;
    to(arg0: any): number;
    toInstant(): any;
    toMillis(): number;
}
export default class FileTime {
    static get $javaClass(): any;
    static from(arg0: any): FileTime;
    static from(arg0: number, arg1: any): FileTime;
    static fromMillis(arg0: number): FileTime;
}
