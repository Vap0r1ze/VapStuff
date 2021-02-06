export default class Blob {
    static get $javaClass() {
        return Java.type('java.sql.Blob');
    }
    static $isInstance(obj) {
        return obj instanceof Blob.$javaClass;
    }
}
