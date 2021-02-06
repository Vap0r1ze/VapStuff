export default class NClob {
    static get $javaClass() {
        return Java.type('java.sql.NClob');
    }
    static $isInstance(obj) {
        return obj instanceof NClob.$javaClass;
    }
}
