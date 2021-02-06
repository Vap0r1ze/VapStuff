export default class ReadableByteChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.ReadableByteChannel');
    }
    static $isInstance(obj) {
        return obj instanceof ReadableByteChannel.$javaClass;
    }
}
