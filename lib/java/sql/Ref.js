export default class Ref {
    static get $javaClass() {
        return Java.type('java.sql.Ref');
    }
    static $isInstance(obj) {
        return obj instanceof Ref.$javaClass;
    }
}
