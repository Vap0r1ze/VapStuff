export default class AsynchronousFileChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.AsynchronousFileChannel');
    }
    static $isInstance(obj) {
        return obj instanceof AsynchronousFileChannel.$javaClass;
    }
    static open(...args) {
        return AsynchronousFileChannel.$javaClass.open(...args);
    }
}
