export default class CharBuffer {
    static get $javaClass() {
        return Java.type('java.nio.CharBuffer');
    }
    static allocate(...args) {
        return CharBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return CharBuffer.$javaClass.wrap(...args);
    }
}
