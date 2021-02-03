export default class FileTime {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.FileTime');
    }
    static from(...args) {
        return FileTime.$javaClass.from(...args);
    }
    static fromMillis(...args) {
        return FileTime.$javaClass.fromMillis(...args);
    }
}
