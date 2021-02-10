"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comparator {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Comparator');
    }
    static $isInstance(obj) {
        return obj instanceof Comparator.$javaClass;
    }
}
exports.default = Comparator;
