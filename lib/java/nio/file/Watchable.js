export default class Watchable {
    static get $javaClass() {
        return Java.type('java.nio.file.Watchable');
    }
    static $isInstance(obj) {
        return obj instanceof Watchable.$javaClass;
    }
}
