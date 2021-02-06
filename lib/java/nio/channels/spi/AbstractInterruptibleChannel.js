export default class AbstractInterruptibleChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.spi.AbstractInterruptibleChannel');
    }
    static $isInstance(obj) {
        return obj instanceof AbstractInterruptibleChannel.$javaClass;
    }
}
