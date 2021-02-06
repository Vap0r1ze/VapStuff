export default class Struct {
    static get $javaClass() {
        return Java.type('java.sql.Struct');
    }
    static $isInstance(obj) {
        return obj instanceof Struct.$javaClass;
    }
}
