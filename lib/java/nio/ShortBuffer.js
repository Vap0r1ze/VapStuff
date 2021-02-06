export default class ShortBuffer {
    static get $javaClass() {
        return Java.type('java.nio.ShortBuffer');
    }
    static $isInstance(obj) {
        return obj instanceof ShortBuffer.$javaClass;
    }
    static allocate(...args) {
        return ShortBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return ShortBuffer.$javaClass.wrap(...args);
    }
}
