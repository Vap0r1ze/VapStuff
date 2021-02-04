export default class FileOutputStream {
    static get $javaClass() {
        return Java.type('java.io.FileOutputStream');
    }
    constructor(...args) {
        return new FileOutputStream.$javaClass(...args);
    }
}
