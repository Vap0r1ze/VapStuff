"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MultipleFacing {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.MultipleFacing');
    }
    static $isInstance(obj) {
        return obj instanceof MultipleFacing.$javaClass;
    }
}
exports.default = MultipleFacing;
