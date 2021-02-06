export default class CharsetEncoder {
    static get $javaClass() {
        return Java.type('java.nio.charset.CharsetEncoder');
    }
    static $isInstance(obj) {
        return obj instanceof CharsetEncoder.$javaClass;
    }
}
