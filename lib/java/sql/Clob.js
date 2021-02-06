export default class Clob {
    static get $javaClass() {
        return Java.type('java.sql.Clob');
    }
    static $isInstance(obj) {
        return obj instanceof Clob.$javaClass;
    }
}
