export default class SQLXML {
    static get $javaClass() {
        return Java.type('java.sql.SQLXML');
    }
    static $isInstance(obj) {
        return obj instanceof SQLXML.$javaClass;
    }
}
