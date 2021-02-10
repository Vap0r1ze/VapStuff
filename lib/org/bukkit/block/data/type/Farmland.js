"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Farmland {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Farmland');
    }
    static $isInstance(obj) {
        return obj instanceof Farmland.$javaClass;
    }
}
exports.default = Farmland;
