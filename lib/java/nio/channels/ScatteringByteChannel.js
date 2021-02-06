export default class ScatteringByteChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.ScatteringByteChannel');
    }
    static $isInstance(obj) {
        return obj instanceof ScatteringByteChannel.$javaClass;
    }
}
