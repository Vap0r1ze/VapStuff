export default class ByteArrayDataOutput {
    static get $javaClass() {
        return Java.type('com.google.common.io.ByteArrayDataOutput');
    }
    static $isInstance(obj) {
        return obj instanceof ByteArrayDataOutput.$javaClass;
    }
}
