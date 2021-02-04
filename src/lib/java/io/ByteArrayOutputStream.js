export default class ByteArrayOutputStream {
    static get $javaClass() {
        return Java.type('java.io.ByteArrayOutputStream');
    }
    constructor(...args) {
        return new ByteArrayOutputStream.$javaClass(...args);
    }
}
