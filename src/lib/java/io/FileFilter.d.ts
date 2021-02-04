import File from './File.js';
export default interface FileFilter {
    accept(arg0: File): boolean;
}
export default class FileFilter {
    static get $javaClass(): any;
}
