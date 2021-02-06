export default class Closeable {
    static get $javaClass() {
        return Java.type('java.io.Closeable');
    }
    static $isInstance(obj) {
        return obj instanceof Closeable.$javaClass;
    }
}
