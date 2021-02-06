export default class DataOutput {
    static get $javaClass() {
        return Java.type('java.io.DataOutput');
    }
    static $isInstance(obj) {
        return obj instanceof DataOutput.$javaClass;
    }
}
