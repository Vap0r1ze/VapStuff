"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class World {
    static get $javaClass() {
        return Java.type('org.bukkit.World');
    }
    static $isInstance(obj) {
        return obj instanceof World.$javaClass;
    }
}
exports.default = World;
