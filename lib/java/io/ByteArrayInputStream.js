export default class ByteArrayInputStream {
    static get $javaClass() {
        return Java.type('java.io.ByteArrayInputStream');
    }
    constructor(...args) {
        return new ByteArrayInputStream.$javaClass(...args);
    }
}
