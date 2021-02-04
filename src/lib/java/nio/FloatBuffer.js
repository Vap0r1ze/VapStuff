export default class FloatBuffer {
    static get $javaClass() {
        return Java.type('java.nio.FloatBuffer');
    }
    static allocate(...args) {
        return FloatBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return FloatBuffer.$javaClass.wrap(...args);
    }
}
