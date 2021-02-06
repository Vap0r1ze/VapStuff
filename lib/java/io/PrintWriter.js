export default class PrintWriter {
    static get $javaClass() {
        return Java.type('java.io.PrintWriter');
    }
    static $isInstance(obj) {
        return obj instanceof PrintWriter.$javaClass;
    }
    constructor(...args) {
        return new PrintWriter.$javaClass(...args);
    }
}
