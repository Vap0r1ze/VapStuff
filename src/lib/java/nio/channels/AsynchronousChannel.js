export default class AsynchronousChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.AsynchronousChannel');
    }
}
