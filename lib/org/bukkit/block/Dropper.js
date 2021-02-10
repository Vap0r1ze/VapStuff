"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dropper {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Dropper');
    }
    static $isInstance(obj) {
        return obj instanceof Dropper.$javaClass;
    }
}
exports.default = Dropper;
