"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Squid {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Squid');
    }
    static $isInstance(obj) {
        return obj instanceof Squid.$javaClass;
    }
}
exports.default = Squid;
