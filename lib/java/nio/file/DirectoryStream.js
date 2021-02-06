export default class DirectoryStream {
    static get $javaClass() {
        return Java.type('java.nio.file.DirectoryStream');
    }
    static $isInstance(obj) {
        return obj instanceof DirectoryStream.$javaClass;
    }
}
