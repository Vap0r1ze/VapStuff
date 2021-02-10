"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TrapDoor {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.TrapDoor');
    }
    static $isInstance(obj) {
        return obj instanceof TrapDoor.$javaClass;
    }
}
exports.default = TrapDoor;
