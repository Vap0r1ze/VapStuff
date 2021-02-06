export default class ByteBuffer {
    static get $javaClass() {
        return Java.type('java.nio.ByteBuffer');
    }
    static $isInstance(obj) {
        return obj instanceof ByteBuffer.$javaClass;
    }
    static allocate(...args) {
        return ByteBuffer.$javaClass.allocate(...args);
    }
    static allocateDirect(...args) {
        return ByteBuffer.$javaClass.allocateDirect(...args);
    }
    static wrap(...args) {
        return ByteBuffer.$javaClass.wrap(...args);
    }
}
