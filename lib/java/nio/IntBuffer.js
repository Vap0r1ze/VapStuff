export default class IntBuffer {
    static get $javaClass() {
        return Java.type('java.nio.IntBuffer');
    }
    static $isInstance(obj) {
        return obj instanceof IntBuffer.$javaClass;
    }
    static allocate(...args) {
        return IntBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return IntBuffer.$javaClass.wrap(...args);
    }
}
