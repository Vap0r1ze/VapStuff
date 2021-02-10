"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lantern {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Lantern');
    }
    static $isInstance(obj) {
        return obj instanceof Lantern.$javaClass;
    }
}
exports.default = Lantern;
