export default class FileFilter {
    static get $javaClass() {
        return Java.type('java.io.FileFilter');
    }
    static $isInstance(obj) {
        return obj instanceof FileFilter.$javaClass;
    }
}
