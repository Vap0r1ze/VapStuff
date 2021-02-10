"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lectern {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Lectern');
    }
    static $isInstance(obj) {
        return obj instanceof Lectern.$javaClass;
    }
}
exports.default = Lectern;
