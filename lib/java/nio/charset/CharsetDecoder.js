export default class CharsetDecoder {
    static get $javaClass() {
        return Java.type('java.nio.charset.CharsetDecoder');
    }
    static $isInstance(obj) {
        return obj instanceof CharsetDecoder.$javaClass;
    }
}
