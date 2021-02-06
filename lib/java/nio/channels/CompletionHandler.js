export default class CompletionHandler {
    static get $javaClass() {
        return Java.type('java.nio.channels.CompletionHandler');
    }
    static $isInstance(obj) {
        return obj instanceof CompletionHandler.$javaClass;
    }
}
