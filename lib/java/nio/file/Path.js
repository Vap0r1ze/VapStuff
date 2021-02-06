export default class Path {
    static get $javaClass() {
        return Java.type('java.nio.file.Path');
    }
    static $isInstance(obj) {
        return obj instanceof Path.$javaClass;
    }
}
