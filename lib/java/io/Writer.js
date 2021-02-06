export default class Writer {
    static get $javaClass() {
        return Java.type('java.io.Writer');
    }
    static $isInstance(obj) {
        return obj instanceof Writer.$javaClass;
    }
}
