"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Levelled {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Levelled');
    }
    static $isInstance(obj) {
        return obj instanceof Levelled.$javaClass;
    }
}
exports.default = Levelled;
