"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bed {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Bed');
    }
    static $isInstance(obj) {
        return obj instanceof Bed.$javaClass;
    }
}
exports.default = Bed;
