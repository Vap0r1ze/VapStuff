export default class RowId {
    static get $javaClass() {
        return Java.type('java.sql.RowId');
    }
    static $isInstance(obj) {
        return obj instanceof RowId.$javaClass;
    }
}
