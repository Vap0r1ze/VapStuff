"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Furnace {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Furnace');
    }
    static $isInstance(obj) {
        return obj instanceof Furnace.$javaClass;
    }
}
exports.default = Furnace;
