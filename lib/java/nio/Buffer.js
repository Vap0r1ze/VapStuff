export default class Buffer {
    static get $javaClass() {
        return Java.type('java.nio.Buffer');
    }
    static $isInstance(obj) {
        return obj instanceof Buffer.$javaClass;
    }
}
