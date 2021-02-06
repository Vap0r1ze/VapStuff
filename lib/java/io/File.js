export default class File {
    static get $javaClass() {
        return Java.type('java.io.File');
    }
    static $isInstance(obj) {
        return obj instanceof File.$javaClass;
    }
    constructor(...args) {
        return new File.$javaClass(...args);
    }
    static get pathSeparator() {
        return File.$javaClass.pathSeparator;
    }
    static get pathSeparatorChar() {
        return File.$javaClass.pathSeparatorChar;
    }
    static get separator() {
        return File.$javaClass.separator;
    }
    static get separatorChar() {
        return File.$javaClass.separatorChar;
    }
    static createTempFile(...args) {
        return File.$javaClass.createTempFile(...args);
    }
    static listRoots(...args) {
        return File.$javaClass.listRoots(...args);
    }
}
