export default class WatchEvent$Kind {
    static get $javaClass() {
        return Java.type('java.nio.file.WatchEvent$Kind');
    }
    static $isInstance(obj) {
        return obj instanceof WatchEvent$Kind.$javaClass;
    }
}
