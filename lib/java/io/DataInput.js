export default class DataInput {
    static get $javaClass() {
        return Java.type('java.io.DataInput');
    }
    static $isInstance(obj) {
        return obj instanceof DataInput.$javaClass;
    }
}
