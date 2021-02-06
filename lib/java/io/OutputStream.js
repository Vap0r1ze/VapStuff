export default class OutputStream {
    static get $javaClass() {
        return Java.type('java.io.OutputStream');
    }
    static $isInstance(obj) {
        return obj instanceof OutputStream.$javaClass;
    }
    constructor(...args) {
        return new OutputStream.$javaClass(...args);
    }
}
