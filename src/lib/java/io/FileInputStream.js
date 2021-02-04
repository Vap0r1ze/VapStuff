export default class FileInputStream {
    static get $javaClass() {
        return Java.type('java.io.FileInputStream');
    }
    constructor(...args) {
        return new FileInputStream.$javaClass(...args);
    }
}
