export default class FileStoreAttributeView {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.FileStoreAttributeView');
    }
    static $isInstance(obj) {
        return obj instanceof FileStoreAttributeView.$javaClass;
    }
}
