export default class BasicFileAttributes {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.BasicFileAttributes');
    }
    static $isInstance(obj) {
        return obj instanceof BasicFileAttributes.$javaClass;
    }
}
