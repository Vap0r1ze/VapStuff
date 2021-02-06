export default class ByteChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.ByteChannel');
    }
    static $isInstance(obj) {
        return obj instanceof ByteChannel.$javaClass;
    }
}
