"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GroupPrincipal {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.GroupPrincipal');
    }
    static $isInstance(obj) {
        return obj instanceof GroupPrincipal.$javaClass;
    }
}
exports.default = GroupPrincipal;
