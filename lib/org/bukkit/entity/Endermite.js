"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Endermite {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Endermite');
    }
    static $isInstance(obj) {
        return obj instanceof Endermite.$javaClass;
    }
}
exports.default = Endermite;
