"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dolphin {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Dolphin');
    }
    static $isInstance(obj) {
        return obj instanceof Dolphin.$javaClass;
    }
}
exports.default = Dolphin;
