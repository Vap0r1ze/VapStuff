export default class GatheringByteChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.GatheringByteChannel');
    }
    static $isInstance(obj) {
        return obj instanceof GatheringByteChannel.$javaClass;
    }
}
