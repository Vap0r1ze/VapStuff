export default class FloatBuffer {
    static get $javaClass() {
        return Java.type('java.nio.FloatBuffer');
    }
    static $isInstance(obj) {
        return obj instanceof FloatBuffer.$javaClass;
    }
    static allocate(...args) {
        return FloatBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return FloatBuffer.$javaClass.wrap(...args);
    }
}
