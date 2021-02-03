export default class IntBuffer {
    static get $javaClass() {
        return Java.type('java.nio.IntBuffer');
    }
    static allocate(...args) {
        return IntBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return IntBuffer.$javaClass.wrap(...args);
    }
}
