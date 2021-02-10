"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Orientable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Orientable');
    }
    static $isInstance(obj) {
        return obj instanceof Orientable.$javaClass;
    }
}
exports.default = Orientable;
