export default class UserPrincipal {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.UserPrincipal');
    }
}
