export default class ObjectOutput {
    static get $javaClass() {
        return Java.type('java.io.ObjectOutput');
    }
    static $isInstance(obj) {
        return obj instanceof ObjectOutput.$javaClass;
    }
}
