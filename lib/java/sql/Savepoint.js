export default class Savepoint {
    static get $javaClass() {
        return Java.type('java.sql.Savepoint');
    }
    static $isInstance(obj) {
        return obj instanceof Savepoint.$javaClass;
    }
}
