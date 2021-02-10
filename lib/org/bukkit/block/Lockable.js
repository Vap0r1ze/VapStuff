"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lockable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Lockable');
    }
    static $isInstance(obj) {
        return obj instanceof Lockable.$javaClass;
    }
}
exports.default = Lockable;
