"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Skull {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Skull');
    }
    static $isInstance(obj) {
        return obj instanceof Skull.$javaClass;
    }
}
exports.default = Skull;
