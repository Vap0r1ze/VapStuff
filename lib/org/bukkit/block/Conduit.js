"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conduit {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Conduit');
    }
    static $isInstance(obj) {
        return obj instanceof Conduit.$javaClass;
    }
}
exports.default = Conduit;
