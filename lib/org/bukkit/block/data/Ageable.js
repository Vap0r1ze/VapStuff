"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ageable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Ageable');
    }
    static $isInstance(obj) {
        return obj instanceof Ageable.$javaClass;
    }
}
exports.default = Ageable;
