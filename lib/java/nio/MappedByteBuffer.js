export default class MappedByteBuffer {
    static get $javaClass() {
        return Java.type('java.nio.MappedByteBuffer');
    }
    static allocate(...args) {
        return MappedByteBuffer.$javaClass.allocate(...args);
    }
    static allocateDirect(...args) {
        return MappedByteBuffer.$javaClass.allocateDirect(...args);
    }
    static wrap(...args) {
        return MappedByteBuffer.$javaClass.wrap(...args);
    }
}
