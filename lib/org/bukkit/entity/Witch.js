"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Witch {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Witch');
    }
    static $isInstance(obj) {
        return obj instanceof Witch.$javaClass;
    }
}
exports.default = Witch;
