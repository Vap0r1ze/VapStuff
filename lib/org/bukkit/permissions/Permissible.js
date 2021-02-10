"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Permissible {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.Permissible');
    }
    static $isInstance(obj) {
        return obj instanceof Permissible.$javaClass;
    }
}
exports.default = Permissible;
