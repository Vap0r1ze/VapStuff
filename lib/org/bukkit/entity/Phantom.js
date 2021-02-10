"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Phantom {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Phantom');
    }
    static $isInstance(obj) {
        return obj instanceof Phantom.$javaClass;
    }
}
exports.default = Phantom;
