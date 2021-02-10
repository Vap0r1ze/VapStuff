"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Piston {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Piston');
    }
    static $isInstance(obj) {
        return obj instanceof Piston.$javaClass;
    }
}
exports.default = Piston;
