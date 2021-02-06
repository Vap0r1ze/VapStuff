export default class Channel {
    static get $javaClass() {
        return Java.type('java.nio.channels.Channel');
    }
    static $isInstance(obj) {
        return obj instanceof Channel.$javaClass;
    }
}
