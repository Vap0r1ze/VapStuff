"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mob {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Mob');
    }
    static $isInstance(obj) {
        return obj instanceof Mob.$javaClass;
    }
}
exports.default = Mob;
