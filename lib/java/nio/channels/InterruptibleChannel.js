export default class InterruptibleChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.InterruptibleChannel');
    }
    static $isInstance(obj) {
        return obj instanceof InterruptibleChannel.$javaClass;
    }
}
