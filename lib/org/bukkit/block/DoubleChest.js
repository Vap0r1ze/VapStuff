"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoubleChest {
    static get $javaClass() {
        return Java.type('org.bukkit.block.DoubleChest');
    }
    static $isInstance(obj) {
        return obj instanceof DoubleChest.$javaClass;
    }
    constructor(...args) {
        return new DoubleChest.$javaClass(...args);
    }
}
exports.default = DoubleChest;
