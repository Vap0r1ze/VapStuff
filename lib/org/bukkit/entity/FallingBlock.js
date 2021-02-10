"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FallingBlock {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.FallingBlock');
    }
    static $isInstance(obj) {
        return obj instanceof FallingBlock.$javaClass;
    }
}
exports.default = FallingBlock;
