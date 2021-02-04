export default class FileChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.FileChannel');
    }
    static open(...args) {
        return FileChannel.$javaClass.open(...args);
    }
}
