"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cake {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Cake');
    }
    static $isInstance(obj) {
        return obj instanceof Cake.$javaClass;
    }
}
exports.default = Cake;
