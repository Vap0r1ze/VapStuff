"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scaffolding {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Scaffolding');
    }
    static $isInstance(obj) {
        return obj instanceof Scaffolding.$javaClass;
    }
}
exports.default = Scaffolding;
