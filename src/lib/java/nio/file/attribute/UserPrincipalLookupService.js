export default class UserPrincipalLookupService {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.UserPrincipalLookupService');
    }
}
