export default class OpenOption {
    static get $javaClass() {
        return Java.type('java.nio.file.OpenOption');
    }
    static $isInstance(obj) {
        return obj instanceof OpenOption.$javaClass;
    }
}
