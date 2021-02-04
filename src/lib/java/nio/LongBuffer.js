export default class LongBuffer {
    static get $javaClass() {
        return Java.type('java.nio.LongBuffer');
    }
    static allocate(...args) {
        return LongBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return LongBuffer.$javaClass.wrap(...args);
    }
}
