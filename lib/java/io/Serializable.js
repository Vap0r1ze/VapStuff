export default class Serializable {
    static get $javaClass() {
        return Java.type('java.io.Serializable');
    }
    static $isInstance(obj) {
        return obj instanceof Serializable.$javaClass;
    }
}
