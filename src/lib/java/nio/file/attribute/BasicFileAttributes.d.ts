import FileTime from './FileTime.js';
export default interface BasicFileAttributes {
    creationTime(): FileTime;
    fileKey(): any;
    isDirectory(): boolean;
    isOther(): boolean;
    isRegularFile(): boolean;
    isSymbolicLink(): boolean;
    lastAccessTime(): FileTime;
    lastModifiedTime(): FileTime;
    size(): number;
}
export default class BasicFileAttributes {
    static get $javaClass(): any;
}
