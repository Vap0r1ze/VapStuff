export default class FileSystem {
    static get $javaClass() {
        return Java.type('java.nio.file.FileSystem');
    }
}
