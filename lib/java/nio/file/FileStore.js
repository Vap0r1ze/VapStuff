export default class FileStore {
    static get $javaClass() {
        return Java.type('java.nio.file.FileStore');
    }
    static $isInstance(obj) {
        return obj instanceof FileStore.$javaClass;
    }
}
