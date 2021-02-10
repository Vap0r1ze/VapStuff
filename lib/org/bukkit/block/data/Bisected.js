"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bisected {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Bisected');
    }
    static $isInstance(obj) {
        return obj instanceof Bisected.$javaClass;
    }
}
exports.default = Bisected;
