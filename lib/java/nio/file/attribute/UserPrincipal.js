export default class UserPrincipal {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.UserPrincipal');
    }
    static $isInstance(obj) {
        return obj instanceof UserPrincipal.$javaClass;
    }
}
