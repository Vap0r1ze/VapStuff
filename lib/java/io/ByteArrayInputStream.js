export default class ByteArrayInputStream {
    static get $javaClass() {
        return Java.type('java.io.ByteArrayInputStream');
    }
    static $isInstance(obj) {
        return obj instanceof ByteArrayInputStream.$javaClass;
    }
    constructor(...args) {
        return new ByteArrayInputStream.$javaClass(...args);
    }
}
