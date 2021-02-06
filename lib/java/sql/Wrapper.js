export default class Wrapper {
    static get $javaClass() {
        return Java.type('java.sql.Wrapper');
    }
    static $isInstance(obj) {
        return obj instanceof Wrapper.$javaClass;
    }
}
