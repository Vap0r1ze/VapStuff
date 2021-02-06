export default class FileAttributeView {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.FileAttributeView');
    }
    static $isInstance(obj) {
        return obj instanceof FileAttributeView.$javaClass;
    }
}
