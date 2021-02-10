"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bed {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Bed');
    }
    static $isInstance(obj) {
        return obj instanceof Bed.$javaClass;
    }
}
exports.default = Bed;
