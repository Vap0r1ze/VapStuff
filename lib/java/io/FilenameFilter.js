export default class FilenameFilter {
    static get $javaClass() {
        return Java.type('java.io.FilenameFilter');
    }
    static $isInstance(obj) {
        return obj instanceof FilenameFilter.$javaClass;
    }
}
