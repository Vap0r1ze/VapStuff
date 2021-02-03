export default class FileSystemProvider {
    static get $javaClass() {
        return Java.type('java.nio.file.spi.FileSystemProvider');
    }
    static installedProviders(...args) {
        return FileSystemProvider.$javaClass.installedProviders(...args);
    }
}
