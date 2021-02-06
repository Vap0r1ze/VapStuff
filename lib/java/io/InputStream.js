export default class InputStream {
    static get $javaClass() {
        return Java.type('java.io.InputStream');
    }
    static $isInstance(obj) {
        return obj instanceof InputStream.$javaClass;
    }
    constructor(...args) {
        return new InputStream.$javaClass(...args);
    }
}
