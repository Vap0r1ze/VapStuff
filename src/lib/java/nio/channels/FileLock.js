export default class FileLock {
    static get $javaClass() {
        return Java.type('java.nio.channels.FileLock');
    }
}
