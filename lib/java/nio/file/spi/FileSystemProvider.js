export default class FileSystemProvider {
    static get $javaClass() {
        return Java.type('java.nio.file.spi.FileSystemProvider');
    }
    static $isInstance(obj) {
        return obj instanceof FileSystemProvider.$javaClass;
    }
    static installedProviders(...args) {
        return FileSystemProvider.$javaClass.installedProviders(...args);
    }
}
