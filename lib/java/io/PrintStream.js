export default class PrintStream {
    static get $javaClass() {
        return Java.type('java.io.PrintStream');
    }
    static $isInstance(obj) {
        return obj instanceof PrintStream.$javaClass;
    }
    constructor(...args) {
        return new PrintStream.$javaClass(...args);
    }
}
