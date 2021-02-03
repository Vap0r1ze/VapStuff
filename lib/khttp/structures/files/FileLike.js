export default class FileLike {
    static get $javaClass() {
        return Java.type('khttp.structures.files.FileLike');
    }
    constructor(...args) {
        return new FileLike.$javaClass(...args);
    }
}
