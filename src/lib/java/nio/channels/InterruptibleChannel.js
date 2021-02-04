export default class InterruptibleChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.InterruptibleChannel');
    }
}
