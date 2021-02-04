export default class FileChannel$MapMode {
    static get $javaClass() {
        return Java.type('java.nio.channels.FileChannel$MapMode');
    }
    static get PRIVATE() {
        return FileChannel$MapMode.$javaClass.PRIVATE;
    }
    static get READ_ONLY() {
        return FileChannel$MapMode.$javaClass.READ_ONLY;
    }
    static get READ_WRITE() {
        return FileChannel$MapMode.$javaClass.READ_WRITE;
    }
}
