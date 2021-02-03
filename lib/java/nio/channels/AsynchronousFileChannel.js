export default class AsynchronousFileChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.AsynchronousFileChannel');
    }
    static open(...args) {
        return AsynchronousFileChannel.$javaClass.open(...args);
    }
}
