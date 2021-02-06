export default class LongBuffer {
    static get $javaClass() {
        return Java.type('java.nio.LongBuffer');
    }
    static $isInstance(obj) {
        return obj instanceof LongBuffer.$javaClass;
    }
    static allocate(...args) {
        return LongBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return LongBuffer.$javaClass.wrap(...args);
    }
}
