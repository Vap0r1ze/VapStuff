export default class WatchService {
    static get $javaClass() {
        return Java.type('java.nio.file.WatchService');
    }
}
