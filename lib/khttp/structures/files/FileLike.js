export default class FileLike {
    static get $javaClass() {
        return Java.type('khttp.structures.files.FileLike');
    }
    static $isInstance(obj) {
        return obj instanceof FileLike.$javaClass;
    }
    constructor(...args) {
        return new FileLike.$javaClass(...args);
    }
}
