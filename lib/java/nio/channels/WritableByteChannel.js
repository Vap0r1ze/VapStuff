export default class WritableByteChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.WritableByteChannel');
    }
    static $isInstance(obj) {
        return obj instanceof WritableByteChannel.$javaClass;
    }
}
