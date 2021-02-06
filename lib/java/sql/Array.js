export default class _Array {
    static get $javaClass() {
        return Java.type('java.sql.Array');
    }
    static $isInstance(obj) {
        return obj instanceof _Array.$javaClass;
    }
}
