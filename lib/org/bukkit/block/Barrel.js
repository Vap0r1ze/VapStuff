"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Barrel {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Barrel');
    }
    static $isInstance(obj) {
        return obj instanceof Barrel.$javaClass;
    }
}
exports.default = Barrel;
