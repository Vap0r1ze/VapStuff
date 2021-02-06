export default class CopyOption {
    static get $javaClass() {
        return Java.type('java.nio.file.CopyOption');
    }
    static $isInstance(obj) {
        return obj instanceof CopyOption.$javaClass;
    }
}
