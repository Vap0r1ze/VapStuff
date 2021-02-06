export default class AttributeView {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.AttributeView');
    }
    static $isInstance(obj) {
        return obj instanceof AttributeView.$javaClass;
    }
}
