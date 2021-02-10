"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Door {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Door');
    }
    static $isInstance(obj) {
        return obj instanceof Door.$javaClass;
    }
}
exports.default = Door;
