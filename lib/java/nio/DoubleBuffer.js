export default class DoubleBuffer {
    static get $javaClass() {
        return Java.type('java.nio.DoubleBuffer');
    }
    static $isInstance(obj) {
        return obj instanceof DoubleBuffer.$javaClass;
    }
    static allocate(...args) {
        return DoubleBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return DoubleBuffer.$javaClass.wrap(...args);
    }
}
