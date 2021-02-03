export default class Path {
    static get $javaClass() {
        return Java.type('java.nio.file.Path');
    }
    static of(...args) {
        return Path.$javaClass.of(...args);
    }
}
