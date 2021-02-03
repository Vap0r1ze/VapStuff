export default class ShortBuffer {
    static get $javaClass() {
        return Java.type('java.nio.ShortBuffer');
    }
    static allocate(...args) {
        return ShortBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return ShortBuffer.$javaClass.wrap(...args);
    }
}
