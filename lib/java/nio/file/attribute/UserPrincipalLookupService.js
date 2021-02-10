"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserPrincipalLookupService {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.UserPrincipalLookupService');
    }
    static $isInstance(obj) {
        return obj instanceof UserPrincipalLookupService.$javaClass;
    }
}
exports.default = UserPrincipalLookupService;
