import File from '../../../../../java/io/File.js';
import FileFilter from '../../../../../java/io/FileFilter.js';
import FilenameFilter from '../../../../../java/io/FilenameFilter.js';
export default interface IOFileFilter extends FileFilter, FilenameFilter {
    accept(arg0: File): boolean;
    accept(arg0: File, arg1: string): boolean;
}
export default class IOFileFilter {
    static get $javaClass(): any;
}
