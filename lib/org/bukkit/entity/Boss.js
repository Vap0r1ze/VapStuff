"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Boss {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Boss');
    }
    static $isInstance(obj) {
        return obj instanceof Boss.$javaClass;
    }
}
exports.default = Boss;
