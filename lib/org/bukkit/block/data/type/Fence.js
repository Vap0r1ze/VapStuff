"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fence {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Fence');
    }
    static $isInstance(obj) {
        return obj instanceof Fence.$javaClass;
    }
}
exports.default = Fence;
