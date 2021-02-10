"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Salmon {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Salmon');
    }
    static $isInstance(obj) {
        return obj instanceof Salmon.$javaClass;
    }
}
exports.default = Salmon;
