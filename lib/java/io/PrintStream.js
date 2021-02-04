export default class PrintStream {
    static get $javaClass() {
        return Java.type('java.io.PrintStream');
    }
    constructor(...args) {
        return new PrintStream.$javaClass(...args);
    }
}
