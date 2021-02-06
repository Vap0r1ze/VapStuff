export default class WatchService {
    static get $javaClass() {
        return Java.type('java.nio.file.WatchService');
    }
    static $isInstance(obj) {
        return obj instanceof WatchService.$javaClass;
    }
}
