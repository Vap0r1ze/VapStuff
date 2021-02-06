export default class ObjectStreamField {
    static get $javaClass() {
        return Java.type('java.io.ObjectStreamField');
    }
    static $isInstance(obj) {
        return obj instanceof ObjectStreamField.$javaClass;
    }
    constructor(...args) {
        return new ObjectStreamField.$javaClass(...args);
    }
}
