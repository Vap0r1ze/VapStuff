export default class GroupPrincipal {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.GroupPrincipal');
    }
    static $isInstance(obj) {
        return obj instanceof GroupPrincipal.$javaClass;
    }
}
