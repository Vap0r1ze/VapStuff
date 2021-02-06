export default class FileOutputStream {
    static get $javaClass() {
        return Java.type('java.io.FileOutputStream');
    }
    static $isInstance(obj) {
        return obj instanceof FileOutputStream.$javaClass;
    }
    constructor(...args) {
        return new FileOutputStream.$javaClass(...args);
    }
}
